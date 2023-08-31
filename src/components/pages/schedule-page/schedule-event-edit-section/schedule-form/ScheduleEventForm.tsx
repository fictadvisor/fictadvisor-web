import React, { FC, Fragment, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import {
  ArrowPathIcon,
  ArrowRightIcon,
  ClockIcon,
  LinkIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { Box, Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { Form, Formik, FormikConfig, FormikProps } from 'formik';

import Button from '@/components/common/ui/button-mui';
import {
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button-mui/types';
import IconButton from '@/components/common/ui/icon-button-mui';
import {
  IconButtonColor,
  IconButtonShape,
} from '@/components/common/ui/icon-button-mui/types';
import { Tab, TabContext, TabList, TabPanel } from '@/components/common/ui/tab';
import { TabTextPosition } from '@/components/common/ui/tab/tab/types';
import { AddDeleteTeachers } from '@/components/pages/schedule-page/schedule-event-edit-section/schedule-form/components/add-delete-teachers/AddDeleteTeachers';
import CalendarInput from '@/components/pages/schedule-page/schedule-event-edit-section/schedule-form/components/calendar-input';
import { DisciplineRelatedFields } from '@/components/pages/schedule-page/schedule-event-edit-section/schedule-form/components/discipline-related-fields/DisciplineRelatedFields';
import { getOptionsFromDate } from '@/components/pages/schedule-page/schedule-event-edit-section/schedule-form/utils/getOptionsFromDate';
import { InfoCardTabs } from '@/components/pages/schedule-page/schedule-event-edit-section/types';
import { SharedEventBody } from '@/lib/api/schedule/types/shared';
import TeacherAPI from '@/lib/api/teacher/TeacherAPI';
import { useSchedule } from '@/store/schedule/useSchedule';
import theme from '@/styles/theme';

import CloseButton from '../../../../common/ui/icon-button-mui/variants/CloseButton/CloseButton';
import { skeletonProps } from '../utils/skeletonProps';

import { ScheduleFormikDropdown } from './components/schedule-dropdown/ScheduleDropdown';
import Input from './components/schedule-input';
import TextArea from './components/text-area';
import { eventTypeList, periodOptions } from './constants';
import * as styles from './ScheduleEventForm.styles';

interface ScheduleEventFormProps {
  onSubmit: FormikConfig<SharedEventBody>['onSubmit'];
  initialValues: SharedEventBody;
  onCloseButtonClick: () => void;
  onCancelButtonClick: () => void;
  onDeleteButtonClick?: () => void;
  validationSchema: FormikConfig<SharedEventBody>['validationSchema'];
  isNewEvent?: boolean;
}

export const ScheduleEventForm: FC<ScheduleEventFormProps> = ({
  onSubmit,
  initialValues,
  onCloseButtonClick,
  onDeleteButtonClick,
  onCancelButtonClick,
  validationSchema,
  isNewEvent = false,
}) => {
  const [date, setDate] = useState<Date | null>(
    !initialValues.startTime ? null : new Date(initialValues.startTime),
  );
  const [tabValue, setTabValue] = useState<InfoCardTabs>(InfoCardTabs.EVENT);

  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));

  return (
    <Box sx={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ values }) => (
          <Form style={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={styles.titleContainer}>
              <Input
                placeholder="Введи назву події"
                name="name"
                size={'medium'}
              />
              <CloseButton onClick={onCloseButtonClick} />
            </Box>
            <Box sx={styles.content}>
              <Typography variant="body1Medium">Тип</Typography>
              <ScheduleFormikDropdown
                name={'disciplineType'}
                options={eventTypeList}
                placeholder={'Оберіть тип події'}
              />
              {values.disciplineType && (
                <DisciplineRelatedFields values={values} />
              )}
              <Typography variant="body1Medium">Дата початку</Typography>
              <CalendarInput date={date} setDate={setDate} />
              {date && (
                <Fragment>
                  <Typography variant="body1Medium">Час</Typography>
                  <Box sx={styles.timeInputs}>
                    <ScheduleFormikDropdown
                      disableClearable
                      name={'startTime'}
                      options={getOptionsFromDate(date)}
                      placeholder={'Оберіть час'}
                      icon={<ClockIcon width={22} height={22} />}
                    />
                    <ScheduleFormikDropdown
                      disableClearable
                      name={'endTime'}
                      options={getOptionsFromDate(date)}
                      placeholder={'Оберіть час'}
                      icon={<ArrowRightIcon width={22} height={22} />}
                    />
                  </Box>
                </Fragment>
              )}
              <Typography variant="body1Medium">Повторення</Typography>
              <ScheduleFormikDropdown
                name={'period'}
                options={periodOptions}
                placeholder={'Оберіть період'}
                icon={<ArrowPathIcon width={22} height={22} />}
              />
              <Typography variant="body1Medium">Конференція</Typography>
              <Input
                placeholder="Введи посилання"
                name="url"
                icon={<LinkIcon width={22} height={22} />}
              />
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
                  <TextArea name={'eventInfo'} />
                </TabPanel>
                <TabPanel value={InfoCardTabs.DISCIPLINE}>
                  <TextArea name={'disciplineInfo'} />
                </TabPanel>
              </TabContext>
            </Box>

            <Box sx={styles.buttonContainer(!!onCancelButtonClick)}>
              <Button
                sx={styles.btn}
                text="Видалити"
                endIcon={<TrashIcon width={22} height={22} />}
                variant={ButtonVariant.OUTLINE}
                size={ButtonSize.SMALL}
                onClick={onDeleteButtonClick}
              />
              <Box sx={{ display: 'flex', gap: '8px' }}>
                <Button
                  sx={styles.btn}
                  text="Скасувати"
                  variant={ButtonVariant.OUTLINE}
                  size={ButtonSize.SMALL}
                  onClick={onCancelButtonClick}
                />
                <Button
                  sx={styles.btn}
                  text="Зберегти"
                  size={ButtonSize.SMALL}
                  type="submit"
                />
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ScheduleEventForm;
