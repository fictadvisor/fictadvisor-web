import { Box } from '@mui/material';

import TextAria from '@/components/pages/schedule-page/schedule-event-edit-section/components/text-area';
import { TextAriaSize } from '@/components/pages/schedule-page/schedule-event-edit-section/components/text-area/types';

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
