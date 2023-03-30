import React from 'react';

import { GitHubIcon } from '@/components/common/custom-svg/GitHub';
import { InstagramIcon } from '@/components/common/custom-svg/Instagram';
import { TelegramIcon } from '@/components/common/custom-svg/Telegram';

const socialLinks = [
  {
    link: 'https://github.com/fictadvisor/',
    text: 'GitHub',
    icon: <GitHubIcon />,
  },
  {
    link: 'https://www.instagram.com/sr_fiot/',
    text: 'Instagram',
    icon: <InstagramIcon />,
  },
  {
    link: 'https://t.me/fict_time',
    text: 'Telegram',
    icon: <TelegramIcon />,
  },
];

export default socialLinks;
