import { FC, useEffect } from 'react';
import { Box } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';

import PageLayout from '@/components/common/layout/page-layout/PageLayout';
import ScheduleEventEdit from '@/components/pages/schedule-page/schedule-event-edit-section/ScheduleEventEdit';
import useAuthentication from '@/hooks/use-authentication';
import useToast from '@/hooks/use-toast';
import { GetCurrentSemester } from '@/lib/api/dates/types/GetCurrentSemester';
import { useSchedule } from '@/store/schedule/useSchedule';
import { getCurrentWeek } from '@/store/schedule/utils/getCurrentWeek';
import { getLastDayOfAWeek } from '@/store/schedule/utils/getLastDayOfAWeek';
import theme from '@/styles/theme';
import { Group } from '@/types/group';
import type { Teacher } from '@/types/teacher';

import { CalendarSection } from './calendar-section/CalendarSection';
import { ButtonIcons } from './calendar-section/components/mobile/buttonIcons/ButtonIcons';
import { CalendarSectionMobile } from './calendar-section/components/mobile/CalendarSectionMobile';
import { ScheduleSection } from './schedule-section/ScheduleSection';
import ScheduleSectionMobile from './schedule-section/ScheduleSectionMobile';
import * as styles from './schedule-page.styles';
const MAX_WEEK_NUMBER = 20;
export interface SchedulePageProps {
  groups: Group[];
  semester: GetCurrentSemester | null;
}

/*
 * TODO:
 * [x] Make schedule responsive for tablet users
 * [x] Make red button show current time, but not chosen day
 * [] Merge all prs into schedule to work on 1 repo
 * [] Start developing side panel
 * [] Optimise components for mobile and for desktop using dynamic imports
 * [] Add global state for maximum week number
 * */
const SchedulePage: FC<SchedulePageProps> = ({ semester, groups }) => {
  const router = useRouter();
  const { user } = useAuthentication();
  const toast = useToast();

  const { setGroupId, setWeek, setDate, setChosenDay, openedEvent, groupId } =
    useSchedule(state => ({
      setGroupId: state.setGroupId,
      setWeek: state.setWeek,
      setDate: state.setDate,
      setChosenDay: state.setChosenDay,
      openedEvent: state.openedEvent,
      groupId: state.groupId,
    }));

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000 * 60);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    if (!router.isReady || !semester) return;
    useSchedule.setState(state => ({ semester: semester }));

    const { group, week } = router.query;

    const isWrongUrl =
      groups.every(_group => _group.id !== group) ||
      (week && +week < 1) ||
      (week && +week > MAX_WEEK_NUMBER);

    if (isWrongUrl) {
      router.push('/schedule');

      const currentWeek = getCurrentWeek(semester);

      let week = currentWeek;
      let day = new Date();

      if (currentWeek > MAX_WEEK_NUMBER) {
        week = MAX_WEEK_NUMBER;
        day = new Date(semester.endDate);
      }

      setWeek(week);
      setChosenDay(day);

      return;
    }

    if (group && !Array.isArray(group) && week) {
      setGroupId(group);
      setWeek(+week);
      setChosenDay(getLastDayOfAWeek(semester, +week));
    }
  }, [router.isReady]);

  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));

  useEffect(() => {
    if (!groupId) toast.info('Введіть свою групу', '', 4000);
  }, [groupId]);

  return (
    <PageLayout title={'Розклад'}>
      <Box sx={styles.schedulePage}>
        {isMobile ? (
          <CalendarSectionMobile groups={groups} />
        ) : (
          <CalendarSection groups={groups} />
        )}
        {isMobile && <ButtonIcons />}

        {isMobile ? <ScheduleSectionMobile /> : <ScheduleSection />}
      </Box>
      {openedEvent && <ScheduleEventEdit />}
    </PageLayout>
  );
};

export default SchedulePage;
