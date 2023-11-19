import { FC, useEffect, useState } from 'react';
import { Box } from '@mui/material';

import TeachersTable from '@/components/pages/admin/teachers-admin-page/components/teachers-table';
import teachersApi from '@/lib/api/teacher/TeacherAPI';
import { GetTeachersResponse } from '@/lib/api/teacher/types/GetTeachersResponse';

import * as styles from './TeachersAdminPage.styles';

const TeachersAdminPage: FC = () => {
  const [teachers, setTeachers] = useState<GetTeachersResponse>();

  useEffect(() => {
    try {
      const result = teachersApi.getAll();
      result.then(data => setTeachers(data));
      console.log(teachers);
    } catch (error) {
      console.log(error);
    }
  }, [teachers]);

  console.log(teachers);

  return (
    <Box sx={{ p: '20px 16px 0 16px' }}>
      <TeachersTable teachers={teachers?.teachers} />
    </Box>
  );
};

export default TeachersAdminPage;
