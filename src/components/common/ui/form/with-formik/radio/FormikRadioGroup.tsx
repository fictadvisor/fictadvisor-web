import React from 'react';
import { FormControlLabel, RadioGroup } from '@mui/material';

import FormikRadio from '@/components/common/ui/form/with-formik/radio/FormikRadio';

interface GroupOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface FormikRadioGroup {
  options: GroupOption[];
  field: { name: string };
}

const FormikRadioGroup = ({ field, options, ...props }: FormikRadioGroup) => {
  const name = field.name;
  return (
    <RadioGroup {...field} {...props} name={field.name} sx={{ gap: '12px' }}>
      {options.map(option => (
        <FormControlLabel
          key={option.label}
          value={option.value}
          control={<FormikRadio disabled={option.disabled} />}
          label={option.label}
          sx={{ gap: '8px', margin: '0', width: 'fit-content' }}
        />
      ))}
    </RadioGroup>
  );
};

export default FormikRadioGroup;
