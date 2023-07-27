import React, { FC, FormEvent, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Form, Formik } from 'formik';

import Button from '@/components/common/ui/button-mui';
import Divider from '@/components/common/ui/divider-mui';
import { DividerTextAlign } from '@/components/common/ui/divider-mui/types';
import { Input } from '@/components/common/ui/form';
import Checkbox from '@/components/common/ui/form/checkbox';
import RadioGroup from '@/components/common/ui/form/radio';
import { initialValues } from '@/components/pages/contract-page/constants';
import { validationSchema } from '@/components/pages/contract-page/validation';
import useToast from '@/hooks/use-toast';
import ContractAPI from '@/lib/api/contract/ContractAPI';
import {
  ContractBody,
  StudyFormParam,
} from '@/lib/api/contract/types/ContractBody';

import * as stylesMui from './ContractPage.styles';

interface PersonalFormProps {
  person?: string;
}

const PersonalForm: FC<PersonalFormProps> = ({ person = 'вступника' }) => {
  const [state, setState] = useState({
    isAdult: false,
    isNoMiddleName: false,
    isForeignPassport: false,
    isCodeRefused: false,
    isOldPassport: false,
  });
  const {
    isAdult,
    isNoMiddleName,
    isForeignPassport,
    isCodeRefused,
    isOldPassport,
  } = state;
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values: ContractBody) => {
        // await ContractAPI.createContract(values);
        console.log(JSON.stringify(values, null, 2));
      }}
    >
      {({ values, isValid }) => (
        <Form
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            width: '100%',
          }}
        >
          <Box sx={stylesMui.item}>
            <Typography variant="h6Bold">
              Форма навчання (бюджет/контракт)
            </Typography>
            <RadioGroup
              name="meta.studyType"
              options={[
                { value: 'Бюджет', label: 'Бюджет' },
                { value: 'Контракт', label: 'Контракт' },
              ]}
              onChange={handleChange}
              sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
            />
          </Box>
          <Box sx={stylesMui.item}>
            <Typography variant="h6Bold">
              Форма навчання (денна/заочна)
            </Typography>
            <RadioGroup
              name="meta.studyForm"
              onChange={handleChange}
              options={[
                { value: StudyFormParam.FULL_TIME, label: 'Денна' },
                { value: StudyFormParam.PART_TIME, label: 'Заочна' },
              ]}
              sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
            />
          </Box>

          <Box sx={stylesMui.item}>
            <Typography variant="h6Bold">Спеціальність</Typography>
            <RadioGroup
              name="meta.speciality"
              onChange={handleChange}
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
              sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
            />
          </Box>
          <Box sx={stylesMui.item}>
            {/*<Checkbox name="adult" label="Є 18 років" onChange={handleChange} />*/}
            <Checkbox
              name="meta.isToAdmission"
              label="Подаю документи в корпусі"
            />
            <Checkbox
              name="isAdult"
              checked={isAdult}
              label="Є 18 років"
              onChange={handleCheck}
            />
          </Box>
          {isAdult && <Typography>Random text</Typography>}

          <Box sx={stylesMui.item}>
            <Divider
              textAlign={DividerTextAlign.LEFT}
              text="Особисті дані"
              sx={stylesMui.divider}
            />
            <Input
              name="entrant.lastName"
              placeholder="Шевченко"
              label={`Прізвище ${person}`}
            />
          </Box>
          <Box sx={stylesMui.item}>
            <Input
              name="entrant.firstName"
              placeholder="Тарас"
              label={`Ім’я  ${person}`}
            />
          </Box>
          <Box sx={stylesMui.item}>
            <Checkbox
              name="isNoMiddleName"
              checked={isNoMiddleName}
              label="Немає по-батькові"
              onChange={handleCheck}
            />
            <Input
              name="entrant.middleName"
              disabled={isNoMiddleName}
              placeholder={isNoMiddleName ? '' : 'Григорович'}
              label={`По-батькові  ${person}`}
            />
          </Box>
          <Box sx={stylesMui.item}>
            <Input
              name="entrant.phoneNumber"
              placeholder="+9970951234567"
              label={`Номер телефону  ${person}`}
            />
          </Box>
          <Box sx={stylesMui.item}>
            <Input
              name="entrant.email"
              placeholder="smthcool@gmail.com"
              label={`Електронна пошта ${person}`}
            />
          </Box>
          <Box sx={stylesMui.item}>
            <Divider
              textAlign={DividerTextAlign.LEFT}
              text="Паспортні дані"
              sx={stylesMui.divider}
            />
            <Checkbox
              name="oldPassport"
              label="Паспорт старого зразка"
              onChange={handleCheck}
            />
            <Checkbox
              name="isForeignPassport"
              checked={isForeignPassport}
              label="Закордонний паспорт"
              onChange={handleCheck}
            />
            <Input
              name="entrant.passportNumber"
              label={`Номер паспорту ${person}`}
            />
          </Box>
          <Box sx={stylesMui.item}>
            <Input
              name="entrant.passportDate"
              label={`Дата видачі паспорту ${person}`}
              placeholder="25.07.2017"
            />
          </Box>
          <Box sx={stylesMui.item}>
            <Input
              name="entrant.passportInstitute"
              label={`Орган видачі паспорту ${person}`}
              placeholder="1234"
            />
          </Box>
          <Box sx={stylesMui.item}>
            <Checkbox
              name="isCodeRefused"
              checked={isCodeRefused}
              onChange={handleCheck}
              label="Відмова від РНОКПП"
            />
            <Input
              name="entrant.idCode"
              disabled={isCodeRefused}
              label={`Ідентифікаційний код (РНОКПП) ${person}`}
            />
          </Box>
          <Box sx={stylesMui.item}>
            <Divider
              textAlign={DividerTextAlign.LEFT}
              text="Місце проживання"
              sx={stylesMui.divider}
            />
            <Typography variant="body2">Питання 10 / 13</Typography>
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
              label={`Адреса ${person}`}
              placeholder="Вулиця, дім, квартира"
            />
          </Box>
          <Box sx={stylesMui.item}>
            <Input
              name="entrant.index"
              label={`Поштовий індекс ${person}`}
              placeholder="12345"
            />
          </Box>
          <Button text="Надіслати дані" type="submit" disabled={!isValid} />
        </Form>
      )}
    </Formik>
  );
};
export default PersonalForm;
