import PageLayout from '@/components/common/layout/page-layout/PageLayout';

import { CalendarSection } from './calendar-section/CalendarSection';
import { ScheduleSection } from './schedule-section/ScheduleSection';

import styles from './schedule-page.module.scss';
const SchedulePage = () => {
  return (
    <PageLayout title={'Розклад'}>
      <div className={styles['schedule-layout']}>
        <CalendarSection />
        <ScheduleSection />
      </div>
    </PageLayout>
  );
};

export default SchedulePage;
