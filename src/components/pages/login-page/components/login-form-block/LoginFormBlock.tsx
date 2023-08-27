import React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { Box, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import CustomTelegram from '@/components/common/icons/CustomTelegram';
import Button from '@/components/common/ui/button';
import {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button-mui/types';
import LoginForm from '@/components/pages/login-page/components/login-form';
import useAuthentication from '@/hooks/use-authentication';
import AuthService from '@/lib/services/auth/AuthService';

import * as sxStyles from './LoginFormBlock.styles';

import styles from './LoginFormBlock.module.scss';

const LoginFormBlock = () => {
  const router = useRouter();
  const redirect = router.query.redirect as string;
  const { update } = useAuthentication();
  const handleClick = async () => {
    const isSuccess = await AuthService.loginTelegram();
    update();
    if (isSuccess)
      await router.push(redirect ? redirect.replace('~', '/') : '/');
    else {
      await AuthService.redirectToRegisterBot(router);
    }
  };

  return (
    <Box sx={sxStyles.loginFormBlock}>
      <Link href="/" className={styles['mobile-login-logo']}>
        <Image
          src="/images/login-page/new-logo.png"
          alt="fict advisor logo"
          priority
          fill
        />
      </Link>
      <Typography variant="h3" sx={sxStyles.loginHeader}>
        З поверненням!
      </Typography>
      <Button
        endIcon={<CustomTelegram />}
        text="Увійти за допомогою"
        size={ButtonSize.SMALL}
        type="button"
        onClick={handleClick}
        className={styles['mobile-telegram-button']}
      />
      <Button
        startIcon={<CustomTelegram />}
        text="Увійти за допомогою Telegram"
        size={ButtonSize.LARGE}
        type="button"
        onClick={handleClick}
        className={styles['telegram-button']}
      />
      <Divider textAlign="center" sx={sxStyles.divider}>
        або
      </Divider>
      <LoginForm />
      <Typography sx={sxStyles.mobileText}>Ти ще не з нами? </Typography>
      <Button
        text="Приєднатись!"
        size={ButtonSize.SMALL}
        color={ButtonColor.SECONDARY}
        variant={ButtonVariant.OUTLINE}
        className={styles['register-mobile-button']}
        onClick={() => router.push('/register')}
      />
      <Button
        className={styles['comeback-button']}
        text="Повернутись на головну"
        startIcon={<ChevronLeftIcon className="icon" />}
        variant={ButtonVariant.TEXT}
        size={ButtonSize.SMALL}
        onClick={() => router.push('/ ')}
      />
    </Box>
  );
};

export default LoginFormBlock;
