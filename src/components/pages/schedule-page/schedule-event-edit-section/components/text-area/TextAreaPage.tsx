import { Box } from '@mui/material';
import TextArea from 'src/components/common/ui/test/text-area';

import { TextAreaSize } from '@/components/common/ui/test/text-area/types';

import * as styles from './TextAreaPage.styles';

const TextAreaPage = () => {
  return (
    <Box sx={styles.container}>
      <TextArea placeholder={'Text Aria'} size={TextAreaSize.NORMAL} />
      <TextArea placeholder={'Text Aria'} size={TextAreaSize.SMALL} />
    </Box>
  );
};

export default TextAreaPage;
