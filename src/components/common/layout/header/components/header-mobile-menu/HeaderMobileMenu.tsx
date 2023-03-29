import React, { ReactNode } from 'react';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  ClipboardIcon,
  HomeIcon,
} from '@heroicons/react/24/solid';
import { Box } from '@mui/material';
import Link from 'next/link';

import { TabItem, TabItemContentPosition } from '@/components/common/ui/tab';
import { TabItemContentSize } from '@/components/common/ui/tab/tab-item/TabItem';

import * as styles from '../../Header.styles';
interface HeaderMobileMenuProps {
  isOpened?: boolean;
  setIsOpened: any;
}

const HeaderMobileMenu: React.FC<HeaderMobileMenuProps> = ({
  isOpened,
  setIsOpened,
}) => {
  return (
    <Box sx={styles.mobileMenu}>
      <Link href={'/'} onClick={() => setIsOpened()}>
        <TabItem
          text="Головна"
          position={TabItemContentPosition.LEFT}
          icon={<HomeIcon />}
          size={TabItemContentSize.SMAll}
        />
      </Link>
      <Link href={'/poll'} onClick={() => setIsOpened()}>
        <TabItem
          text="Опитування"
          position={TabItemContentPosition.LEFT}
          icon={<ClipboardIcon />}
          size={TabItemContentSize.SMAll}
        />
      </Link>
      <Link href={'/teachers'} onClick={() => setIsOpened()}>
        <TabItem
          text="Викладачі"
          position={TabItemContentPosition.LEFT}
          icon={<BriefcaseIcon />}
          size={TabItemContentSize.SMAll}
        />
      </Link>
      <Link href={'/subjects'} onClick={() => setIsOpened()}>
        <TabItem
          text="Предмети"
          position={TabItemContentPosition.LEFT}
          icon={<AcademicCapIcon />}
          size={TabItemContentSize.SMAll}
        />
      </Link>
    </Box>
  );
};

export default HeaderMobileMenu;
