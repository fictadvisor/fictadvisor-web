import { useCallback, useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

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
  const [curPage, setCurPage] = useState(0);
  const queryClient = useQueryClient();
  //const localStorageName = 'subjectForm';

  const submitHandler: SearchFormProps['onSubmit'] = useCallback(query => {
    setQueryObj(query);
    setCurPage(0);
  }, []);

  const { data, isLoading, refetch, isFetching } =
    useQuery<GetListOfSubjectsResponse>(
      'subjects',
      () => SubjectsAPI.getAll(queryObj, PAGE_SIZE, curPage),
      { refetchOnWindowFocus: false },
    );

  useEffect(() => {
    queryClient.removeQueries('subjects');
  }, [queryClient]);

  useEffect(() => {
    void refetch();
  }, [queryObj, curPage, refetch]);

  return (
    <div className={styles['layout']}>
      <Breadcrumbs items={breadcrumbs} className={styles['breadcrumb']} />

      <SearchForm
        searchPlaceholder="Оберіть предмет"
        filterDropDownOptions={[{ value: 'name', label: 'За назвою' }]}
        onSubmit={submitHandler}
        initialValues={SubjectInitialValues}
        //localStorageName={localStorageName}
      />

      {data && <SubjectSearchList subjects={data.subjects} />}
      {(isLoading || isFetching) && (
        <div className={styles['page-loader']}>
          <Loader size={LoaderSize.SMALLEST} />
        </div>
      )}

      {!isLoading && data?.meta?.nextPageElems !== 0 && (
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

export default SubjectSearchPage;
