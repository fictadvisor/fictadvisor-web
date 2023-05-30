import { useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import PageLayout from '@/components/common/layout/page-layout';
import { AlertColor } from '@/components/common/ui/alert';
import Breadcrumbs from '@/components/common/ui/breadcrumbs';
import Loader from '@/components/common/ui/loader';
import PersonalTeacherSubjectCard from '@/components/pages/personal-teacher-subject-page/personal-teacher-subject-card';
import PersonalTeacherSubjectTabs from '@/components/pages/personal-teacher-subject-page/personal-teacher-subject-tabs';
import styles from '@/components/pages/personal-teacher-subject-page/PersonalTeacherSubjectPage.module.scss';
import useTabState from '@/hooks/use-tab-state';
import { TeacherAPI } from '@/lib/api/teacher/TeacherAPI';
import { showAlert } from '@/redux/reducers/alert.reducer';

export enum TeachersPageTabs {
  GENERAL = 'general',
  REVIEWS = 'reviews',
  SEMESTERS = 'semesters',
}

const PersonalTeacherSubjectPage = () => {
  const router = useRouter();
  const { push, query } = router;

  const { tab } = query;
  const [index, setIndex] = useState<TeachersPageTabs>(
    TeachersPageTabs.GENERAL,
  );

  const handleChange = useTabState({ tab, router, setIndex });

  const teacherId = query.teacherId as string;
  const subjectId = query.subjectId as string;
  const { isLoading, isError, data } = useQuery(
    ['teachersubject', teacherId, subjectId],
    () => TeacherAPI.getTeacherSubject(teacherId, subjectId),
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
        title: 'не лізь не в свою справу',
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
                  {
                    label: `${data.subject.name}`,
                    href: `/discipline?teacherId=${teacherId}&subjectId=${subjectId}`,
                  },
                ]}
              />
              <div className={styles['card-wrapper']}>
                <PersonalTeacherSubjectCard {...data} />
              </div>
              <div className={styles['tabs']}>
                <PersonalTeacherSubjectTabs
                  tabIndex={index}
                  handleChange={handleChange}
                />
              </div>
            </div>
          )
        )}
      </div>
    </PageLayout>
  );
};
export default PersonalTeacherSubjectPage;
