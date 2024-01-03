'use client';

import PageLayout from '@/components/common/layout/page-layout';
import CreatePasswordPage from '@/components/templates/password-recovery/create-password-page/CreatePasswordPage';

const CreatePassword = () => (
  <PageLayout hasHeader={false} hasFooter={false} robots="noindex">
    <CreatePasswordPage />
  </PageLayout>
);

export default CreatePassword;
