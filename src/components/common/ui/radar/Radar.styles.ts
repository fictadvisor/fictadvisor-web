import { SxProps, Theme } from '@mui/material/styles';

import findImage from '@/components/common/ui/radar/utils/findImage';

export const background = (lables): SxProps<Theme> => ({
  width: '100%',
  aspectRatio: {
    mobile: '1/1',
    desktopSemiMedium: '1200/742',
  },
  backgroundImage: {
    mobile: findImage(lables, 'mobile'),
    desktopSemiMedium: findImage(lables),
  },
  backgroundSize: '100% 100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
export const wrapper: SxProps<Theme> = {
  width: {
    mobile: '80%',
    desktopSemiMedium: '50%',
  },
  height: {
    mobile: '80%',
    desktopSemiMedium: '100%',
  },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
