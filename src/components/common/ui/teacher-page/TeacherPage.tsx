import { createContext, FC, useEffect, useState } from 'react';
import { NextRouter } from 'next/router';

import PageLayout from '@/components/common/layout/page-layout';
import Breadcrumbs from '@/components/common/ui/breadcrumbs';
import Loader from '@/components/common/ui/loader';
import PersonalTeacherCard from '@/components/common/ui/teacher-page/personal-teacher-card';
import PersonalTeacherTabs from '@/components/common/ui/teacher-page/personal-teacher-tabs';
import styles from '@/components/pages/personal-teacher-page/PersonalTeacherPage.module.scss';
import useTabState from '@/hooks/use-tab-state';
import useToast from '@/hooks/use-toast';
import { GetTeacherDTO } from '@/lib/api/teacher/dto/GetTeacherDTO';
import { GetTeacherSubjectDTO } from '@/lib/api/teacher/dto/GetTeacherSubjectDTO';
import {
  GetTeacherResponse,
  GetTeacherSubjectResponse,
} from '@/lib/services/teacher/TeacherService';

export const TeacherContext = createContext(null);

export enum TeachersPageTabs {
  GENERAL = 'general',
  SUBJECTS = 'subjects',
  COMMENTS = 'reviews',
}

export type GetFullTeacherDTO = GetTeacherDTO & GetTeacherSubjectDTO;

export interface GetFullTeacherResponse
  extends GetTeacherResponse,
    GetTeacherSubjectResponse {
  info: GetFullTeacherDTO;
}

interface TeacherPageProps {
  router: NextRouter;
  isLoading: boolean;
  isError: boolean;
  data: GetFullTeacherResponse;
  teacherId: string;
  subjectId?: string;
}

const TeacherPage: FC<TeacherPageProps> = ({
  router,
  isLoading,
  isError,
  data,
  teacherId,
  subjectId,
}) => {
  const { query, push } = router;
  const { tab } = query;
  const toast = useToast();
  const [floatingCardShowed, setFloatingCardShowed] = useState(false);
  const [index, setIndex] = useState<TeachersPageTabs>(
    TeachersPageTabs.GENERAL,
  );

  const handleChange = useTabState({ tab, router, setIndex });

  useEffect(() => {
    if (isError) {
      toast.error('Куди ти лізеш, цієї людини не існує');
      void push('/teachers');
    }
  }, [isError]);

  const teacher = data?.info;

  return (
    <TeacherContext.Provider
      value={{ floatingCardShowed, setFloatingCardShowed, teacher }}
    >
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
                    teacher.subject && {
                      label: `${teacher.subject?.name}`,
                      href: `/discipline?teacherId=${teacherId}&subjectId=${subjectId}`,
                    },
                  ].filter(Boolean)}
                />
                <div className={styles['card-wrapper']}>
                  <PersonalTeacherCard {...teacher} />
                </div>
                <div className={styles['tabs']}>
                  <PersonalTeacherTabs
                    data={data}
                    tabIndex={index}
                    handleChange={handleChange}
                  />
                </div>
              </div>
            )
          )}
        </div>
      </PageLayout>
    </TeacherContext.Provider>
  );
};
export default TeacherPage;
