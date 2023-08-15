import React from 'react';
import { SxProps, Theme } from '@mui/material/styles';

export enum InputState {
  DISABLED = 'disabled',
  DEFAULT = 'default',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum InputSize {
  LARGE = 'large',
  MEDIUM = 'medium',
}

export enum InputType {
  DEFAULT = 'text',
  PASSWORD = 'password',
  SEARCH = 'search',
}

export interface InputProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  label?: string;
  placeholder?: string;
  size?: InputSize;
  type?: InputType;
  isSuccessOnDefault?: boolean;
  defaultRemark?: string;
  showRemark?: boolean;
  sx?: SxProps<Theme>;
  onDeterredChange?: () => void;
  isImmutable?: boolean;
  touched?: boolean;
  error?: string;
  value?: string;
  handleRightIconClick?: () => void;
}
