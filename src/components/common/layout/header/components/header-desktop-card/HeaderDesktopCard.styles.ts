import { SxProps, Theme } from '@mui/material/styles';

export const container: SxProps<Theme> = {
  '& img': {
    width: '36px',
    height: '36px',
    aspectRatio: 1 / 1,
  },
  display: 'flex',
  alignItems: 'center',
  transition: 'all linear 0.1s',
  width: '220px',
  flexWrap: 'nowrap',
  gap: '8px',
};

export const name: SxProps<Theme> = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '280px',
  color: 'grey.600',
  whiteSpace: 'nowrap',
};

export const groupName: SxProps<Theme> = {
  marginLeft: '10px',
  borderRadius: '5px',
  padding: '0 2px 0 2px',
  color: 'grey.500',
  border: 0.2,
  borderColor: 'grey.500',
};

export const cardInfo: SxProps<Theme> = {
  color: 'grey.500',
  display: 'flex',
  flexFlow: 'column',
  // justifyContent: 'center',
  alignItems: 'flex-end',
};
