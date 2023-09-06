import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';

import Button from '@/components/common/ui/button-mui';
import {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button-mui/types';
import Divider from '@/components/common/ui/divider';
import { DividerTextAlign } from '@/components/common/ui/divider/types';
import Input from '@/components/common/ui/form/input-mui';
import ChangePasswordForm from '@/components/pages/account-page/components/security-tab/components/change-password-form';
import useAuthentication from '@/hooks/use-authentication';
import AuthService from '@/lib/services/auth';
import theme from '@/styles/theme';

import * as styles from './SecurityTab.styles';

const SecurityTab = () => {
  const { replace, reload } = useRouter();
  const { user, update } = useAuthentication();
  const handleLogout = async () => {
    await AuthService.logout();
    update();
    reload();
    await replace('/login');
  };
  const isMobile = useMediaQuery(theme.breakpoints.down('desktopSemiMedium'));

  return (
    <Box>
      <Box>
        <Box>
          <Divider
            text={'Зміна паролю'}
            textAlign={DividerTextAlign.LEFT}
          ></Divider>

          <ChangePasswordForm />
        </Box>
        <Divider
          text={'Юзернейм і пошта'}
          textAlign={DividerTextAlign.LEFT}
        ></Divider>

        <Box sx={styles.userInformation}>
          <Input
            readOnly
            onChange={() => {}}
            label="Юзернейм"
            value={user.username}
          />
          <Input
            readOnly
            onChange={() => {}}
            label="Пошта"
            value={user.email}
          />
        </Box>
        <Divider></Divider>

        <Button
          text={'Вийти з акаунту'}
          variant={ButtonVariant.FILLED}
          color={ButtonColor.SECONDARY}
          size={isMobile ? ButtonSize.SMALL : ButtonSize.MEDIUM}
          onClick={handleLogout}
        />
      </Box>
    </Box>
  );
};

export default SecurityTab;
