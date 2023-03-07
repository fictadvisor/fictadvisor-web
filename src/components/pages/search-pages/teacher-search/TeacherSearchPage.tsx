import { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import Breadcrumbs from '@/components/common/ui/breadcrumbs';
import Button, {
  ButtonColor,
  ButtonVariant,
} from '@/components/common/ui/button/Button';
import Loader, { LoaderSize } from '@/components/common/ui/loader/Loader';
import { GetTeachersDTO } from '@/lib/api/teacher/dto/GetTeacherDTO';
import { TeacherAPI } from '@/lib/api/teacher/TeacherAPI';

import PageLayout from '../../../common/layout/page-layout/PageLayout';
import { TeacherInitialValues } from '../search-form/constants';
import { SearchForm } from '../search-form/SearchForm';

import { TeacherSearchList } from './TeacherSearchList';

import styles from '../SearchPage.module.scss';

const breadcrumbs = [
  {
    label: 'Головна',
    href: '/',
  },
  {
    label: 'Вчителі',
    href: '/teachers',
  },
];
const pageSize = 20;

export const TeacherSearchPage = () => {
  const [queryObj, setQueryObj] = useState(TeacherInitialValues);
  const [curPage, setCurPage] = useState(0);

  const submitHandler = useCallback(query => {
    setQueryObj(query);
    setCurPage(0);
  }, []);

  const { data, isLoading, refetch, isFetching } = useQuery<GetTeachersDTO>(
    'lecturers',
    TeacherAPI.getAll.bind(null, queryObj, pageSize * (curPage + 1)),
    { keepPreviousData: true, refetchOnWindowFocus: false },
  );

  useEffect(() => {
    refetch();
  }, [queryObj, curPage, refetch]);

  return (
    <PageLayout title={'Вчителі'}>
      <div className={styles['layout']}>
        <Breadcrumbs items={breadcrumbs} className={styles['breadcrumb']} />

        <SearchForm
          serchPlaceholder="Оберіть викладача"
          filterDropDownOptions={[
            { value: 'firstName', label: 'Іменем' },
            { value: 'lastName', label: 'Прізвищем' },
          ]}
          onSubmit={submitHandler}
          initialValues={TeacherInitialValues}
        />

        {data && <TeacherSearchList teachers={data.teachers} />}
        {isLoading ||
          (isFetching && (
            <div className={styles['page-loader']}>
              <Loader size={LoaderSize.SMALLEST} />
            </div>
          ))}

        {data?.teachers.length === (curPage + 1) * pageSize && (
          <Button
            className={styles['load-btn']}
            text="Завантажити"
            variant={ButtonVariant.FILLED}
            color={ButtonColor.SECONDARY}
            onClick={() => setCurPage(pr => pr + 1)}
          />
        )}
      </div>
    </PageLayout>
  );
};

export default TeacherSearchPage;