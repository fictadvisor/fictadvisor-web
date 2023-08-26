import ScheduleInfoCard from '@/components/pages/schedule-page/schedule-event-edit-section/components/schedule-info-card';
import { ScheduleEventEditDevice } from '@/components/pages/schedule-page/schedule-event-edit-section/types';

const ScheduleInfoPage = () => {
  return <ScheduleInfoCard week="1" device={ScheduleEventEditDevice.DESKTOP} />;
};

export default ScheduleInfoPage;
