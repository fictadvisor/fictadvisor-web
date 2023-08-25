import Schedule from '@/components/pages/schedule-page/schedule-section/components/schedule';
import ScheduleHeader from '@/components/pages/schedule-page/schedule-section/components/schedule-header';

import styles from './schedule-section.module.scss';

export const ScheduleSection = ({}) => {
  return (
    <section className={styles['schedule-section']}>
      <ScheduleHeader />
      <Schedule />
    </section>
  );
};
