import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

import TeacherPage from '@/components/common/ui/teacher-page';
import useAuthentication from '@/hooks/use-authentication';
import TeacherService from '@/lib/services/teacher';

export enum TeachersPageTabs {
  GENERAL = 'general',
  SUBJECTS = 'subjects',
  COMMENTS = 'reviews',
}

const PersonalTeacherPage = () => {
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
    <TeacherPage
      router={router}
      isLoading={isLoading}
      isError={isError}
      data={data}
      teacherId={teacherId}
    />
  );
};
export default PersonalTeacherPage;
