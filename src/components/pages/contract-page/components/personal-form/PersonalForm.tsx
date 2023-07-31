import React, { FC, Fragment, useState } from 'react';
import { Box } from '@mui/material';

import {
  initialValues,
  REGIONS,
} from '@/components/pages/contract-page/constants';
import { ContractBody } from '@/lib/api/contract/types/ContractBody';

import * as stylesMui from '../../ContractPage.styles';
import { PassFormAgain } from '../PassFormAgain';

import { FirstStep } from './../steps/FirstStep';
import { SecondStep } from './../steps/SecondStep';
import { ThirdStep } from './../steps/ThirdStep';
import { formWrapper } from './PersonalForm.styles';

const PersonalForm: FC = () => {
  const [data, setData] = useState(initialValues);
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleNextStep = (data: ContractBody, final = false) => {
    setData(prevState => ({ ...prevState, ...data }));
    if (final) {
      setSubmitted(true);
      console.log('sending data', data);
      return;
    }
    setStep(pr => pr + 1);
  };

  const handlePrevStep = (data: ContractBody) => {
    setData(prevState => ({ ...prevState, ...data }));
    setStep(pr => pr - 1);
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.checked,
    });
  };

  console.log(data.helper.isAdult);

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
export default PersonalForm;
