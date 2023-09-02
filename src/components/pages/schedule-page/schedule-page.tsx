import { FC, useEffect } from 'react';
import { Box } from '@mui/material';
import { useMediaQuery } from '@mui/material';

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

import { CalendarSection } from './calendar-section/CalendarSection';
import { ButtonIcons } from './calendar-section/components/mobile/buttonIcons/ButtonIcons';
import { CalendarSectionMobile } from './calendar-section/components/mobile/CalendarSectionMobile';
import { ScheduleSection } from './schedule-section/ScheduleSection';
import ScheduleSectionMobile from './schedule-section/ScheduleSectionMobile';
import * as styles from './schedule-page.styles';
const MAX_WEEK_NUMBER = 20;
import { useRouter } from 'next/router';

import ScheduleAPI from '@/lib/api/schedule/ScheduleAPI';
import { PostEventBody } from '@/lib/api/schedule/types/PostEventBody';
import { SharedEventBody } from '@/lib/api/schedule/types/shared';

import { initialValues } from './schedule-event-edit-section/schedule-form/constants';
import { ScheduleEventForm } from './schedule-event-edit-section/schedule-form/ScheduleEventForm';
import { addEventFormValidationSchema } from './schedule-event-edit-section/schedule-form/validation';
import { makeNegativeValuesUndefined } from './utils/undefineNegativeValues';
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
  const [
    useInitialise,
    handleWeekChange,
    groupId,
    openedEvent,
    isNewEventAdded,
  ] = useSchedule(state => [
    state.useInitialise,
    state.handleWeekChange,
    state.groupId,
    state.openedEvent,
    state.isNewEventAdded,
  ]);

  useInitialise(semester, groups);

  const closeForm = () => {
    useSchedule.setState({ isNewEventAdded: false });
  };

  const handleFormSubmit = async (values: SharedEventBody) => {
    console.log(values);
    const finalValues: PostEventBody = makeNegativeValuesUndefined(values);
    finalValues.groupId = groupId;
    try {
      await ScheduleAPI.addEvent(finalValues, groupId);
      useSchedule.setState(state => ({ eventsBody: [] }));
      await handleWeekChange();
    } catch (e) {
      console.log(e);
    }
  };

  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));

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
      {isNewEventAdded && (
        <ScheduleEventForm
          onCloseButtonClick={closeForm}
          onCancelButtonClick={closeForm}
          initialValues={initialValues}
          validationSchema={addEventFormValidationSchema}
          onSubmit={handleFormSubmit}
          isNewEvent
        />
      )}
    </PageLayout>
  );
};

export default SchedulePage;
