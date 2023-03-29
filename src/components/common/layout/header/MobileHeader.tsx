import React, { useState } from 'react';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  ClipboardIcon,
  HomeIcon,
  LockClosedIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';
import { Box } from '@mui/material';
import Link from 'next/link';

import Button, {
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button';

import { BurgerMenu } from '../../custom-svg/BurgerMenu';
import {
  IconButton,
  IconButtonColor,
  IconButtonSize,
} from '../../ui/icon-button/IconButton';
import { CloseButton } from '../../ui/icon-button/variants';
import { TabItem, TabItemContentPosition } from '../../ui/tab';
import { TabItemContentSize } from '../../ui/tab/tab-item/TabItem';

import HeaderDivider from './components/header-divider';
import { HeaderMobileCard } from './components/header-mobile-card';
import HeaderMobileMenu from './components/header-mobile-menu/HeaderMobileMenu';
import { DesktopHeaderProps } from './DesktopHeader';
import * as styles from './Header.styles';

interface MobileHeaderProps extends DesktopHeaderProps {
  isLoggedIn: boolean;
}
const MobileHeader: React.FC<MobileHeaderProps> = ({
  name,
  groupName,
  position,
  avatar,
  user,
  isLoggedIn,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const handleClick = () => {
    setIsOpened(isOpened => !isOpened);
  };

  if (isLoggedIn) {
    return isOpened ? (
      <Box>
        <Box sx={styles.shadow} onClick={handleClick} />
        <Box sx={styles.headerContainer} style={{ backgroundColor: '#1e1e1e' }}>
          <Link href={'/'}>
            <Box sx={styles.headerLogo}>
              <img src={`/assets/logo.png`} alt="logo" />
            </Box>
          </Link>
          <Box sx={styles.mobileButton}>
            <CloseButton
              onClick={handleClick}
              size={IconButtonSize.MEDIUM}
              color={IconButtonColor.TRANSPARENT}
            />
          </Box>
        </Box>
        <Box sx={styles.drop}>
          <Link href={'/account'} onClick={handleClick}>
            <HeaderMobileCard
              name={name}
              groupName={groupName}
              position={position}
              url={avatar}
            />
          </Link>
          <Box sx={styles.accountButtons}>
            <Link href={'/account?tab=general'} onClick={handleClick}>
              <TabItem
                text="Загальне"
                position={TabItemContentPosition.LEFT}
                icon={<AcademicCapIcon />}
                size={TabItemContentSize.SMAll}
              />
            </Link>
            <Link href={'/account?tab=security'} onClick={handleClick}>
              <TabItem
                text="Безпека"
                position={TabItemContentPosition.LEFT}
                icon={<LockClosedIcon />}
                size={TabItemContentSize.SMAll}
              />
            </Link>
            <Link href={'/account?tab=group'} onClick={handleClick}>
              <TabItem
                text="Група"
                position={TabItemContentPosition.LEFT}
                icon={<UsersIcon />}
                size={TabItemContentSize.SMAll}
              />
            </Link>
          </Box>
          <HeaderDivider />
          <HeaderMobileMenu setIsOpened={handleClick} />
        </Box>
      </Box>
    ) : (
      <Box sx={styles.headerContainer}>
        <Link href={'/'}>
          <Box sx={styles.headerLogo}>
            <img src={`/assets/logo.png`} alt="logo" />
          </Box>
        </Link>
        <Box sx={styles.mobileButton}>
          <IconButton
            onClick={handleClick}
            size={IconButtonSize.MEDIUM}
            color={IconButtonColor.TRANSPARENT}
            icon={<BurgerMenu />}
          />
        </Box>
      </Box>
    );
  }

  if (!isLoggedIn) {
    return isOpened ? (
      <Box>
        <Box sx={styles.shadow} onClick={handleClick}></Box>
        <Box sx={styles.headerContainer} style={{ backgroundColor: '#1e1e1e' }}>
          <Link href={'/'}>
            <Box sx={styles.headerLogo}>
              <img src={`/assets/logo.png`} alt="logo" />
            </Box>
          </Link>
          <Box sx={styles.mobileButton}>
            <CloseButton
              onClick={handleClick}
              size={IconButtonSize.MEDIUM}
              color={IconButtonColor.TRANSPARENT}
            />
          </Box>
        </Box>
        <Box sx={styles.drop}>
          <Box sx={styles.loginButtons}>
            <Box style={{ width: '192px' }}>
              <Link href={'/register'}>
                <Button
                  text="Зареєструватись"
                  size={ButtonSize.SMALL}
                  variant={ButtonVariant.OUTLINE}
                />
              </Link>
            </Box>
            <Box style={{ width: '120px' }}>
              <Link href={'/login'}>
                <Button
                  text="Увійти"
                  size={ButtonSize.SMALL}
                  variant={ButtonVariant.FILLED}
                />
              </Link>
            </Box>
          </Box>
          <HeaderDivider />
          <HeaderMobileMenu setIsOpened={handleClick} />
        </Box>
      </Box>
    ) : (
      <Box sx={styles.headerContainer}>
        <Link href={'/'}>
          <Box sx={styles.headerLogo}>
            <img src={`/assets/logo.png`} alt="logo" />
          </Box>
        </Link>
        <Box sx={styles.mobileButton}>
          <IconButton
            onClick={handleClick}
            size={IconButtonSize.MEDIUM}
            color={IconButtonColor.TRANSPARENT}
            icon={<BurgerMenu />}
          />
        </Box>
      </Box>
    );
  }
};

export default MobileHeader;
