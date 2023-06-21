import { Box, List } from '@mui/material';

import { LockClosed } from '@/components/common/icons/LockClosed';
import ScheduleInput, {
  ScheduleInputSize,
} from '@/components/common/ui/schedule-input/ScheduleInput';

import * as styles from './ScheduleInputPage.styles';

const ScheduleInputPage = () => {
  return (
    <Box sx={styles.wrapper}>
      <List sx={styles.row}>
        <List sx={styles.column}>
          <ScheduleInput />
          <ScheduleInput icon={<LockClosed />} />
          <ScheduleInput placeholder="PlaceHolder" />
          <ScheduleInput placeholder="PlaceHolder" icon={<LockClosed />} />
        </List>
        <List sx={styles.column}>
          <ScheduleInput placeholder="PlaceHolder" isDisabled={true} />
          <ScheduleInput
            icon={<LockClosed />}
            placeholder="PlaceHolder"
            isDisabled={true}
          />
          <ScheduleInput
            icon={<LockClosed />}
            placeholder="PlaceHolder"
            size={ScheduleInputSize.large}
          />
          <ScheduleInput
            icon={<LockClosed />}
            placeholder="PlaceHolder"
            size={ScheduleInputSize.large}
            isDisabled={true}
          />
        </List>
      </List>
    </Box>
  );
};

export default ScheduleInputPage;
