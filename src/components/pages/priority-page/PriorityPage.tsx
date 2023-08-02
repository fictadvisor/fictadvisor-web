import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Form, Formik } from 'formik';

import Divider from '@/components/common/ui/divider';
import Input from '@/components/common/ui/form/input';
import { validationSchema } from '@/components/pages/priority-page/validation';

const PriorityPage: FC = () => {
  return (
    <Formik initialValues={} validationSchema={validationSchema}>
      <Form>
        <Typography variant="h6Bold">Освітні програми</Typography>
        <Divider />
        <Input />
        <Input />
        <Input name="email" />
      </Form>
    </Formik>
  );
};

export default PriorityPage;
