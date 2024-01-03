'use client';

import PageLayout from '@/components/common/layout/page-layout';
import PasswordResetValidLinkPage from '@/components/templates/password-recovery/link-valid';

const PasswordResetValidLink = () => (
  <PageLayout hasHeader={false} hasFooter={false} robots="noindex">
    <PasswordResetValidLinkPage />
  </PageLayout>
);

export default PasswordResetValidLink;
