import React, { FC, SyntheticEvent, useEffect, useRef, useState } from 'react';
import { Box, SxProps, Tab, Tabs, Theme, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Form, Formik, FormikProps } from 'formik';
import { useRouter } from 'next/router';

import Button from '@/components/common/ui/button-mui';
import {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button-mui/types';
import { Input } from '@/components/common/ui/form';
import { FieldSize } from '@/components/common/ui/form/common/types';
import FormikDropdown from '@/components/common/ui/form/with-formik/dropdown';
import { CloseButton } from '@/components/common/ui/icon-button-mui/variants';
import {
  eventTypeList,
  initialValues,
  periodList,
} from '@/components/pages/schedule-page/schedule-event-edit-section/components/schedule-form/constants';
import { Add } from '@/components/pages/schedule-page/schedule-event-edit-section/components/schedule-form/icons/Add';
import { Delete } from '@/components/pages/schedule-page/schedule-event-edit-section/components/schedule-form/icons/Delete';
import { DeleteAll } from '@/components/pages/schedule-page/schedule-event-edit-section/components/schedule-form/icons/DeleteAll';
import { ScheduleEventFormFields } from '@/components/pages/schedule-page/schedule-event-edit-section/components/schedule-form/types';
import { ScheduleEventEditDevice } from '@/components/pages/schedule-page/schedule-event-edit-section/types';
import ScheduleAPI from '@/lib/api/schedule/ScheduleAPI';
import TeacherAPI from '@/lib/api/teacher/TeacherAPI';
import mergeSx from '@/lib/utils/MergeSxStylesUtil';
import { Teacher } from '@/types/teacher';

import * as styles from './ScheduleEventForm.styles';
import { validationSchema } from './validation';

interface EventProps {
  sx?: SxProps<Theme>;
  device?: ScheduleEventEditDevice;
}

export const ScheduleEventForm: FC<EventProps> = ({
  sx = {},
  device = ScheduleEventEditDevice.DESKTOP,
}) => {
  const [tabValue, setTabValue] = useState('event');
  const [teacherInputList, setTeacherInputList] = useState([{}]);
  const [teachersList, setTeachersList] = useState<Teacher[]>([]);

  const router = useRouter();
  const { query, push } = router;
  const form = useRef<FormikProps<ScheduleEventFormFields>>(null);
  const eventId = query.eventId as string;

  const handleSubmit = async (values: ScheduleEventFormFields) => {
    try {
      console.log(eventId);
      await ScheduleAPI.addEvent(values);
      await router.push(`/schedule/events/`);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await TeacherAPI.getAll(
          { group: '', order: 'asc', search: '', sort: '' },
          50,
        );
        if (response?.teachers) {
          setTeachersList(response.teachers);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchTeachers();
  }, []);

  const handleCancel = () => {
    console.log('cancel');
  };

  const handleAddTeacher = () => {
    const newTeacher = {
      id: teacherInputList.length + 1,
      text: '',
    };
    setTeacherInputList([...teacherInputList, newTeacher]);
  };

  const handleDeleteTeacher = () => {
    if (teacherInputList.length > 1) {
      const updatedTeachers = teacherInputList.slice(
        0,
        teacherInputList.length - 1,
      );
      setTeacherInputList(updatedTeachers);
    }
  };

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  const handleClearAllFields = () => {
    form.current?.resetForm();
    setTeacherInputList([{}]);
  };

  return (
    <Formik
      innerRef={form}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validateOnMount
      validateOnChange
      enableReinitialize
      validationSchema={validationSchema}
    >
      {({ values }) => (
        <Form>
          <Box sx={mergeSx(styles.container(device), sx)}>
            <Box sx={styles.titleContainer()}>
              <Input
                placeholder="Введи назву події"
                name="name"
                showRemark={false}
              />
              <CloseButton />
            </Box>
            <Box sx={styles.dropdownContainer()}>
              <Typography variant="body1Medium">Тип</Typography>
              <FormikDropdown
                size={FieldSize.LARGE}
                options={eventTypeList}
                label="Обери тип події"
                name="disciplineType"
                placeholder="вибери зі списку"
                showRemark={false}
              />
            </Box>

            {['1', '2', '3'].includes(values.disciplineType) && (
              <Box sx={styles.teacherContainer(device)}>
                <Box>
                  <Typography variant="body1Medium">Викладач</Typography>
                  <Box>
                    {teacherInputList.map((teacher, index) => (
                      <FormikDropdown
                        key={index}
                        size={FieldSize.LARGE}
                        options={teachersList.map(teacher => ({
                          id: teacher.id,
                          value: teacher.id,
                          label: `${teacher.firstName} ${teacher.middleName} ${teacher.lastName}`,
                        }))}
                        name="teachers"
                        label=""
                        placeholder="Введи викладача"
                        showRemark={false}
                      />
                    ))}
                  </Box>
                </Box>
                <Box>
                  <Button
                    text="Додати"
                    onClick={handleAddTeacher}
                    variant={ButtonVariant.TEXT}
                    startIcon={<Add />}
                    size={ButtonSize.SMALL}
                  />
                  <Button
                    text="Видалити"
                    onClick={handleDeleteTeacher}
                    variant={ButtonVariant.TEXT}
                    startIcon={<Delete />}
                    color={ButtonColor.PRIMARY}
                    size={ButtonSize.SMALL}
                  />
                </Box>
              </Box>
            )}

            <Box sx={styles.timeContainer()}>
              <Typography variant="body1Medium">Час</Typography>
              <Box>
                <Input
                  placeholder="Початок"
                  // icon={<Start />}
                  name="startTime"
                  showRemark={false}
                />
                <Input
                  placeholder="Кінець"
                  // icon={<End />}
                  name="endTime"
                  showRemark={false}
                />
              </Box>
            </Box>
            <Box>
              <Typography variant="body1Medium">Дата</Typography>
              <Input showRemark={false} placeholder="Дата події" name="data" />
            </Box>
            <Box>
              <Typography variant="body1Medium">Повторення</Typography>
              <FormikDropdown
                size={FieldSize.LARGE}
                options={periodList}
                label=""
                name="period"
                placeholder="вибери зі списку"
                showRemark={false}
              />
            </Box>
            <Box>
              <Typography variant="body1Medium">Конференція</Typography>
              <Input
                showRemark={false}
                placeholder="Додай посилання"
                name="url"
              />
            </Box>
            <Box sx={styles.infoContainer()}>
              <Tabs sx={styles.tab()} value={tabValue} onChange={handleChange}>
                <Tab value="event" label="Про подію" />
                <Tab value="discipline" label="Про дисципліну" />
              </Tabs>
              {tabValue === 'event' && (
                <TextField
                  placeholder="Напиши опис до події"
                  // size={TextAreaSize.NORMAL}
                  name="eventInfo"
                />
              )}
              {tabValue === 'discipline' && (
                <TextField
                  placeholder="Напиши опис до дисципліни"
                  // size={TextAreaSize.NORMAL}
                  name="disciplineInfo"
                />
              )}
            </Box>
            <Box sx={styles.buttonContainer()}>
              <Button
                text="Видалити"
                endIcon={<DeleteAll />}
                variant={ButtonVariant.OUTLINE}
                size={ButtonSize.SMALL}
                onClick={handleClearAllFields}
              />
              <Box>
                <Button
                  text="Скасувати"
                  variant={ButtonVariant.OUTLINE}
                  size={ButtonSize.SMALL}
                  onClick={handleCancel}
                />
                <Button
                  onClick={() => handleSubmit(values)}
                  text="Зберегти"
                  size={ButtonSize.SMALL}
                  type="submit"
                />
              </Box>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default ScheduleEventForm;
