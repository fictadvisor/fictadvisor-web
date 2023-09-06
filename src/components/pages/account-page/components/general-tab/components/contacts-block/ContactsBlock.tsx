import React, { FC, useState } from 'react';
import { useQuery } from 'react-query';
import { PlusIcon } from '@heroicons/react/24/outline';
import { useMediaQuery } from '@mui/material';

import Button from '@/components/common/ui/button';
import {
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button-mui/types';
import ContactForm from '@/components/pages/account-page/components/general-tab/components/contacts-block/components/ContactForm';
import ContactItem from '@/components/pages/account-page/components/general-tab/components/contacts-block/components/ContactItem';
import useAuthentication from '@/hooks/use-authentication';
import UserAPI from '@/lib/api/user/UserAPI';
import theme from '@/styles/theme';

import styles from '../../GeneralTab.module.scss';

const ContactsBlock: FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const { user } = useAuthentication();
  const { data, refetch } = useQuery(
    'contacts',
    () => UserAPI.getContacts(user.id),
    { refetchOnWindowFocus: false },
  );
  const contacts = data?.contacts || [];

  const handleClick = () => setIsOpened(!isOpened);
  const isMobile = useMediaQuery(theme.breakpoints.down('desktopSemiMedium'));

  return (
    <>
      <div className={styles['contact-item-container']}>
        {contacts.map((contact, index) => (
          <ContactItem key={index} refetchContacts={refetch} {...contact} />
        ))}
      </div>
      <div className={styles['confirm-button']}>
        <Button
          text="Додати посилання"
          startIcon={<PlusIcon className={'icon'} />}
          size={isMobile ? ButtonSize.SMALL : ButtonSize.MEDIUM}
          variant={ButtonVariant.OUTLINE}
          type="submit"
          className={styles['change-password-button']}
          onClick={handleClick}
        />
      </div>

      {isOpened && (
        <ContactForm
          refetchContacts={async () => {
            setIsOpened(false);
            await refetch();
          }}
        />
      )}
    </>
  );
};

export default ContactsBlock;
