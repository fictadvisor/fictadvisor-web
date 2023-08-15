import { useEffect } from 'react';
import { useRouter } from 'next/router';

import PageLayout from '@/components/common/layout/page-layout/PageLayout';
import { useSchedule } from '@/store/useSchedule';

import { CalendarSection } from './calendar-section/CalendarSection';
import { ScheduleSection } from './schedule-section/ScheduleSection';

import styles from './schedule-page.module.scss';

const SchedulePage = () => {
  const router = useRouter();
  const { setGroupId, setWeek } = useSchedule(state => ({
    setGroupId: state.setGroupId,
    setWeek: state.setWeek,
  }));

  useEffect(() => {
    if (!router.isReady) return;
    const { group, week } = router.query;
    if (group && week && typeof group === 'string') {
      setGroupId(group);
      setWeek(+week);
    }
  }, [router.isReady]);

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
