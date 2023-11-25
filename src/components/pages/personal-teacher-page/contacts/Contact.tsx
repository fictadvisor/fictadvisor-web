import React, { FC } from 'react';
import NextLink from 'next/link';

import { ContactType } from '@/types/contact';

import { Discord } from '../../../../../components/icons/Discord';
import { Facebook } from '../../../../../components/icons/Facebook';
import { GitHub } from '../../../../../components/icons/GitHub';
import { Instagram } from '../../../../../components/icons/Instagram';
import { Mail } from '../../../../../components/icons/Mail';
import { Telegram } from '../../../../../components/icons/Telegram';
import { Twitter } from '../../../../../components/icons/Twitter';
import { YouTube } from '../../../../../components/icons/YouTube';

import styles from './Contact.module.scss';

export interface ContactProps {
  name: ContactType;
  displayName: string;
  link: string;
}

const contactIconsMap: Record<ContactType, React.ReactElement> = {
  [ContactType.YOUTUBE]: <YouTube />,
  [ContactType.TWITTER]: <Twitter />,
  [ContactType.MAIL]: <Mail />,
  [ContactType.GITHUB]: <GitHub />,
  [ContactType.INSTAGRAM]: <Instagram />,
  [ContactType.DISCORD]: <Discord />,
  [ContactType.FACEBOOK]: <Facebook />,
  [ContactType.TELEGRAM]: <Telegram />,
};

const Contact: FC<ContactProps> = ({ name, displayName, link }) => {
  const Icon = () => contactIconsMap[name];

  return (
    <div className={styles['contact']}>
      <div className={styles[`icon`]}>
        <Icon />
      </div>
      {link && (
        <NextLink href={link} className={styles[`link`]}>
          {displayName}
        </NextLink>
      )}
      {!link && <p className={styles[`link`]}>{displayName}</p>}
    </div>
  );
};

export default Contact;
