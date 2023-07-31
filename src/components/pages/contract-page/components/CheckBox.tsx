import React from 'react';
import { FormControlLabel } from '@mui/material';
import { Field } from 'formik';

import FormikCheckbox from '@/components/common/ui/form/with-formik/checkbox';

export const CheckBox = ({ name, label }: { name: string; label: string }) => (
  <Field
    name={name}
    label={label}
    sx={{ gap: '8px', margin: '0' }}
    type="checkbox"
    as={FormControlLabel}
    control={<FormikCheckbox />}
  />
);
