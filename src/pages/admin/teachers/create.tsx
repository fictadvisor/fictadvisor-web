import React from 'react';

import AdminPanelLayout from '@/components/common/layout/admin-panel-layout/AdminPanelLayout';
import TeachersAdminCreatePage from '@/components/pages/admin/teachers-admin-page/pages/teachers-admin-create-page';

const Create = () => {
  return (
    <AdminPanelLayout>
      <TeachersAdminCreatePage />
    </AdminPanelLayout>
  );
};

export default Create;
