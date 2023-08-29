import { SxProps, Theme } from '@mui/material';

export const container: SxProps<Theme> = {
  width: { mobile: '100%', tablet: '528px' },
  padding: '36px 36px 36px 28px',
  boxShadow: '0px 4px 50px 10px rgba(0, 0, 0, 0.25)',
  position: 'fixed',
  zIndex: 11,
  backgroundColor: 'backgroundDark.100',
  top: '64px',
  right: '0',
  maxHeight: 'calc(100% - 64px)',
  overflowY: 'scroll',
};

export const titleContainer: SxProps<Theme> = {
  display: 'flex',
  gap: '16px',
  justifyContent: 'space-between',
  alignItems: 'center',
};
export const scrollable: SxProps<Theme> = {
  overflowY: 'scroll',
};
export const content: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: '96px auto',
  alignItems: 'center',
  gap: '8px',
  mt: '16px',
};

export const infoContainer: SxProps<Theme> = {
  mt: '20px',
  '& .MuiTabs-flexContainer': {
    gap: '8px',
  },
  '& .MuiTabs-root': {
    minHeight: 'unset',
  },

  '& button': {
    p: '8px 16px',
    width: 'fit-content',
    height: 'fit-content',
  },
};

// export const container: SxProps<Theme> = {
//   width: { mobile: '100%', tablet: '528px' },
//   padding: '36px 36px 36px 28px',
//   boxShadow: '0px 4px 50px 10px rgba(0, 0, 0, 0.25)',
//   position: 'fixed',
//   zIndex: 3,
//   backgroundColor: 'backgroundDark.100',
//   top: '64px',
//   right: '0',
//   display: 'flex',
//   flexFlow: 'column nowrap',

// display: 'flex',
// flexDirection: 'column',
// gap: '8px',
// p: {
//   color: 'grey.400',
// },
// input: {
//   width: '100%',
//   borderRadius: '8px',
//   border: 'transparent',
//   height: '40px',
//   backgroundColor: 'backgroundDark.200',
//   '&:hover': {
//     border: 'transparent',
//   },
//   '&:focus': {
//     border: 'transparent',
//   },
//   '&::placeholder': {
//     color: 'grey.600',
//     fontSize: 14,
//     fontWeight: 400,
//   },
// },
// ...(device === ScheduleEventEditDevice.DESKTOP && {
//   '&>div': {
//     display: 'flex',
//     flexDirection: 'row',
//     '&>span': {
//       width: '92px',
//       flex: 1,
//     },
//     '&>div': {
//       flex: 3,
//     },
//   },
// }),
// ...(device === ScheduleEventEditDevice.MOBILE && {
//   '&>div': {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '2px',
//   },
// }),
// };
//
// export const titleContainer = (): SxProps<Theme> => ({
//   flexDirection: 'row!important',
//   gap: '16px!important',
// });
//
// export const dropdownContainer: SxProps<Theme> = {
//   div: {
//     outline: 'none',
//   },
// };
//
// export const teacherContainer = (
//   device: ScheduleEventEditDevice,
// ): SxProps<Theme> => ({
//   button: {
//     width: 'auto',
//   },
//
//   ...(device === ScheduleEventEditDevice.DESKTOP && {
//     display: 'flex',
//     flexDirection: 'column!important',
//     '&>div': {
//       display: 'flex',
//       flexDirection: 'row!important',
//       '&>span': {
//         flex: 1,
//       },
//       '&>div': {
//         width: '100%',
//         flex: 3,
//         '&>div': {
//           marginBottom: '8px',
//         },
//       },
//       '&:last-child': {
//         justifyContent: 'flex-end',
//         gap: '135px',
//       },
//     },
//   }),
//   ...(device === ScheduleEventEditDevice.MOBILE && {
//     '&>div': {
//       span: {
//         paddingBottom: '2px',
//       },
//     },
//
//     '&>div:last-child': {
//       display: 'flex',
//       flexDirection: 'row!important',
//       '&>div': {
//         width: '100%',
//         '&>div': {
//           marginBottom: '2px',
//         },
//       },
//       '&:last-child': {
//         justifyContent: 'space-between',
//       },
//     },
//   }),
// });
//
// export const timeContainer = (): SxProps<Theme> => ({
//   div: {
//     width: 'auto',
//     display: 'flex',
//     flexDirection: 'row',
//     gap: '8px',
//   },
// });
//
// export const buttonContainer = (): SxProps<Theme> => ({
//   display: 'flex',
//   justifyContent: 'space-between',
//   div: {
//     width: 'auto',
//     flexDirection: 'row!important',
//     gap: '8px!important',
//     justifyContent: 'flex-end',
//     flex: 'none!important',
//     button: {
//       width: '98px',
//     },
//   },
//   '&>button': {
//     width: 'auto',
//   },
// });
//
// export const infoContainer = (): SxProps<Theme> => ({
//   flexDirection: 'column!important',
// });
//
// export const tab = (): SxProps<Theme> => ({
//   button: {
//     marginTop: '20px',
//     marginBottom: '16px',
//     padding: '8px 16px 8px 16px',
//     textTransform: 'none',
//     color: theme.palette.white.main,
//     '&.Mui-selected': {
//       color: theme.palette.white.main,
//       padding: '8px 16px 8px 16px',
//       backgroundColor: theme.palette.backgroundDark[200],
//       borderRadius: '4px',
//     },
//   },
//   span: {
//     display: 'none!important',
//   },
// });
