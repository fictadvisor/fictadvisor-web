import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';

import { GitHubIcon } from '@/components/common/custom-svg/GitHub';
import { InstagramIcon } from '@/components/common/custom-svg/Instagram';
import { TelegramIcon } from '@/components/common/custom-svg/Telegram';
import useIsMobile from '@/hooks/use-is-mobile/UseIsMobile';

import Button, { ButtonSize, ButtonVariant } from '../../ui/button/Button';

import * as styles from './Footer.styles';

// import styles from './Footer.module.scss';

const MobileFooter: React.FC = () => {
  const isMobile = useIsMobile(768);
  return (
    <Grid container sx={styles.footerContainer}>
      <Grid item sx={styles.footerLogoContainer}>
        <Container sx={styles.footerLogo}>
          <Link href={'/'}>
            <img src={`/assets/logo.png`} alt="logo" />
          </Link>
        </Container>
        <Typography sx={styles.signature}>By Dev-відділ СР ФІОТ</Typography>
      </Grid>
      <Grid item>
        <Container sx={styles.mainReferences}>
          <Typography sx={styles.title}>Основні посилання</Typography>
          <Link href={'/'} style={{ height: '36px' }}>
            <Button
              style={{ paddingLeft: '12px' }}
              text="Головна"
              size={ButtonSize.SMALL}
              variant={ButtonVariant.TEXT}
            />
          </Link>
          <Link href={'/poll'} style={{ height: '36px' }}>
            <Button
              style={{ paddingLeft: '12px' }}
              text="Опитування"
              size={ButtonSize.SMALL}
              variant={ButtonVariant.TEXT}
            />
          </Link>
          <Link href={'/teachers'} style={{ height: '36px' }}>
            <Button
              style={{ paddingLeft: '12px' }}
              text="Викладачі"
              size={ButtonSize.SMALL}
              variant={ButtonVariant.TEXT}
            />
          </Link>
          <Link href={'/subjects'} style={{ height: '36px' }}>
            <Button
              style={{ paddingLeft: '12px' }}
              text="Предмети"
              size={ButtonSize.SMALL}
              variant={ButtonVariant.TEXT}
            />
          </Link>
        </Container>
      </Grid>
      <Grid item>
        <Container sx={styles.support}>
          <Typography sx={styles.title}>Підтримка</Typography>
          <Link href={'/privacy'} style={{ height: '36px' }}>
            <Button
              style={{ paddingLeft: '12px' }}
              text="Конфіденційність"
              size={ButtonSize.SMALL}
              variant={ButtonVariant.TEXT}
            />
          </Link>
          <Link href={'https://t.me/fict_robot'} style={{ height: '36px' }}>
            <Button
              style={{ paddingLeft: '12px' }}
              text="FICT robot"
              size={ButtonSize.SMALL}
              variant={ButtonVariant.TEXT}
            />
          </Link>
        </Container>
      </Grid>
      <Grid item>
        <Container sx={styles.socialMedia}>
          <Typography sx={styles.title}>Соцмережі</Typography>
          <Container sx={styles.socialButtons}>
            <Link
              href={
                isMobile
                  ? 'https://t.me/fict_time'
                  : 'https://github.com/fictadvisor/'
              }
              style={{ height: '36px', width: '36px' }}
            >
              <Button
                style={{ paddingLeft: '12px' }}
                text={!isMobile && 'GitHub'}
                startIcon={isMobile ? <TelegramIcon /> : <GitHubIcon />}
                size={ButtonSize.SMALL}
                variant={ButtonVariant.TEXT}
              />
            </Link>
            <Link
              href={'https://www.instagram.com/sr_fiot/'}
              style={{ height: '36px', width: '36px' }}
            >
              <Button
                style={{ paddingLeft: '12px' }}
                text={!isMobile && 'Instagram'}
                startIcon={<InstagramIcon />}
                size={ButtonSize.SMALL}
                variant={ButtonVariant.TEXT}
              />
            </Link>
            <Link
              href={
                isMobile
                  ? 'https://github.com/fictadvisor/'
                  : 'https://t.me/fict_time'
              }
              style={{ height: '36px', width: '36px' }}
            >
              <Button
                style={{ paddingLeft: '12px' }}
                text={!isMobile && 'Telegram'}
                startIcon={isMobile ? <GitHubIcon /> : <TelegramIcon />}
                size={ButtonSize.SMALL}
                variant={ButtonVariant.TEXT}
              />
            </Link>
          </Container>
        </Container>
      </Grid>
    </Grid>
  );
};

export default MobileFooter;
