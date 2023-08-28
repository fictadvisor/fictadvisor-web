import React, { useState } from 'react';
import { ClickAwayListener } from '@mui/base';
import { Box, Typography } from '@mui/material';

import Link from '@/components/common/ui/custom-link/CustomLink';
import IconButton from '@/components/common/ui/icon-button-mui';
import { IconButtonColor } from '@/components/common/ui/icon-button-mui/types';
import { CloseButton } from '@/components/common/ui/icon-button-mui/variants';
import {
  Tab,
  TabContext,
  TabList,
  TabPanel,
} from '@/components/common/ui/tab-mui';
import { TabTextPosition } from '@/components/common/ui/tab-mui/tab/types';
import Tag from '@/components/common/ui/tag-mui';
import { TagColor } from '@/components/common/ui/tag-mui/types';
import { getStringTime } from '@/components/pages/schedule-page/utils/getStringTime';
import { useSchedule } from '@/store/schedule/useSchedule';
import { TDiscipline } from '@/types/schedule';

import { EditIcon } from './components/Edit';
import * as styles from './ScheduleInfoCard.styles';

const TagLabelMapper: Record<TDiscipline, string> = {
  [TDiscipline.LECTURE]: 'Лекція',
  [TDiscipline.EXAM]: 'Екзмаен',
  [TDiscipline.LABORATORY]: 'Лабораторна',
  [TDiscipline.CONSULTATION]: 'Консультація',
  [TDiscipline.PRACTICE]: 'Практика',
  [TDiscipline.WORKOUT]: 'Тренування',
};

const TagColorMapper: Record<TDiscipline, TagColor> = {
  [TDiscipline.LECTURE]: TagColor.INDIGO,
  [TDiscipline.EXAM]: TagColor.VIOLET,
  [TDiscipline.LABORATORY]: TagColor.MINT,
  [TDiscipline.CONSULTATION]: TagColor.VIOLET,
  [TDiscipline.PRACTICE]: TagColor.ORANGE,
  [TDiscipline.WORKOUT]: TagColor.VIOLET,
};

enum InfoCardTabs {
  DISCIPLINE = 'discipline',
  EVENT = 'event',
}

const ScheduleInfoCard = () => {
  const { week, openedEvent } = useSchedule(state => ({
    week: state.week,
    openedEvent: state.openedEvent,
  }));

  const [tabValue, setTabValue] = useState<InfoCardTabs>(InfoCardTabs.EVENT);

  const closeCard = () => useSchedule.setState({ openedEvent: undefined });

  const handleEdit = () => {
    console.log('eeediting');
  };

  if (!openedEvent) return null;

  return (
    <ClickAwayListener onClickAway={closeCard}>
      <Box sx={styles.container}>
        <Box sx={styles.titleContainer}>
          <Typography variant="h5">{openedEvent?.name}</Typography>
          <Box sx={{ display: 'flex' }}>
            <IconButton
              color={IconButtonColor.TRANSPARENT}
              icon={<EditIcon />}
              onClick={handleEdit}
            />
            <CloseButton onClick={closeCard} />
          </Box>
        </Box>
        <Box sx={styles.row}>
          <Typography variant="body1Medium">Тип</Typography>
          <Tag
            text={TagLabelMapper[openedEvent.disciplineType]}
            color={TagColorMapper[openedEvent.disciplineType]}
          />
        </Box>
        <Box sx={styles.row}>
          <Typography variant="body1Medium">Викладач</Typography>
          <Box sx={styles.teachersContainer}>
            {openedEvent.teachers.length === 0 ? (
              <Typography variant="body1Medium">
                Інформація про викладачів відстуня
              </Typography>
            ) : (
              openedEvent?.teachers.map(teacher => (
                <Link
                  key={teacher.id}
                  href={`/teachers/${teacher.id}`}
                  text={`${teacher.firstName} ${teacher.middleName} ${teacher.lastName}`}
                />
              ))
            )}
          </Box>
        </Box>
        <Box sx={styles.row}>
          <Typography variant="body1Medium">Час</Typography>
          <Typography>
            {`${getStringTime(openedEvent?.startTime)} -  
            ${getStringTime(openedEvent?.endTime)}`}
          </Typography>
        </Box>
        <Box sx={styles.row}>
          <Typography variant="body1Medium">Конференція</Typography>
          <Link href={openedEvent?.url as string} text={openedEvent?.url} />
        </Box>

        <Box sx={styles.infoContainer}>
          <TabContext value={tabValue}>
            <TabList onChange={(_, value) => setTabValue(value)}>
              <Tab
                disableRipple
                label="Про подію"
                textPosition={TabTextPosition.CENTER}
                value={InfoCardTabs.EVENT}
              />
              <Tab
                disableRipple
                label="Про дисципліну"
                textPosition={TabTextPosition.CENTER}
                value={InfoCardTabs.DISCIPLINE}
              />
            </TabList>

            <TabPanel value={InfoCardTabs.EVENT}>
              <Typography>
                {openedEvent?.eventInfo ?? 'Інформація про подію відстуня'}
              </Typography>
            </TabPanel>
            <TabPanel value={InfoCardTabs.DISCIPLINE}>
              <Typography>
                {openedEvent?.disciplineInfo ??
                  'Інформація про дисципліну відстуня'}
              </Typography>
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </ClickAwayListener>
  );
};

export default ScheduleInfoCard;
