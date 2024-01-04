import React from 'react';
import { useRouter } from 'next/router';

import AdminPanelLayout from '@/components/common/layout/admin-panel-layout/AdminPanelLayout';
import TeachersAdminEditPage from '@/components/pages/admin/teachers-admin-page/pages/teachers-admin-edit-page';

const TeacherId = () => {
  const router = useRouter();
  const teacherId = router.query.teacherId as string;
  console.log(teacherId);
  return (
    <AdminPanelLayout>
      <TeachersAdminEditPage teacherId={teacherId} />
    </AdminPanelLayout>
  );
};

export default TeacherId;
