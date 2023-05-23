import { FC, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

import Breadcrumbs from '@/components/common/ui/breadcrumbs';
import Button, {
  ButtonColor,
  ButtonVariant,
} from '@/components/common/ui/button/Button';
import Loader, { LoaderSize } from '@/components/common/ui/loader/Loader';
import PollTeacherSearchList from '@/components/pages/search-pages/poll-teachers-page/PollTeacherSearchList';
import useAuthentication from '@/hooks/use-authentication';
import useToast from '@/hooks/use-toast';
import { PollTeachersDTO } from '@/lib/api/poll/dto/PollTeachersDTO';
import PollAPI from '@/lib/api/poll/PollAPI';

import PageLayout from '../../../common/layout/page-layout/PageLayout';

import styles from '../SearchPage.module.scss';

const breadcrumbs = [
  {
    label: 'Головна',
    href: '/',
  },
  {
    label: 'Опитування',
    href: '/poll',
  },
];
const pageSize = 20;

const PollTeacherPage: FC = () => {
  const [curPage, setCurPage] = useState(0);
  const { push, replace } = useRouter();
  const { user, isLoggedIn } = useAuthentication();
  const toast = useToast();
  const { token } = useAuthentication();

  useEffect(() => {
    if (!isLoggedIn) {
      toast.error('Для проходження опитування потрібно авторизуватися');
      void replace('/login?redirect=~poll');
    }
  }, [toast, isLoggedIn, push, replace]);

  const { data, isLoading, isFetching } = useQuery<PollTeachersDTO>(
    'pollTeachers',
    () => PollAPI.getUserTeachers(user.id, token),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      enabled: user?.id != null,
    },
  );

  return (
    <PageLayout title={'Викладачі'}>
      <div className={styles['layout']}>
        {isLoggedIn && (
          <>
            <Breadcrumbs items={breadcrumbs} className={styles['breadcrumb']} />

            {data && (
              <PollTeacherSearchList data={data} className="poll-teacher" />
            )}
            {isLoading ||
              (isFetching && (
                <div className={styles['page-loader']}>
                  <Loader size={LoaderSize.SMALLEST} />
                </div>
              ))}

            {data?.teachers.length === (curPage + 1) * pageSize && (
              <Button
                className={styles['load-btn']}
                text="Завантажити ще"
                variant={ButtonVariant.FILLED}
                color={ButtonColor.SECONDARY}
                onClick={() => setCurPage(pr => pr + 1)}
              />
            )}
          </>
        )}
      </div>
    </PageLayout>
  );
};

export default PollTeacherPage;
