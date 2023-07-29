import React, { useState } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { Form, Formik, FormikConfig, FormikValues } from 'formik';
import Image from 'next/image';

import Button from '@/components/common/ui/button-mui';
import { ButtonSize } from '@/components/common/ui/button-mui/types';
import { FormikStepProps } from '@/components/pages/contract-page/components/formik-step/FormikStep';
import { optionalFieldsPrepare } from '@/components/pages/contract-page/utils';
import * as stylesMUI from '@/components/pages/search-pages/poll-teachers-page/components/PollTeacherSearchList.styles';
import theme from '@/styles/theme';

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
  const [completed, setCompleted] = useState(false);
  const currentChild = childrenArr[step];
  const isLastStep = () => {
    return step === childrenArr.length - 1;
  };
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));
  return (
    <Formik
      {...props}
      validationSchema={currentChild?.props?.validationSchema}
      onSubmit={async values => {
        if (isLastStep()) {
          optionalFieldsPrepare(values, state);
          console.log(JSON.stringify(values, null, 2));
          setCompleted(true);
        } else {
          setStep(s => s + 1);
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        }
      }}
    >
      {({ isValid, values, status }) => (
        <Form autoComplete="off" style={{ width: '100%' }}>
          {completed ? (
            <Box sx={stylesMUI.wrapper}>
              <Box sx={stylesMUI.content}>
                <Image
                  src="/gifs/frog-complete.gif"
                  alt="Frogs complete the poll"
                  width={isMobile ? 300 : 480}
                  height={isMobile ? 125 : 200}
                  quality={100}
                />
                <Typography sx={stylesMUI.headText}>
                  На цьому поки все
                </Typography>
                <Typography variant="body2">
                  Дякуємо за заповнення форми, твої дані вже в обробці! Як
                  тільки договір буде сформовано, з тобою зв’яжуться члени
                  приймальної комісії та запросять на підписання.
                </Typography>
                <Button
                  sx={{ width: '80%' }}
                  size={isMobile ? ButtonSize.SMALL : ButtonSize.MEDIUM}
                  text="Подати дані на ще один договір"
                />
              </Box>
            </Box>
          ) : (
            <Box sx={styles.formWrapper}>
              {currentChild}
              <Box sx={styles.buttonPanel}>
                {step > 0 ? (
                  <Button
                    sx={styles.button}
                    onClick={() => {
                      setStep(s => s - 1);
                      window.scroll({
                        top: 0,
                        left: 0,
                        behavior: 'smooth',
                      });
                    }}
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
                  <Button
                    sx={styles.button}
                    text={'Наступні питання'}
                    type="submit"
                  />
                )}
              </Box>
            </Box>
          )}
        </Form>
      )}
    </Formik>
  );
};
export default FormikStepper;
