import { CalendarIcon as CalendarIconMUI } from '@heroicons/react/24/outline';
import { Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import * as styles from './CalendarInput.styles';
const CalendarIcon = () => {
  return <CalendarIconMUI height={24} width={24} />;
};

const CalendarInput = () => {
  return (
    <Box sx={styles.wrapper}>
      <DatePicker
        slotProps={{
          textField: { sx: styles.input },
          popper: { sx: styles.calendar },
        }}
        slots={{ openPickerIcon: CalendarIcon }}
        sx={styles.datePicker}
      />
    </Box>
  );
};

export default CalendarInput;
