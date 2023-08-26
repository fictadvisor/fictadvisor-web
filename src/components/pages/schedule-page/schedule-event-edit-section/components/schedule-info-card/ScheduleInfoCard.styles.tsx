import { SxProps, Theme } from '@mui/material';

import { ScheduleEventEditDevice } from '@/components/pages/schedule-page/schedule-event-edit-section/types';
import theme from '@/styles/theme';

export const container = (device: ScheduleEventEditDevice): SxProps<Theme> => ({
  width: '528px',
  padding: '36px 36px 36px 28px',
  boxShadow: '0px 4px 50px 10px rgba(0, 0, 0, 0.25)',

  div: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '8px',
  },

  span: {
    width: '92px',
    marginRight: '12px',
  },

  ...(device === ScheduleEventEditDevice.MOBILE && {
    width: '100%',
  }),
});

export const titleContainer = (): SxProps<Theme> => ({
  marginBottom: '20px!important',
});

export const teachersContainer = (
  device: ScheduleEventEditDevice,
): SxProps<Theme> => ({
  div: {
    flexDirection: 'column!important',
  },
});

export const infoContainer = (): SxProps<Theme> => ({
  flexDirection: 'column!important',
});

export const tab = (): SxProps<Theme> => ({
  button: {
    marginTop: '20px',
    marginBottom: '16px',
    padding: '8px 16px 8px 16px',
    textTransform: 'none',
    color: theme.palette.white.main,
    '&.Mui-selected': {
      color: theme.palette.white.main,
      padding: '8px 16px 8px 16px',
      backgroundColor: theme.palette.backgroundDark[200],
      borderRadius: '4px',
    },
  },
  span: {
    display: 'none!important',
  },
});
