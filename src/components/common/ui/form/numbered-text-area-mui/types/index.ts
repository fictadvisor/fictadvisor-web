import { SxProps, Theme } from '@mui/material/styles';
import { FieldInputProps } from 'formik';

export interface NumberedTextAreaProps {
  placeholder?: string;
  disabled?: boolean;
  showRemark?: boolean;
  sx?: SxProps<Theme>;
  field?: FieldInputProps<string>;
  touched?: boolean;
  error?: string;
}
