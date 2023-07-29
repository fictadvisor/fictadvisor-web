import React, { FC, useCallback, useState } from 'react';
import { Box } from '@mui/material';
import { AxiosError } from 'axios';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';

import Button from '@/components/common/ui/button-mui';
import { ButtonSize } from '@/components/common/ui/button-mui/types';
import { Input, InputType } from '@/components/common/ui/form';
import Checkbox from '@/components/common/ui/form/checkbox';
import { FieldSize } from '@/components/common/ui/form/common/types';
import Dropdown from '@/components/common/ui/form/dropdown';
import { RegisterFormFields } from '@/components/pages/register/register-page/components/register-form/types';
import {
  transformData,
  transformGroups,
} from '@/components/pages/register/register-page/components/register-form/utils';
import useToast from '@/hooks/use-toast';
import AuthAPI from '@/lib/api/auth/AuthAPI';
import { GetAllResponse } from '@/lib/api/group/types/GetAllResponse';
import AuthService from '@/lib/services/auth';
import StorageUtil from '@/lib/utils/StorageUtil';

import { initialValues } from './constants';
import * as stylesMUI from './RegisterForm.styles';
import { validationSchema } from './validation';

import styles from './FormStyles.module.scss';
const RegisterForm: FC<GetAllResponse> = ({ groups }) => {
  const router = useRouter();
  const toast = useToast();
  const [group, setGroup] = useState('');
  const onGroupChange = (group: string) => {
    setGroup(group);
  };
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
      } catch (error) {
        // TODO: refactor this shit
        const errorName = (error as AxiosError<{ error: string }>).response
          ?.data.error;

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
    [toast, router],
  );

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validateOnMount
      validateOnChange
      enableReinitialize
      validationSchema={validationSchema}
    >
      {({ isValid }) => (
        <Form className={styles['form']}>
          <Input
            label="Юзернейм"
            placeholder="використовуй латиницю без пробілів"
            name="username"
          />
          <Input
            label="Прізвище"
            placeholder="вводь справжнє прізвище для коректної інформації"
            name="lastName"
          />
          <Input
            label="Ім'я"
            placeholder="вводь справжнє ім'я для коректної інформації"
            name="firstName"
          />
          <Input
            label="По батькові"
            placeholder="вводь справжнє по батькові для коректної інформації"
            name="middleName"
          />
          <Input label="Пошта" placeholder="введи свою пошту" name="email" />
          <Box sx={stylesMUI.dropdownContainer}>
            <Dropdown
              size={FieldSize.LARGE}
              options={transformGroups(groups)}
              label="Група"
              placeholder="вибери зі списку"
              onChange={onGroupChange}
              value={group}
            />
            <Box sx={stylesMUI.checkboxContainer}>
              <Checkbox label="Я староста" name="isCaptain" />
            </Box>
          </Box>
          <Input
            label="Пароль"
            type={InputType.PASSWORD}
            placeholder="введи свій пароль"
            name="password"
          />
          <Input
            label="Підтвердження пароля"
            type={InputType.PASSWORD}
            placeholder="підтверди свій пароль"
            name="passwordConfirmation"
          />
          <Checkbox
            label={'Погоджуюсь на обробку персональних даних'}
            name={'agreement'}
          />
          <Button
            text="Зареєструватись"
            type="submit"
            size={ButtonSize.LARGE}
            disabled={!isValid}
            sx={stylesMUI.registerButton}
          />
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
