import React, { FC } from 'react';

import { TrashBucketButton } from '@/components/common/ui/icon-button/variants';
import ImmutableInput from '@/components/common/ui/immutable-input';
import { Contact } from '@/components/pages/account-page/components/general-tab/components/contacts-block/types';
import useAuthentication from '@/hooks/use-authentication';
import { UserAPI } from '@/lib/api/user/UserAPI';

import styles from '../../../GeneralTab.module.scss';
interface ContactProps extends Contact {
  refetchContacts;
}
const ContactItem: FC<ContactProps> = ({
  refetchContacts,
  link,
  name,
  displayName,
}) => {
  const { user } = useAuthentication();
  const handleDeleteClick = async () => {
    await UserAPI.deleteContact(user.id, name);
    refetchContacts();
  };

  return (
    <div className={styles['contact-item']}>
      <ImmutableInput
        href={link}
        name={name}
        value={displayName}
        label={name}
      />
      <TrashBucketButton onClick={handleDeleteClick} />
    </div>
  );
};

export default ContactItem;