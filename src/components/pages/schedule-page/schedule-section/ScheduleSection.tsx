import { useEffect } from 'react';

import Progress from '@/components/common/ui/progress-mui';
import Schedule from '@/components/pages/schedule-page/schedule-section/components/schedule';
import ScheduleHeader from '@/components/pages/schedule-page/schedule-section/components/schedule-header';
import scheduleService from '@/lib/api/schedule/ScheduleAPI';
import { useSchedule } from '@/store/useSchedule';

import styles from './schedule-section.module.scss';

export const ScheduleSection = ({}) => {
  const groupId = '1de10b0f-bc47-492b-8b90-8bdaaf35f9cb';

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
