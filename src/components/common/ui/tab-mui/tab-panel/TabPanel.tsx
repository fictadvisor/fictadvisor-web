import { FC } from 'react';
import { TabPanel as MuiTabPanel, TabPanelProps } from '@mui/lab';

const TabPanel: FC<TabPanelProps> = props => {
  return <MuiTabPanel {...props} />;
};
export default TabPanel;
