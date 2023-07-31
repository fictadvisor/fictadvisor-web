import React, { FC, Fragment, useState } from 'react';
import { Box } from '@mui/material';

import {
  initialValues,
  REGIONS,
} from '@/components/pages/contract-page/constants';
import {
  ContractBody,
  ExtendedContractBody,
  PartialBy,
} from '@/lib/api/contract/types/ContractBody';

import { PassFormAgain } from '../PassFormAgain';

import { FirstStep } from './../steps/FirstStep';
import { SecondStep } from './../steps/SecondStep';
import { ThirdStep } from './../steps/ThirdStep';
import { formWrapper } from './PersonalForm.styles';

export const PersonalForm: FC = () => {
  const [data, setData] = useState(initialValues);
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleNextStep = (data: ExtendedContractBody, final = false) => {
    setData(prevState => ({ ...prevState, ...data }));
    if (final) {
      setSubmitted(true);

      delete (data as PartialBy<ExtendedContractBody, 'helper'>).helper;
      console.log('sending data', data);
      return;
    }
    setStep(pr => pr + 1);
  };

  const handlePrevStep = (data: ExtendedContractBody) => {
    setData(prevState => ({ ...prevState, ...data }));
    setStep(pr => pr - 1);
  };

  //TODO:
  // [] кнопка червона на початку, коли не заповнено нічо
  // [x] коли натискаєш "немає по-батькові" або відміняєш щось з вибору в паспорті не очищається поле
  // [x] серія паспорту по дефолту активна (має бути неактивна)
  // [x] Паспорт старого зразка — неправильна валідація серії (має бути 2 кириличні літери)
  // [x] можна обрати закордонний паспорт і паспорт старого зразка одночасно (так не має бути)
  // [x] якщо попап важко реалізувати, просто інпут куди оператор вводить секретний код
  // [] make middleName required, when "I don't have a middle name" checkbox is checked
  // [] make password series required, when one of either checkboxes is checked

  const steps = [
    <FirstStep onNextStep={handleNextStep} data={data} key={1} />,
    <SecondStep
      onNextStep={handleNextStep}
      onPrevStep={handlePrevStep}
      data={data}
      key={2}
    />,
    <ThirdStep
      onNextStep={handleNextStep}
      onPrevStep={handlePrevStep}
      data={data}
      key={3}
    />,
  ];

  return (
    <Box sx={formWrapper}>{!submitted ? steps[step] : <PassFormAgain />}</Box>
  );
};
