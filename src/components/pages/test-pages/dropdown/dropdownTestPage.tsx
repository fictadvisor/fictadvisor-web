import React from 'react';
import { Box, Typography } from '@mui/material';
import { Form, Formik } from 'formik';

import { DropDownSize } from '@/components/common/ui/form';
import { Dropdown } from '@/components/common/ui/form/dropdown-mui/Dropdown';

import * as styles from './dropdownTest.styles';

const options = [
  { label: 'Option 1', id: 'o1' },
  { label: 'Option 2', id: 'o2' },
  { label: 'Option 3', id: 'o3' },
  { label: 'Option 4', id: 'o4' },
  { label: 'Option 5', id: 'o5' },
  { label: 'Option 6', id: 'o6' },
  { label: 'Option 7', id: 'o7' },
  { label: 'Option 8', id: 'o8' },
  { label: 'Option 9', id: 'o9' },
];

const TagTestPage = () => {
  return (
    <Box sx={styles.wrapper}>
      <Formik
        initialValues={{ teacherId: '' }}
        onSubmit={values => {
          console.log(values);
        }}
      >
        <Form>
          <Dropdown
            showRemark={true}
            isSuccessOnDefault={true}
            defaultRemark="Some defualt text"
            size={DropDownSize.LARGE}
            options={options}
            onChange={() => console.log('works')}
            name="teacherId"
          />
          <Dropdown
            defaultRemark="Some defualt text"
            size={DropDownSize.MEDIUM}
            options={options}
            onChange={() => console.log('works')}
            name="teacherId"
          />
          <Dropdown
            defaultRemark="Some defualt text"
            size={DropDownSize.SMALL}
            options={options}
            onChange={() => console.log('works')}
            name="teacherId"
          />

          <button type="submit">submit</button>
        </Form>
      </Formik>
    </Box>
  );
};

export default TagTestPage;
