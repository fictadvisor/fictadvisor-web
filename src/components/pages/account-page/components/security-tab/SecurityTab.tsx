import React from 'react';
import { useRouter } from 'next/router';

import Button from '@/components/common/ui/button';
import {
import Button from '@/components/common/ui/button-mui';
import {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button-mui/types';
import Input from '@/components/common/ui/form/input-mui';
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
  const handleLogout = async () => {
    await AuthService.logout();
    update();
    reload();
    await replace('/login');
  };
  const isMobile = useMediaQuery(theme.breakpoints.down('desktopSemiMedium'));

  return (
    <div className={styles['container']}>
      <div className={styles['division']}>
        <h4 className={styles['division-text']}>Зміна паролю</h4>
        <div className={styles['white']}></div>
        <div className={styles['button']}></div>
      </div>
      <div className={styles['input-form']}>
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
      </div>
      <div className={styles['division']}>
        <h4 className={styles['division-text']}>Юзернейм і пошта</h4>
        <div className={styles['white']}></div>
        <div className={styles['button']}></div>
      </div>
      <div className={styles['user-information']}>
        <Input
          readOnly
          onChange={() => {}}
          label="Юзернейм"
          value={user.username}
        />
        <Input readOnly onChange={() => {}} label="Пошта" value={user.email} />
      </div>
      <div className={styles['division']}>
        <div className={styles['white']}></div>
        <div className={styles['button']}></div>
      </div>
      <div className={styles['button-container']}>
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
