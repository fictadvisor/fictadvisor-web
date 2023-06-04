import React from 'react';
import { Box, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import * as yup from 'yup';

import { DropDownSize } from '@/components/common/ui/form';
import { Dropdown } from '@/components/common/ui/form/dropdown-mui/Dropdown';

import * as styles from './dropdownTest.styles';

const options = [
  { label: 'Option 1', id: 'o1' },
  { label: 'Option 12', id: 'o2' },
  { label: 'Option 123', id: 'o3' },
  { label: 'Option 1234', id: 'o4' },
  { label: 'Option 12345', id: 'o5' },
  { label: 'Option 123456', id: 'o6' },
  { label: 'Option 1234567', id: 'o7' },
  { label: 'Option 12345678', id: 'o8' },
  { label: 'Option 9', id: 'o9' },
];

const scheme = yup.object({
  teacherId11: yup.string().required(`Обов'язкове поле`),
  teacherId12: yup.string().required(`Обов'язкове поле`),
});

const TagTestPage = () => {
  return (
    <Box sx={styles.wrapper}>
      <Formik
        validationSchema={scheme}
        initialValues={{ teacherId: '' }}
        onSubmit={values => {
          console.log(values);
        }}
      >
        <Form
          style={{
            width: '60%',
          }}
        >
          <Dropdown
            defaultRemark="Some defualt text"
            size={DropDownSize.LARGE}
            options={options}
            isDisabled={true}
            name="teacherId21"
          />
          {/* <Dropdown
            defaultRemark="Some defualt text"
            size={DropDownSize.LARGE}
            options={options}
            name="teacherId31"
          />
          <Dropdown
            showRemark={true}
            isSuccessOnDefault={true}
            defaultRemark="Some defualt text"
            size={DropDownSize.MEDIUM}
            options={options}
            name="teacherId12"
          />
          <Dropdown
            defaultRemark="Some defualt text"
            size={DropDownSize.MEDIUM}
            options={options}
            isDisabled={true}
            name="teacherId22"
          />
          <Dropdown
            defaultRemark="Some defualt text"
            size={DropDownSize.MEDIUM}
            options={options}
            name="teacherId32"
          /> */}
          <Dropdown
            defaultRemark="Some defualt text"
            size={DropDownSize.MEDIUM}
            options={options}
            name="teacherId11"
            showRemark
          />
          <Dropdown
            defaultRemark="Some defualt text"
            size={DropDownSize.MEDIUM}
            options={[
              { text: 'Лекція', id: 'lection', color: 'info', size: 'small' },
              {
                text: 'Практика',
                id: 'practice',
                color: 'orange',
                size: 'small',
              },
              {
                text: 'Лабораторна',
                id: 'laboratory',
                color: 'mint',
                size: 'small',
              },
              {
                text: 'Інша подія',
                id: 'otherOccasion',
                color: 'violet',
                size: 'small',
              },
            ]}
            name="teacherIddas32"
          />

          <button type="submit">submit</button>
        </Form>
      </Formik>
    </Box>
  );
};

export default TagTestPage;
