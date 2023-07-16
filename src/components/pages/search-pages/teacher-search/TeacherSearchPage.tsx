import { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import Breadcrumbs from '@/components/common/ui/breadcrumbs';
import Button, {
  ButtonColor,
  ButtonVariant,
} from '@/components/common/ui/button/Button';
import Progress from '@/components/common/ui/progress-mui';
import { SearchFormProps } from '@/components/pages/search-pages/search-form/SearchForm';
import { SearchFormFields } from '@/components/pages/search-pages/search-form/types';
import {
  breadcrumbs,
  filterOptions,
  PAGE_SIZE,
} from '@/components/pages/search-pages/teacher-search/constants';
import TeacherAPI from '@/lib/api/teacher/TeacherAPI';
import { GetTeachersResponse } from '@/lib/api/teacher/types/GetTeachersResponse';

import { TeacherInitialValues } from '../search-form/constants';
import SearchForm from '../search-form/SearchForm';

import { TeacherSearchList } from './TeacherSearchList';

import styles from '../SearchPage.module.scss';

export const TeacherSearchPage = () => {
  const initialValues = localStorage.getItem('teachersForm')
    ? JSON.parse(localStorage.getItem('teachersForm') || '{}')
    : TeacherInitialValues;
  const localStorageName = 'teachersForm';
  const [queryObj, setQueryObj] = useState<SearchFormFields>(initialValues);
  const [curPage, setCurPage] = useState(0);
  const submitHandler: SearchFormProps['onSubmit'] = useCallback(query => {
    setQueryObj(prev => ({ ...prev, ...query }));
    setCurPage(0);
  }, []);

  const { data, isLoading, refetch, isFetching } =
    useQuery<GetTeachersResponse>(
      'lecturers',
      () => TeacherAPI.getAll(queryObj, PAGE_SIZE * (curPage + 1)),
      { keepPreviousData: true, refetchOnWindowFocus: false },
    );

  useEffect(() => {
    void refetch();
  }, [queryObj, curPage, refetch]);

  return (
    <div className={styles['layout']}>
      {/*//TODO move inline styles when refactor*/}
      <Breadcrumbs items={breadcrumbs} sx={{ margin: '16px 0px 16px 0px' }} />
      <SearchForm
        searchPlaceholder="Оберіть викладача"
        filterDropDownOptions={filterOptions}
        onSubmit={submitHandler}
        initialValues={initialValues}
        localStorageName={localStorageName}
      />
      {data && (
        <TeacherSearchList teachers={data.teachers} className="teacher" />
      )}
      {isLoading ||
        (isFetching && (
          <div className={styles['page-loader']}>
            <Progress />
          </div>
        ))}
      {data?.teachers.length === (curPage + 1) * PAGE_SIZE && (
        <Button
          className={styles['load-btn']}
          text="Завантажити ще"
          variant={ButtonVariant.FILLED}
          color={ButtonColor.SECONDARY}
          onClick={() => setCurPage(pr => pr + 1)}
        />
      )}
    </div>
  );
};

export default TeacherSearchPage;
