import { useEffect } from 'react';

import Progress from '@/components/common/ui/progress-mui';
import Schedule from '@/components/pages/schedule-page/schedule-section/components/schedule';
import ScheduleHeader from '@/components/pages/schedule-page/schedule-section/components/schedule-header';
import scheduleService from '@/lib/api/schedule/ScheduleAPI';
import { useSchedule } from '@/store/useSchedule';

import styles from './schedule-section.module.scss';

export const ScheduleSection = ({}) => {
  const groupId = '55b537e3-6786-454c-b934-3b92c7242095';

  const { eventsBody, setGroupId } = useSchedule(state => ({
    eventsBody: state.eventsBody,
    setGroupId: state.setGroupId,
  }));

  useEffect(() => {
    setGroupId(groupId);
  }, []);

  if (!eventsBody) return <Progress />;

  return (
    <section className={styles['schedule-section']}>
      <ScheduleHeader />
      <Schedule />
    </section>
  );
};
