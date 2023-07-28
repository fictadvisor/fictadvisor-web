import React, { useState } from 'react';
import { Box } from '@mui/material';
import formatters from 'chart.js/dist/core/core.ticks';
import { Form, Formik, FormikConfig, FormikValues } from 'formik';

import Button from '@/components/common/ui/button-mui';
import { FormikStepProps } from '@/components/pages/contract-page/components/formik-step/FormikStep';

import * as styles from './FormikStepper.styles';
interface FormikStepperProps extends FormikConfig<FormikValues> {
  children: React.ReactElement<FormikStepProps>[];
}
const FormikStepper = ({ children, ...props }: FormikStepperProps) => {
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
          // await props.onSubmit(values, formikHelpers);
          // await ContractAPI.createContract(values);
          console.log(JSON.stringify(values, null, 2));
        } else {
          setStep(s => s + 1);
        }
      }}
    >
      {({ isValid }) => (
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
              <Button
                sx={styles.button}
                text={isLastStep() ? 'Надіслати дані' : 'Далі'}
                disabled={!isValid}
                type="submit"
              />
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};
export default FormikStepper;
