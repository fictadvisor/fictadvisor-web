import { SxProps, Theme } from '@mui/material';

import { ScheduleEventEditDevice } from '@/components/pages/schedule-page/schedule-event-edit-section/types';

export const container = (device: ScheduleEventEditDevice): SxProps<Theme> => ({
  display: 'flex',
  alignItems: 'center',
  form: {
    width: '100%',
  },
  boxShadow: '0px 4px 50px 10px rgba(0, 0, 0, 0.25)',

  ...(device === ScheduleEventEditDevice.DESKTOP && {
    width: '528px',
    padding: '36px 36px 36px 28px',
  }),

  ...(device === ScheduleEventEditDevice.MOBILE && {
    width: '100%',
  }),
});
