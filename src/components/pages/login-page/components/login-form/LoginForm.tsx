import { FC, useCallback } from 'react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';

import Button, { ButtonSize } from '@/components/common/ui/button';
import { Input, InputSize, InputType } from '@/components/common/ui/form';
import { initialValues } from '@/components/pages/login-page/components/login-form/constants';
import { LoginFormFields } from '@/components/pages/login-page/components/login-form/types';
import { validationSchema } from '@/components/pages/login-page/components/login-form/validation';
import AuthService from '@/lib/services/auth';

import styles from '../../LoginPage.module.scss';

const LoginForm: FC = () => {
  const { push } = useRouter();

  const handleSubmit = useCallback(
    async (data: LoginFormFields, { setErrors }) => {
      try {
        await AuthService.login(data);
        await push('/');
      } catch (e) {
        setErrors({
          username: 'Пароль та пошта не співпадають',
          password: 'Пароль та пошта не співпадають',
        });
        console.log(e.response?.data.message);
      }
    },
    [push],
  );

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validateOnMount
      validationSchema={validationSchema}
    >
      {({ isValid }) => (
        <Form className={styles['form']}>
          <Input
            className={styles['login-input']}
            label="Пошта або юзернейм"
            placeholder="tut username"
            size={InputSize.LARGE}
            type={InputType.DEFAULT}
            name="username"
          />
          <Input
            label={'Пароль'}
            placeholder={'a tut parol`'}
            size={InputSize.LARGE}
            type={InputType.PASSWORD}
            name="password"
          />
          <Button
            text="Увійти"
            size={ButtonSize.LARGE}
            type="submit"
            disabled={!isValid}
          />
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;