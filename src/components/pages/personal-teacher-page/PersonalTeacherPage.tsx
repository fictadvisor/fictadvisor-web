import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import PageLayout from '@/components/common/layout/page-layout';
import { AlertColor } from '@/components/common/ui/alert';
import Breadcrumbs from '@/components/common/ui/breadcrumbs';
import PersonalTeacherCard from '@/components/pages/personal-teacher-page/personal-teacher-card';
import PersonalTeacherTabs from '@/components/pages/personal-teacher-page/personal-teacher-tabs';
import styles from '@/components/pages/personal-teacher-page/PersonalTeacherPage.module.scss';
import type { GetTeacherDTO } from '@/lib/api/teacher/dto/GetTeacherDTO';
import type { GetTeacherSubjectsDTO } from '@/lib/api/teacher/dto/GetTeacherSubjectsDTO';
import { showAlert } from '@/redux/reducers/alert.reducer';
export interface PersonalTeacherPageProps {
  isError: boolean;
  data: GetTeacherDTO;
  subjectData: GetTeacherSubjectsDTO;
}

const PersonalTeacherPage: FC<PersonalTeacherPageProps> = ({
  isError,
  data,
  subjectData,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  if (isError) {
    dispatch(
      showAlert({
        color: AlertColor.ERROR,
        title: 'Куди ти лізеш, цієї людини не існує',
      }),
    );
    setTimeout(() => {
      void router.push('/teachers');
    }, 3000);
  }
  return (
    <PageLayout description={'Сторінка викладача'}>
      <div className={styles['personal-teacher-page']}>
        {!isError && (
          <div className={styles['personal-teacher-page-content']}>
            <Breadcrumbs
              className={styles['breadcrumbs']}
              items={[
                {
                  label: 'Головна',
                  href: '/',
                },
                { label: 'Викладачі', href: '/teachers' },
                {
                  label: `${
                    data.teacher.lastName +
                    ' ' +
                    data.teacher.firstName +
                    ' ' +
                    data.teacher.middleName
                  }`,
                  href: `/teachers/${data.teacher.id}`,
                },
              ]}
            />
            <div className={styles['card-wrapper']}>
              <PersonalTeacherCard {...data} />
            </div>
            <div className={styles['tabs']}>
              <PersonalTeacherTabs id={data.teacher.id} {...subjectData} />
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};
export default PersonalTeacherPage;
