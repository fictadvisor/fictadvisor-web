import { FC } from 'react';
import { Box } from '@mui/material';

import TextAria from '@/components/pages/test-pages/text-aria';
import { TextAriaSize } from '@/components/pages/test-pages/text-aria/types';

import * as styles from './TextAriaPage.styles';

const TextAriaPage: FC<TextAriaSize> = () => {
  return (
    <Box sx={styles.container}>
      <TextAria value={'Text Aria'} size={TextAriaSize.NORMAL} />
      <TextAria value={'Text Aria'} size={TextAriaSize.SMALL} />
    </Box>
  );
};

export default TextAriaPage;
