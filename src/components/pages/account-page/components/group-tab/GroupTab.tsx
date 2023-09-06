import { FC } from 'react';
import { useQuery } from 'react-query';
import { Box } from '@mui/material';

import Progress from '@/components/common/ui/progress';
import NoGroupBlock from '@/components/pages/account-page/components/group-tab/components/no-group-block';
import RequestsTable from '@/components/pages/account-page/components/group-tab/components/table/requests-table';
import StudentsTable from '@/components/pages/account-page/components/group-tab/components/table/student-table';
import {
  transformRequestsData,
  transformStudentsData,
} from '@/components/pages/account-page/components/group-tab/components/table/utils';
import useAuthentication from '@/hooks/use-authentication';
import GroupAPI from '@/lib/api/group/GroupAPI';
import { PendingStudent } from '@/types/student';
import { User, UserGroupRole, UserGroupState } from '@/types/user';

const getStudents = async (user: User) => {
  const { students } = await GroupAPI.getGroupStudents(
    user.group?.id as string,
  );
  let requests: PendingStudent[] = [];

  if (user.group?.role !== UserGroupRole.STUDENT) {
    const { students: pendingStudents } = await GroupAPI.getRequestStudents(
      user.group?.id as string,
    );

    requests = pendingStudents;
  }

  return {
    students,
    requests,
  };
};

const GroupTab: FC = () => {
  const { user } = useAuthentication();

  const { data, isLoading, refetch } = useQuery(
    ['students'],
    () => getStudents(user),
    {
      retry: false,
      refetchOnWindowFocus: false,
    },
  );

  if (isLoading)
    return (
      <Box
        sx={{
          //TODO move inline styles when refactor
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Progress />
      </Box>
    );

  if (
    user?.group?.state === UserGroupState.DECLINED ||
    user?.group?.state === UserGroupState.PENDING
  )
    return <NoGroupBlock />;

  if (!data || !user?.group || !user?.group.role) return null;

  const showRequests =
    data?.requests?.length !== 0 && user?.group?.role !== UserGroupRole.STUDENT;

  return (
    <div>
      <div>
        <h4>Список групи {user.group.code}</h4>
      </div>
      {showRequests && (
        <RequestsTable
          refetch={refetch}
          rows={transformRequestsData(data.requests)}
        />
      )}
      {
        <StudentsTable
          refetch={refetch}
          role={user.group.role}
          rows={transformStudentsData(data.students)}
        />
      }
    </div>
  );
};

export default GroupTab;
