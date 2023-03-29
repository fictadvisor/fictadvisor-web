import React, { useState } from 'react';
import { Box, Link, useMediaQuery } from '@mui/material';

import useAuthentication from '@/hooks/use-authentication';

import { BurgerMenu } from '../../custom-svg/BurgerMenu';
import Button, { ButtonSize, ButtonVariant } from '../../ui/button';
import {
  IconButton,
  IconButtonColor,
  IconButtonSize,
} from '../../ui/icon-button';
import { CloseButton } from '../../ui/icon-button/variants';
import { TabItem, TabItemContentPosition } from '../../ui/tab';
import { TabItemContentSize } from '../../ui/tab/tab-item/TabItem';

import { HeaderDesktopCard } from './components/header-desktop-card/HeaderDesktopCard';
import HeaderDivider from './components/header-divider';
import { HeaderMobileCard } from './components/header-mobile-card';
import accountButtons from './constants/accountButtons';
import mainLinks from './constants/mainLinks';
import transformData from './utils/transformData';
import * as styles from './Header.styles';

const Header: React.FC = () => {
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
              size={IconButtonSize.MEDIUM}
              color={IconButtonColor.TRANSPARENT}
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
                    <TabItem
                      text={button.text}
                      position={TabItemContentPosition.LEFT}
                      icon={button.icon}
                      size={TabItemContentSize.SMAll}
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
                <Button
                  text="Зареєструватись"
                  size={ButtonSize.SMALL}
                  variant={ButtonVariant.OUTLINE}
                />
              </Link>
              <Link
                href="/login"
                sx={styles.loginButton}
                underline="none"
                color="inherit"
              >
                <Button
                  text="Увійти"
                  size={ButtonSize.SMALL}
                  variant={ButtonVariant.FILLED}
                />
              </Link>
            </Box>
          )}
          <HeaderDivider />
          <Box sx={styles.mobileMenu}>
            {mainLinks.map((data, index) => (
              <Link
                key={index}
                href={data.link}
                onClick={handleClick}
                underline="none"
                color="inherit"
              >
                <TabItem
                  text={data.text}
                  position={TabItemContentPosition.LEFT}
                  icon={data.icon}
                  size={TabItemContentSize.SMAll}
                />
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
        <Box sx={styles.mobileButton}>
          <IconButton
            onClick={handleClick}
            size={IconButtonSize.MEDIUM}
            color={IconButtonColor.TRANSPARENT}
            icon={<BurgerMenu />}
          />
        </Box>
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
              text={record.text}
              size={ButtonSize.MEDIUM}
              variant={ButtonVariant.TEXT}
            />
          </Link>
        ))}
      </Box>
      {isLoggedIn ? (
        <div className={styles['header-desktop-card']}>
          <Link href="/account" underline="none">
            <HeaderDesktopCard
              name={User.name}
              groupName={User.groupName}
              position={User.position}
              url={User.avatar}
            />
          </Link>
        </div>
      ) : (
        <Box sx={styles.loginButtons}>
          <Link
            href="/register"
            sx={styles.registerButton}
            underline="none"
            color="inherit"
          >
            <Button
              text="Зареєструватись"
              size={ButtonSize.SMALL}
              variant={ButtonVariant.OUTLINE}
            />
          </Link>
          <Link
            href="/login"
            sx={styles.loginButton}
            underline="none"
            color="inherit"
          >
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

export default Header;
