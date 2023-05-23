import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

import PageLayout from '@/components/common/layout/page-layout';
import Loader, { LoaderSize } from '@/components/common/ui/loader';
import useAuthentication from '@/hooks/use-authentication';
import useToast from '@/hooks/use-toast';
import AuthAPI from '@/lib/api/auth/AuthAPI';
import StorageUtil from '@/lib/utils/StorageUtil';

const VerifyEmailTokenPage = () => {
  const router = useRouter();
  const token = router.query.token as string;
  const toast = useToast();
  const { update } = useAuthentication();

  const loadData = useCallback(
    async token => {
      if (router.isReady) {
        try {
          const { accessToken, refreshToken } = await AuthAPI.verifyEmailToken(
            token,
          );
          StorageUtil.setTokens(accessToken, refreshToken);
          update();
          await router.push(`/`);
        } catch (e) {
          toast.error(
            'Лист реєстрації вже не дійсний',
            'Пройди реєстрацію знов!',
          );
          await router.push(`/register`);
        }
      }
    },
    [toast, router, update],
  );

  useEffect(() => {
    void loadData(token);
  }, [loadData, token]);

  return (
    <PageLayout hasHeader={true} hasFooter={true}>
      <div
        style={{
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Loader size={LoaderSize.SMALLEST} />
      </div>
    </PageLayout>
  );
};

export default VerifyEmailTokenPage;
