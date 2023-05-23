import React, { FC, useCallback } from 'react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';

import Button, { ButtonSize } from '@/components/common/ui/button';
import {
  Checkbox,
  Dropdown,
  DropDownSize,
  Input,
  InputType,
} from '@/components/common/ui/form';
import { RegisterFormFields } from '@/components/pages/register/register-page/components/register-form/types';
import {
  transformData,
  transformGroups,
} from '@/components/pages/register/register-page/components/register-form/utils';
import useToast from '@/hooks/use-toast';
import AuthAPI from '@/lib/api/auth/AuthAPI';
import AuthService from '@/lib/services/auth';
import StorageUtil from '@/lib/utils/StorageUtil';

import { initialValues } from './constants';
import { validationSchema } from './validation';

import styles from '../left-block/LeftBlock.module.scss';

interface RegisterFormProps {
  groups;
}

const RegisterForm: FC<RegisterFormProps> = ({ groups }) => {
  const router = useRouter();
  const toast = useToast();

  const handleSubmit = useCallback(
    async (data: RegisterFormFields) => {
      try {
        const hasCaptain = await AuthAPI.groupHasCaptain(data.group);
        if (data.isCaptain && hasCaptain) {
          toast.error('В групі вже є староста');
        } else if (!data.isCaptain && !hasCaptain) {
          toast.error('Дочекайся, поки зареєструється староста');
        } else {
          await AuthService.register(transformData(data));
          StorageUtil.deleteTelegramInfo();
          await router.push(`/register/email-verification?email=${data.email}`);
        }
      } catch (e) {
        const errorName = e.response.data.error;

        if (errorName === 'AlreadyRegisteredException') {
          toast.error('Пошта або юзернейм вже зайняті');
        } else if (errorName === 'InvalidTelegramCredentialsException') {
          toast.error('Як ти це зробив? :/');
        } else if (errorName === 'InvalidBodyException') {
          toast.error('Некорректно введені дані');
        } else {
          toast.error('Як ти це зробив? :/');
        }
      }
    },
    [router, toast],
  );

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validateOnMount
      validateOnChange
      validationSchema={validationSchema}
    >
      {({ isValid }) => (
        <Form className={styles['form']}>
          <Input
            className={styles['login-input']}
            label="Юзернейм"
            placeholder="Taras1814"
            name="username"
          />
          <Input
            className={styles['login-input']}
            label="Прізвище"
            placeholder="Шевченко"
            name="lastName"
          />
          <Input
            className={styles['login-input']}
            label="Ім'я"
            placeholder="Тарас"
            name="firstName"
          />
          <Input
            className={styles['login-input']}
            label="По батькові"
            placeholder="Григорович (опціонально)"
            name="middleName"
          />
          <Input
            className={styles['login-input']}
            label="Пошта"
            placeholder="example@gmail.com"
            name="email"
          />
          <div className={styles['one-line']}>
            <Dropdown
              size={DropDownSize.LARGE}
              options={transformGroups(groups)}
              label="Група"
              name="group"
              placeholder="вибери зі списку"
            />
            <div className={styles['checkbox-container']}>
              <Checkbox label={'Я староста'} name={'isCaptain'} />
            </div>
          </div>
          <Input
            className={styles['login-input']}
            label="Пароль"
            type={InputType.PASSWORD}
            placeholder="введи свій пароль"
            name="password"
          />
          <Input
            className={styles['login-input']}
            label="Підтвердження пароля"
            type={InputType.PASSWORD}
            placeholder="підтверди свій пароль"
            name="passwordConfirmation"
          />
          <Checkbox
            label={'Погоджуюсь на обробку персональних даних'}
            name={'agreement'}
            // className={styles['agreement-checkbox']}
          />

          <Button
            text="Зареєструватись"
            type="submit"
            size={ButtonSize.LARGE}
            disabled={!isValid}
            className={styles['register-button']}
          />
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
