import { FC } from 'react';

import { GitHubIcon } from '@/components/common/custom-svg/GitHub';
import { InstagramIcon } from '@/components/common/custom-svg/Instagram';
import { MailIcon } from '@/components/common/custom-svg/Mail';
import { TelegramIcon } from '@/components/common/custom-svg/Telegram';
import { TwitterIcon } from '@/components/common/custom-svg/Twitter';
import { YouTubeIcon } from '@/components/common/custom-svg/YouTube';
import { ContactType } from '@/types/contact';

import styles from './Contact.module.scss';

export interface ContactProps {
  name: ContactType;
  displayName: string;
  link: string;
}

const contactIconsMap: Record<ContactType, FC> = {
  [ContactType.YOUTUBE]: YouTubeIcon,
  [ContactType.TWITTER]: TwitterIcon,
  [ContactType.MAIL]: MailIcon,
  [ContactType.GITHUB]: GitHubIcon,
  [ContactType.INSTAGRAM]: InstagramIcon,
  [ContactType.DISCORD]: TelegramIcon,
  [ContactType.FACEBOOK]: TelegramIcon,
  [ContactType.TELEGRAM]: TelegramIcon,
};

const Contact: FC<ContactProps> = ({ name, displayName, link }) => {
  const Icon = contactIconsMap[name];

  return (
    <div className={styles['contact']}>
      <div className={styles[`icon`]}>
        <Icon />
      </div>
      {link != '' && (
        <a href={link} className={styles[`link`]}>
          {displayName}
        </a>
      )}
      {link == '' && <p className={styles[`link`]}>{displayName}</p>}
    </div>
  );
};

export default Contact;
