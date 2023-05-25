import { FC } from 'react';
import { Box, Link } from '@mui/material';

import Button from '@/components/common/ui/button-mui';

import { mainLinks } from '../../constants';
import HeaderDesktopCard from '../header-desktop-card';

import * as styles from './DesktopHeader.styles.ts';

interface DesktopHeaderProps {
  isLoggedIn: boolean;
  isOpened: boolean;
  User: any;
}

const DesktopHeader: FC<DesktopHeaderProps> = ({
  isLoggedIn,
  isOpened,
  User,
}) => {
  return (
    <Box sx={styles.headerContainer(isOpened)}>
      <Link href="/" sx={styles.headerLogo}>
        <Box component="img" src="/assets/logo.png" alt="logo" />
      </Link>
      <Box sx={styles.menu}>
        {mainLinks.map((record, index) => (
          <Link key={index} href={record.link} underline="none">
            <Button
              sx={styles.button}
              text={record.text}
              size="medium"
              variant="text"
            />
          </Link>
        ))}
      </Box>
      {isLoggedIn ? (
        <Link sx={styles.headerDesktopCard} href="/account" underline="none">
          <HeaderDesktopCard
            name={User.name}
            groupName={User.groupName}
            position={User.position}
            url={User.avatar}
          />
        </Link>
      ) : (
        <Box sx={styles.loginButtons}>
          <Link
            href="/register"
            sx={styles.registerButton}
            underline="none"
            color="inherit"
          >
            <Button text="Зареєструватись" size="small" variant="outline" />
          </Link>
          <Link
            href="/login"
            sx={styles.loginButton}
            underline="none"
            color="inherit"
          >
            <Button text="Увійти" size="small" variant="filled" />
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default DesktopHeader;
