import React, { FC, useRef } from 'react';
import { Box } from '@mui/material';
import { Form, Formik, FormikProps } from 'formik';

import Divider from '@/components/common/ui/divider';
import { DividerTextAlign } from '@/components/common/ui/divider/types';
import { Input } from '@/components/common/ui/form';
import { FieldSize } from '@/components/common/ui/form/common/types';
import FormikDropdown from '@/components/common/ui/form/with-formik/dropdown';
import { Actions } from '@/components/pages/contract-page/components/Actions';
import { REGIONS } from '@/components/pages/contract-page/constants';
import * as stylesMui from '@/components/pages/contract-page/ContractPage.styles';
import { representativeValidation } from '@/components/pages/contract-page/validation';
import { ExtendedContractBody } from '@/lib/api/contract/types/ContractBody';

import { CheckBox } from '../../components/CheckBox';
export interface ThirdStepProps {
  onNextStep: (data: ExtendedContractBody, last: boolean) => void;
  onPrevStep: (data: ExtendedContractBody) => void;
  data: ExtendedContractBody;
}
export const ThirdStep: FC<ThirdStepProps> = ({
  onPrevStep,
  onNextStep,
  data,
}) => {
  const handleSubmit = (values: ExtendedContractBody) => {
    onNextStep(values, true);
  };

  const form = useRef<FormikProps<ExtendedContractBody>>(null);

  return (
    <Formik
      innerRef={form}
      initialValues={data}
      onSubmit={handleSubmit}
      validationSchema={representativeValidation}
    >
      {({ values, isValid, touched, setValues }) => (
        <Form>
          <Box sx={stylesMui.item}>
            <Divider
              textAlign={DividerTextAlign.LEFT}
              text="Особисті дані"
              sx={stylesMui.divider}
            />
            <Input
              name="representative.lastName"
              placeholder="Шевченко"
              label="Прізвище представника"
              //TODO:figure out how to replace with values
              //disabled={isAdult}
            />
          </Box>
          <Box sx={stylesMui.item}>
            <Input
              name="representative.firstName"
              placeholder="Тарас"
              label="Ім’я представника"
              //TODO:figure out how to replace with values
              //disabled={isAdult}
            />
          </Box>
          <Box sx={stylesMui.item}>
            <CheckBox
              name="helper.representativeHasNoMiddleName"
              label="Немає по-батькові"
            />
            {values?.helper?.representativeHasNoMiddleName ? (
              <Input
                name="representative.middleName"
                disabled={true}
                resetOnDisabled
                placeholder={'Григорович'}
                label={`По-батькові вступника`}
              />
            ) : (
              <Input
                name="representative.middleName"
                disabled={false}
                placeholder={'Григорович'}
                label={`По-батькові вступника`}
              />
            )}
          </Box>
          <Box sx={stylesMui.item}>
            <Input
              name="representative.phoneNumber"
              placeholder="+9970951234567"
              label="Номер телефону представника"
            />
          </Box>
          <Box sx={stylesMui.item}>
            <Input
              name="representative.email"
              placeholder="smthcool@gmail.com"
              label="Електронна пошта представника"
            />
          </Box>
          <Box sx={stylesMui.item}>
            <Divider
              textAlign={DividerTextAlign.LEFT}
              text="Паспортні дані"
              sx={stylesMui.divider}
            />

            <CheckBox
              name="helper.representativeHasOldPassport"
              label="Паспорт старого зразка"
              onClick={() =>
                setValues({
                  ...values,
                  helper: {
                    ...values.helper,
                    representativeHasForeignPassport: false,
                  },
                })
              }
            />

            <CheckBox
              name="helper.representativeHasForeignPassport"
              label="Паспорт старого зразка"
              onClick={() =>
                setValues({
                  ...values,
                  helper: {
                    ...values.helper,
                    representativeHasOldPassport: false,
                  },
                })
              }
            />

            {values?.helper?.representativeHasForeignPassport ||
            values?.helper?.representativeHasOldPassport ? (
              <Input
                name="representative.passportSeries"
                label="Серія паспорту представника"
              />
            ) : (
              <Input
                name="representative.passportSeries"
                label="Серія паспорту представника"
                disabled
                resetOnDisabled
              />
            )}

            <Input
              name="representative.passportNumber"
              label="Номер паспорту представника"
            />
          </Box>
          <Box sx={stylesMui.item}>
            <Input
              name="representative.passportDate"
              label="Дата видачі паспорту представника"
              placeholder="25.07.2017"
            />
          </Box>
          <Box sx={stylesMui.item}>
            <Input
              name="representative.passportInstitute"
              label="Орган видачі паспорту представника"
              placeholder="1234"
            />
          </Box>
          <Box sx={stylesMui.item}>
            <CheckBox
              name="helper.representativeHasNoCode"
              label="Відмова від РНОКПП"
            />
            {values?.helper?.representativeHasNoCode ? (
              <Input
                name="representative.idCode"
                disabled={true}
                resetOnDisabled
                label="Ідентифікаційний код (РНОКПП) представника"
              />
            ) : (
              <Input
                name="representative.idCode"
                disabled={false}
                label="Ідентифікаційний код (РНОКПП) представника"
              />
            )}
          </Box>
          <Box sx={stylesMui.item}>
            <Divider
              textAlign={DividerTextAlign.LEFT}
              text="Місце проживання"
              sx={stylesMui.divider}
            />
            <FormikDropdown
              size={FieldSize.LARGE}
              options={REGIONS}
              label="Область"
              name="representative.region"
              placeholder="виберіть зі списку"
            />
          </Box>
          <Box sx={stylesMui.item}>
            <Input
              name="representative.settlement"
              placeholder="м. Київ"
              label="Населений пункт"
            />
          </Box>
          <Box sx={stylesMui.item}>
            <Input
              name="representative.address"
              label="Адреса представника"
              placeholder="Вулиця, дім, квартира"
            />
          </Box>
          <Box sx={stylesMui.item}>
            <Input
              name="representative.index"
              label="Поштовий індекс представника"
              placeholder="12345"
            />
          </Box>
          {values.meta.isToAdmission && (
            <Box sx={stylesMui.item}>
              <Divider
                textAlign={DividerTextAlign.LEFT}
                text="Підтвердження даних"
                sx={stylesMui.divider}
              />
              <Input
                name="helper.secretNumber"
                label="Віддайте телефон адміністратору"
                placeholder="0000"
              />
            </Box>
          )}
          <Actions
            onPrevStep={() => {
              if (form.current) onPrevStep(form.current.values);
            }}
            last={!values?.helper?.isAdult}
            isFormValid={touched && isValid}
          />
        </Form>
      )}
    </Formik>
  );
};
