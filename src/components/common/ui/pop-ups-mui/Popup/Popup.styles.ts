import { SxProps, Theme } from '@mui/material/styles';

export const popup = (contentLeft): SxProps<Theme> => ({
  '.MuiDialog-paper': {
    backgroundColor: 'backgroundDark.200',
    maxWidth: '420px',
    color: 'grey.800',
    padding: contentLeft ? '15px' : '20px',
  },
});

export const popupsTitle = (contentLeft): SxProps<Theme> => ({
  paddingTop: contentLeft ? '0px' : '8.5px',
});

export const checkCircleIcon: SxProps<Theme> = {
  maxWidth: '28px',
  maxHeight: '28px',
  margin: '0 auto',
};

export const popupsTitleText = (contentLeft): SxProps<Theme> => ({
  paddingTop: contentLeft ? '0px' : '12px',
  paddingBottom: contentLeft ? '25px' : '9.5px',
  textAlign: contentLeft ? 'left' : 'center',
});

export const popupsContent = (contentLeft): SxProps<Theme> => ({
  paddingBottom: '32px',
  textAlign: contentLeft ? 'left' : 'center',
});
