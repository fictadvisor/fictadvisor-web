import React, { FC, useState } from 'react';
import { PencilIcon } from '@heroicons/react/24/outline';
import { Avatar, Box, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';

import { TelegramForAccount } from '@/components/common/icons/TelegramForAccount';
import Button from '@/components/common/ui/button-mui';
import {
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button-mui/types';
import Divider from '@/components/common/ui/divider';
import { DividerTextAlign } from '@/components/common/ui/divider/types';
import ChangeAvatarWindow from '@/components/pages/account-page/components/general-tab/components/change-avatar-window';
import ContactsBlock from '@/components/pages/account-page/components/general-tab/components/contacts-block/ContactsBlock';
import PersonalInfoBlock from '@/components/pages/account-page/components/general-tab/components/personal-info';
import * as stylesMui from '@/components/pages/account-page/components/general-tab/GeneralTab.styles';
import { isValidFile } from '@/components/pages/account-page/components/general-tab/utils/isValidFile';
import useAuthentication from '@/hooks/use-authentication';
import useToast from '@/hooks/use-toast';
import { useToastError } from '@/hooks/use-toast-error/useToastError';
import userAPI from '@/lib/api/user/UserAPI';
import AuthService from '@/lib/services/auth';
import theme from '@/styles/theme';

const GeneralTab: FC = () => {
  const { user } = useAuthentication();
  const router = useRouter();
  const toast = useToast();
  const toastError = useToastError();
  const isMobile = useMediaQuery(theme.breakpoints.down('desktopSemiMedium'));
  const buttonText = user.telegramId
    ? 'Telegram під’єднано'
    : "Під'єднати Telegram";
  const [popupOpen, setPopupOpen] = useState(false);

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
        console.log(file.size);
        toast.error('Розмір файлу не повинен бути більше 1.5 МБ', '', 4000);
        return;
      }

      const formData = new FormData();
      formData.append('avatar', file);

      try {
        await userAPI.changeAvatar(user.id, formData);
        toast.success('Аватарка успішно змінена!', '', 1000);
        setTimeout(() => {
          router.reload();
        }, 1000);
      } catch (e) {
        toastError.displayError(e);
      }
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
        <Box onClick={() => setPopupOpen(true)} sx={stylesMui.avatar}>
          <Avatar src={user.avatar} alt="Фото профілю" sx={stylesMui.avatar} />
          <Box>
            <PencilIcon />
          </Box>
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

      {popupOpen && <ChangeAvatarWindow setPopupOpen={setPopupOpen} />}
    </Box>
  );
};

export default GeneralTab;
