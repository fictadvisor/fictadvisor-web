import { FC } from 'react';
import { Box, Link, Typography, useMediaQuery } from '@mui/material';
import NextLink from 'next/link';

import Button from '../../ui/button-mui';
import IconButton from '../../ui/icon-button-mui/IconButton';

import { mainLinks, socialLinks, supportLinks } from './constants';
import * as styles from './Footer.styles';

const Footer: FC = () => {
  const isMobile = useMediaQuery('(max-width:1024px)');

  return (
    <Box sx={styles.footerContainer}>
      <Box sx={styles.footerLogoContainer}>
        <Link href="/" component={NextLink} sx={styles.footerLogo}>
          <Box component="img" src="/images/logo.png" alt="logo" />
        </Link>
        <Typography sx={styles.signature}>By Dev-відділ СР ФІОТ</Typography>
      </Box>

      <Box sx={styles.mainReferences}>
        <Typography sx={styles.title}>Основні посилання</Typography>
        {mainLinks.map((data, index) => (
          <Link
            key={index}
            component={NextLink}
            href={data.link}
            underline="none"
          >
            <Button
              sx={styles.button}
              text={data.text}
              size="small"
              variant="text"
            />
          </Link>
        ))}
      </Box>

      <Box sx={styles.support}>
        <Typography sx={styles.title}>Підтримка</Typography>
        {supportLinks.map((data, index) => (
          <Link
            key={index}
            component={NextLink}
            href={data.link}
            underline="none"
          >
            <Button
              sx={styles.button}
              text={data.text}
              size="small"
              variant="text"
            />
          </Link>
        ))}
      </Box>

      <Box sx={styles.socialMedia}>
        <Typography sx={styles.title}>Соцмережі</Typography>
        <Box sx={styles.socialButtons}>
          {socialLinks.map((data, index) => (
            <Link
              sx={styles.iconLink}
              key={index}
              component={NextLink}
              href={data.link}
              target="_blanket"
              underline="none"
            >
              <IconButton
                sx={styles.button}
                icon={data.icon}
                color="transparent"
              />
              <Typography variant="body1Bold" color="grey.600">
                {!isMobile && data.text}
              </Typography>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
