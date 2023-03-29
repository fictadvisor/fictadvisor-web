import React from 'react';
import { Box } from '@mui/material';
import Link from 'next/link';

import Button, {
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button';

import { HeaderDesktopCard } from './components/header-desktop-card';
import Constants from './constants/constants.json';
import * as styles from './Header.styles';

export interface DesktopHeaderProps {
  name: any;
  groupName: any;
  position: any;
  avatar: any;
  user: any;
  isLoggedIn: boolean;
}
const DesktopHeader: React.FC<DesktopHeaderProps> = ({
  name,
  groupName,
  position,
  avatar,
  user,
  isLoggedIn,
}) => {
  return (
    <Box sx={styles.headerContainer}>
      <Link href={'/'}>
        <Box sx={styles.headerLogo}>
          <img src={`/assets/logo.png`} alt="logo" />
        </Box>
      </Link>
      <Box sx={styles.menu}>
        {Constants.map((record, index) => {
          return (
            <Link key={index} href={record.link}>
              <Button
                text={record.text}
                size={ButtonSize.MEDIUM}
                variant={ButtonVariant.TEXT}
              />
            </Link>
          );
        })}
      </Box>
      {isLoggedIn ? (
        <div className={styles['header-desktop-card']}>
          <Link href={'/account'}>
            <HeaderDesktopCard
              name={name}
              groupName={groupName}
              position={position}
              url={avatar}
            />
          </Link>
        </div>
      ) : (
        <Box sx={styles.loginButtons}>
          <Link href={'/register'}>
            <Button
              text="Зареєструватись"
              size={ButtonSize.SMALL}
              variant={ButtonVariant.OUTLINE}
            />
          </Link>
          <Link href={'/login'}>
            <Button
              text="Увійти"
              size={ButtonSize.SMALL}
              variant={ButtonVariant.FILLED}
            />
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default DesktopHeader;
