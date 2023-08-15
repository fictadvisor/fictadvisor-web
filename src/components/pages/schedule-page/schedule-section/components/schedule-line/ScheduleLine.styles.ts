import { SxProps, Theme } from '@mui/material';

import theme from '@/styles/theme';

import { ScheduleLineVariant } from './types';

export const container = (): SxProps<Theme> => ({
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
  flex: 'none',
  marginRight: '8px',
  borderBottomRightRadius: '2px',
  borderTopRightRadius: '2px',

  ...(variant === ScheduleLineVariant.SHORT && {
    border: `1px solid ${theme.palette.primary[600]}`,
    width: '292px',
  }),

  ...(variant === ScheduleLineVariant.LONG && {
    border: `2px solid ${theme.palette.primary[600]}`,
    width: '142px',
  }),
});

export const dashed = (): SxProps<Theme> => ({
  backgroundRepeat: 'repeat-x',
  backgroundImage: 'url("/icons/schedule-line.svg")',
  width: '100%',
  height: '2px',
});
