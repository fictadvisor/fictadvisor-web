import { Box } from '@mui/material';

import TextAria from '@/components/common/ui/test/text-aria';
import { TextAriaSize } from '@/components/common/ui/test/text-aria/types';

import * as styles from './TextAriaPage.styles';

const TextAriaPage = () => {
  return (
    <Box sx={styles.container}>
      <TextAria placeholder={'Text Aria'} size={TextAriaSize.NORMAL} />
      <TextAria placeholder={'Text Aria'} size={TextAriaSize.SMALL} />
    </Box>
  );
};

export default TextAriaPage;
