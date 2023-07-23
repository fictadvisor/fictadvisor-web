import { SxProps, Theme } from '@mui/material';

import theme from '@/styles/theme';

import { ScheduleLineVariant } from './types';

export const container = (variant: ScheduleLineVariant): SxProps<Theme> => ({
  display: 'flex',
  alignItems: 'center',
});

export const verticalDivider = (
  variant: ScheduleLineVariant,
): SxProps<Theme> => ({
  height: '18px',
  backgroundColor: theme.palette.primary[600],

  ...(variant === ScheduleLineVariant.SHORT && {
    width: '18px',
    borderRadius: '50%',
  }),

  ...(variant === ScheduleLineVariant.LONG && {
    width: '4px',
    borderRadius: '2px',
  }),
});

export const horizontalDivider = (
  variant: ScheduleLineVariant,
): SxProps<Theme> => ({
  flex: 1,

  ...(variant === ScheduleLineVariant.SHORT && {
    border: `1px solid ${theme.palette.primary[600]}`,
  }),

  ...(variant === ScheduleLineVariant.LONG && {
    border: `2px solid ${theme.palette.primary[600]}`,
  }),
});

export const dashed = (): SxProps<Theme> => ({
  border: `1px dashed ${theme.palette.primary[600]}`,
});
