import { FC } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

import PageLayout from '@/components/common/layout/page-layout/PageLayout';
import PersonalTeacherPage from '@/components/pages/personal-teacher-page';
import useAuthentication from '@/hooks/use-authentication';
import TeacherService from '@/lib/services/teacher/TeacherService';

const PersonalTeacher: FC = () => {
  const router = useRouter();

  const { query } = router;
  const teacherId = query.teacherId as string;
  const { user } = useAuthentication();

  const { isLoading, isError, data } = useQuery(
    ['teacher', teacherId],
    () => TeacherService.getTeacherPageInfo(teacherId, user?.id),
    {
      refetchOnWindowFocus: false,
      retry: false,
    },
  );
  return (
    <PageLayout
      title={
        data?.info?.lastName +
        ' ' +
        data?.info?.firstName +
        ' ' +
        data?.info?.middleName
      }
      description={data?.info?.description}
    >
      <PersonalTeacherPage
        isLoading={isLoading}
        isError={isError}
        data={data}
        query={query}
        teacherId={teacherId}
        router={router}
      />
    </PageLayout>
  );
};

export default PersonalTeacher;
