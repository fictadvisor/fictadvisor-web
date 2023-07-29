import React, { FC, useState } from 'react';
import { Box, FormControlLabel, Typography } from '@mui/material';
import { Field } from 'formik';

import Divider from '@/components/common/ui/divider-mui';
import { DividerTextAlign } from '@/components/common/ui/divider-mui/types';
import { Input } from '@/components/common/ui/form';
import Checkbox from '@/components/common/ui/form/checkbox';
import { FieldSize } from '@/components/common/ui/form/common/types';
import FormikCheckbox from '@/components/common/ui/form/with-formik/checkbox';
import FormikDropdown from '@/components/common/ui/form/with-formik/dropdown';
import FormikRadioGroup from '@/components/common/ui/form/with-formik/radio/FormikRadioGroup';
import FormikStep from '@/components/pages/contract-page/components/formik-step/FormikStep';
import FormikStepper from '@/components/pages/contract-page/components/formik-stepper/FormikStepper';
import {
  initialValues,
  REGIONS,
} from '@/components/pages/contract-page/constants';
import { StudyFormParam, StudyTypeParam } from '@/types/contract';

import * as stylesMui from '../../ContractPage.styles';

const PersonalForm: FC = () => {
  const [state, setState] = useState({
    isAdult: false,
    entrantHasNoMiddleName: false,
    representativeHasNoMiddleName: false,
    entrantHasForeignPassport: false,
    representativeHasForeignPassport: false,
    entrantRefusedCode: false,
    representativeRefusedCode: false,
    entrantHasOldPassport: false,
    representativeHasOldPassport: false,
  });

  const [passportSerie, setPassportSerie] = useState(false);

  const {
    isAdult,
    entrantHasNoMiddleName,
    representativeHasNoMiddleName,
    entrantHasForeignPassport,
    representativeHasForeignPassport,
    entrantRefusedCode,
    representativeRefusedCode,
    entrantHasOldPassport,
    representativeHasOldPassport,
  } = state;

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <FormikStepper
      initialValues={initialValues}
      onSubmit={() => {}}
      state={state}
    >
      <FormikStep>
        <Box sx={stylesMui.item}>
          <Typography variant="h6Bold">
            Форма навчання (бюджет/контракт)
          </Typography>
          <Field
            name="meta.studyType"
            options={[
              { label: 'Бюджет', value: StudyTypeParam.BUDGET },
              { label: 'Контракт', value: StudyTypeParam.CONTRACT },
            ]}
            component={FormikRadioGroup}
          />
        </Box>
        <Box sx={stylesMui.item}>
          <Typography variant="h6Bold">
            Форма навчання (денна/заочна)
          </Typography>
          <Field
            name="meta.studyForm"
            options={[
              { label: 'Денна', value: StudyFormParam.FULL_TIME },
              { label: 'Заочна', value: StudyFormParam.PART_TIME },
            ]}
            component={FormikRadioGroup}
          />
        </Box>

        <Box sx={stylesMui.item}>
          <Typography variant="h6Bold">Спеціальність</Typography>
          <Field
            name="meta.speciality"
            options={[
              {
                value: '121',
                label: '121 Інженерія програмного забезпечення',
              },
              { value: '123', label: '123 Комп’ютерна інженерія' },
              {
                value: '126',
                label: '126 Інформаційні системи та технології',
              },
            ]}
            component={FormikRadioGroup}
          />
        </Box>
        <Box sx={stylesMui.item}>
          <Field
            sx={{ gap: '8px', margin: '0' }}
            type="checkbox"
            name="meta.isToAdmission"
            as={FormControlLabel}
            control={<FormikCheckbox />}
            label="Подаю документи в корпусі"
          />
        </Box>
        <Box sx={stylesMui.item}>
          <Checkbox
            name="isAdult"
            checked={isAdult}
            label="Є 18 років"
            onChange={handleCheck}
          />
        </Box>
      </FormikStep>

      <FormikStep>
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
          <Checkbox
            name="entrantHasNoMiddleName"
            checked={entrantHasNoMiddleName}
            label="Немає по-батькові"
            onChange={handleCheck}
          />
          <Input
            name="entrant.middleName"
            disabled={entrantHasNoMiddleName}
            placeholder={'Григорович'}
            label={`По-батькові вступника`}
          />
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
          <Checkbox
            name="entrantHasOldPassport"
            label="Паспорт старого зразка"
            checked={entrantHasOldPassport}
            disabled={entrantHasForeignPassport}
            onChange={handleCheck}
          />
          <Checkbox
            name="entrantHasForeignPassport"
            label="Закордонний паспорт"
            checked={entrantHasForeignPassport}
            disabled={entrantHasOldPassport}
            onChange={handleCheck}
          />
          <Input
            name="entrant.passportSeries"
            label="Серія паспорту представника"
            disabled={!entrantHasForeignPassport && !entrantHasOldPassport}
          />
          <Input
            name="entrant.passportNumber"
            label={`Номер паспорту вступника`}
          />
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
          <Checkbox
            name="entrantRefusedCode"
            checked={entrantRefusedCode}
            onChange={handleCheck}
            label="Відмова від РНОКПП"
          />
          {entrantRefusedCode ? (
            <Input
              name="entrant.idCode"
              disabled={entrantRefusedCode}
              label={`Ідентифікаційний код (РНОКПП) вступника`}
              value={''}
            />
          ) : (
            <Input
              name="entrant.idCode"
              disabled={entrantRefusedCode}
              label={`Ідентифікаційний код (РНОКПП) вступника`}
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
      </FormikStep>

      <FormikStep>
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
            disabled={isAdult}
          />
        </Box>
        <Box sx={stylesMui.item}>
          <Input
            name="representative.firstName"
            placeholder="Тарас"
            label="Ім’я представника"
            disabled={isAdult}
          />
        </Box>
        <Box sx={stylesMui.item}>
          <Checkbox
            name="representativeHasNoMiddleName"
            checked={representativeHasNoMiddleName}
            label="Немає по-батькові"
            disabled={isAdult}
            onChange={handleCheck}
          />
          <Input
            name="representative.middleName"
            disabled={representativeHasNoMiddleName || isAdult}
            placeholder={'Григорович'}
            label="По-батькові представника"
          />
        </Box>
        <Box sx={stylesMui.item}>
          <Input
            name="representative.phoneNumber"
            placeholder="+9970951234567"
            label="Номер телефону представника"
            disabled={isAdult}
          />
        </Box>
        <Box sx={stylesMui.item}>
          <Input
            name="representative.email"
            placeholder="smthcool@gmail.com"
            label="Електронна пошта представника"
            disabled={isAdult}
          />
        </Box>
        <Box sx={stylesMui.item}>
          <Divider
            textAlign={DividerTextAlign.LEFT}
            text="Паспортні дані"
            sx={stylesMui.divider}
          />
          <Checkbox
            name="representativeHasOldPassport"
            checked={representativeHasOldPassport}
            label="Паспорт старого зразка"
            disabled={isAdult || representativeHasForeignPassport}
            onChange={handleCheck}
          />
          <Checkbox
            name="representativeHasForeignPassport"
            checked={representativeHasForeignPassport}
            label="Закордонний паспорт"
            disabled={isAdult || representativeHasOldPassport}
            onChange={handleCheck}
          />
          <Input
            name="representative.passportSeries"
            label="Серія паспорту представника"
            disabled={
              !representativeHasForeignPassport && !representativeHasOldPassport
            }
          />
          <Input
            name="representative.passportNumber"
            label="Номер паспорту представника"
            disabled={isAdult}
          />
        </Box>
        <Box sx={stylesMui.item}>
          <Input
            name="representative.passportDate"
            label="Дата видачі паспорту представника"
            disabled={isAdult}
            placeholder="25.07.2017"
          />
        </Box>
        <Box sx={stylesMui.item}>
          <Input
            name="representative.passportInstitute"
            label="Орган видачі паспорту представника"
            placeholder="1234"
            disabled={isAdult}
          />
        </Box>
        <Box sx={stylesMui.item}>
          <Checkbox
            name="representativeRefusedCode"
            checked={representativeRefusedCode}
            onChange={handleCheck}
            disabled={isAdult}
            label="Відмова від РНОКПП"
          />
          <Input
            name="representative.idCode"
            disabled={representativeRefusedCode || isAdult}
            label="Ідентифікаційний код (РНОКПП) представника"
          />
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
            isDisabled={isAdult}
          />
        </Box>
        <Box sx={stylesMui.item}>
          <Input
            name="representative.settlement"
            placeholder="м. Київ"
            label="Населений пункт"
            disabled={isAdult}
          />
        </Box>
        <Box sx={stylesMui.item}>
          <Input
            name="representative.address"
            label="Адреса представника"
            placeholder="Вулиця, дім, квартира"
            disabled={isAdult}
          />
        </Box>
        <Box sx={stylesMui.item}>
          <Input
            name="representative.index"
            label="Поштовий індекс представника"
            placeholder="12345"
            disabled={isAdult}
          />
        </Box>
      </FormikStep>
    </FormikStepper>
  );
};
export default PersonalForm;
