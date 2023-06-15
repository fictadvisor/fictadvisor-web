import { FC } from 'react';
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
  textType?: 'body1' | 'body2Medium';
  onChange?: (event) => void;
  sx?: SxProps<Theme>;
}

const RadioGroup: FC<RadioGroupProps> = ({
  options,
  onChange,
  textType = 'body1',
  sx,
  disabled = false,
  ...rest
}) => {
  const [field, { touched, error }] = useField(rest.name);

  const state = touched && error ? FieldState.ERROR : FieldState.DEFAULT;

  const radioButtons = options.map((option, index) => (
    <Radio
      key={index}
      state={state}
      selectedValue={field.value}
      textType={textType}
      disabled={disabled}
      {...option}
      {...rest}
    />
  ));

  return (
    <Box onChange={onChange} sx={sx}>
      {radioButtons}
    </Box>
  );
};

export default RadioGroup;
