import { createTheme } from '@mui/material/styles';

import customBreakpoints from '@/styles/theme/constants/breakpoints';
import customPalette from '@/styles/theme/constants/palette';
import customTypography from '@/styles/theme/constants/typography';

const theme = createTheme({
  palette: customPalette,
  typography: customTypography,
  breakpoints: customBreakpoints,
});

export default theme;
