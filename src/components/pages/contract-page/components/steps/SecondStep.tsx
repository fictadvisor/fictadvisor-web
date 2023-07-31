import React, { FC, useRef } from 'react';
import { Box } from '@mui/material';
import { Form, Formik, FormikProps } from 'formik';

import Divider from '@/components/common/ui/divider';
import { DividerTextAlign } from '@/components/common/ui/divider/types';
import { Input } from '@/components/common/ui/form';
import { FieldSize } from '@/components/common/ui/form/common/types';
import FormikDropdown from '@/components/common/ui/form/with-formik/dropdown';
import { Actions } from '@/components/pages/contract-page/components/Actions';
import { CheckBox } from '@/components/pages/contract-page/components/CheckBox';
import { REGIONS } from '@/components/pages/contract-page/constants';
import * as stylesMui from '@/components/pages/contract-page/ContractPage.styles';
import { entrantValidationSchema } from '@/components/pages/contract-page/validation';
import { ContractBody } from '@/lib/api/contract/types/ContractBody';

export interface SecondStepProps {
  onNextStep: (data: ContractBody, final?: boolean) => void;
  onPrevStep: (data: ContractBody) => void;
  data: ContractBody;
}
export const SecondStep: FC<SecondStepProps> = ({
  onNextStep,
  data,
  onPrevStep,
}) => {
  const form = useRef<FormikProps<ContractBody>>(null);
  const handleSubmit = (values: ContractBody) => {
    onNextStep(values, data.helper.isAdult);
  };

  return (
    <Formik
      initialValues={data}
      onSubmit={handleSubmit}
      validationSchema={entrantValidationSchema}
      innerRef={form}
    >
      {({ values, isValid, touched }) => (
        <Form>
          <Box sx={stylesMui.item}>
            <Divider
              textAlign={DividerTextAlign.LEFT}
              text="Особисті дані"
              sx={stylesMui.divider}
            />
            <Input
              name="entrant.lastName"
              placeholder="Шевченко"
              label={`Прізвище вступника`}
            />
          </Box>
          <Box sx={stylesMui.item}>
            <Input
              name="entrant.firstName"
              placeholder="Тарас"
              label={`Ім’я вступника`}
            />
          </Box>
          <Box sx={stylesMui.item}>
            <CheckBox
              name="helper.entrantHasNoMiddleName"
              label="Немає по-батькові"
            />
            {values.helper.entrantHasNoMiddleName ? (
              <Input
                name="entrant.middleName"
                disabled={true}
                placeholder={'Григорович'}
                label={`По-батькові вступника`}
              />
            ) : (
              <Input
                name="entrant.middleName"
                disabled={false}
                placeholder={'Григорович'}
                label={`По-батькові вступника`}
              />
            )}
          </Box>
          <Box sx={stylesMui.item}>
            <Input
              name="entrant.phoneNumber"
              placeholder="+380123456789"
              label={`Номер телефону вступника`}
            />
          </Box>
          <Box sx={stylesMui.item}>
            <Input
              name="entrant.email"
              placeholder="smthcool@gmail.com"
              label={`Електронна пошта вступника`}
            />
          </Box>
          <Box sx={stylesMui.item}>
            <Divider
              textAlign={DividerTextAlign.LEFT}
              text="Паспортні дані"
              sx={stylesMui.divider}
            />
            <CheckBox
              name="helper.entrantHasOldPassport"
              label="Паспорт старого зразка"
              //TODO:figure out how to change
              // checked={entrantHasOldPassport}
              //disabled={entrantHasForeignPassport}
            />
            <CheckBox
              name="helper.entrantHasForeignPassport"
              label="Закордонний паспорт"
              //TODO:figure out how to change
              //checked={entrantHasForeignPassport}
              //disabled={entrantHasOldPassport}
            />
            <Box sx={{ gap: '24px' }}>
              <Input
                name="entrant.passportSeries"
                label="Серія паспорту вступника"
                //TODO:figure out how to change
                //disabled={!entrantHasForeignPassport && !entrantHasOldPassport}
              />
              <Input
                name="entrant.passportNumber"
                label={`Номер паспорту вступника`}
              />
            </Box>
          </Box>
          <Box sx={stylesMui.item}>
            <Input
              name="entrant.passportDate"
              label={`Дата видачі паспорту вступника`}
              placeholder="25.07.2017"
            />
          </Box>
          <Box sx={stylesMui.item}>
            <Input
              name="entrant.passportInstitute"
              label={`Орган видачі паспорту вступника`}
              placeholder="1234"
            />
          </Box>
          <Box sx={stylesMui.item}>
            <CheckBox
              name="helper.entrantHasNoMiddleName"
              label="Відмова від РНОКПП"
            />
            {values.helper.entrantHasNoMiddleName ? (
              <Input
                name="representative.idCode"
                disabled={true}
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
              name="entrant.region"
              placeholder="виберіть зі списку"
            />
          </Box>
          <Box sx={stylesMui.item}>
            <Input
              name="entrant.settlement"
              placeholder="м. Київ"
              label="Населений пункт"
            />
          </Box>
          <Box sx={stylesMui.item}>
            <Input
              name="entrant.address"
              label={`Адреса вступника`}
              placeholder="Вулиця, дім, квартира"
            />
          </Box>
          <Box sx={stylesMui.item}>
            <Input
              name="entrant.index"
              label={`Поштовий індекс вступника`}
              placeholder="12345"
            />
          </Box>

          <Actions
            onPrevStep={() => {
              if (form.current) onPrevStep(form.current.values);
            }}
            isFormValid={touched && isValid}
            last={values.helper.isAdult}
          />
        </Form>
      )}
    </Formik>
  );
};
