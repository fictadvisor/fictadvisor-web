import React, { FC } from 'react';
import { useQuery } from 'react-query';

import Loader, { LoaderSize } from '@/components/common/ui/loader';
import NoGroupBlock from '@/components/pages/account-page/components/group-tab/components/no-group-block';
import MobileRequestTable from '@/components/pages/account-page/components/group-tab/components/table/mobile-request-table';
import MobileStudentTable from '@/components/pages/account-page/components/group-tab/components/table/mobile-student-table';
import RequestTable from '@/components/pages/account-page/components/group-tab/components/table/request-table';
import StudentTable from '@/components/pages/account-page/components/group-tab/components/table/student-table';
import {
  transformRequestsData,
  transformStudentsData,
} from '@/components/pages/account-page/components/group-tab/components/table/student-table/utils';
import useAuthentication from '@/hooks/use-authentication';
import useIsMobile from '@/hooks/use-is-mobile';
import GroupAPI from '@/lib/api/group/GroupAPI';
import { User, UserGroupRole } from '@/types/user';

import styles from './GroupTab.module.scss';

const getStudents = async (user: User) => {
  const { students } = await GroupAPI.getGroupStudents(
    user.group?.id as string,
  );
  const { students: requests } = await GroupAPI.getRequestStudents(
    user.group?.id as string,
  );

  return {
    students,
    requests,
  };
};

const GroupTab: FC = () => {
  const isMobile = useIsMobile(1024);
  const { user } = useAuthentication();

  const { data, isLoading, refetch } = useQuery(
    ['students'],
    () => getStudents(user),
    {
      retry: false,
      refetchOnWindowFocus: false,
    },
  );

  if (isLoading) return <Loader size={LoaderSize.SMALLEST} />;

  if (!data) return null;

  if (!user?.group?.role) return <NoGroupBlock />;

  const showRequests =
    data?.requests?.length !== 0 && user?.group?.role !== UserGroupRole.STUDENT;

  return (
    <div className={styles['content']}>
      <div className={styles['text-content']}>
        <h4>Список групи {user.group.code}</h4>
      </div>
      {showRequests &&
        (isMobile ? (
          <MobileRequestTable
            refetch={refetch}
            rows={transformRequestsData(data?.requests)}
          />
        ) : (
          <RequestTable
            refetch={refetch}
            rows={transformRequestsData(data.requests)}
          />
        ))}
      {isMobile ? (
        <MobileStudentTable
          refetch={refetch}
          variant={user.group.role}
          rows={transformStudentsData(data.students)}
        />
      ) : (
        <StudentTable
          refetch={refetch}
          variant={user.group.role}
          rows={transformStudentsData(data.students)}
        />
      )}
    </div>
  );
};

export default GroupTab;
