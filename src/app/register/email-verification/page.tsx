'use client';

import PageLayout from '@/components/common/layout/page-layout';
import RegistrationEmailConfirmationPage from '@/components/templates/register/email-confirmation-page';

const RegistrationEmailConfirmation = () => (
  <PageLayout hasHeader={false} hasFooter={false} robots="noindex">
    <RegistrationEmailConfirmationPage />
  </PageLayout>
);

export default RegistrationEmailConfirmation;
