import { SxProps, Theme } from '@mui/material/styles';

export enum ProgressColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ERROR = 'error',
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  INHERIT = 'inherit',
}

export enum ProgressSize {
  SMALL = 58,
  SEMI_MEDIUM = 144,
  MEDIUM = 180,
  LARGE = 216,
  EXTRA_LARGE = 252,
}

export enum ProgressVariant {
  DETERMINATE = 'determinate',
  INDETERMINATE = 'indeterminate',
}

export interface ProgressProps {
  value?: number;
  variant?: ProgressVariant;
  sx?: SxProps<Theme>;
  size?: ProgressSize;
  color?: ProgressColor;
}
