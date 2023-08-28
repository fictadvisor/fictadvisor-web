import { FC } from 'react';
import { useField } from 'formik';

import { SharedEventBody } from '@/lib/api/schedule/types/shared';
import { useSchedule } from '@/store/schedule/useSchedule';

import { ScheduleDropdown } from '../schedule-dropdown/ScheduleDropdown';
interface AddDeleteTeachersProps {
  name: string;
}
export const AddDeleteTeachers: FC<AddDeleteTeachersProps> = ({ name }) => {
  const [{ value }, { touched, error }, { setValue, setTouched }] =
    useField<SharedEventBody['teachers']>(name);

  const teachers = useSchedule(state => state.teachers);

  const handleValueChane = (teacherId: string) => {
    console.log('teacherId', teacherId);
  };

  console.log(value);

  return (
    <>
      {value.map((teacherId, i) => (
        <ScheduleDropdown
          key={i}
          onChange={handleValueChane}
          value={teacherId}
          options={teachers.map(teacher => ({
            id: teacher.id,
            label: `${teacher.lastName} ${teacher.firstName} ${teacher.middleName}`,
          }))}
        />
      ))}
    </>
  );
};
