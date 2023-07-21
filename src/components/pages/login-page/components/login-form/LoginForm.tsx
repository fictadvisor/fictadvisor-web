import { FC, useCallback } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import { useRouter } from 'next/router';

import Button, { ButtonSize } from '@/components/common/ui/button';
import { Input, InputSize, InputType } from '@/components/common/ui/form';
import CustomLink from '@/components/common/ui/custom-link';
import { CustomLinkType } from '@/components/common/ui/custom-link/types';
import { initialValues } from '@/components/pages/login-page/components/login-form/constants';
import { LoginFormFields } from '@/components/pages/login-page/components/login-form/types';
import { validationSchema } from '@/components/pages/login-page/components/login-form/validation';
import useAuthentication from '@/hooks/use-authentication';
import AuthService from '@/lib/services/auth';

import * as sxStyles from './LoginForm.styles';

import styles from '../right-block/RightBlock.module.scss';

const LoginForm: FC = () => {
  const { push, query } = useRouter();
  const { update } = useAuthentication();
  const redirect = query.redirect as string;

  const handleSubmit = useCallback(
    async (
      data: LoginFormFields,
      { setErrors }: FormikHelpers<LoginFormFields>,
    ) => {
      try {
        if (data.username.includes('@'))
          data.username = data.username.toLowerCase();
        await AuthService.login(data);
        await update();
        await push(redirect ? redirect.replace('~', '/') : '/');
      } catch (e) {
        setErrors({
          username: 'Користувача з таким паролем та поштою не знайдено',
          password: 'Користувача з таким паролем та поштою не знайдено',
        });
      }
    },
    [push, redirect, update],
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
            placeholder="введи свою пошту"
            size={InputSize.LARGE}
            type={InputType.DEFAULT}
            name="username"
          />
          <Input
            label={'Пароль'}
            placeholder="введи свій пароль"
            size={InputSize.LARGE}
            type={InputType.PASSWORD}
            name="password"
          />
          <CustomLink
            href="/password-recovery"
            type={CustomLinkType.BLUE}
            text="Забув пароль?"
            sx={sxStyles.passwordLink}
          />
          <Button
            text="Увійти"
            size={ButtonSize.LARGE}
            type="submit"
            disabled={!isValid}
            className={styles['login-button']}
          />
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
