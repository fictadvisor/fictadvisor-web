import { SxProps, Theme } from '@mui/system';

export const homeIcon: SxProps<Theme> = {
  width: '14px',
  height: '14px',
  position: 'relative',
  transform: 'translateY(-1px)',
};

export const breadcrumb: SxProps<Theme> = {
  li: {
    '&:last-child': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      flex: 1,
    },
  },
  a: {
    fontSize: '14px',
    gap: '4px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: '#E5E5E5',
    span: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  },
};

export const arrow: SxProps<Theme> = {
  width: '12px',
  height: '12px',
  display: 'flex',
};
