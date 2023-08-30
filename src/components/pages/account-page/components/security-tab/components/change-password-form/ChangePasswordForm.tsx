import React from 'react';
import { Box } from '@mui/material';
import { AxiosError } from 'axios';
import { Form, Formik, FormikHelpers } from 'formik';
import { useRouter } from 'next/router';

import { CustomCheck } from '@/components/common/icons/CustomCheck';
import Button from '@/components/common/ui/button-mui';
import {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button-mui/types';
import CustomLink from '@/components/common/ui/custom-link';
import { CustomLinkType } from '@/components/common/ui/custom-link/types';
import { Input, InputType } from '@/components/common/ui/form';
import useToast from '@/hooks/use-toast';
import AuthAPI from '@/lib/api/auth/AuthAPI';
import StorageUtil from '@/lib/utils/StorageUtil';

import * as styles from '../../SecurityTab.styles';

import { initialValues } from './constants';
import { ChangePasswordFormFields } from './types';
import { validationSchema } from './validation';

const ChangePasswordForm = () => {
  const router = useRouter();
  const toast = useToast();
  const handleSubmit = async (
    data: ChangePasswordFormFields,
    { setErrors }: FormikHelpers<ChangePasswordFormFields>,
  ) => {
    try {
      const { accessToken, refreshToken } = await AuthAPI.changePassword({
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      });
      StorageUtil.setTokens(accessToken, refreshToken);
      toast.success('Пароль успішно змінено');
      router.reload();
    } catch (error) {
      // TODO: refactor this shit
      const name = (error as AxiosError<{ error: string }>).response?.data
        .error;
      if (name === 'PasswordRepeatException') {
        setErrors({
          oldPassword: 'Не можна встановлювати пароль, ідентичний існуючому',
          newPassword: 'Не можна встановлювати пароль, ідентичний існуючому',
          confirmationPassword:
            'Не можна встановлювати пароль, ідентичний існуючому',
        });
      } else if (name === 'Unauthorized') {
        setErrors({
          oldPassword: 'Введений пароль недійсний',
        });
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnMount
      validateOnChange
    >
      {({ isValid, errors }) => (
        <Form>
          <Input
            label="Поточний пароль"
            placeholder="введи свій пароль"
            type={InputType.PASSWORD}
            name="oldPassword"
            isSuccessOnDefault={true}
          />
          {errors.oldPassword === 'Введений пароль недійсний' && (
            <p className="body-primary">
              Забули пароль? Щоб відновити, перейдіть за{' '}
              <CustomLink
                href="/password-recovery"
                type={CustomLinkType.BLUE}
                text="посиланням"
              />
            </p>
          )}
          <Input
            label="Новий пароль"
            placeholder="придумай новий пароль"
            type={InputType.PASSWORD}
            name="newPassword"
            disabled={!!errors.oldPassword}
            isSuccessOnDefault={true}
          />
          <Input
            label="Підтвердження паролю"
            placeholder="підтверди новий пароль"
            type={InputType.PASSWORD}
            name="confirmationPassword"
            disabled={!!errors.oldPassword || !!errors.newPassword}
            isSuccessOnDefault={true}
          />
          <Box sx={styles.confirmButton}>
            <Button
              text="Оновити пароль"
              startIcon={<CustomCheck />}
              size={ButtonSize.MEDIUM}
              type="submit"
              disabled={!isValid}
              sx={styles.changePasswordButton}
            />
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default ChangePasswordForm;
