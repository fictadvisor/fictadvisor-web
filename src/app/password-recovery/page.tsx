'use client';

import PageLayout from '@/components/common/layout/page-layout';
import ForgotPasswordPage from '@/components/templates/password-recovery/forgot-password-page/ForgotPasswordPage';

const ForgotPassword = () => (
  <PageLayout hasHeader={false} hasFooter={false} robots="noindex">
    <ForgotPasswordPage />
  </PageLayout>
);

export default ForgotPassword;
