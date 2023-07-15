import { SxProps } from '@mui/material/styles';
import { Theme } from '@mui/system';

export const subjectList: SxProps<Theme> = {
  marginBottom: '16px',
  display: 'block',
  li: {
    marginBottom: '16px',
    // breakInside: 'avoid',
  },
  columns: {
    desktop: 4,
    tablet: 3,
    mobileSemiMedium: 2,
    mobile: 1,
  },
};
