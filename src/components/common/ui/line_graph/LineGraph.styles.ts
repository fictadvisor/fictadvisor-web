import { linearProgressClasses } from '@mui/material/LinearProgress';
import { SxProps, Theme } from '@mui/material/styles';

import colorInfo from '@/components/common/ui/line_graph/utils/constrants';
import palette from '@/styles/theme/constants/pallete';

export const wrapper: SxProps<Theme> = {
  display: 'grid',
  alignItems: 'center',
  flexDirection: 'column',
};

export const label: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '14px',
  padding: '0 0 12px 6px',
  color: 'grey.800',
};

export const graph = (value): SxProps<Theme> => ({
  height: '7px',
  borderRadius: '5px',
  background: palette.backgroundDark['300'],
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: '5px',
    backgroundColor: colorInfo(value),
  },
});
