import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { NextParsedUrlQuery } from 'next/dist/server/request-meta';
import { NextRouter, useRouter } from 'next/router';

import Breadcrumbs from '@/components/common/ui/breadcrumbs';
import PersonalTeacherCard from '@/components/common/ui/cards/personal-teacher-card';
import Progress from '@/components/common/ui/progress-mui';
import PersonalTeacherTabs from '@/components/pages/personal-teacher-page/personal-teacher-tabs';
import styles from '@/components/pages/personal-teacher-page/PersonalTeacherPage.module.scss';
import useTabState from '@/hooks/use-tab-state';
import useToast from '@/hooks/use-toast';
import { TeacherPageInfo } from '@/lib/services/teacher/types';
import { Teacher } from '@/types/teacher';

// TODO: move context to separate folder, move types to separate folder
export interface TeacherContext {
  floatingCardShowed: boolean;
  setFloatingCardShowed: Dispatch<SetStateAction<boolean>>;
  teacher: Teacher;
}

export const teacherContext = createContext<TeacherContext>({
  floatingCardShowed: false,
  setFloatingCardShowed: () => {},
  teacher: {} as Teacher,
});

export enum TeachersPageTabs {
  GENERAL = 'general',
  SUBJECTS = 'subjects',
  COMMENTS = 'reviews',
}

interface PersonalTeacherPageProps {
  isLoading: boolean;
  isError: boolean;
  data: TeacherPageInfo | undefined;
  query: NextParsedUrlQuery;
  teacherId: string;
  router: NextRouter;
}

const PersonalTeacherPage: FC<PersonalTeacherPageProps> = ({
  isLoading,
  isError,
  data,
  query,
  teacherId,
  router,
}) => {
  const router2 = useRouter();
  const { push } = router2;
  const toast = useToast();
  const [floatingCardShowed, setFloatingCardShowed] = useState(false);

  const { tab } = query;
  const [index, setIndex] = useState<TeachersPageTabs>(
    TeachersPageTabs.GENERAL,
  );

  const handleChange = useTabState<TeachersPageTabs>({ tab, router, setIndex });

  useEffect(() => {
    if (isError) {
      toast.error('Куди ти лізеш, цієї людини не існує');
      void push('/teachers');
    }
  }, [isError, push, toast]);

  if (!data) return null;

  const teacher = data?.info;
  return (
    <teacherContext.Provider
      value={{ floatingCardShowed, setFloatingCardShowed, teacher }}
    >
      <div className={styles['personal-teacher-page']}>
        {isLoading ? (
          <div className={styles['personal-teacher-page-content']}>
            <div className={styles['loader']}>
              <Progress />
            </div>
          </div>
        ) : (
          !isError && (
            <div className={styles['personal-teacher-page-content']}>
              <Breadcrumbs
                sx={{ margin: '16px 0px 16px 0px' }} //TODO move inline styles when refactor
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
    </teacherContext.Provider>
  );
};
export default PersonalTeacherPage;
