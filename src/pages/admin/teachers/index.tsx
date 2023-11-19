import React from 'react';

import AdminPanelLayout from '@/components/common/layout/admin-panel-layout/AdminPanelLayout';
import TeachersAdminPage from '@/components/pages/admin/teachers-admin-page';

const Index = () => {
  return (
    <AdminPanelLayout>
      <TeachersAdminPage />
    </AdminPanelLayout>
  );
};

export default Index;
