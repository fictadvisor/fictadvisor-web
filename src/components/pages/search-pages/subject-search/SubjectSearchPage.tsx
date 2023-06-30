import { FC, useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import Breadcrumbs from '@/components/common/ui/breadcrumbs';
import Button, {
  ButtonColor,
  ButtonVariant,
} from '@/components/common/ui/button/Button';
import Loader, { LoaderSize } from '@/components/common/ui/loader/Loader';
import { GetListOfSubjectsDTO } from '@/lib/api/subject/dto/GetListOfSubjectsDTO';
import { SubjectsAPI } from '@/lib/api/subject/SubjectAPI';

import PageLayout from '../../../common/layout/page-layout/PageLayout';
import { SubjectInitialValues } from '../search-form/constants';
import { SearchForm } from '../search-form/SearchForm';
import { SubjectSearchFormFields } from '../search-form/types';

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

const SubjectSearchPage: FC = () => {
  const [queryObj, setQueryObj] =
    useState<SubjectSearchFormFields>(SubjectInitialValues);
  const [curPage, setCurPage] = useState(0);
  //const localStorageName = 'subjectForm';

  const submitHandler = useCallback(query => {
    setQueryObj(query);
    setCurPage(0);
  }, []);

  const { data, isLoading, refetch, isFetching } =
    useQuery<GetListOfSubjectsDTO>(
      'subjects',
      () => SubjectsAPI.getAll(queryObj, PAGE_SIZE, curPage),
      { keepPreviousData: true, refetchOnWindowFocus: false },
    );

  useEffect(() => {
    refetch();
  }, [queryObj, curPage, refetch]);

  return (
    <PageLayout title={'Предмети'}>
      <div className={styles['layout']}>
        <Breadcrumbs items={breadcrumbs} className={styles['breadcrumb']} />

        <SearchForm
          serchPlaceholder="Оберіть предмет"
          filterDropDownOptions={[{ value: 'name', label: 'За назвою' }]}
          onSubmit={submitHandler}
          initialValues={SubjectInitialValues}
          //localStorageName={localStorageName}
        />

        {data && <SubjectSearchList subjects={data.subjects} />}
        {isLoading ||
          (isFetching && (
            <div className={styles['page-loader']}>
              <Loader size={LoaderSize.SMALLEST} />
            </div>
          ))}

        {data?.meta.nextPageElems !== 0 && (
          <Button
            className={styles['load-btn']}
            text="Завантажити ще"
            variant={ButtonVariant.FILLED}
            color={ButtonColor.SECONDARY}
            onClick={() => setCurPage(pr => pr + 1)}
          />
        )}
      </div>
    </PageLayout>
  );
};

export default SubjectSearchPage;
