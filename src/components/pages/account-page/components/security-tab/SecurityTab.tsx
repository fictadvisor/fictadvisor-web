import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import Button, {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button';
import Input from '@/components/common/ui/form/input-mui';
import ChangePasswordForm from '@/components/pages/account-page/components/security-tab/components/change-password-form';
import useAuthentication from '@/hooks/use-authentication';
import AuthService from '@/lib/services/auth';
import { hideAlert } from '@/redux/reducers/alert.reducer';

import styles from './SecurityTab.module.scss';

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

  return (
    <div className={styles['container']}>
      <div className={styles['division']}>
        <h4 className={styles['division-text']}>Зміна паролю</h4>
        <div className={styles['white']}></div>
        <div className={styles['button']}></div>
      </div>
      <div className={styles['input-form']}>
        <ChangePasswordForm />
      </div>
      <div className={styles['division']}>
        <h4 className={styles['division-text']}>Юзернейм і пошта</h4>
        <div className={styles['white']}></div>
        <div className={styles['button']}></div>
      </div>
      <div className={styles['user-information']}>
        <Input readOnly={true} label="Юзернейм" value={user.username} />
        <Input readOnly={true} label="Пошта" value={user.email} />
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
          size={ButtonSize.MEDIUM}
          onClick={handleLogout}
        />
      </div>
      <div className={styles['button-container-mobile']}>
        <Button
          text={'Вийти з акаунту'}
          variant={ButtonVariant.FILLED}
          color={ButtonColor.SECONDARY}
          size={ButtonSize.SMALL}
          onClick={handleLogout}
        />
      </div>
    </div>
  );
};

export default SecurityTab;
