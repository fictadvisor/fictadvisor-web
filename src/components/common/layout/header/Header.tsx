import { FC, useState } from 'react';
import { Box, Link, useMediaQuery } from '@mui/material';

import useAuthentication from '@/hooks/use-authentication';

import { BurgerMenu } from '../../custom-svg/BurgerMenu';
import Button from '../../ui/button-mui';
import Divider from '../../ui/divider/Divider';
import IconButton from '../../ui/icon-button-mui';
import { CloseButton } from '../../ui/icon-button-mui/variants';
import Tab from '../../ui/tab-mui/tab';

import HeaderDesktopCard from './components/header-desktop-card';
import HeaderMobileCard from './components/header-mobile-card';
import transformData from './utils/transformData';
import { accountButtons, mainLinks } from './constants';
import * as styles from './Header.styles';

const Header: FC = () => {
  const { isLoggedIn, user } = useAuthentication();
  const User = transformData(user);
  const isMobile = useMediaQuery('(max-width:1200px)');
  const [isOpened, setIsOpened] = useState(false);
  const handleClick = () => {
    setIsOpened(isOpened => !isOpened);
  };

  return isMobile ? (
    isOpened ? (
      <>
        <Box sx={styles.shadow} onClick={handleClick} />
        <Box sx={styles.headerContainer(isOpened)}>
          <Link href="/" sx={styles.headerLogo}>
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
                onClick={handleClick}
                underline="none"
                color="inherit"
              >
                <HeaderMobileCard
                  name={User.name}
                  groupName={User.groupName}
                  position={User.position}
                  url={User.avatar}
                />
              </Link>
              <Box sx={styles.accountButtons}>
                {accountButtons.map((button, index) => (
                  <Link
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
          <Divider />
          <Box sx={styles.mobileMenu}>
            {mainLinks.map((data, index) => (
              <Link
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
        <Link href="/" sx={styles.headerLogo}>
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
    )
  ) : (
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

export default Header;
