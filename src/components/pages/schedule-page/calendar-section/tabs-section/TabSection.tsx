import React from 'react';
import { Box } from '@mui/material';

import Tab from '@/components/common/ui/tab-mui/tab';
import TabContext from '@/components/common/ui/tab-mui/tab-context';
import TabList from '@/components/common/ui/tab-mui/tab-list';
import * as styles from '@/components/pages/mui-tab-page/MUITabPage.styles';

export const TabSection = () => {
  const [value, setValue] = React.useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        width: '100%',
        '& .MuiTabs-flexContainer': { justifyContent: 'center' },
      }}
    >
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label="lab API tabs example"
          scrollButtons={false}
        >
          <Tab sx={styles.normalButton} label="Студент" value="1" />
          <Tab sx={styles.normalButton} label="Сесія" value="2" />
          <Tab sx={styles.normalButton} label="Викладач" value="3" />
        </TabList>
      </TabContext>
    </Box>
  );
};
