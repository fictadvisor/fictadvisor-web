'use client';

import { useCallback, useEffect } from 'react';
import { Box } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';

import Progress from '@/components/common/ui/progress';
import * as styles from '@/components/pages/register/verify-email-token-page/VerifyEmailTokenPage.styles';
import useAuthentication from '@/hooks/use-authentication';
import useToast from '@/hooks/use-toast';
import AuthAPI from '@/lib/api/auth/AuthAPI';
import StorageUtil from '@/lib/utils/StorageUtil';

const VerifyEmailTokenPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams?.get('token') as string;
  const toast = useToast();
  const { update } = useAuthentication();

  const loadData = useCallback(
    async (token: string) => {
      try {
        const { accessToken, refreshToken } =
          await AuthAPI.verifyEmailToken(token);
        StorageUtil.setTokens(accessToken, refreshToken);
        update();
        router.push(`/`);
      } catch (e) {
        toast.error(
          'Лист реєстрації вже не дійсний',
          'Пройди реєстрацію знов!',
        );
        router.push(`/register`);
      }
    },
    [toast, router, update],
  );

  useEffect(() => {
    void loadData(token);
  }, [loadData, token]);

  return (
    <Box sx={styles.box}>
      <Progress />
    </Box>
  );
};

export default VerifyEmailTokenPage;
