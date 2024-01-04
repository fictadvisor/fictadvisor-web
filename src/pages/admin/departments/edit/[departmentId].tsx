import React from 'react';

import AdminPanelLayout from '@/components/common/layout/admin-panel-layout/AdminPanelLayout';
import TeachersAdminEditPage from '@/components/pages/admin/teachers-admin-page/pages/teachers-admin-edit-page';

const DepartmentId = () => {
  return (
    <AdminPanelLayout>
      <TeachersAdminEditPage />
    </AdminPanelLayout>
  );
};

export default DepartmentId;
