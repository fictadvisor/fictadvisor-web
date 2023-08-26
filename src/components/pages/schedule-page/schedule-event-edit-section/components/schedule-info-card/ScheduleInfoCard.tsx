import React, { FC, SyntheticEvent, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Box, Tab, Tabs, Theme, Typography } from '@mui/material';
import { SxProps } from '@mui/material/styles';
import { useRouter } from 'next/router';

import Link from '@/components/common/ui/custom-link/CustomLink';
import IconButton from '@/components/common/ui/icon-button-mui';
import { IconButtonColor } from '@/components/common/ui/icon-button-mui/types';
import { CloseButton } from '@/components/common/ui/icon-button-mui/variants';
import Tag from '@/components/common/ui/tag-mui';
import { TagColor } from '@/components/common/ui/tag-mui/types';
import toast from '@/components/common/ui/toast-mui';
import { ScheduleEventEditDevice } from '@/components/pages/schedule-page/schedule-event-edit-section/types';
import ScheduleAPI from '@/lib/api/schedule/ScheduleAPI';
import mergeSx from '@/lib/utils/MergeSxStylesUtil';

import { EditIcon } from './components/Edit';
import * as styles from './ScheduleInfoCard.styles';

interface ScheduleInfoCardProps {
  device?: ScheduleEventEditDevice;
  sx?: SxProps<Theme>;
  week: string;
}

const ScheduleInfoCard: FC<ScheduleInfoCardProps> = ({
  device = ScheduleEventEditDevice.DESKTOP,
  week,
  sx = {},
}) => {
  const [tabValue, setTabValue] = useState('event');
  const router = useRouter();
  const { query, push } = router;
  const eventId = query.eventId as string;

  const {
    isLoading,
    isError,
    data: scheduleEventResponse,
  } = useQuery(
    ['event', eventId, week],
    () => ScheduleAPI.getEventInfo(eventId),
    {
      refetchOnWindowFocus: false,
      retry: false,
    },
  );

  useEffect(() => {
    // if (isError) {
    //   void push('/events');
    // }
  }, [isError, push, toast]);

  if (isLoading || isError || !scheduleEventResponse) return null;

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };
  const handleEdit = () => {
    router.push(`/test/schedule-edit/`, eventId);
  };

  const data = scheduleEventResponse;

  return (
    <Box sx={mergeSx(styles.container(device), sx)}>
      <Box sx={styles.titleContainer()}>
        <Typography variant="h5">{data.name}</Typography>
        <Box>
          <IconButton
            color={IconButtonColor.TRANSPARENT}
            icon={<EditIcon />}
            onClick={handleEdit}
          />
          <CloseButton />
        </Box>
      </Box>
      <Box>
        <Typography variant="body1Medium">Тип</Typography>
        {/*{data.disciplineType === 'Лекція' && (*/}
        {/*  <Tag color={TagColor.INFO} text={data.disciplineType} />*/}
        {/*)}*/}
        {/*{data.disciplineType === 'Практика' && (*/}
        {/*  <Tag color={TagColor.ORANGE} text={data.disciplineType} />*/}
        {/*)}*/}
        {/*{data.disciplineType === 'Лабораторна' && (*/}
        {/*  <Tag color={TagColor.INDIGO} text={data.disciplineType} />*/}
        {/*)}*/}
        {/*{data.disciplineType === 'Інша подія' && (*/}
        {/*  <Tag color={TagColor.SECONDARY} text={data.disciplineType} />*/}
        {/*)}*/}
      </Box>
      <Box sx={styles.teachersContainer(device)}>
        <Typography variant="body1Medium">Викладач</Typography>
        <Box>
          {data.teachers.map(teacher => {
            return (
              <Link
                key={teacher.id}
                href={teacher.id}
                text={`${teacher.firstName} ${teacher.middleName} ${teacher.lastName}`}
              />
            );
          })}
        </Box>
      </Box>
      <Box>
        <Typography variant="body1Medium">Дата</Typography>
        <Typography>
          {data.startTime} - {data.endTime}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body1Medium">Конференція</Typography>
        <Link href={data.url} text={data.url} />
      </Box>
      <Box sx={styles.infoContainer()}>
        <Tabs sx={styles.tab()} value={tabValue} onChange={handleChange}>
          <Tab value="event" label="Про подію" />
          <Tab value="discipline" label="Про дисципліну" />
        </Tabs>
        {tabValue === 'event' && <Typography>{data.eventInfo}</Typography>}
        {tabValue === 'discipline' && (
          <Typography>{data.disciplineInfo}</Typography>
        )}
      </Box>
    </Box>
  );
};

export default ScheduleInfoCard;
