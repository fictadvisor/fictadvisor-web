import React from 'react';
import { Box } from '@mui/material';
import { Form, Formik, FormikHelpers } from 'formik';

import Breadcrumbs from '@/components/common/ui/breadcrumbs';
import Button from '@/components/common/ui/button-mui';
import Divider from '@/components/common/ui/divider';
import { DividerTextAlign } from '@/components/common/ui/divider/types';
import { Input } from '@/components/common/ui/form';
import contractAPI from '@/lib/api/contract/ContractAPI';
import { AdminContractData } from '@/lib/api/contract/types/ContractBody';

import { initialValues } from './constants/index';
import * as styles from './ContractAdminPage.styles';

const ContractAdminPage = () => {
  const handleSubmit = (
    values: AdminContractData,
    { resetForm }: FormikHelpers<AdminContractData>,
  ) => {
    contractAPI.createAdminContract(values);
    resetForm();
  };

  return (
    <Box sx={styles.page}>
      <Breadcrumbs
        sx={styles.breadcrumbs}
        items={[
          { label: 'Головна', href: '/' },
          { label: 'Договір про навчання', href: '/contract-admin' },
        ]}
      />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <Box sx={styles.form}>
              <Box sx={styles.item}>
                <Divider
                  sx={styles.divider}
                  textAlign={DividerTextAlign.LEFT}
                  text="Деталі договору"
                />
                <Input name="contract.number" placeholder="Номер договору" />
                <Input name="contract.date" placeholder="Дата заповнення" />
              </Box>
              <Box sx={styles.item}>
                <Divider
                  sx={styles.divider}
                  textAlign={DividerTextAlign.LEFT}
                  text="Дані вступника"
                />
                <Input name="entrant.firstName" placeholder="Прізвище" />
                <Input name="entrant.lastName" placeholder="Ім'я" />
                <Input name="entrant.middleName" placeholder="По батькові" />
                <Input name="entrant.specialty" placeholder="Спеціальність" />
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
