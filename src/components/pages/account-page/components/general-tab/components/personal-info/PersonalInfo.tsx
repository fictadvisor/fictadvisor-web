import React, { FC } from 'react';
import { shallowEqual } from 'react-redux';
import { Box, useMediaQuery } from '@mui/material';
import { Form, Formik } from 'formik';

import { CustomCheck } from '@/components/common/icons/CustomCheck';
import Button from '@/components/common/ui/button-mui';
import { ButtonSize } from '@/components/common/ui/button-mui/types';
import { Input } from '@/components/common/ui/form';
import { PersonalInfoForm } from '@/components/pages/account-page/components/general-tab/components/personal-info/types';
import { validationSchema } from '@/components/pages/account-page/components/general-tab/components/personal-info/validation';
import useAuthentication from '@/hooks/use-authentication';
import useToast from '@/hooks/use-toast';
import UserAPI from '@/lib/api/user/UserAPI';
import getErrorMessage from '@/lib/utils/getErrorMessage';
import theme from '@/styles/theme';

import * as styles from '../../GeneralTab.styles';

import stylesFUCK from '../../GeneralTab.module.scss';

const PersonalInfoBlock: FC = () => {
  const { user, update } = useAuthentication();
  const initialValues: PersonalInfoForm = {
    lastName: user.lastName,
    firstName: user.firstName,
    middleName: user.middleName,
  };

  const toast = useToast();

  const handleSubmit = async (data: PersonalInfoForm) => {
    data.firstName = data.firstName.trim().replace(/[`ʼ]/g, "'");
    data.middleName = data.middleName?.trim().replace(/[`ʼ]/g, "'");
    data.lastName = data.lastName.trim().replace(/[`ʼ]/g, "'");

    if (!data.middleName) delete data.middleName;

    try {
      await UserAPI.changeInfo(user.id, data);
      await update();
    } catch (e) {
      toast.error(getErrorMessage(e));
    }
  };
  const isMobile = useMediaQuery(theme.breakpoints.down('desktopSemiMedium'));

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isValid, values }) => (
          <Form className={stylesFUCK['form']}>
            <Input
              className={stylesFUCK['input']}
              label="Прізвище"
              name="lastName"
            />
            <Input
              className={stylesFUCK['input']}
              label="Ім'я"
              name="firstName"
            />
            <Input
              className={stylesFUCK['input']}
              label="По батькові"
              name="middleName"
            />
            <Box sx={styles.confirmButton}>
              <Button
                text="Зберегти зміни"
                startIcon={<CustomCheck />}
                size={isMobile ? ButtonSize.SMALL : ButtonSize.MEDIUM}
                type="submit"
                disabled={!isValid || shallowEqual(initialValues, values)}
                sx={isMobile ? { padding: '6px 12px' } : {}}
              />
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PersonalInfoBlock;
