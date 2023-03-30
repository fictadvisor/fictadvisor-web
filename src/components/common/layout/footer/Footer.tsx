import React from 'react';
import { useMediaQuery } from '@mui/material';

import DesktopFooter from './components/desktop-footer/DesktopFooter';
import MobileFooter from './components/mobile-footer/MobileFooter';

const Footer: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:1024px)');
  return isMobile ? <MobileFooter /> : <DesktopFooter />;
};

export default Footer;
