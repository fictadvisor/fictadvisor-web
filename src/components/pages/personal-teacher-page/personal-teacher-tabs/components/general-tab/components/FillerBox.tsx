import { FC } from 'react';
import { Box } from '@mui/material';

import * as styles from './FillerBox.styles';
interface FillerBoxProps {
  width: string;
}

const FillerBox: FC<FillerBoxProps> = ({ width }) => {
  return (
    <>
      <Box sx={styles.filler(width)} />
      <Box sx={styles.filler(width)} />
      <Box sx={styles.filler(width)} />
      <Box sx={styles.filler(width)} />
    </>
  );
};

export default FillerBox;
