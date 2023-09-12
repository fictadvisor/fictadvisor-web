import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

import Breadcrumbs from '@/components/common/ui/breadcrumbs';
import Progress from '@/components/common/ui/progress';
import useAuthentication from '@/hooks/use-authentication';
import useToast from '@/hooks/use-toast';
import { useToastError } from '@/hooks/use-toast-error/useToastError';
import PollAPI from '@/lib/api/poll/PollAPI';

import PollForm from './components/poll-form';

import styles from './PollPage.module.scss';
const PollPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { user, isLoggedIn } = useAuthentication();
  const { displayError } = useToastError();
  const router = useRouter();
  const disciplineTeacherId = router.query.disciplineTeacherId as string;
  const toast = useToast();
  const {
    error,
    isSuccess: isSuccessFetching,
    data,
    isLoading: isQuestionsLoading,
  } = useQuery(
    ['pollQuestions', disciplineTeacherId],
    async () => await PollAPI.getTeacherQuestions(disciplineTeacherId),
    {
      retry: false,
      enabled: Boolean(user),
      refetchOnWindowFocus: false,
      keepPreviousData: false,
    },
  );

  useEffect(() => {
    if (!isLoggedIn) {
      displayError(error);
      void router.replace('login/?redirect=~poll');
    }
  }, [toast, isLoggedIn, router]);

  if (error && !isLoading) {
    displayError(error);
    void router.push('/poll');
  }

  useEffect(() => {
    setIsLoading(isQuestionsLoading);
  }, [isQuestionsLoading]);

  return (
    <div className={styles['poll-page']}>
      <div className={styles['poll-page__content']}>
        {isLoading ? (
          <Progress />
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
                />
              </div>
              <PollForm data={data} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default PollPage;
