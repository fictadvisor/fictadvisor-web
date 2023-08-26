import { FC, useState } from 'react';
import { Box } from '@mui/material';
import { Form, Formik } from 'formik';
import * as yup from 'yup';

import Button from '@/components/common/ui/button-mui';
import Input from '@/components/common/ui/form/input-mui';
import { InputType } from '@/components/common/ui/form/input-mui/types';
import FormikInput from '@/components/common/ui/form/with-formik/input';

import * as styles from './InputPage.styles';

const InputPage: FC = () => {
  const [value, setValue] = useState('');

  return (
    <Box sx={styles.wrapper}>
      <div style={styles.form}>
        <Input
          label="Default"
          value={value}
          type={InputType.PASSWORD}
          onChange={setValue}
          isSuccessOnDefault
        />
      </div>
      <Formik
        initialValues={{ input: '' }}
        validationSchema={yup.object().shape({
          input: yup.string().required('Formik error!'),
        })}
        onSubmit={data => console.log(data)}
      >
        {({ handleSubmit }) => (
          <Form style={styles.form}>
            <FormikInput
              name="input"
              label="Formik"
              type={InputType.SEARCH}
              isSuccessOnDefault
            />
            <Button onClick={() => handleSubmit()} text="submit" />
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default InputPage;
