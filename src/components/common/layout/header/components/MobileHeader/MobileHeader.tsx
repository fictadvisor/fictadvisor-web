import { FC } from 'react';
import { Box, Link } from '@mui/material';

import Button from '@/components/common/ui/button-mui';
import Divider from '@/components/common/ui/divider-mui';
import IconButton from '@/components/common/ui/icon-button-mui';
import Tab from '@/components/common/ui/tab-mui/tab';

import { accountButtons, mainLinks } from '../../constants/index.jsx';
import * as styles from '../../Header.styles.js';
import HeaderMobileCard from '../header-mobile-card/HeaderMobileCard.jsx';

interface MobileHeaderProps {
  onClick?: any;
  isLoggedIn: boolean;
  isOpened: boolean;
  User: any;
}
const MobileHeader: FC<MobileHeaderProps> = ({
  onClick,
  isLoggedIn,
  isOpened,
  User,
}) => {
  return isOpened ? (
    <>
      <Box sx={styles.shadow} onClick={onClick} />
      <Box sx={styles.headerContainer(isOpened)}>
        <Link href="/" sx={styles.headerLogo}>
          <Box component="img" src="/assets/logo.png" alt="logo" />
        </Link>
        <Box sx={styles.mobileButton}>
          <CloseButton onClick={onClick} size="normal" color="transparent" />
        </Box>
      </Box>
      <Box sx={styles.drop}>
        {isLoggedIn ? (
          <>
            <Link
              href="/account"
              onClick={onClick}
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
                  onClick={onClick}
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
              onClick={onClick}
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
        onClick={onClick}
        size="normal"
        color="transparent"
        icon={<BurgerMenu />}
      />
    </Box>
  );
};

export default MobileHeader;
