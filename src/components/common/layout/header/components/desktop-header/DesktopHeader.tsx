import { FC } from 'react';
import { Box, Link } from '@mui/material';
import NextLink from 'next/link';

import Button from '@/components/common/ui/button-mui';

import { mainLinks } from '../../constants';
import HeaderDesktopCard from '../header-desktop-card';

import * as styles from './DesktopHeader.styles';

interface DesktopHeaderProps {
  isLoggedIn: boolean;
  user: any;
}

const DesktopHeader: FC<DesktopHeaderProps> = ({ isLoggedIn, user }) => {
  return (
    <Box sx={styles.headerContainer}>
      <Link href="/" component={NextLink} sx={styles.headerLogo}>
        <Box component="img" src="/assets/logo.png" alt="logo" />
      </Link>
      <Box sx={styles.menu}>
        {mainLinks.map((record, index) => (
          <Link
            key={index}
            component={NextLink}
            href={record.link}
            underline="none"
          >
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
        <Link
          sx={styles.headerDesktopCard}
          component={NextLink}
          href="/account"
          underline="none"
        >
          <HeaderDesktopCard
            name={user.name}
            groupName={user.groupName}
            position={user.position}
            url={user.avatar}
          />
        </Link>
      ) : (
        <Box sx={styles.loginButtons}>
          <Link
            href="/register"
            component={NextLink}
            underline="none"
            color="inherit"
          >
            <Button text="Зареєструватись" size="small" variant="outline" />
          </Link>
          <Link
            component={NextLink}
            href="/login"
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
