import { Metadata } from 'next';

import PageLayout from '@/components/common/layout/page-layout';
import ContractAdminPage from '@/components/templates/contract-admin-page/ContractAdminPage';
export const metadata: Metadata = {
  title: 'Договори | FICT Advisor',
};
export default function ContractAdminSubmission() {
  return (
    <PageLayout>
      <ContractAdminPage />
    </PageLayout>
  );
}
