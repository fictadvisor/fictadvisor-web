import React, { FC, useCallback } from 'react';
import { Box } from '@mui/material';
import { Form, Formik } from 'formik';
import {
  initialValues,
  validationSchema,
} from 'src/components/pages/account-page/components/general-tab/components/contacts-block/validation';

import { CustomCheck } from '@/components/common/icons/CustomCheck';
import Button from '@/components/common/ui/button';
import {
  ButtonColor,
  ButtonSize,
} from '@/components/common/ui/button-mui/types';
import { Input, InputSize } from '@/components/common/ui/form';
import FormikDropdown from '@/components/common/ui/form/with-formik/dropdown';
import * as styles from '@/components/pages/account-page/components/general-tab/GeneralTab.styles';
import useAuthentication from '@/hooks/use-authentication';
import useToast from '@/hooks/use-toast';
import { useToastError } from '@/hooks/use-toast-error/useToastError';
import { AddContactBody } from '@/lib/api/user/types/AddContactBody';
import UserAPI from '@/lib/api/user/UserAPI';
import { ContactType } from '@/types/contact';

interface ContactFormProps {
  refetchContacts: () => Promise<void>;
}

const ContactForm: FC<ContactFormProps> = ({ refetchContacts }) => {
  const { user } = useAuthentication();
  const toast = useToast();
  const { displayError } = useToastError();
  const options = Object.values(ContactType).map(contact => ({
    label: contact,
    id: contact,
  }));

  const handleSubmit = useCallback(
    async (data: AddContactBody) => {
      try {
        await UserAPI.addContact(user.id, data);
        void refetchContacts();
      } catch (error) {
        displayError(error);
      }
    },
    [refetchContacts, toast, user.id],
  );

  return (
    <Box sx={styles.addSocialLinksContainer}>
      <Formik
        enableReinitialize
        validationSchema={validationSchema}
        initialValues={initialValues}
        validateOnChange
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <FormikDropdown
              options={options}
              name="name"
              label="Соціальна мережа"
              placeholder="Введіть назву соц. мережі"
            />
            <Input
              label="Посилання"
              size={InputSize.LARGE}
              name="link"
              placeholder="Введіть посилання"
            />
            <Input
              label="Відображуване ім'я"
              size={InputSize.LARGE}
              name="displayName"
              placeholder="Введіть відображуване ім'я"
            />
            <Button
              text="Додати"
              color={ButtonColor.SECONDARY}
              startIcon={<CustomCheck />}
              size={ButtonSize.SMALL}
              type="submit"
            />
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ContactForm;
