import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';

import PageLayout from '@/components/common/layout/page-layout/PageLayout';
import {
  getCurrentWeek,
  getLastDayOfAWeek,
} from '@/components/pages/schedule-page/utils/getCurrentWeek';
import { GetCurrentSemester } from '@/lib/api/dates/types/GetCurrentSemester';
import { useSchedule } from '@/store/useSchedule';
import { Group } from '@/types/group';

import { CalendarSection } from './calendar-section/CalendarSection';
import { ScheduleSection } from './schedule-section/ScheduleSection';

import styles from './schedule-page.module.scss';
const MAX_WEEK_NUMBER = 20;
export interface SchedulePageProps {
  groups: Group[];
  semester: GetCurrentSemester | null;
}

const SchedulePage: FC<SchedulePageProps> = ({ semester, groups }) => {
  const router = useRouter();
  const { setGroupId, setWeek, setDate, setChosenDay } = useSchedule(state => ({
    setGroupId: state.setGroupId,
    setWeek: state.setWeek,
    setDate: state.setDate,
    setChosenDay: state.setChosenDay,
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000 * 60);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    if (!router.isReady || !semester) return;
    const { group, week } = router.query;

    if (
      groups.every(_group => _group.id !== group) ||
      (week && +week < 1) ||
      (week && +week > MAX_WEEK_NUMBER)
    ) {
      router.push('/schedule');

      const currentWeek = getCurrentWeek(semester);

      let week = currentWeek;

      if (currentWeek > MAX_WEEK_NUMBER) {
        week = MAX_WEEK_NUMBER;
        setChosenDay(new Date(semester.endDate));
      }

      setChosenDay(new Date());
      setWeek(week);

      return;
    }

    if (group && !Array.isArray(group) && week) {
      setGroupId(group);
      setWeek(+week);
      setChosenDay(getLastDayOfAWeek(semester, +(week as string)));
    }
  }, [router.isReady]);

  return (
    <PageLayout title={'Розклад'}>
      <div className={styles['schedule-layout']}>
        <CalendarSection groups={groups} semester={semester && semester} />
        <ScheduleSection />
      </div>
    </PageLayout>
  );
};

export default SchedulePage;
