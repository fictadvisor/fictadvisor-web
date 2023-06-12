import { FC } from 'react';
import { TabList as MuiTabList, TabListProps } from '@mui/lab';

const TabList: FC<TabListProps> = props => {
  return (
    <MuiTabList
      TabIndicatorProps={{
        style: { display: 'none' },
      }}
      aria-label="lab tabs"
      {...props}
    />
  );
};

export default TabList;
