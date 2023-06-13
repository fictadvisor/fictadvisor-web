import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  margin: '-14px -24px 10px -24px',
  backgroundColor: 'backgroundDark.200',
  borderRadius: '4px',
};

export const radarWrapper: SxProps<Theme> = {
  width: '100%',
  padding: '120px 40px 40px 40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

export const collapse: SxProps<Theme> = {
  backgroundColor: 'backgroundDark.200',
  borderRadius: '4px',
};

export const circleWrapper: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  paddingTop: '66px',
  paddingBottom: '46px',
  gap: '30px',
};

export const circleGraphNameWrapper: SxProps<Theme> = {
  display: 'flex',
  textAlign: 'center',
};

export const circleGraph: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  inlineSize: 'min-content',
  overflowWrap: 'break-word',
  gap: '10px',
};

export const columnWrapper: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  paddingBottom: '40px',
};
