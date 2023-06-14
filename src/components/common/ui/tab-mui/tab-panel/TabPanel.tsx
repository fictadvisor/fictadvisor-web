import { FC } from 'react';
import { TabPanel as Panel, TabPanelProps } from '@mui/lab';

import * as styles from './TabPanel.styles';

const TabPanel: FC<TabPanelProps> = props => {
  return <Panel sx={styles.tabPanel} {...props} />;
};
export default TabPanel;
