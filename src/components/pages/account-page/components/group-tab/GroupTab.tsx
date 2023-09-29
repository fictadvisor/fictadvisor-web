import React, { FC, useState } from 'react';
import { useQuery } from 'react-query';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { Box, Typography } from '@mui/material';

import Button from '@/components/common/ui/button-mui/Button';
import {
  IconButtonColor,
  IconButtonShape,
} from '@/components/common/ui/icon-button';
import IconButton from '@/components/common/ui/icon-button-mui';
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

import styles from './GroupTab.module.scss';

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
  const [isSorted, setIsSorted] = useState(false);
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
  data?.requests?.length !== 0 && user?.group?.role !== UserGroupRole.STUDENT;

  return (
    <Box className={styles['content']}>
      <Box className={styles['text-content']}>
        <Typography variant="h4">Список групи {user.group.code}</Typography>
        <IconButton
          // TODO move inline styles when refactor
          sx={{ height: 'fit-content', marginLeft: '10px' }}
          shape={IconButtonShape.SQUARE}
          color={IconButtonColor.SECONDARY}
          icon={isSorted ? <ChevronDownIcon /> : <ChevronUpIcon />}
          onClick={() => {
            setIsSorted(!isSorted);
            refetch();
          }}
        />
      </Box>

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
          rows={
            isSorted
              ? transformStudentsData(
                  data.students.sort((a, b) =>
                    a.firstName.localeCompare(b.firstName),
                  ),
                )
              : transformStudentsData(data.students)
          }
        />
      }
    </Box>
  );
};

export default GroupTab;
