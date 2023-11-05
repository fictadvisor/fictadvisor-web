import React, { SyntheticEvent, useState } from 'react';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  CalendarIcon,
  ClipboardDocumentListIcon,
  HomeIcon,
  IdentificationIcon,
  NewspaperIcon,
  PencilSquareIcon,
  UserCircleIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { Drawer, Typography } from '@mui/material';
import Image from 'next/image';

import { Captain } from '@/components/common/icons/Captain';
import { TabTextPosition } from '@/components/common/ui/tab/tab/types';
import { AccountPageTab } from '@/components/pages/account-page/types';
import mergeSx from '@/lib/utils/MergeSxStylesUtil';

import Tab from '../../ui/tab/tab';
import TabContext from '../../ui/tab/tab-context';
import TabList from '../../ui/tab/tab-list';

import * as styles from './AdminPanel.styles';

const AdminPanel = () => {
  const [index, setIndex] = useState('Хуй1');
  const handleChange = async (event: SyntheticEvent, value: AccountPageTab) => {
    console.log(value);
    setIndex(value);
  };

  return (
    <Drawer anchor="left" variant="permanent" sx={styles.drawer}>
      <Image
        src={'/icons/halloween-logo.svg'}
        alt="FA logo"
        width={197}
        height={28}
        style={{
          margin: '16px 21px',
        }}
      />
      <TabContext value={index}>
        <TabList onChange={handleChange} sx={styles.tabList}>
          <Tab
            label="Хуй1"
            value="Хуй1"
            icon={<Captain />}
            textPosition={TabTextPosition.LEFT}
            sx={styles.tab}
          />
          <Tab
            label="Хуй2"
            value="Хуй2"
            icon={<UserCircleIcon />}
            textPosition={TabTextPosition.LEFT}
            sx={styles.tab}
          />
          <Tab
            label="Хуй3"
            value="Хуй3"
            icon={<IdentificationIcon />}
            textPosition={TabTextPosition.LEFT}
            sx={styles.tab}
          />
          <Tab
            label="Хуй4"
            value="Хуй4"
            icon={<UserGroupIcon />}
            textPosition={TabTextPosition.LEFT}
            sx={styles.tab}
          />
          <Tab
            label="Хуй5"
            value="Хуй5"
            icon={<BuildingLibraryIcon />}
            textPosition={TabTextPosition.LEFT}
            sx={styles.tab}
          />
          <Tab
            label="Хуй6"
            value="Хуй6"
            icon={<BriefcaseIcon />}
            textPosition={TabTextPosition.LEFT}
            sx={styles.tab}
          />
          <Tab
            label="Хуй7"
            value="Хуй7"
            icon={<NewspaperIcon />}
            textPosition={TabTextPosition.LEFT}
            sx={styles.tab}
          />
          <Tab
            label="Хуй8"
            value="Хуй8"
            icon={<AcademicCapIcon />}
            textPosition={TabTextPosition.LEFT}
            sx={styles.tab}
          />
          <Tab
            label="Хуй9"
            value="Хуй9"
            icon={<CalendarIcon />}
            textPosition={TabTextPosition.LEFT}
            sx={styles.tab}
          />
          <Typography sx={styles.pollPart}>Опитування</Typography>
          <Tab
            label="Хуй10"
            value="Хуй10"
            icon={<PencilSquareIcon />}
            textPosition={TabTextPosition.LEFT}
            sx={mergeSx(styles.tab, { marginLeft: '14px', width: '194px' })}
          />
          <Tab
            label="Хуй11"
            value="Хуй11"
            icon={<ClipboardDocumentListIcon />}
            textPosition={TabTextPosition.LEFT}
            sx={mergeSx(styles.tab, { marginLeft: '14px', width: '194px' })}
          />
          <Tab
            label="Хуй12"
            value="Хуй12"
            icon={<HomeIcon />}
            textPosition={TabTextPosition.LEFT}
            sx={styles.tab}
          />
        </TabList>
      </TabContext>
    </Drawer>
  );
};

export default AdminPanel;
