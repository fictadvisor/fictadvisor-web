import React, { FC, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import {
  ArrowRightIcon,
  ClockIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Box, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { Form, Formik, FormikConfig, FormikProps } from 'formik';

import { AddDeleteTeachers } from '@/components/pages/schedule-page/schedule-event-edit-section/schedule-form/components/add-delete-teachers/AddDeleteTeachers';
import { ScheduleInputSize } from '@/components/pages/schedule-page/schedule-event-edit-section/schedule-form/components/schedule-input/ScheduleInput';
import { eventTypeList } from '@/components/pages/schedule-page/schedule-event-edit-section/schedule-form/constants';
import { getOptionsFromDate } from '@/components/pages/schedule-page/schedule-event-edit-section/schedule-form/utils/getOptionsFromDate';
import { InfoCardTabs } from '@/components/pages/schedule-page/schedule-event-edit-section/types';
import { SharedEventBody } from '@/lib/api/schedule/types/shared';
import TeacherAPI from '@/lib/api/teacher/TeacherAPI';
import { useSchedule } from '@/store/schedule/useSchedule';

import CloseButton from '../../../../common/ui/icon-button-mui/variants/CloseButton/CloseButton';
import { skeletonProps } from '../utils/skeletonProps';

import { ScheduleFormikDropdown } from './components/schedule-dropdown/ScheduleDropdown';
import Input from './components/schedule-input';
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

  const { isLoading } = useQuery('AllTeachers', () => TeacherAPI.getAll(), {
    onSuccess: data => {
      if (teachers.length === 0)
        useSchedule.setState(state => ({ teachers: data.teachers }));
    },
  });

  const [tabValue, setTabValue] = useState<InfoCardTabs>(InfoCardTabs.EVENT);

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
          <Form>
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
                    icon={<ClockIcon width={24} height={24} />}
                  />
                  <ScheduleFormikDropdown
                    name={'endTime'}
                    options={getOptionsFromDate(date)}
                    placeholder={'Оберіть час'}
                    icon={<ArrowRightIcon width={24} height={24} />}
                  />
                </Box>
              )}

              {/*{['1', '2', '3'].includes(values.disciplineType) && (*/}
              {/*  <Box sx={styles.teacherContainer(device)}>*/}
              {/*    <Box>*/}
              {/*      <Typography variant="body1Medium">Викладач</Typography>*/}
              {/*      <Box>*/}
              {/*        {teacherInputList.map((teacher, index) => (*/}
              {/*          <FormikDropdown*/}
              {/*            key={index}*/}
              {/*            size={FieldSize.LARGE}*/}
              {/*            options={teachersList.map(teacher => ({*/}
              {/*              id: teacher.id,*/}
              {/*              value: teacher.id,*/}
              {/*              label: `${teacher.firstName} ${teacher.middleName} ${teacher.lastName}`,*/}
              {/*            }))}*/}
              {/*            name="teachers"*/}
              {/*            label=""*/}
              {/*            placeholder="Введи викладача"*/}
              {/*            showRemark={false}*/}
              {/*          />*/}
              {/*        ))}*/}
              {/*      </Box>*/}
              {/*    </Box>*/}

              {/*  </Box>*/}
              {/*)}*/}

              {/*<Box sx={styles.timeContainer()}>*/}
              {/*  <Typography variant="body1Medium">Час</Typography>*/}
              {/*  <Box>*/}
              {/*    <Input*/}
              {/*      placeholder="Початок"*/}
              {/*      // icon={<Start />}*/}
              {/*      name="startTime"*/}
              {/*      showRemark={false}*/}
              {/*    />*/}
              {/*    <Input*/}
              {/*      placeholder="Кінець"*/}
              {/*      // icon={<End />}*/}
              {/*      name="endTime"*/}
              {/*      showRemark={false}*/}
              {/*    />*/}
              {/*  </Box>*/}
              {/*</Box>*/}
              {/*<Box>*/}
              {/*  <Typography variant="body1Medium">Дата</Typography>*/}
              {/*  <Input showRemark={false} placeholder="Дата події" name="data" />*/}
              {/*</Box>*/}
              {/*<Box>*/}
              {/*  <Typography variant="body1Medium">Повторення</Typography>*/}
              {/*  <FormikDropdown*/}
              {/*    size={FieldSize.LARGE}*/}
              {/*    options={periodList}*/}
              {/*    label=""*/}
              {/*    name="period"*/}
              {/*    placeholder="вибери зі списку"*/}
              {/*    showRemark={false}*/}
              {/*  />*/}
              {/*</Box>*/}
              {/*<Box>*/}
              {/*  <Typography variant="body1Medium">Конференція</Typography>*/}
              {/*  <Input*/}
              {/*    showRemark={false}*/}
              {/*    placeholder="Додай посилання"*/}
              {/*    name="url"*/}
              {/*  />*/}
              {/*</Box>*/}
              {/*<Box sx={styles.infoContainer()}>*/}
              {/*  <Tabs sx={styles.tab()} value={tabValue} onChange={handleChange}>*/}
              {/*    <Tab value="event" label="Про подію" />*/}
              {/*    <Tab value="discipline" label="Про дисципліну" />*/}
              {/*  </Tabs>*/}
              {/*  {tabValue === 'event' && (*/}
              {/*    <TextField*/}
              {/*      placeholder="Напиши опис до події"*/}
              {/*      // size={TextAreaSize.NORMAL}*/}
              {/*      name="eventInfo"*/}
              {/*    />*/}
              {/*  )}*/}
              {/*  {tabValue === 'discipline' && (*/}
              {/*    <TextField*/}
              {/*      placeholder="Напиши опис до дисципліни"*/}
              {/*      // size={TextAreaSize.NORMAL}*/}
              {/*      name="disciplineInfo"*/}
              {/*    />*/}
              {/*  )}*/}
              {/*</Box>*/}
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
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ScheduleEventForm;
