import React, { FC } from 'react';
import { Box, FormControlLabel, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';

import FormikRadioGroup from '@/components/common/ui/form/with-formik/radio/FormikRadioGroup';
import { CheckBox } from '@/components/pages/contract-page/components/CheckBox';
import * as stylesMui from '@/components/pages/contract-page/ContractPage.styles';
import { metaValidationSchema } from '@/components/pages/contract-page/validation';
import { ContractBody } from '@/lib/api/contract/types/ContractBody';
import {
  PaymentTypeParam,
  StudyFormParam,
  StudyTypeParam,
} from '@/types/contract';

import { Actions } from '../Actions';
export interface FirstStepProps {
  onNextStep: (data: ContractBody) => void;
  data: ContractBody;
}
export const FirstStep: FC<FirstStepProps> = ({ onNextStep, data }) => {
  const handleSubmit = (values: ContractBody) => {
    console.log(values);
    onNextStep(values);
  };

  return (
    <Formik
      initialValues={data}
      onSubmit={handleSubmit}
      validationSchema={metaValidationSchema}
    >
      {({ values, isValid, touched }) => (
        <Form>
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
          {values.meta.studyType === StudyTypeParam.CONTRACT && (
            <Box sx={stylesMui.item}>
              <Typography variant="h6Bold">
                Оплата(Щосеместрово/Щоквартально)
              </Typography>
              <Field
                name="meta.paymentType"
                options={[
                  {
                    value: PaymentTypeParam.EVERY_SEMESTER,
                    label: 'Щосеместрово',
                  },
                  {
                    value: PaymentTypeParam.EVERY_QUARTER,
                    label: 'Щоквартально',
                  },
                ]}
                component={FormikRadioGroup}
              />
            </Box>
          )}
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
            <CheckBox
              name="meta.isToAdmission"
              label="Подаю документи в корпусі"
            />
          </Box>
          <Box sx={stylesMui.item}>
            <CheckBox name="helper.isAdult" label="Є 18 років" />
          </Box>

          <Actions isFormValid={touched && isValid} first />
        </Form>
      )}
    </Formik>
  );
};
