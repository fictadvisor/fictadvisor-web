import React, { FC, useState } from 'react';
import { PencilIcon } from '@heroicons/react/24/outline';
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
import { isValidFile } from '@/components/pages/account-page/components/general-tab/utils/isValidFile';
import useAuthentication from '@/hooks/use-authentication';
import useToast from '@/hooks/use-toast';
import userAPI from '@/lib/api/user/UserAPI';
import AuthService from '@/lib/services/auth';
import theme from '@/styles/theme';

const GeneralTab: FC = () => {
  const { user } = useAuthentication();
  const router = useRouter();
  const toast = useToast();
  const isMobile = useMediaQuery(theme.breakpoints.down('desktopSemiMedium'));
  const [avatarUrl, setAvatarUrl] = useState<string | undefined>(
    //kostil
    'https://apidev' + user.avatar.slice(11),
  );

  const buttonText = user.telegramId
    ? 'Telegram під’єднано'
    : "Під'єднати Telegram";

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files) {
      const file = event.target.files[0];

      if (!isValidFile(file)) {
        toast.error(
          'Неправильне розширення файлу файлу',
          'Підтримуванні розширення: .png, .jpg, .jpeg, .webp',
          4000,
        );
        return;
      }

      if (file.size > 1.5 * 1024 * 1024) {
        toast.error('Розмір файлу не повинен бути більше 1.5МБ', '', 4000);
        return;
      }

      const fileUrl = URL.createObjectURL(file);
      setAvatarUrl(fileUrl);

      const formData = new FormData();
      formData.append('avatar', file);
      const res = await userAPI.changeAvatar(user.id, formData);
      setAvatarUrl('https://apidev' + res.avatar.slice(11));
      toast.success('Аватарка успішно змінена!', '', 4000);
    }
  };

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
            <img src={avatarUrl} alt="avatar" />
            <input type="file" id="avatar" onChange={handleFileChange} />
            <Box>
              <PencilIcon />
            </Box>
          </label>
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
