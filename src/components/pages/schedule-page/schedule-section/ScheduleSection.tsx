import { useEffect } from 'react';

import Progress from '@/components/common/ui/progress-mui';
import Schedule from '@/components/pages/schedule-page/schedule-section/components/schedule';
import ScheduleHeader from '@/components/pages/schedule-page/schedule-section/components/schedule-header';
import scheduleService from '@/lib/api/schedule/ScheduleAPI';
import { useSchedule } from '@/store/useSchedule';

import styles from './schedule-section.module.scss';

export const ScheduleSection = ({}) => {
  const groupId = '55b537e3-6786-454c-b934-3b92c7242095';
  const week = useSchedule(state => state.week);
  const addEventBody = useSchedule(state => state.addEventBody);
  const eventsBody = useSchedule(state => state.eventsBody);
  useEffect(() => {
    const getEvents = async () => {
      const res = await scheduleService.getEvents(
        groupId,
        week,
        true,
        true,
        true,
      );
      console.log(res);
      addEventBody(res);
    };

    getEvents();
  }, [addEventBody, week]);

  if (!eventsBody) return <Progress />;

  return (
    <section className={styles['schedule-section']}>
      <ScheduleHeader />
      <Schedule />
    </section>
  );
};
