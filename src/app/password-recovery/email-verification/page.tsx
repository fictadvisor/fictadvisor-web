'use client';

import PageLayout from '@/components/common/layout/page-layout';
import PasswordResetEmailConfirmationPage from '@/components/templates/password-recovery/email-confirmation-page';

const PasswordResetEmailConfirmation = () => (
  <PageLayout hasHeader={false} hasFooter={false} robots="noindex">
    <PasswordResetEmailConfirmationPage />
  </PageLayout>
);

export default PasswordResetEmailConfirmation;
