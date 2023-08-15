import { SxProps, Theme } from '@mui/material/styles';

export const layout: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: 'transparent',
  width: '1082px',
  height: '1354px',
  marginLeft: '27px',
};

export const schedule: SxProps<Theme> = {
  width: '1049px',
  height: '1344px',
  backgroundImage: 'url("/icons/schedule-page/grid-pattern.svg")',
};

export const columns: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
};
