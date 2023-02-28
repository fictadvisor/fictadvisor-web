import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import {
  AcademicCapIcon,
  LockClosedIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

import Loader, { LoaderSize } from '@/components/common/ui/loader';
import {
  TabItem,
  TabItemContentPosition,
  TabList,
  TabPanel,
  TabPanelsList,
} from '@/components/common/ui/tab';
import { TabItemContentSize } from '@/components/common/ui/tab/tab-item/TabItem';
import MobileStudentTab from '@/components/pages/account-page/components/mobile-student-tab';
import StudentTab from '@/components/pages/account-page/components/student-tab';
import StudentTable from '@/components/pages/account-page/components/table/student-table';
import { StudentRole } from '@/components/pages/account-page/components/table/student-table/StudentTable';
import { transformData } from '@/components/pages/account-page/components/table/student-table/utils';
import { testData } from '@/components/pages/account-page/testData';
import useAuthentication from '@/hooks/use-authentication';
import useIsMobile from '@/hooks/use-is-mobile/UseIsMobile';
import { GroupAPI } from '@/lib/api/group/GroupAPI';
import {
  setRequests,
  setStudents,
} from '@/redux/reducers/account-reducer/account.reducer';
import { SetStudentsAction } from '@/redux/reducers/account-reducer/account.types';

import PageLayout from '../../common/layout/page-layout/PageLayout';

import styles from './AccountPage.module.scss';

const getGroups = isMobile => {
  if (isMobile) {
    return <MobileStudentTab />;
  } else {
    return <StudentTab />;
  }
};

const AccountPage = () => {
  const isMobile = useIsMobile(1024);
  const router = useRouter();
  const { user } = useAuthentication();
  const { tab } = router.query;
  const [index, setIndex] = useState<string>('1');

  useEffect(() => {
    const tabOption = tab !== '1' && tab !== '2' && tab !== '3' ? '1' : tab;
    if (tab === '1' || tab === '2' || tab === '3') {
      setIndex(tabOption);
    }
  }, [tab, user]);

  const dispatch = useDispatch();

  const {
    isFetched: isFetchedStudents,
    isSuccess: isSuccessStudents,
    data: students,
  } = useQuery(
    ['students'],
    () => GroupAPI.getGroupStudents(user?.data.group.id),
    { retry: false, enabled: user != null },
  );

  const {
    isFetched: isFetchedRequests,
    isSuccess: isSuccessRequests,
    data: requests,
  } = useQuery(
    ['students'],
    () => GroupAPI.getRequestStudents(user?.data.group.id),
    { retry: false, enabled: user != null },
  );

  if (isSuccessStudents) {
    dispatch(setStudents(students as SetStudentsAction));
  }

  if (isSuccessRequests) {
    dispatch(setRequests({ requests: requests.students }));
  }
  console.log(requests, 'Hi');

  return (
    <PageLayout hasFooter={true}>
      <div className={styles['content']}>
        <div className={styles['breadcrumb']}></div>
      </div>
      <div className={styles['tabs-content']}>
        <TabList className={styles['tab-list']} onChange={setIndex}>
          <TabItem
            size={TabItemContentSize.NORMAL}
            text="Загальне"
            position={TabItemContentPosition.LEFT}
            icon={<AcademicCapIcon className={'icon'} />}
            value={'1'}
          ></TabItem>
          <TabItem
            size={TabItemContentSize.NORMAL}
            text="Безпека"
            position={TabItemContentPosition.LEFT}
            icon={<LockClosedIcon className={'icon'} />}
            value={'2'}
          ></TabItem>
          <TabItem
            size={TabItemContentSize.NORMAL}
            text="Група"
            position={TabItemContentPosition.LEFT}
            icon={<UsersIcon className={'icon'} />}
            value={'3'}
          ></TabItem>
        </TabList>
        <TabPanelsList
          className={styles['tab-panels-list']}
          currentValue={index}
        >
          {!isFetchedStudents && !isFetchedRequests ? (
            <Loader size={LoaderSize.SMALLEST} />
          ) : (
            <>
              <TabPanel className={styles['tab-panel']} value={'1'}>
                <StudentTable
                  variant={StudentRole.CAPTAIN}
                  rows={transformData(testData)}
                />
                <StudentTable
                  rows={transformData(testData)}
                  variant={StudentRole.MODERATOR}
                />
                <StudentTable
                  variant={StudentRole.STUDENT}
                  rows={transformData(testData)}
                />
              </TabPanel>
              <TabPanel className={styles['tab-panel']} value={'2'}>
                <MobileStudentTab />
              </TabPanel>
              <TabPanel className={styles['tab-panel']} value={'3'}>
                {getGroups(isMobile)}
              </TabPanel>
            </>
          )}
        </TabPanelsList>
      </div>
    </PageLayout>
  );
};

export default AccountPage;
