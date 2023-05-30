import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import * as Url from 'url';

import PageLayout from '@/components/common/layout/page-layout';
import { AlertColor } from '@/components/common/ui/alert';
import Breadcrumbs from '@/components/common/ui/breadcrumbs';
import Loader from '@/components/common/ui/loader';
import PersonalTeacherCard from '@/components/pages/personal-teacher-page/personal-teacher-card';
import PersonalTeacherTabs from '@/components/pages/personal-teacher-page/personal-teacher-tabs';
import styles from '@/components/pages/personal-teacher-page/PersonalTeacherPage.module.scss';
import useTabState from '@/hooks/use-tab-state';
import { TeacherAPI } from '@/lib/api/teacher/TeacherAPI';
import { showAlert } from '@/redux/reducers/alert.reducer';

export enum TeachersPageTabs {
  GENERAL = 'general',
  SUBJECTS = 'subjects',
  REVIEWS = 'reviews',
  SEMESTERS = 'semesters',
}

const PersonalTeacherPage = () => {
  const router = useRouter();
  const { push, query } = router;

  const { tab } = query;
  const [index, setIndex] = useState<TeachersPageTabs>(
    TeachersPageTabs.GENERAL,
  );

  const handleChange = useTabState({ tab, router, setIndex });

  const teacherId = query.teacherId as string;
  const { isLoading, isError, data } = useQuery(
    ['teacher', teacherId],
    () => TeacherAPI.get(teacherId),
    {
      refetchOnWindowFocus: false,
      retry: false,
    },
  );
  const { data: subjectsData } = useQuery(
    ['teacherSubjects', teacherId],
    () => TeacherAPI.getTeacherSubjects(teacherId),
    {
      refetchOnWindowFocus: false,
      retry: false,
    },
  );
  const dispatch = useDispatch();
  if (isError) {
    dispatch(
      showAlert({
        color: AlertColor.ERROR,
        title: 'Куди ти лізеш, цієї людини не існує',
      }),
    );
    setTimeout(() => {
      void push('/teachers');
    }, 3000);
  }
  return (
    <PageLayout description={'Сторінка викладача'}>
      <div className={styles['personal-teacher-page']}>
        {isLoading ? (
          <div className={styles['personal-teacher-page-content']}>
            <div className={styles['loader']}>
              <Loader></Loader>
            </div>
          </div>
        ) : (
          !isError && (
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
                      data.lastName +
                      ' ' +
                      data.firstName +
                      ' ' +
                      data.middleName
                    }`,
                    href: `/teachers/${teacherId}`,
                  },
                ]}
              />
              <div className={styles['card-wrapper']}>
                <PersonalTeacherCard {...data} />
              </div>
              <div className={styles['tabs']}>
                <PersonalTeacherTabs
                  id={data.id}
                  tabIndex={index}
                  handleChange={handleChange}
                  {...subjectsData}
                />
              </div>
            </div>
          )
        )}
      </div>
    </PageLayout>
  );
};
export default PersonalTeacherPage;
