import React from 'react';
import NextLink from 'next/link';

import { GitHub } from '../../../../../components/icons/GitHub';
import { Instagram } from '../../../../../components/icons/Instagram';
import { Mail } from '../../../../../components/icons/Mail';
import { Telegram } from '../../../../../components/icons/Telegram';
import { Twitter } from '../../../../../components/icons/Twitter';
import { YouTube } from '../../../../../components/icons/YouTube';

import styles from './Contact.module.scss';

export enum ContactType {
  YOUTUBE = 'YOUTUBE',
  DISCORD = 'DISCORD',
  TELEGRAM = 'TELEGRAM',
  INSTAGRAM = 'INSTAGRAM',
  FACEBOOK = 'FACEBOOK',
  GITHUB = 'GITHUB',
  TWITTER = 'TWITTER',
  MAIL = 'MAIL',
}

export interface ContactProps {
  name: ContactType;
  displayName: string;
  link: string;
}

const Contact: React.FC<ContactProps> = ({ name, displayName, link }) => {
  const icon = () => {
    switch (name) {
      case ContactType.YOUTUBE:
        return <YouTube />;
      case ContactType.TWITTER:
        return <Twitter />;
      case ContactType.MAIL:
        return <Mail />;
      case ContactType.GITHUB:
        return <GitHub />;
      case ContactType.INSTAGRAM:
        return <Instagram />;
      case ContactType.DISCORD:
        return <Telegram />;
      case ContactType.FACEBOOK:
        return <Telegram />;
      case ContactType.TELEGRAM:
        return <Telegram />;
    }
  };
  return (
    <div className={styles['contact']}>
      <div className={styles[`icon`]}>{icon()}</div>
      {link != '' && (
        <NextLink href={link} className={styles[`link`]}>
          {displayName}
        </NextLink>
      )}
      {link == '' && <p className={styles[`link`]}>{displayName}</p>}
    </div>
  );
};

export default Contact;
