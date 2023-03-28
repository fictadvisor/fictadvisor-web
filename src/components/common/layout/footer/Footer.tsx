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

const Footer: React.FC = () => {
  const isMobile = useIsMobile(768);
  const socialLabels = isMobile
    ? [
        {
          text: '',
          icon: <TelegramIcon />,
          url: 'https://t.me/fict_time',
        },
        {
          text: '',
          icon: <InstagramIcon />,
          url: 'https://www.instagram.com/sr_fiot/',
        },
        {
          text: '',
          icon: <GitHubIcon />,
          url: 'https://github.com/fictadvisor/',
        },
      ]
    : [
        {
          text: 'GitHub',
          icon: <GitHubIcon />,
          url: 'https://github.com/fictadvisor/',
        },
        {
          text: 'Instagram',
          icon: <InstagramIcon />,
          url: 'https://www.instagram.com/sr_fiot/',
        },
        {
          text: 'Telegram',
          icon: <TelegramIcon />,
          url: 'https://t.me/fict_time',
        },
      ];

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
          <Container sx={styles.title}>
            <p>Основні посилання</p>
          </Container>
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
        <Container sx={styles.support}>
          <Container sx={styles.title}>
            <p>Підтримка</p>
          </Container>
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
        <Container sx={styles.socialMedia}>
          <Container sx={styles.title}>
            <p>Соцмережі</p>
          </Container>
          <Container sx={styles.socialButtons}>
            <Link
              style={{ height: '36px', width: '36px' }}
              href={socialLabels[0].url}
            >
              <Button
                style={{ paddingLeft: '12px' }}
                text={socialLabels[0].text}
                startIcon={socialLabels[0].icon}
                size={ButtonSize.SMALL}
                variant={ButtonVariant.TEXT}
              />
            </Link>
            <Link
              href={socialLabels[1].url}
              style={{ height: '36px', width: '36px' }}
            >
              <Button
                style={{ paddingLeft: '12px' }}
                text={socialLabels[1].text}
                startIcon={socialLabels[1].icon}
                size={ButtonSize.SMALL}
                variant={ButtonVariant.TEXT}
              />
            </Link>
            <Link
              href={socialLabels[2].url}
              style={{ height: '36px', width: '36px' }}
            >
              <Button
                style={{ paddingLeft: '12px' }}
                text={socialLabels[2].text}
                startIcon={socialLabels[2].icon}
                size={ButtonSize.SMALL}
                variant={ButtonVariant.TEXT}
              />
            </Link>
          </Container>{' '}
        </Container>
      </Grid>
    </Grid>
  );
};

export default Footer;
