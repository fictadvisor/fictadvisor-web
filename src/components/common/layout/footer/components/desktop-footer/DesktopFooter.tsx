import React from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

import Button, { ButtonSize, ButtonVariant } from '../../../../ui/button/Button';
import mainData from '../../constants/mainData';
import socialData from '../../constants/socialData';
import supportData from '../../constants/supportData';
import * as styles from '../../Footer.styles';

const DesktopFooter: React.FC = () => {
  return (
    <Box sx={styles.footerContainer}>
      <Box sx={styles.footerLogoContainer}>
        <Box sx={styles.footerLogo}>
          <Link href={'/'}>
            <img src={`/assets/logo.png`} alt="logo" />
          </Link>
        </Box>
        <Typography sx={styles.signature}>By Dev-відділ СР ФІОТ</Typography>
      </Box>
      <Box sx={styles.mainReferences}>
        <Typography sx={styles.title}>Основні посилання</Typography>
        {mainData.map((data, index) => {
          return (
            <Link key={index} href={data.link}>
              <Button
                style={{ paddingLeft: '12px' }}
                text={data.text}
                size={ButtonSize.SMALL}
                variant={ButtonVariant.TEXT}
              />
            </Link>
          );
        })}
      </Box>

      <Box sx={styles.support}>
        <Typography sx={styles.title}>Підтримка</Typography>
        {supportData.map((data, index) => {
          return (
            <Link key={index} href={data.link}>
              <Button
                style={{ paddingLeft: '12px' }}
                text={data.text}
                size={ButtonSize.SMALL}
                variant={ButtonVariant.TEXT}
              />
            </Link>
          );
        })}
      </Box>
      <Box sx={styles.socialMedia}>
        <Typography sx={styles.title}>Соцмережі</Typography>
        <Box sx={styles.socialButtons}>
          {socialData.map((data, index) => {
            return (
              <Link key={index} href={data.link} target="_blanket">
                <Button
                  style={{ paddingLeft: '12px' }}
                  text={data.text}
                  startIcon={data.icon}
                  size={ButtonSize.SMALL}
                  variant={ButtonVariant.TEXT}
                />
              </Link>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default DesktopFooter;
