import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';

import Button, {
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button/Button';

import mainLinks from './constants/mainLinks';
import socialLinks from './constants/socialLinks';
import supportLinks from './constants/supportLinks';
import * as styles from './Footer.styles';

const Footer: React.FC = () => {
  // TODO: replace with fontSize: 0 in styles
  const isMobile = useMediaQuery('(max-width:1024px)');

  return (
    <Box sx={styles.footerContainer}>
      <Box sx={styles.footerLogoContainer}>
        <Box sx={styles.footerLogo}>
          <Link href="/">
            <Box component="img" src="/assets/logo.png" alt="logo" />
          </Link>
        </Box>
        <Typography sx={styles.signature}>By Dev-відділ СР ФІОТ</Typography>
      </Box>
      <Box sx={styles.mainReferences}>
        <Typography sx={styles.title}>Основні посилання</Typography>
        {mainLinks.map((data, index) => (
          <Link key={index} href={data.link}>
            <Button
              style={{ paddingLeft: '12px' }} // TODO: when button will be refactored to mui, remove inline style to extarnal
              text={data.text}
              size={ButtonSize.SMALL}
              variant={ButtonVariant.TEXT}
            />
          </Link>
        ))}
      </Box>
      <Box sx={styles.support}>
        <Typography sx={styles.title}>Підтримка</Typography>
        {supportLinks.map((data, index) => (
          <Link key={index} href={data.link}>
            <Button
              style={{ paddingLeft: '12px' }} // TODO: when button will be refactored to mui, remove inline style to extarnal
              text={data.text}
              size={ButtonSize.SMALL}
              variant={ButtonVariant.TEXT}
            />
          </Link>
        ))}
      </Box>
      <Box sx={styles.socialMedia}>
        <Typography sx={styles.title}>Соцмережі</Typography>
        <Box sx={styles.socialButtons}>
          {socialLinks.map((data, index) => (
            <Link key={index} href={data.link} target="_blanket">
              <Button
                style={{ paddingLeft: '12px', width: '36px' }} // TODO: when button will be refactored to mui, remove inline style to extarnal
                startIcon={data.icon}
                size={ButtonSize.SMALL}
                variant={ButtonVariant.TEXT}
                text={isMobile ? '' : data.text} // TODO: replace with fontSize: 0 in styles
              />
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
