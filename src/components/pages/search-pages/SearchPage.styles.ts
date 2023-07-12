import { SxProps } from '@mui/material/styles';
import { Theme } from '@mui/system';

export const layout: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: {
    tablet: '12px 16px',
    desktop: '0px 80px 32px 80px',
  },
  columnGap: {
    desktop: 'auto',
    mobile: '15px',
  },
  marginBottom: {
    desktop: 'auto',
    mobile: '24px',
  },
};

export const form: SxProps<Theme> = {
  display: 'grid',
  gridTemplateRows: '1fr',
  gap: '12px',
  marginBottom: '34px',
  alignItems: 'center',
  gridTemplateColumns: {
    tablet: '35% 45% 10%',
    desktop: '35% 15% 15% 5%',
  },
  justifyContent: {
    tablet: 'center',
    desktop: 'auto',
  },
};

export const collapseBtn: SxProps<Theme> = {
  display: 'none',
};

export const dropdownOne: SxProps<Theme> = {
  width: '100%',
};

export const dropdownTwo: SxProps<Theme> = {
  width: '100%',
};

export const subjectTitle: SxProps<Theme> = {
  // @include h4--semi-bold;
  //$breakpoint-tablet
  // .subject-title{
  // @include h6--bold;
  // }
};

export const subjectTeacherSearchList: SxProps<Theme> = {
  marginTop: '40px',
  marginBottom: '16px',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  rowGap: '4rem',
  gridAutoRows: 'max-content !important',
  alignItems: 'center',
  columnGap: '16px',
};

export const pageLoader: SxProps<Theme> = {
  paddingTop: '30px',
  paddingBottom: '30px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
};

export const collapseIcon: SxProps<Theme> = {
  height: '48px',
  aspectRatio: '1/1',
  // alignSelf: 'flex-start',
  alignSelf: 'center',
  display: {
    tablet: 'block !important',
    desktop: 'grid',
  },
};

export const sortIcon: SxProps<Theme> = {
  aspectRatio: '1/1',
  // alignSelf: 'flex-start',
  display: 'grid',
  alignSelf: 'center',
  height: {
    tablet: '36px',
    desktop: '48px',
  },
  svg: {
    width: {
      tablet: '70%',
      desktop: 'auto',
    },
  },
};

export const breadcrumb: SxProps<Theme> = {
  marginTop: '16px',
  marginBottom: '16px',
};
