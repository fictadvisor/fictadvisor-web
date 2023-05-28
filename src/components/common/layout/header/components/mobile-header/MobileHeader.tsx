import { FC, useState } from 'react';
import { AppBar, Box, Link } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Image from 'next/image';
import NextLink from 'next/link';

import { BurgerMenu } from '@/components/common/custom-svg/BurgerMenu';
import Divider from '@/components/common/ui/divider-mui';
import IconButton from '@/components/common/ui/icon-button-mui';
import CloseButton from '@/components/common/ui/icon-button-mui/variants/CloseButton';
import Tab from '@/components/common/ui/tab-mui/tab';

import { accountButtons, mainLinks } from '../../constants';
import AuthenticationButtons from '../authentication-buttons';
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

  return (
    <>
      {isOpened && <Box sx={styles.shadow} onClick={handleClick} />}

      <Box sx={styles.headerContainer(isOpened)}>
        <Link href="/" component={NextLink} sx={styles.headerLogo}>
          <Image src="/assets/logo.png" alt="logo" width={197} height={20} />
        </Link>
        {isOpened ? (
          <Box sx={styles.iconButton}>
            <CloseButton
              onClick={handleClick}
              size="normal"
              color="transparent"
            />
          </Box>
        ) : (
          <IconButton
            sx={styles.iconButton}
            onClick={handleClick}
            size="normal"
            color="transparent"
            icon={<BurgerMenu />}
          />
        )}
      </Box>

      <Drawer
        style={{ zIndex: 2 }}
        anchor="top"
        open={isOpened}
        sx={styles.drawer}
        hideBackdrop
      >
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
            <Box sx={styles.menu}>
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
                    sx={styles.menuTab}
                  />
                </Link>
              ))}
            </Box>
          </>
        ) : (
          <AuthenticationButtons />
        )}
        <Divider sx={styles.divider(isLoggedIn)} />

        <Box sx={styles.menu}>
          {mainLinks.map((data, index) => (
            <Link
              component={NextLink}
              key={index}
              href={data.link}
              onClick={handleClick}
              underline="none"
              color="inherit"
            >
              <Tab
                label={data.text}
                sx={styles.menuTab}
                textPosition="left"
                icon={data.icon}
              />
            </Link>
          ))}
        </Box>
      </Drawer>
    </>
  ); //isOpened ? (
  //   <>
  // <Box sx={styles.shadow} onClick={handleClick} />
  //     <Box sx={styles.headerContainer(isOpened)}>
  //       <Link href="/" component={NextLink} sx={styles.headerLogo}>
  //         <Box component="img" src="/assets/logo.png" alt="logo" />
  //       </Link>
  //       <Box sx={styles.iconButton}>
  //         <CloseButton
  //           onClick={handleClick}
  //           size="normal"
  //           color="transparent"
  //         />
  //       </Box>
  //     </Box>
  //     <Box sx={styles.drop}>
  //       {isLoggedIn ? (
  //         <>
  //           <Link
  //             href="/account"
  //             component={NextLink}
  //             onClick={handleClick}
  //             underline="none"
  //             color="inherit"
  //           >
  //             <HeaderMobileCard
  //               name={user.name}
  //               groupName={user.groupName}
  //               position={user.position}
  //               url={user.avatar}
  //             />
  //           </Link>
  // <Box sx={styles.menu}>
  //   {accountButtons.map((button, index) => (
  //     <Link
  //       component={NextLink}
  //       key={index}
  //       href={button.link}
  //       onClick={handleClick}
  //       underline="none"
  //       color="inherit"
  //     >
  //       <Tab
  //         label={button.text}
  //         textPosition="left"
  //         icon={button.icon}
  //         sx={styles.menuTab}
  //       />
  //     </Link>
  //   ))}
  // </Box>
  //         </>
  //       ) : (
  //         <AuthenticationButtons />
  //       )}
  // <Divider sx={styles.divider} />
  // <Box sx={styles.menu}>
  //   {mainLinks.map((data, index) => (
  //     <Link
  //       component={NextLink}
  //       key={index}
  //       href={data.link}
  //       onClick={handleClick}
  //       underline="none"
  //       color="inherit"
  //     >
  //       <Tab
  //         label={data.text}
  //         sx={styles.menuTab}
  //         textPosition="left"
  //         icon={data.icon}
  //       />
  //     </Link>
  //   ))}
  // </Box>
  //     </Box>
  //   </>
  // ) : (
  //   <Box sx={styles.headerContainer(isOpened)}>
  // <Link href="/" component={NextLink} sx={styles.headerLogo}>
  //   <Box component="img" src="/assets/logo.png" alt="logo" />
  // </Link>
  // <IconButton
  //   sx={styles.iconButton}
  //   onClick={handleClick}
  //   size="normal"
  //   color="transparent"
  //   icon={<BurgerMenu />}
  // />
  //   </Box>
  // );
};

export default MobileHeader;
