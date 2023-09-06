import React, { FC } from 'react';
import { QueryObserverBaseResult } from 'react-query';
import { Box } from '@mui/material';
import Link from 'next/link';

import Input from '@/components/common/ui/form/input-mui';
import { TrashBucketButton } from '@/components/common/ui/icon-button-mui/variants';
import { Contact } from '@/components/pages/account-page/components/general-tab/components/contacts-block/types';
import * as stylesMui from '@/components/pages/account-page/components/general-tab/GeneralTab.styles';
import useAuthentication from '@/hooks/use-authentication';
import UserAPI from '@/lib/api/user/UserAPI';

interface ContactProps extends Contact {
  refetchContacts: QueryObserverBaseResult['refetch'];
}

const ContactItem: FC<ContactProps> = ({
  refetchContacts,
  link,
  name,
  displayName,
}) => {
  const { user } = useAuthentication();
  const handleDeleteClick = async () => {
    //TODO: deletion needs fix
    await UserAPI.deleteContact(user.id, name);
    refetchContacts();
  };

  return (
    <Box sx={stylesMui.contactItem}>
      <Link href={link}>
        <Input
          readOnly
          onChange={() => {}}
          name={name}
          value={displayName}
          label={name}
        />
      </Link>
      <TrashBucketButton onClick={handleDeleteClick} />
    </Box>
  );
};

export default ContactItem;
