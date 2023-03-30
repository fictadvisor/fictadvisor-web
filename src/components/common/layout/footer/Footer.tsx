import React from 'react';
import { useMediaQuery } from '@mui/material';

import DesktopFooter from './components/DesktopFooter';
import MobileFooter from './components/MobileFooter';

const Footer: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:1024px)');
  return isMobile ? <MobileFooter /> : <DesktopFooter />;
};

export default Footer;
