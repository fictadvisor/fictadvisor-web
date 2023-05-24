import { SxProps, Theme } from '@mui/material';

export const headerCardContainer: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexWrap: 'nowrap',
  transition: 'all linear 0.1s',
  minHeight: 'fit-content',
  marginLeft: '28px',
  '& img': {
    aspectRatio: 1 / 1,
    width: '48px',
    height: '48px',
  },
  '&:hover': {
    color: 'grey.700',
    borderColor: 'grey.700',
  },
};

export const headerCardPosition: SxProps<Theme> = {
  '& focus': {
    color: 'grey.300',
  },
  '&:hover': {
    color: 'grey.700',
    borderColor: 'grey.700',
  },
};

export const headerCardInfo: SxProps<Theme> = {
  color: 'grey.500',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: '4px',

  '&:focus': {
    color: 'grey.400',
    borderColor: 'grey.300',
  },
  '&:hover': {
    color: 'grey.700',
    borderColor: 'grey.700',
  },
};

export const name: SxProps<Theme> = {
  color: 'grey.600',
  '&:hover': {
    color: 'grey.700',
  },
};

export const headerCardGroupName: SxProps<Theme> = {
  padding: '0 2px 0 2px',
  marginRight: '8px',
  borderRadius: '5px',
  border: 0.2,
  borderColor: 'grey.500',
};

// export const headerCardContainer: SxProps<Theme> = {
//   display: 'flex',
//   justifyContent: 'flex-start',
//   alignItems: 'center',
//   flexWrap: 'nowrap',
//   marginLeft: '28px',
//   backgroundColor: '$background-dark-0',
//   minWidth: 'fit-content',
//   minHeight: 'fit-content',
//   width: 'fit-content',
//   border: '1px solid transparent',
//   transition: 'all linear 0.1s',

//   '& img': {
//     aspectRatio: '1/1',
//     width: '36px',
//     height: '36px',
//   },

//   '& body1Medium': {
//     fontSize: '14px',
//   },

//   '& .header-card-info': {
//     fontSize: '11px',
//     color: '$gray-300',
//     display: 'flex',
//     flexFlow: 'row',
//     justifyContent: 'center',
//     gap: '4px',
//   },

//   '& .header-card-group-name': {
//     padding: '2px',
//     marginRight: '8px',
//     borderRadius: '5px',
//     border: '0.2px solid $gray-300',
//   },

//   '&:hover': {
//     cursor: 'pointer',

//     '& body1Medium, & .header-card-info': {
//       color: '$gray-500',
//     },

//     '& .header-card-group-name': {
//       borderColor: '$gray-500',
//     },
//   },

//   '&:focus': {
//     '& body1Medium, & .header-card-info': {
//       color: '$gray-400',
//     },

//     '& .header-card-group-name, & .header-card-postition': {
//       color: '$gray-300',
//     },

//     '& .header-card-group-name': {
//       borderColor: '$gray-300',
//     },
//   },

//   '&:active': {
//     '& .header-card-info': {
//       '& body1Medium': {
//         color: '$gray-300',
//       },
//       color: '$gray-300',
//     },

//     '& .header-card-group-name': {
//       borderColor: '$gray-300',
//     },

//     borderColor: '$background-dark-10',
//   },
// };
