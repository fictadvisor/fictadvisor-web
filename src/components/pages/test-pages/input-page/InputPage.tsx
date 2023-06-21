import { FC } from 'react';
import { Box } from '@mui/material';
import { Form, Formik } from 'formik';
import * as yup from 'yup';

import Button from '@/components/common/ui/button-mui';
import Input from '@/components/common/ui/form/input-mui';
import {
  InputSize,
  InputType,
} from '@/components/common/ui/form/input-mui/Input';

import * as styles from './InputPage.styles';

const InputPage: FC = () => {
  return (
    <Box sx={styles.wrapper}>
      <Formik
        initialValues={{ t1: '', t2: '', t3: '', t4: '', t5: '', t6: '' }}
        validationSchema={yup.object().shape({
          t5: yup.string().required('Cannot be empty!'),
        })}
        onSubmit={data => console.log(data)}
      >
        {({ handleSubmit }) => (
          <Form style={styles.form}>
            <Input
              name="t1"
              label="Large input"
              placeholder="large placeholder"
              type={InputType.SEARCH}
              size={InputSize.MEDIUM}
            />
            <Input
              name="t2"
              type={InputType.PASSWORD}
              placeholder="medium no label placeholder"
            />
            <Input
              name="t3"
              label="small label no placeholder"
              isSuccessOnDefault
              defaultRemark="ASDASDASD"
            />
            <Input name="t4" placeholder="small no label" />
            <Input
              name="t5"
              label="error if empty"
              placeholder="error placeholder"
              isSuccessOnDefault
              defaultRemark="URA SUKA PRACYA"
            />
            <Input
              name="t6"
              label="Disabled text area label"
              placeholder="Disabled placeholder"
              disabled
            />
            <Button onClick={() => handleSubmit()} text="submit" />
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default InputPage;
