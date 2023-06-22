import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  AcademicCapIcon,
  LockClosedIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';

import Breadcrumbs from '@/components/common/ui/breadcrumbs';
import Tab from '@/components/common/ui/tab-mui/tab';
import TabContext from '@/components/common/ui/tab-mui/tab-context';
import TabList from '@/components/common/ui/tab-mui/tab-list';
import TabPanel from '@/components/common/ui/tab-mui/tab-panel';
import GeneralTab from '@/components/pages/account-page/components/general-tab';
import GroupTab from '@/components/pages/account-page/components/group-tab';
import SecurityTab from '@/components/pages/account-page/components/security-tab';
import useAuthentication from '@/hooks/use-authentication';

import PageLayout from '../../common/layout/page-layout/PageLayout';

import * as stylesMui from './AccountPage.styles';

import styles from './AccountPage.module.scss';

enum AccountPageTabs {
  GENERAL = 'general',
  SECURITY = 'security',
  GROUP = 'group',
}

const AccountPagesMapper = {
  group: 'Група',
  security: 'Безпека',
  general: 'Загальне',
};

const AccountPage = () => {
  const { push, replace, query, isReady } = useRouter();

  const { tab } = query;
  const [index, setIndex] = useState<AccountPageTabs>(AccountPageTabs.GENERAL);

  useEffect(() => {
    if (!isReady) {
      return;
    }
    if (Object.values(AccountPageTabs).includes(tab as AccountPageTabs)) {
      setIndex(tab as AccountPageTabs);
    } else {
      void push(
        { query: { ...query, tab: AccountPageTabs.GENERAL } },
        undefined,
        {
          shallow: true,
        },
      );
    }
  }, [tab, isReady, push, query]);

  const { isLoggedIn } = useAuthentication();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      void replace('/login?~account');
    }
  }, [dispatch, isLoggedIn, push, replace]);

  const handleChange = async (event, value) => {
    await push({ query: { ...query, tab: value } }, undefined, {
      shallow: true,
    });
    setIndex(value as AccountPageTabs);
  };

  return (
    <PageLayout hasFooter={true}>
      <div className={styles['breadcrumb']}>
        <Breadcrumbs
          items={[
            {
              label: 'Головна',
              href: '/',
            },
            {
              label: AccountPagesMapper[index],
              href: '/account?tab=' + index,
            },
          ]}
        />
      </div>
      <Box sx={stylesMui.tabContext}>
        <TabContext value={index}>
          <TabList onChange={handleChange} sx={stylesMui.tabList}>
            <Tab
              label="Загальне"
              value={AccountPageTabs.GENERAL}
              icon={<AcademicCapIcon />}
              textPosition="left"
            />
            <Tab
              label="Безпека"
              value={AccountPageTabs.SECURITY}
              icon={<LockClosedIcon />}
              textPosition="left"
            />
            <Tab
              label="Група"
              value={AccountPageTabs.GROUP}
              icon={<UsersIcon />}
              textPosition="left"
            />
          </TabList>
          {isLoggedIn && (
            <Box sx={stylesMui.tabPanelsList}>
              <TabPanel sx={stylesMui.tabPanel} value={AccountPageTabs.GENERAL}>
                <GeneralTab />
              </TabPanel>
              <TabPanel
                sx={stylesMui.tabPanel}
                value={AccountPageTabs.SECURITY}
              >
                <SecurityTab />
              </TabPanel>
              <TabPanel sx={stylesMui.tabPanel} value={AccountPageTabs.GROUP}>
                <GroupTab />
              </TabPanel>
            </Box>
          )}
        </TabContext>
      </Box>
    </PageLayout>
  );
};

export default AccountPage;
