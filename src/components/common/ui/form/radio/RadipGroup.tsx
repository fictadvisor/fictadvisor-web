import React from 'react';
import { Box, SxProps, Theme } from '@mui/material';
import { useField } from 'formik';

import { FieldState } from '@/components/common/ui/form/common/types';

import Radio from './radio-button';

interface RadioGroupOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  options: RadioGroupOption[];
  disabled?: boolean;
  name?: string;
  sx?: SxProps<Theme>;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ options, sx, ...rest }) => {
  const [field, { touched, error }] = useField(rest.name);

  const state = touched && error ? FieldState.ERROR : FieldState.DEFAULT;

  const radioButtons = options.map((option, index) => (
    <Radio
      key={index}
      state={state}
      selectedValue={field.value}
      onChange={field.onChange}
      disabled={rest.disabled}
      {...option}
      {...rest}
    />
  ));

  return <Box sx={sx}> {radioButtons} </Box>;
};

export default RadioGroup;
