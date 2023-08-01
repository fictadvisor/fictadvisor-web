import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Form, Formik } from 'formik';

import Breadcrumbs from '@/components/common/ui/breadcrumbs';
import Button from '@/components/common/ui/button-mui';
import Divider from '@/components/common/ui/divider';
import { DividerTextAlign } from '@/components/common/ui/divider/types';
import { Input } from '@/components/common/ui/form';

import { initialValues } from './constants/index';
import * as styles from './ContractAdminPage.styles';

const ContractAdminPage = () => {
  const handleSubmit = (values: object) => {
    console.log(values);
  };

  const [data, setData] = useState(initialValues);

  return (
    <Box sx={styles.page}>
      <Breadcrumbs
        sx={styles.breadcrumbs}
        items={[
          { label: 'Головна', href: '/' },
          { label: 'Договір про навчання', href: '/contract-admin' },
        ]}
      />
      <Formik initialValues={data} onSubmit={handleSubmit}>
        {({ resetForm }) => (
          <Form>
            <Box sx={styles.form}>
              <Box sx={styles.item}>
                <Divider
                  sx={styles.divider}
                  textAlign={DividerTextAlign.LEFT}
                  text="Деталі договору"
                />
                <Input
                  name="input.contractNumber"
                  placeholder="Номер договору"
                />
                <Input
                  name="input.contractDate"
                  placeholder="Дата заповнення"
                />
              </Box>
              <Box sx={styles.item}>
                <Divider
                  sx={styles.divider}
                  textAlign={DividerTextAlign.LEFT}
                  text="Дані вступника"
                />
                <Input name="input.firstName" placeholder="Прізвище" />
                <Input name="input.lastName" placeholder="Ім'я" />
                <Input name="input.middleName" placeholder="По батькові" />
                <Input name="input.speciality" placeholder="Спеціальність" />
              </Box>
              <Button
                sx={styles.button}
                text="Відправити"
                type="submit"
                onClick={() => resetForm()}
              />
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ContractAdminPage;
