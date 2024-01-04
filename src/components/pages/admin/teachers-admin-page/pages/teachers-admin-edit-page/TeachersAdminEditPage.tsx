import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import * as styles from './TeachersAdminEditPage.styles';

interface TeachersAdminEditPageProps {
  teacherId: string;
}

const TeachersAdminEditPage: FC<TeachersAdminEditPageProps> = ({
  teacherId,
}) => {
  return (
    <Box>
      <Typography>{teacherId}</Typography>
    </Box>
  );
};

export default TeachersAdminEditPage;
