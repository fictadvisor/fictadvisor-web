import React from 'react';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { FormikProps, useField } from 'formik';

import { FieldState } from '@/components/common/ui/form/common/types';
import FormikRadio from '@/components/common/ui/form/with-formik/radio/FormikRadio';

interface GroupOption {
  value: string;
  label: string;
}

const renderOptions = (options: GroupOption[]) => {
  return options.map(option => (
    <FormControlLabel
      key={option.label}
      value={option.value}
      control={<FormikRadio />}
      label={option.label}
      sx={{ gap: '8px', margin: '0' }}
    />
  ));
};

interface FormikRadioGroup {
  options: GroupOption[];
  name: string;
}

const FormikRadioGroup = ({
  field,
  form: { touched, errors },
  name,
  options,
  children,
  ...props
}: FormikRadioGroup) => {
  // const [field, { touched, error }] = useField(name);
  const fieldName = name || field.name;
  return (
    <RadioGroup {...field} {...props} name={fieldName} sx={{ gap: '12px' }}>
      {renderOptions(options)}
    </RadioGroup>
  );
};

export default FormikRadioGroup;
