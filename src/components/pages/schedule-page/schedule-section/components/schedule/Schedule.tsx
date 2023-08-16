import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import ScheduleColumn from '@/components/pages/schedule-page/schedule-section/components/schedule/components/schedule-column/ScheduleColumn';
import ScheduleTime from '@/components/pages/schedule-page/schedule-section/components/schedule/components/schedule-time';
import scheduleService from '@/lib/api/schedule/ScheduleAPI';
import { GetEventTransformedBody } from '@/lib/api/schedule/types/GetEventBody';
import { transformEvents } from '@/lib/api/schedule/utils/transformEvents';
import { useSchedule } from '@/store/useSchedule';

import * as styles from './Schedule.styles';

const Schedule = () => {
  const groupId = '55b537e3-6786-454c-b934-3b92c7242095';
  const week = useSchedule(state => state.week).toString();
  const [data, setData] = useState<GetEventTransformedBody | null>(null);

  useEffect(() => {
    const getEvents = async () => {
      const res = await scheduleService.getEvents(groupId, +week);
      setData(transformEvents(res));
    };

    getEvents();
  }, []);

  return (
    <Box sx={styles.layout}>
      <ScheduleTime />
      <Box sx={styles.schedule}>
        {data && (
          <Box sx={styles.columns}>
            {data.days.map((day, index) => (
              <ScheduleColumn key={index} events={day.events} />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Schedule;
