import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Form, Formik, FormikConfig, FormikValues } from 'formik';
import { isEqualNode } from 'next/dist/client/head-manager';

import Button from '@/components/common/ui/button-mui';
import { FormikStepProps } from '@/components/pages/contract-page/components/formik-step/FormikStep';
import { clearRepresentative } from '@/components/pages/contract-page/utils';
import ContractAPI from '@/lib/api/contract/ContractAPI';
import { ContractBody } from '@/lib/api/contract/types/ContractBody';

import * as styles from './FormikStepper.styles';
interface FormikStepperProps extends FormikConfig<FormikValues> {
  children: React.ReactElement<FormikStepProps>[];
  state: {
    isAdult: boolean;
    entrantHasNoMiddleName: boolean;
    representativeHasNoMiddleName: boolean;
    entrantHasForeignPassport: boolean;
    representativeHasForeignPassport: boolean;
    entrantRefusedCode: boolean;
    representativeRefusedCode: boolean;
    entrantHasOldPassport: boolean;
    representativeHasOldPassport: boolean;
  };
}
const FormikStepper = ({ state, children, ...props }: FormikStepperProps) => {
  const childrenArr = React.Children.toArray(
    children,
  ) as React.ReactElement<FormikStepProps>[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArr[step];
  const isLastStep = () => {
    return step === childrenArr.length - 1;
  };

  return (
    <Formik
      {...props}
      validationSchema={currentChild?.props?.validationSchema}
      onSubmit={async values => {
        if (isLastStep()) {
          // if (state.isAdult) {
          //   Object.keys(values.representative).forEach(key => {
          //     values.representative[key] = '';
          //   });
          // }
          // if (state.entrantHasNoMiddleName) {
          //   Object.keys(values.representative).forEach(key => {
          //     values.representative[key] = '';
          //   });
          // }
          console.log(JSON.stringify(values, null, 2));
        } else {
          setStep(s => s + 1);
        }
      }}
    >
      {({ isValid, values, status }) => (
        <Form autoComplete="off" style={{ width: '100%' }}>
          <Box sx={styles.formWrapper}>
            {currentChild}
            <Box sx={styles.buttonPanel}>
              {step > 0 ? (
                <Button
                  sx={styles.button}
                  onClick={() => setStep(s => s - 1)}
                  text="Назад"
                />
              ) : null}
              {isLastStep() ? (
                <Button
                  sx={styles.button}
                  text={'Надіслати дані'}
                  disabled={!isValid}
                  type="submit"
                />
              ) : (
                <Button sx={styles.button} text={'Далі'} type="submit" />
              )}
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};
export default FormikStepper;
