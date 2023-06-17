import { FC } from 'react';

import { GitHubIcon } from '@/components/common/custom-svg/GitHub';
import { InstagramIcon } from '@/components/common/custom-svg/Instagram';
import { MailIcon } from '@/components/common/custom-svg/Mail';
import { TelegramIcon } from '@/components/common/custom-svg/Telegram';
import { TwitterIcon } from '@/components/common/custom-svg/Twitter';
import { YouTubeIcon } from '@/components/common/custom-svg/YouTube';
import { TeacherContactType } from '@/types/teacher';

import styles from './Contact.module.scss';

export interface ContactProps {
  name: TeacherContactType;
  displayName: string;
  link: string;
}

const contactIconsMap: Record<TeacherContactType, FC> = {
  [TeacherContactType.YOUTUBE]: YouTubeIcon,
  [TeacherContactType.TWITTER]: TwitterIcon,
  [TeacherContactType.MAIL]: MailIcon,
  [TeacherContactType.GITHUB]: GitHubIcon,
  [TeacherContactType.INSTAGRAM]: InstagramIcon,
  [TeacherContactType.DISCORD]: TelegramIcon,
  [TeacherContactType.FACEBOOK]: TelegramIcon,
  [TeacherContactType.TELEGRAM]: TelegramIcon,
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
