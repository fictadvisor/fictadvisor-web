import { FC } from 'react';
import { Box } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

import mergeSx from '@/lib/utils/MergeSxStylesUtil';

import * as styles from './PollButton.styles';

interface PollButtonProps {
  sx?: SxProps<Theme>;
}

const PollButton: FC<PollButtonProps> = ({ sx }) => {
  return <Box sx={mergeSx(styles.wrapper, sx)}> </Box>;
};

export default PollButton;
