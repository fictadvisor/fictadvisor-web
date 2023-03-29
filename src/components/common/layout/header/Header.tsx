import React from 'react';
import { useMediaQuery } from '@mui/material';

import useAuthentication from '@/hooks/use-authentication';

import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const roleMapper = {
  ['CAPTAIN']: 'Староста',
  ['MODERATOR']: 'Зам. старости',
  ['STUDENT']: 'Студент',
};

const Header: React.FC = () => {
  const { isLoggedIn, user } = useAuthentication();
  const name = [user?.lastName, user?.firstName, user?.middleName].join(' ');
  const groupName = user?.group.state === 'APPROVED' ? user?.group.code : null;
  const position = roleMapper[user?.group.role];
  const avatar = user?.avatar;
  const isMobile = useMediaQuery('(max-width:1200px)');
  return isMobile ? (
    <MobileHeader
      name={name}
      groupName={groupName}
      position={position}
      avatar={avatar}
      user={user}
      isLoggedIn={isLoggedIn}
    />
  ) : (
    <DesktopHeader
      name={name}
      groupName={groupName}
      position={position}
      avatar={avatar}
      user={user}
      isLoggedIn={isLoggedIn}
    />
  );
};

export default Header;
