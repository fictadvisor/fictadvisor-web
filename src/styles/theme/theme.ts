import { createTheme } from '@mui/material/styles';
import { ukUA } from '@mui/x-date-pickers/locales';

import customBreakpoints from '@/styles/theme/constants/breakpoints';
import customPalette from '@/styles/theme/constants/pallete';
import customTypography from '@/styles/theme/constants/typography';

const theme = createTheme(
  {
    palette: customPalette,
    typography: customTypography,
    breakpoints: customBreakpoints,
  },
  ukUA,
);

export default theme;
