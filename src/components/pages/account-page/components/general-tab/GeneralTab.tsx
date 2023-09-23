import React, { FC, useEffect, useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';

import { TelegramForAccount } from '@/components/common/icons/TelegramForAccount';
import Button from '@/components/common/ui/button-mui';
import {
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button-mui/types';
import Divider from '@/components/common/ui/divider';
import { DividerTextAlign } from '@/components/common/ui/divider/types';
import ContactsBlock from '@/components/pages/account-page/components/general-tab/components/contacts-block/ContactsBlock';
import PersonalInfoBlock from '@/components/pages/account-page/components/general-tab/components/personal-info';
import * as stylesMui from '@/components/pages/account-page/components/general-tab/GeneralTab.styles';
import useAuthentication from '@/hooks/use-authentication';
import userAPI from '@/lib/api/user/UserAPI';
import AuthService from '@/lib/services/auth';
import theme from '@/styles/theme';

const GeneralTab: FC = () => {
  const { user } = useAuthentication();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down('desktopSemiMedium'));
  const [selectedFile, setSelectedFile] = useState<string | Blob>('');
  const [avatarUrl, setAvatarUrl] = useState<string | undefined>('');

  const buttonText = user.telegramId
    ? 'Telegram під’єднано'
    : "Під'єднати Telegram";

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setSelectedFile(file);
      const fileUrl = URL.createObjectURL(file);
      setAvatarUrl(fileUrl);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      console.error('No file selected.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      await userAPI.changeAvatar(user.id, formData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user.avatar) {
      console.log(user.avatar);
      setAvatarUrl(user.avatar);
    }
  }, [user.avatar]);

  const handleConnectTelegram = () => {
    void AuthService.redirectToRegisterBot(router);
  };

  return (
    <Box sx={stylesMui.container}>
      <Box sx={stylesMui.personalInfo}>
        <PersonalInfoBlock />
        <Divider
          sx={stylesMui.divider}
          textAlign={DividerTextAlign.LEFT}
          text="Посилання на соц. мережі"
        />
        <ContactsBlock />
      </Box>
      <Box sx={stylesMui.avatarAndTelegramInfo}>
        <Box sx={stylesMui.avatar}>
          <label htmlFor="avatar">
            <img onClick={handleUpload} src={avatarUrl} alt="avatar" />
          </label>
          <input type="file" id="avatar" onChange={handleFileChange} />
        </Box>
        <Button
          sx={stylesMui.telegramButton}
          text={buttonText}
          disabled={!!user.telegramId}
          size={isMobile ? ButtonSize.SMALL : ButtonSize.MEDIUM}
          startIcon={<TelegramForAccount />}
          variant={ButtonVariant.OUTLINE}
          onClick={handleConnectTelegram}
        />
      </Box>
    </Box>
  );
};

export default GeneralTab;
