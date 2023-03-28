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
  const linkGroups = [
    {
      title: 'Основні посилання',
      links: [
        { href: '/', text: 'Головна' },
        { href: '/poll', text: 'Опитування' },
        { href: '/teachers', text: 'Викладачі' },
        { href: '/subjects', text: 'Предмети' },
      ],
    },
    {
      title: 'Підтримка',
      links: [
        { href: '/privacy', text: 'Конфіденційність' },
        { href: 'https://t.me/fict_robot', text: 'FICT robot' },
      ],
    },
    {
      title: 'Соцмережі',
      links: [
        {
          href: isMobile
            ? 'https://t.me/fict_time'
            : 'https://github.com/fictadvisor/',
          text: !isMobile && 'GitHub',
          startIcon: isMobile ? <TelegramIcon /> : <GitHubIcon />,
        },
        {
          href: 'https://www.instagram.com/sr_fiot/',
          text: !isMobile && 'Instagram',
          startIcon: <InstagramIcon />,
        },
        {
          href: isMobile
            ? 'https://github.com/fictadvisor/'
            : 'https://t.me/fict_time',
          text: !isMobile && 'Telegram',
          startIcon: isMobile ? <GitHubIcon /> : <TelegramIcon />,
        },
      ],
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

      {linkGroups.map(group => (
        <Grid item key={group.title}>
          <Container sx={styles.mainReferences}>
            <Typography sx={styles.title}>{group.title}</Typography>
            {group.links.map((link, index) => (
              <Link key={index} href={link.href} style={{ height: '36px' }}>
                <Button
                  style={{ paddingLeft: '12px' }}
                  text={link.text}
                  startIcon={link.startIcon}
                  size={ButtonSize.SMALL}
                  variant={ButtonVariant.TEXT}
                />
              </Link>
            ))}
          </Container>
        </Grid>
      ))}
    </Grid>
  );
};

export default Footer;
