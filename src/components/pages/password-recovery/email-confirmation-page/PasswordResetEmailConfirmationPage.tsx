import React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import { CustomEnvelopeOpen } from '@/components/common/custom-svg/CustomEnvelopeOpen';
import PageLayout from '@/components/common/layout/page-layout';
import Alert from '@/components/common/ui/alert-mui';
import Button from '@/components/common/ui/button-mui';
import * as styles from '@/components/pages/password-recovery/email-confirmation-page/PasswordResetEmailConfirmationPage.module';
import useToast from '@/hooks/use-toast';
import { AuthAPI } from '@/lib/api/auth/AuthAPI';

const PasswordResetEmailConfirmationPage = () => {
  const router = useRouter();
  const email = (router.query.email as string).toLowerCase();
  const emailText = email
    ? 'Ми надіслали листа для зміни пароля на адресу '
    : 'Ми надіслали листа для зміни пароля';
  const returnRegister = () => {
    router.push('/register');
  };

  let tries = 0;
  const toast = useToast();
  const handleSendAgain = async () => {
    try {
      await AuthAPI.forgotPassword({ email });
    } catch (e) {
      const errorName = e.response.data.error;
      let errorMessage;
      if (errorName === 'TooManyActionsException') {
        tries++;
        if (tries >= 5) errorMessage = 'Да ти заєбав';
        else errorMessage = ' Час для надсилання нового листа ще не сплив';
      } else if (errorName === 'NotRegisteredException') {
        errorMessage = 'Упс, реєструйся заново';
      }
      toast.error(errorMessage);
    }
  };

  return (
    <PageLayout
      hasHeader={false}
      hasFooter={false}
      description={'Перевірка пошти при скиданні пароля'}
    >
      <Box sx={styles.container}>
        <Box sx={styles.content}>
          <Box sx={styles.icon}>
            <CustomEnvelopeOpen />
          </Box>
          <Typography sx={styles.title}>Перевір свою пошту</Typography>
          <Typography sx={styles.descr}>
            {emailText}
            <Box component="span" sx={styles.email}>
              {email}
            </Box>
          </Typography>
          <Box sx={styles.flex}>
            <Typography sx={styles.question}>Не отримав листа?</Typography>
            <Button
              text="Надіслати повторно"
              variant="text"
              size="small"
              color="primary"
              sx={styles.mobile}
            />
            <Button
              text="Надіслати повторно"
              variant="text"
              size="small"
              color="primary"
              onClick={handleSendAgain}
              sx={styles.desktop}
            />
          </Box>
          <Alert
            title="Лист реєстрації діє 1 годину"
            type="info"
            variant="darker"
          />
          <Button
            text="Повернутись до авторизації"
            variant="text"
            size="small"
            startIcon={<ChevronLeftIcon />}
            onClick={returnRegister}
            sx={styles.arrow}
          />
        </Box>
      </Box>
    </PageLayout>
  );
};

export default PasswordResetEmailConfirmationPage;
