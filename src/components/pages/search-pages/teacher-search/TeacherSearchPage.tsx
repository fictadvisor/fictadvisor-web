import { Fragment, useCallback, useEffect, useState } from 'react';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import Link from 'next/link';

import Breadcrumbs from '@/components/common/ui/breadcrumbs';
import Button, {
  ButtonColor,
  ButtonVariant,
} from '@/components/common/ui/button/Button';
import { TeacherCard } from '@/components/common/ui/cards/teacher-card';
import Loader, { LoaderSize } from '@/components/common/ui/loader/Loader';
import { SearchFormProps } from '@/components/pages/search-pages/search-form/SearchForm';
import { TeacherSearchFormFields } from '@/components/pages/search-pages/search-form/types';
import { TeacherSearchList } from '@/components/pages/search-pages/teacher-search/TeacherSearchList';
import TeacherAPI from '@/lib/api/teacher/TeacherAPI';
import { GetTeachersResponse } from '@/lib/api/teacher/types/GetTeachersResponse';

import { TeacherInitialValues } from '../search-form/constants';
import { SearchForm } from '../search-form/SearchForm';

import styles from '../SearchPage.module.scss';

const breadcrumbs = [
  {
    label: 'Головна',
    href: '/',
  },
  {
    label: 'Викладачі',
    href: '/teachers',
  },
];
const PAGE_SIZE = 20;

export const TeacherSearchPage = () => {
  const initialValues = localStorage.getItem('teachersForm')
    ? JSON.parse(localStorage.getItem('teachersForm') || '{}')
    : TeacherInitialValues;
  const localStorageName = 'teachersForm';
  const [queryObj, setQueryObj] =
    useState<TeacherSearchFormFields>(initialValues);

  const queryClient = useQueryClient();

  const submitHandler: SearchFormProps['onSubmit'] = useCallback(query => {
    setQueryObj(query as TeacherSearchFormFields);
  }, []);

  const { data, refetch, isLoading, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery<GetTeachersResponse>(
      ['lecturers'],
      ({ pageParam = 0 }) => TeacherAPI.getAll(queryObj, PAGE_SIZE, pageParam),
      {
        getNextPageParam: (lastPage, allPages) => {
          if (allPages.length < 4) {
            return allPages.length;
          } else {
            return undefined;
          }
        },
        refetchOnWindowFocus: false,
      },
    );

  useEffect(() => {
    queryClient.removeQueries('lecturers');
  }, [queryClient]);

  useEffect(() => {
    void refetch();
  }, [queryObj, refetch]);

  return (
    <div className={styles['layout']}>
      <Breadcrumbs items={breadcrumbs} className={styles['breadcrumb']} />

      <SearchForm
        searchPlaceholder="Оберіть викладача"
        filterDropDownOptions={[
          { value: 'firstName', label: 'Іменем' },
          { value: 'lastName', label: 'Прізвищем' },
        ]}
        onSubmit={submitHandler}
        initialValues={initialValues}
        localStorageName={localStorageName}
      />

      {data && <TeacherSearchList data={data} className="teacher" />}

      {(isFetching || isLoading) && (
        <div className={styles['page-loader']}>
          <Loader size={LoaderSize.SMALLEST} />
        </div>
      )}

      {data && hasNextPage && data.pages[0].meta?.nextPageElems !== 0 && (
        <Button
          className={styles['load-btn']}
          text="Завантажити ще"
          variant={ButtonVariant.FILLED}
          color={ButtonColor.SECONDARY}
          onClick={() => fetchNextPage()}
        />
      )}
    </div>
  );
};

export default TeacherSearchPage;
