import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

import PageLayout from '@/components/common/layout/page-layout';
import Breadcrumbs from '@/components/common/ui/breadcrumbs';
import Loader from '@/components/common/ui/loader';
import PersonalSubjectTeacherTabs from '@/components/pages/personal-teacher-subject-page/personal-subject-teacher-tabs';
import PersonalTeacherSubjectCard from '@/components/pages/personal-teacher-subject-page/personal-teacher-subject-card';
import styles from '@/components/pages/personal-teacher-subject-page/PersonalTeacherSubjectPage.module.scss';
import useAuthentication from '@/hooks/use-authentication';
import useToast from '@/hooks/use-toast';
import TeacherService from '@/lib/services/teacher/TeacherService';

const PersonalTeacherSubjectPage = () => {
  const router = useRouter();

  const teacherId = router.query.teacherId as string;
  const subjectId = router.query.subjectId as string;
  const { user } = useAuthentication();

  const { isLoading, isError, data } = useQuery(
    ['teacher', teacherId, subjectId],
    () =>
      TeacherService.getTeacherSubjectPageInfo(teacherId, subjectId, user?.id),
    {
      refetchOnWindowFocus: false,
      retry: false,
    },
  );
  const toast = useToast();

  useEffect(() => {
    if (isError) {
      toast.error('Не лізь не в свою справу!');
      void router.push('/teachers');
    }
  }, [isError]);

  const teacher = data?.info;
  console.log(teacher);

  return (
    <PageLayout description={'Сторінка викладача'}>
      <div className={styles['personal-teacher-page']}>
        {isLoading ? (
          <div className={styles['personal-teacher-page-content']}>
            <div className={styles['loader']}>
              <Loader />
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
                    label: `${teacher.lastName} ${teacher.firstName} ${teacher.middleName}`,
                    href: `/teachers/${teacherId}`,
                  },
                  {
                    label: `${teacher.subject.name}`,
                    href: `/discipline?teacherId=${teacherId}&subjectId=${subjectId}`,
                  },
                ]}
              />
              <div className={styles['card-wrapper']}>
                <PersonalTeacherSubjectCard {...data.info} />
              </div>
              <div className={styles['tabs']}>
                <PersonalSubjectTeacherTabs {...data} />
              </div>
            </div>
          )
        )}
      </div>
    </PageLayout>
  );
};
export default PersonalTeacherSubjectPage;
