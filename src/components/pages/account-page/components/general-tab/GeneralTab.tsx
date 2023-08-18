import React, { FC } from 'react';
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
import AuthService from '@/lib/services/auth';
import theme from '@/styles/theme';

const GeneralTab: FC = () => {
  const { user } = useAuthentication();
  const buttonText = user.telegramId
    ? 'Telegram під’єднано'
    : "Під'єднати Telegram";

  const router = useRouter();

  const handleConnectTelegram = () => {
    void AuthService.redirectToRegisterBot(router);
  };
  const isMobile = useMediaQuery(theme.breakpoints.down('desktopSemiMedium'));

  return (
    <Box sx={stylesMui.container}>
      <Box sx={stylesMui.personalInfo}>
        <PersonalInfoBlock />
        <Divider
          sx={{ paddingBottom: '20px' }}
          textAlign={DividerTextAlign.LEFT}
          text="Посилання на соц. мережі"
        />
        <ContactsBlock />
      </Box>
      <Box sx={stylesMui.avatarAndTelegramInfo}>
        <Box sx={stylesMui.avatar}>
          <img src={user.avatar} alt="avatar" />
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
