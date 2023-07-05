import { useCallback, useEffect, useState } from 'react';
import { useInfiniteQuery, useQueryClient } from 'react-query';

import Breadcrumbs from '@/components/common/ui/breadcrumbs';
import Button, {
  ButtonColor,
  ButtonVariant,
} from '@/components/common/ui/button/Button';
import Loader, { LoaderSize } from '@/components/common/ui/loader/Loader';
import { SearchFormProps } from '@/components/pages/search-pages/search-form/SearchForm';
import SubjectsAPI from '@/lib/api/subject/SubjectAPI';
import { GetListOfSubjectsResponse } from '@/lib/api/subject/types/GetListOfSubjectsResponse';

import { SubjectInitialValues } from '../search-form/constants';
import { SearchForm } from '../search-form/SearchForm';

import { SubjectSearchList } from './SubjectSearchList';

import styles from '../SearchPage.module.scss';

const breadcrumbs = [
  {
    label: 'Головна',
    href: '/',
  },
  {
    label: 'Предмети',
    href: '/subjects',
  },
];
const PAGE_SIZE = 20;

const SubjectSearchPage = () => {
  const [queryObj, setQueryObj] = useState(SubjectInitialValues);

  const queryClient = useQueryClient();
  // const localStorageName = 'subjectForm';

  const submitHandler: SearchFormProps['onSubmit'] = useCallback(query => {
    setQueryObj(query);
  }, []);

  const { data, refetch, isLoading, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery<GetListOfSubjectsResponse>(
      ['subjects'],
      ({ pageParam = 0 }) => SubjectsAPI.getAll(queryObj, PAGE_SIZE, pageParam),
      {
        getNextPageParam: (lastPage, allPages) => {
          if (allPages.length < 5) {
            console.log('ALL PAGE LENGTH' + allPages.length);
            return allPages.length;
          } else {
            return undefined;
          }
        },
        refetchOnWindowFocus: false,
      },
    );

  useEffect(() => {
    queryClient.removeQueries('subjects');
  }, [queryClient]);

  useEffect(() => {
    void refetch();
  }, [queryObj, refetch]);

  return (
    <div className={styles['layout']}>
      <Breadcrumbs items={breadcrumbs} className={styles['breadcrumb']} />

      <SearchForm
        searchPlaceholder="Оберіть предмет"
        filterDropDownOptions={[{ value: 'name', label: 'За назвою' }]}
        onSubmit={submitHandler}
        initialValues={SubjectInitialValues}
        // localStorageName={localStorageName}
      />

      {data && <SubjectSearchList data={data} />}

      {(isLoading || isFetching) && (
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

export default SubjectSearchPage;
