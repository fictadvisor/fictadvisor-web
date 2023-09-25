import { SxProps, Theme } from '@mui/material/styles';

export const container: SxProps<Theme> = {
  display: 'flex',
  width: '100%',
  gap: '8%',
  flexDirection: { mobile: 'column-reverse', desktopSemiMedium: 'row' },
};

export const personalInfo: SxProps<Theme> = {
  width: {
    mobile: '100%',
    desktopSemiMedium: '60%',
    desktopMedium: '45%',
  },
};

export const form: SxProps<Theme> = {
  width: '100%',
};

export const avatar: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  width: { mobile: '50%', desktopSemiMedium: '100%' },
  height: { mobile: '50%', desktopSemiMedium: '100%' },
  marginBottom: { mobile: '16px', desktopSemiMedium: '16px' },
  marginTop: { mobile: '6px', desktopSemiMedium: '0' },

  img: {
    maxWidth: { mobile: '136px' },
    maxHeight: { mobile: '136px' },
    width: { mobile: '50%', desktopSemiMedium: 'auto' },
    height: { mobile: '50%', desktopSemiMedium: '50%' },
    borderRadius: '100%',
  },
};

export const avatarAndTelegramInfo: SxProps<Theme> = {
  display: 'flex',
  height: 'fit-content',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: { mobile: '16px', desktopSemiMedium: '18px' },
};

export const telegramButton: SxProps<Theme> = {
  width: 'fit-content',
};

export const divider: SxProps<Theme> = {
  paddingBottom: '20px',
};

export const groupDivider: SxProps<Theme> = {
  padding: '36px 0 36px 0',
};

export const contactItem: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '2.5%',
  marginBottom: '26px',
  a: {
    flexGrow: 1,
  },
  '& button': {
    marginTop: '10px',
  },
};

export const addSocialLinksContainer: SxProps<Theme> = {
  border: '2px solid $background-dark-35',
  padding: '26px 25px',
  marginBottom: '55px',
  borderRadius: '6px',
};
