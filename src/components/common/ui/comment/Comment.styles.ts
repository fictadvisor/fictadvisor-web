import { SxProps, Theme } from '@mui/material/styles';

const wrapper: SxProps<Theme> = {
  maxWidth: '740px',
  height: '100%',
  padding: '11px 16px 12px 16px',
  backgroundColor: 'backgroundDark.200',
  borderRadius: '4px',
};

const text: SxProps<Theme> = {
  marginBottom: '2px',
  textAlign: 'justify',
  fontWeight: 'body1',
};

const date: SxProps<Theme> = {
  height: '17px',
  width: '100%',
  fontWeight: 'body1',
  textAlign: 'right',
  color: 'grey.400',
};

export { date, text, wrapper };
