import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AxiosError } from 'axios';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';

import { AlertColor } from '@/components/common/ui/alert';
import Button, { ButtonSize } from '@/components/common/ui/button';
import { Input, InputSize, InputType } from '@/components/common/ui/form';
import { initialValues } from '@/components/pages/password-recovery/create-password-page/components/create-password-form/constants';
import { CreatePasswordFormFields } from '@/components/pages/password-recovery/create-password-page/components/create-password-form/types';
import { validationSchema } from '@/components/pages/password-recovery/create-password-page/components/create-password-form/validation';
import styles from '@/components/pages/password-recovery/create-password-page/CreatePasswordPage.module.scss';
import { AuthAPI } from '@/lib/api/auth/AuthAPI';
import { showAlert } from '@/redux/reducers/alert.reducer';

const CreatePasswordForm: FC = () => {
  const router = useRouter();
  const token = router.query.token as string;
  const dispatch = useDispatch();
  const handleSubmit = useCallback(
    async ({ password }: CreatePasswordFormFields) => {
      try {
        await AuthAPI.resetPassword(token, { password });
        await router.push('/password-recovery/valid');
      } catch (error) {
        // Temporary solution
        const errorName = (error as AxiosError<{ error: string }>).response
          ?.data.error;
        if (errorName === 'PasswordRepeatException') {
          dispatch(
            showAlert({
              title: 'Помилка!',
              description: 'Такий пароль вже був!',
              color: AlertColor.ERROR,
            }),
          );
        } else {
          dispatch(
            showAlert({
              title: 'Помилка!',
              description: 'Лист для верифікації сплив або неправильний код!',
              color: AlertColor.ERROR,
            }),
          );
          await router.push('/password-recovery/invalid');
        }
      }
    },
    [dispatch, router, token],
  );

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnMount
      validateOnChange
    >
      {({ isValid, errors }) => (
        <Form className={styles['form']}>
          <Input
            className={styles['input']}
            isSuccessOnDefault={true}
            label="Новий пароль"
            placeholder="user2000"
            size={InputSize.LARGE}
            type={InputType.PASSWORD}
            name="password"
          />
          <Input
            className={styles['input']}
            isSuccessOnDefault={true}
            label="Підтверди пароль"
            placeholder="input"
            size={InputSize.LARGE}
            type={InputType.PASSWORD}
            name="confirmPassword"
            disabled={errors.password != null}
          />
          <div className={styles['confirm-button']}>
            <Button
              text="Змінити пароль"
              size={ButtonSize.LARGE}
              type="submit"
              disabled={!isValid}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreatePasswordForm;
