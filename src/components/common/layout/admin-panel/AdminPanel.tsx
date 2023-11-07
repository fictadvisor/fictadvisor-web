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
  const [index, setIndex] = useState('Ролі');
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
            label="Ролі"
            value="Ролі"
            icon={<Captain />}
            textPosition={TabTextPosition.LEFT}
            sx={styles.tab}
          />
          <Tab
            label="Користувач"
            value="Користувач"
            icon={<UserCircleIcon />}
            textPosition={TabTextPosition.LEFT}
            sx={styles.tab}
          />
          <Tab
            label="Студенти"
            value="Студенти"
            icon={<IdentificationIcon />}
            textPosition={TabTextPosition.LEFT}
            sx={styles.tab}
          />
          <Tab
            label="Групи"
            value="Групи"
            icon={<UserGroupIcon />}
            textPosition={TabTextPosition.LEFT}
            sx={styles.tab}
          />
          <Tab
            label="Кафедри"
            value="Кафедри"
            icon={<BuildingLibraryIcon />}
            textPosition={TabTextPosition.LEFT}
            sx={styles.tab}
          />
          <Tab
            label="Викладачі"
            value="Викладачі"
            icon={<BriefcaseIcon />}
            textPosition={TabTextPosition.LEFT}
            sx={styles.tab}
          />
          <Tab
            label="Дисципліни"
            value="Дисципліни"
            icon={<NewspaperIcon />}
            textPosition={TabTextPosition.LEFT}
            sx={styles.tab}
          />
          <Tab
            label="Предмети"
            value="Предмети"
            icon={<AcademicCapIcon />}
            textPosition={TabTextPosition.LEFT}
            sx={styles.tab}
          />
          <Tab
            label="Розклад"
            value="Розклад"
            icon={<CalendarIcon />}
            textPosition={TabTextPosition.LEFT}
            sx={styles.tab}
          />
          <Typography sx={styles.pollPartHeader}>Опитування</Typography>
          <Tab
            label="База питань"
            value="База питань"
            icon={<PencilSquareIcon />}
            textPosition={TabTextPosition.LEFT}
            sx={mergeSx(styles.tab, { marginLeft: '14px', width: '194px' })}
          />
          <Tab
            label="База відповідей"
            value="База відповідей"
            icon={<ClipboardDocumentListIcon />}
            textPosition={TabTextPosition.LEFT}
            sx={mergeSx(styles.tab, { marginLeft: '14px', width: '194px' })}
          />
          <Tab
            label="Головна сторінка"
            value="Головна сторінка"
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
