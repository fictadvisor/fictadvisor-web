import React, { FC } from 'react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';

import Button, { ButtonSize } from '@/components/common/ui/button';
import { Input, InputSize, InputType } from '@/components/common/ui/form';
import { initialValues } from '@/components/pages/password-recovery/forgot-password-page/components/forgot-password-form/constants';
import { ForgotPasswordFormFields } from '@/components/pages/password-recovery/forgot-password-page/components/forgot-password-form/types';
import { validationSchema } from '@/components/pages/password-recovery/forgot-password-page/components/forgot-password-form/validation';
import styles from '@/components/pages/password-recovery/forgot-password-page/ForgotPasswordPage.module.scss';
import useToast from '@/hooks/use-toast';
import AuthAPI from '@/lib/api/auth/AuthAPI';

const ForgotPasswordForm: FC = () => {
  const toast = useToast();
  const router = useRouter();

  const handleSubmit = async (data: ForgotPasswordFormFields) => {
    let errorMessage;
    try {
      await AuthAPI.forgotPassword({ email: data.emailAddress });
      await router.push(
        `/password-recovery/email-verification?email=${data.emailAddress}`,
      );
    } catch (e) {
      const errorName = e.response.data.error;
      if (errorName == 'InvalidBodyException') {
        errorMessage = 'Невірно введено пошту для відновлення';
      } else if (errorName == 'NotRegisteredException') {
        errorMessage = 'На цю пошту не зареєстровано користувача';
      }
      toast.error(errorMessage);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnMount
      validateOnChange
    >
      {({ isValid }) => (
        <Form className={styles['form']}>
          <Input
            className={styles['email-input']}
            label="Пошта"
            placeholder="example@gmail.com"
            size={InputSize.LARGE}
            type={InputType.DEFAULT}
            name="emailAddress"
          />
          <Button
            text="Надіслати лист"
            size={ButtonSize.LARGE}
            type="submit"
            disabled={!isValid}
          />
        </Form>
      )}
    </Formik>
  );
};

export default ForgotPasswordForm;
