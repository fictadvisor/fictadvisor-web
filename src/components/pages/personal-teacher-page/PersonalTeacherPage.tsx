import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

import PageLayout from '@/components/common/layout/page-layout';
import Breadcrumbs from '@/components/common/ui/breadcrumbs';
import Loader from '@/components/common/ui/loader';
import PersonalTeacherCard from '@/components/pages/personal-teacher-page/personal-teacher-card';
import PersonalTeacherTabs from '@/components/pages/personal-teacher-page/personal-teacher-tabs';
import styles from '@/components/pages/personal-teacher-page/PersonalTeacherPage.module.scss';
import useAuthentication from '@/hooks/use-authentication';
import useToast from '@/hooks/use-toast';
import TeacherService from '@/lib/services/teacher';

const PersonalTeacherPage = () => {
  const router = useRouter();
  const teacherId = router.query.teacherId as string;
  const { user } = useAuthentication();
  const { isLoading, isError, data } = useQuery(
    ['teacher', teacherId],
    () => TeacherService.getTeacherPageInfo(teacherId, user?.id),
    {
      refetchOnWindowFocus: false,
      retry: false,
    },
  );
  const toast = useToast();

  useEffect(() => {
    if (isError) {
      toast.error('Куди ти лізеш, цієї людини не існує');
      void router.push('/teachers');
    }
  }, [isError]);

  const teacher = data?.info?.teacher;

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
                ]}
              />
              <div className={styles['card-wrapper']}>
                <PersonalTeacherCard {...data.info} />
              </div>
              <div className={styles['tabs']}>
                <PersonalTeacherTabs {...data} />
              </div>
            </div>
          )
        )}
      </div>
    </PageLayout>
  );
};
export default PersonalTeacherPage;
