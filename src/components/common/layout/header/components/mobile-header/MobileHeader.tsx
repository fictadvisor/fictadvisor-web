import { FC, useState } from 'react';
import { Box, Link } from '@mui/material';
import NextLink from 'next/link';

import { BurgerMenu } from '@/components/common/custom-svg/BurgerMenu';
import Button from '@/components/common/ui/button-mui';
import Divider from '@/components/common/ui/divider-mui';
import IconButton from '@/components/common/ui/icon-button-mui';
import CloseButton from '@/components/common/ui/icon-button-mui/variants/CloseButton';
import Tab from '@/components/common/ui/tab-mui/tab';

import { accountButtons, mainLinks } from '../../constants';
import HeaderMobileCard from '../header-mobile-card';

import * as styles from './MobileHeader.styles';

interface MobileHeaderProps {
  isLoggedIn: boolean;
  user: any;
}
const MobileHeader: FC<MobileHeaderProps> = ({ isLoggedIn, user }) => {
  const [isOpened, setIsOpened] = useState(false);
  const handleClick = () => {
    setIsOpened(isOpened => !isOpened);
  };

  return isOpened ? (
    <>
      <Box sx={styles.shadow} onClick={handleClick} />
      <Box sx={styles.headerContainer(isOpened)}>
        <Link href="/" component={NextLink} sx={styles.headerLogo}>
          <Box component="img" src="/assets/logo.png" alt="logo" />
        </Link>
        <Box sx={styles.mobileButton}>
          <CloseButton
            onClick={handleClick}
            size="normal"
            color="transparent"
          />
        </Box>
      </Box>
      <Box sx={styles.drop}>
        {isLoggedIn ? (
          <>
            <Link
              href="/account"
              component={NextLink}
              onClick={handleClick}
              underline="none"
              color="inherit"
            >
              <HeaderMobileCard
                name={user.name}
                groupName={user.groupName}
                position={user.position}
                url={user.avatar}
              />
            </Link>
            <Box sx={styles.mobileMenu}>
              {accountButtons.map((button, index) => (
                <Link
                  component={NextLink}
                  key={index}
                  href={button.link}
                  onClick={handleClick}
                  underline="none"
                  color="inherit"
                >
                  <Tab
                    label={button.text}
                    textPosition="left"
                    icon={button.icon}
                  />
                </Link>
              ))}
            </Box>
          </>
        ) : (
          <Box sx={styles.loginButtons}>
            <Link
              component={NextLink}
              href="/register"
              sx={styles.registerButton}
              underline="none"
              color="inherit"
            >
              <Button text="Зареєструватись" size="small" variant="outline" />
            </Link>
            <Link
              component={NextLink}
              href="/login"
              sx={styles.loginButton}
              underline="none"
              color="inherit"
            >
              <Button text="Увійти" size="small" variant="filled" />
            </Link>
          </Box>
        )}
        <Divider />
        <Box sx={styles.mobileMenu}>
          {mainLinks.map((data, index) => (
            <Link
              component={NextLink}
              key={index}
              href={data.link}
              onClick={handleClick}
              underline="none"
              color="inherit"
            >
              <Tab label={data.text} textPosition="left" icon={data.icon} />
            </Link>
          ))}
        </Box>
      </Box>
    </>
  ) : (
    <Box sx={styles.headerContainer(isOpened)}>
      <Link href="/" component={NextLink} sx={styles.headerLogo}>
        <Box component="img" src="/assets/logo.png" alt="logo" />
      </Link>
      <IconButton
        sx={styles.mobileButton}
        onClick={handleClick}
        size="normal"
        color="transparent"
        icon={<BurgerMenu />}
      />
    </Box>
  );
};

export default MobileHeader;
