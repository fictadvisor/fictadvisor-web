import { SxProps, Theme } from '@mui/material/styles';

import palette from '@/styles/theme/constants/pallete';
import typography from '@/styles/theme/constants/typography';

const wrapper: SxProps<Theme> = {
  maxWidth: '740px',
  height: '100%',
  padding: '11px 16px 12px 16px',
  backgroundColor: palette.backgroundDark['200'],
  borderRadius: '4px',
  margin: '10px',
};

const text: SxProps<Theme> = {
  marginBottom: '2px',
  textAlign: 'left',
  typography: {
    mobile: typography.body1,
    desktopSemiMedium: typography.body1Medium,
  },
};

const date: SxProps<Theme> = {
  height: '17px',
  width: '100%',
  typography: {
    mobile: typography.body1,
    desktopSemiMedium: typography.body1Medium,
  },
  textAlign: 'right',
  color: palette.grey['400'],
};

export { date, text, wrapper };
