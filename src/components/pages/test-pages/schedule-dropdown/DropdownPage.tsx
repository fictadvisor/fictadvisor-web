import { useState } from 'react';
import { Box, List } from '@mui/material';

import { LockClosed } from '@/components/common/icons/LockClosed';

import ScheduleDropdown from '../../schedule-page/schedule-event-edit-section/components/schedule-dropdown';

import * as styles from './DropdownPage.styles';

const options = [
  { id: '1', label: 'hello1' },
  { id: '2', label: 'hello2' },
  { id: '3', label: 'hello3' },
  { id: '4', label: 'hello4' },
  { id: '5', label: 'hello5' },
];

const ScheduleDropdownPage = () => {
  const [change1, setChange1] = useState('');
  const [change2, setChange2] = useState('');
  return (
    <Box sx={styles.wrapper}>
      <List sx={styles.row}>
        <List sx={{ ...styles.column, width: '180px' }}>
          <ScheduleDropdown
            icon={<LockClosed />}
            options={options}
            placeholder="Input"
            onChange={value => {
              setChange1(value);
            }}
            value={change1}
          />
        </List>
        <List sx={{ ...styles.column, width: '380px' }}>
          <ScheduleDropdown
            options={options}
            placeholder="Input"
            onChange={value => {
              setChange2(value);
            }}
            value={change2}
          />
        </List>
      </List>
    </Box>
  );
};

export default ScheduleDropdownPage;
