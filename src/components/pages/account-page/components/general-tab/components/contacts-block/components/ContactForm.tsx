import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import * as yup from 'yup';

import { CustomCheck } from '@/components/common/custom-svg/CustomCheck';
import { AlertColor } from '@/components/common/ui/alert';
import Button, { ButtonColor, ButtonSize } from '@/components/common/ui/button';
import { Dropdown, Input, InputSize } from '@/components/common/ui/form';
import { ContactType } from '@/components/pages/account-page/components/general-tab/components/contacts-block/types';
import styles from '@/components/pages/account-page/components/general-tab/GeneralTab.module.scss';
import useAuthentication from '@/hooks/use-authentication';
import { UserAPI } from '@/lib/api/user/UserAPI';
import { showAlert } from '@/redux/reducers/alert.reducer';

interface ContactFormProps {
  refetchContacts;
}

const ContactForm: FC<ContactFormProps> = ({ refetchContacts }) => {
  const { user } = useAuthentication();
  const dispatch = useDispatch();
  const options = Object.values(ContactType).map(contact => ({
    label: contact,
    value: contact,
  }));

  const handleSubmit = async data => {
    try {
      await UserAPI.addContact(user.id, data);
      refetchContacts();
    } catch (e) {
      dispatch(
        showAlert({
          title: 'Здається ти ввів неправильні значення!',
          color: AlertColor.ERROR,
        }),
      );
    }
  };

  return (
    <div className={styles['add-social-links-container']}>
      <Formik
        enableReinitialize
        validationSchema={yup.object().shape({
          displayName: yup.string().required(`Обов'язкове поле`),
          link: yup.string().required(`Обов'язкове поле`),
          name: yup.string().required(`Обов'язкове поле`),
        })}
        initialValues={{ name: '', link: '', displayName: '' }}
        onSubmit={handleSubmit}
      >
        {({}) => (
          <Form>
            <Dropdown
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
              label="Назва"
              size={InputSize.LARGE}
              name="displayName"
              placeholder="Введіть посилання"
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
    </div>
  );
};

export default ContactForm;