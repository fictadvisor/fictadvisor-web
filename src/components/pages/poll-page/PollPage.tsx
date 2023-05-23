import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

import Breadcrumbs from '@/components/common/ui/breadcrumbs/Breadcrumbs';
import Loader from '@/components/common/ui/loader/Loader';
import useAuthentication from '@/hooks/use-authentication';
import useToast from '@/hooks/use-toast';
import PollAPI from '@/lib/api/poll/PollAPI';

import PageLayout from '../../common/layout/page-layout/PageLayout';

import PollForm from './components/poll-form';

import styles from './PollPage.module.scss';

export type Teacher = {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  avatar: string | null;
};

export type Subject = {
  id: string;
  name: string;
};

export type Question = {
  id: string;
  name: string;
  criteria: string;
  text: string;
  type: string;
  description: string | null;
  display: string;
  isRequired: boolean;
};

export type Category = {
  name: string;
  count: number;
  questions: Question[];
};

export interface FetchedTeacherPollData {
  subject: Subject;
  categories: Category[];
  teacher: Teacher;
}

const PollPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { user, isLoggedIn, token } = useAuthentication();
  const router = useRouter();
  const disciplineTeacherId = router.query.disciplineTeacherId as string;

  const {
    error,
    isSuccess: isSuccessFetching,
    data,
    isLoading: isQuestionsLoading,
  } = useQuery(
    ['pollQuestions', disciplineTeacherId],
    async () => await PollAPI.getTeacherQuestions(disciplineTeacherId, token),
    {
      retry: false,
      enabled: Boolean(user),
      refetchOnWindowFocus: false,
      keepPreviousData: false,
    },
  );
  const toast = useToast();

  useEffect(() => {
    if (!isLoggedIn) {
      toast.error('Для проходження опитування потрібно авторизуватися');
      void router.replace('login/?redirect=~poll');
    }
  }, [toast, isLoggedIn, router]);

  useEffect(() => {
    setIsLoading(isQuestionsLoading);
  }, [isQuestionsLoading]);

  const status = error && (error as any).response?.data?.error;

  if (error && !isLoading) {
    toast.error(
      'Помилка!',
      status === 'InvalidEntityIdException'
        ? 'Не знайдено опитування з таким id'
        : status === 'AnswerInDatabasePermissionException'
        ? 'Ти вже пройшов опитування за цього викладача!'
        : status === 'NoPermissionException'
        ? 'У тебе недостатньо прав для цієї дії'
        : status === 'WrongTimeException'
        ? 'Час проходження опитування сплив або опитування ще не почалось'
        : 'Помилка на сервері =(',
    );
    void router.push('/poll');
  }

  return (
    <PageLayout
      description={'Сторінка для проходження опитування'}
      hasFooter={true}
      hasHeader={true}
    >
      <div className={styles['poll-page']}>
        <div className={styles['poll-page__content']}>
          {isLoading ? (
            <Loader />
          ) : (
            isSuccessFetching && (
              <div className={styles['poll-page__content-wrapper']}>
                <div className={styles['breadcrumbs-wrapper']}>
                  <Breadcrumbs
                    items={[
                      { label: 'Головна', href: '/' },
                      { label: 'Опитування', href: '/poll' },
                      {
                        label: `${data.teacher.lastName} ${data.teacher.firstName} ${data.teacher.middleName}`,
                        href: `/poll/${disciplineTeacherId}`,
                      },
                    ]}
                    className={styles['breadcrumbs']}
                  />
                </div>
                <PollForm data={data} />
              </div>
            )
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default PollPage;
