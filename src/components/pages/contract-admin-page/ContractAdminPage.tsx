import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Form, Formik, FormikHelpers } from 'formik';

import Breadcrumbs from '@/components/common/ui/breadcrumbs';
import Button from '@/components/common/ui/button-mui';
import Divider from '@/components/common/ui/divider';
import { DividerTextAlign } from '@/components/common/ui/divider/types';
import { Input } from '@/components/common/ui/form';
import contractAPI from '@/lib/api/contract/ContractAPI';

import { initialValues } from './constants/index';
import * as styles from './ContractAdminPage.styles';

interface AdminContractData {
  contractNumber: string;
  contractDate: string;
  firstName: string;
  lastName: string;
  middleName: string;
  speciality: string;
}

const ContractAdminPage = () => {
  const handleSubmit = (
    values: AdminContractData,
    { resetForm }: FormikHelpers<AdminContractData>,
  ) => {
    contractAPI.createAdminContract(values);
    resetForm();
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
        {() => (
          <Form>
            <Box sx={styles.form}>
              <Box sx={styles.item}>
                <Divider
                  sx={styles.divider}
                  textAlign={DividerTextAlign.LEFT}
                  text="Деталі договору"
                />
                <Input name="contractNumber" placeholder="Номер договору" />
                <Input name="contractDate" placeholder="Дата заповнення" />
              </Box>
              <Box sx={styles.item}>
                <Divider
                  sx={styles.divider}
                  textAlign={DividerTextAlign.LEFT}
                  text="Дані вступника"
                />
                <Input name="firstName" placeholder="Прізвище" />
                <Input name="lastName" placeholder="Ім'я" />
                <Input name="middleName" placeholder="По батькові" />
                <Input name="speciality" placeholder="Спеціальність" />
              </Box>
              <Button sx={styles.button} text="Відправити" type="submit" />
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ContractAdminPage;
