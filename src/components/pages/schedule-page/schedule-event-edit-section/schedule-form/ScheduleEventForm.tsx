import React, { FC, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import {
  ArrowPathIcon,
  ArrowRightIcon,
  ClockIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';
import { Box, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { Form, Formik, FormikConfig, FormikProps } from 'formik';

import { Tab, TabContext, TabList, TabPanel } from '@/components/common/ui/tab';
import { TabTextPosition } from '@/components/common/ui/tab/tab/types';
import { AddDeleteTeachers } from '@/components/pages/schedule-page/schedule-event-edit-section/schedule-form/components/add-delete-teachers/AddDeleteTeachers';
import { ScheduleInputSize } from '@/components/pages/schedule-page/schedule-event-edit-section/schedule-form/components/schedule-input/ScheduleInput';
import { getOptionsFromDate } from '@/components/pages/schedule-page/schedule-event-edit-section/schedule-form/utils/getOptionsFromDate';
import { InfoCardTabs } from '@/components/pages/schedule-page/schedule-event-edit-section/types';
import { SharedEventBody } from '@/lib/api/schedule/types/shared';
import TeacherAPI from '@/lib/api/teacher/TeacherAPI';
import { useSchedule } from '@/store/schedule/useSchedule';

import CloseButton from '../../../../common/ui/icon-button-mui/variants/CloseButton/CloseButton';
import { skeletonProps } from '../utils/skeletonProps';

import { ScheduleFormikDropdown } from './components/schedule-dropdown/ScheduleDropdown';
import Input from './components/schedule-input';
import TextArea from './components/text-area';
import { eventTypeList, periodOptions } from './constants';
import * as styles from './ScheduleEventForm.styles';
import { validationSchema } from './validation';

interface ScheduleEventFormProps {
  onSubmit: FormikConfig<SharedEventBody>['onSubmit'];
  initialValues: SharedEventBody;
  onCloseButtonClick: () => void;
}

export const ScheduleEventForm: FC<ScheduleEventFormProps> = ({
  onSubmit,
  initialValues,
  onCloseButtonClick,
}) => {
  const [date, setDate] = useState<Date | undefined>(
    !initialValues.startTime ? undefined : new Date(initialValues.startTime),
  );
  const teachers = useSchedule(state => state.teachers);
  const [tabValue, setTabValue] = useState<InfoCardTabs>(InfoCardTabs.EVENT);

  const { isLoading } = useQuery('AllTeachers', () => TeacherAPI.getAll(), {
    onSuccess: data => {
      if (teachers.length === 0)
        useSchedule.setState(state => ({ teachers: data.teachers }));
    },
  });

  const form = useRef<FormikProps<SharedEventBody>>(null);

  // const handleCancel = () => {
  //   console.log('cancel');
  // };
  //
  // const handleClearAllFields = () => {
  //   form.current?.resetForm();
  //   setTeacherInputList([{}]);
  // };

  return (
    <Box sx={styles.container}>
      <Formik
        innerRef={form}
        initialValues={initialValues}
        onSubmit={onSubmit}
        // validationSchema={{}}
      >
        {({ values }) => (
          <Form style={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={styles.titleContainer}>
              <Input
                placeholder="Введи назву події"
                name="name"
                size={ScheduleInputSize.LARGE}
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
              <Typography variant="body1Medium" alignSelf="start">
                Викладач
              </Typography>
              {isLoading ? (
                <Skeleton {...skeletonProps} width={300} height={50} />
              ) : (
                <AddDeleteTeachers name={'teachers'} />
              )}
              <Typography variant="body1Medium">Дата початку</Typography>
              <Typography variant="body1Medium">
                Тут мав бути компонент Ігоря
              </Typography>
              <Typography variant="body1Medium">Час</Typography>
              {date && (
                <Box sx={{ display: 'flex', gap: '8px' }}>
                  <ScheduleFormikDropdown
                    name={'startTime'}
                    options={getOptionsFromDate(date)}
                    placeholder={'Оберіть час'}
                    icon={<ClockIcon width={22} height={22} />}
                  />
                  <ScheduleFormikDropdown
                    name={'endTime'}
                    options={getOptionsFromDate(date)}
                    placeholder={'Оберіть час'}
                    icon={<ArrowRightIcon width={22} height={22} />}
                  />
                </Box>
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
                size={ScheduleInputSize.NORMAL}
                icon={<LinkIcon width={22} height={22} />}
              />

              {/*<Box sx={styles.buttonContainer()}>*/}
              {/*  <Button*/}
              {/*    text="Видалити"*/}
              {/*    endIcon={<DeleteAll />}*/}
              {/*    variant={ButtonVariant.OUTLINE}*/}
              {/*    size={ButtonSize.SMALL}*/}
              {/*    onClick={handleClearAllFields}*/}
              {/*  />*/}
              {/*  <Box>*/}
              {/*    <Button*/}
              {/*      text="Скасувати"*/}
              {/*      variant={ButtonVariant.OUTLINE}*/}
              {/*      size={ButtonSize.SMALL}*/}
              {/*      onClick={handleCancel}*/}
              {/*    />*/}
              {/*    <Button*/}
              {/*      onClick={() => handleSubmit(values)}*/}
              {/*      text="Зберегти"*/}
              {/*      size={ButtonSize.SMALL}*/}
              {/*      type="submit"*/}
              {/*    />*/}
              {/*  </Box>*/}
              {/*</Box>*/}
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
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ScheduleEventForm;
