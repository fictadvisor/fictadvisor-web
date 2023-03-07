import React from 'react';
import { Form, Formik } from 'formik';

import { AlertColor, AlertVariant } from '@/components/common/ui/alert';
import AlertPopup from '@/components/common/ui/alert-popup';
import Button from '@/components/common/ui/button';
import {
  Checkbox,
  Dropdown,
  Input,
  InputSize,
  InputType,
  NumberedTextArea,
  RadioGroup,
  Slider,
  Switch,
  TextArea,
} from '@/components/common/ui/form';
import {
  FormikPageFields,
  initialValues,
  validationSchema,
} from '@/components/pages/test/formik-page/utils';

import testPageStyles from '../test-pages.module.scss';
import styles from './FormikPage.module.scss';

const FormikPage = () => {
  const groups = [
    { value: 'IP-15', label: 'ІП-15' },
    { value: 'IP-14', label: 'ІП-14' },
    { value: 'IP-13', label: 'ІП-13' },
    { value: 'IP-12', label: 'ІП-12' },
    { value: 'IP-11', label: 'ІП-11' },
  ];

  const fruits = [
    { value: 'banana', label: 'Банан' },
    { value: 'apple', label: 'Яблуко' },
    { value: 'kiwi', label: 'Ківі' },
  ];

  const handleSubmit = (data: FormikPageFields) => {
    console.log(data);
  };

  return (
    <div className={testPageStyles['test-page-wrap']}>
      <div className={testPageStyles['test-page-content']}>
        <AlertPopup
          title="We are going live in July!"
          description="We are happy to announce that we are going live on July 28th. Get ready!"
          variant={AlertVariant.FILLED}
          color={AlertColor.WARNING}
        />
        <Formik
          enableReinitialize
          validateOnMount
          validateOnChange
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {() => (
            <Form className={styles['form']}>
              <Input
                size={InputSize.LARGE}
                label="Пошта"
                name="email"
                placeholder="shevchenko@gmail.com"
              />
              <Input
                size={InputSize.MEDIUM}
                type={InputType.PASSWORD}
                label="Пароль"
                name="password"
                placeholder="meni13minalo"
                isSuccessOnDefault={true}
                defaultRemark={'Some default remark, idk'}
              />
              <Input
                size={InputSize.MEDIUM}
                type={InputType.PASSWORD}
                label="Підтвердіть пароль"
                name="passwordConfirmation"
                placeholder="meni13minalo"
                isSuccessOnDefault={true}
                defaultRemark={'Some default remark #2, idk idk'}
              />
              <Input size={InputSize.MEDIUM} name="id" placeholder="Your id" />
              <Input
                size={InputSize.LARGE}
                type={InputType.SEARCH}
                name="search"
                placeholder="Taras Shevchenko IP-25"
                showRemark={false}
              />
              <Dropdown
                name="group"
                options={groups}
                label={'Група'}
                isSuccessOnDefault={true}
                defaultRemark={'Dropdown Default remark'}
              />
              <Dropdown
                name="group"
                options={groups}
                label={'Група'}
                isSuccessOnDefault={false}
                defaultRemark={'Dropdown Default remark'}
              />
              <Dropdown
                name="group"
                options={groups}
                label={'Група'}
                isDisabled={true}
                defaultRemark={'Dropdown Default emark'}
              />
              <TextArea
                name="review"
                defaultRemark={'Text area remark'}
                className={testPageStyles['test']}
              />
              <NumberedTextArea
                name="review"
                defaultRemark={'Text area remark'}
              />
              <Checkbox
                name="isCaptain"
                label="Староста групи"
                className={testPageStyles['test']}
              />
              <Switch
                name="notification"
                label="Бажаєте отримувати сповіщення?"
              />
              <RadioGroup options={fruits} name={'fruit'} />

              <Slider name={'rating'} />

              <Button text="Надіслати" type="submit" />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormikPage;
