import React from 'react';
import { useDispatch } from 'react-redux';
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
import ImmutableInput from '@/components/common/ui/immutable-input';
import ChangePasswordForm from '@/components/pages/account-page/components/security-tab/components/change-password-form';
import useAuthentication from '@/hooks/use-authentication';
import AuthService from '@/lib/services/auth';
import { hideAlert } from '@/redux/reducers/alert.reducer';
import theme from '@/styles/theme';

import * as styles from './SecurityTab.styles';

const SecurityTab = () => {
  const { replace, reload } = useRouter();
  const { user, update } = useAuthentication();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await AuthService.logout();
    update();
    reload();
    await replace('/login');
    dispatch(hideAlert());
  };
  const isMobile = useMediaQuery(theme.breakpoints.down('desktopSemiMedium'));

  return (
    <Box sx={styles.container}>
      <Divider
        text={'Зміна паролю'}
        textAlign={DividerTextAlign.LEFT}
      ></Divider>
      <Box sx={styles.inputForm}>
        <ChangePasswordForm />
      </Box>
      <Divider
        text={'Юзернейм і пошта'}
        textAlign={DividerTextAlign.LEFT}
      ></Divider>

      <Box sx={styles.userInformation}>
        <ImmutableInput label="Юзернейм" value={user.username} />
        <ImmutableInput label="Пошта" value={user.email} />
      </Box>
      <Divider></Divider>
      <Box sx={styles.buttonContainer}>
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
