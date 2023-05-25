import { FC, useState } from 'react';
import { useMediaQuery } from '@mui/material';

import useAuthentication from '@/hooks/use-authentication';

import DesktopHeader from './components/DesktopHeader';
import MobileHeader from './components/MobileHeader/MobileHeader';
import transformData from './utils/transformData';

const Header: FC = () => {
  const { isLoggedIn, user } = useAuthentication();
  const User = transformData(user);
  const isMobile = useMediaQuery('(max-width:1200px)');
  const [isOpened, setIsOpened] = useState(false);
  const handleClick = () => {
    setIsOpened(isOpened => !isOpened);
  };

  return isMobile ? (
    <MobileHeader
      isLoggedIn={isLoggedIn}
      isOpened={false}
      User={User}
      onClick={handleClick}
    />
  ) : (
    <DesktopHeader isLoggedIn={isLoggedIn} isOpened={false} User={User} />
  );
};

export default Header;
