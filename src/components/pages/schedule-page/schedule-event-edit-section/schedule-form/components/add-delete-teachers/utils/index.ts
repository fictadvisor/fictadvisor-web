import { DropDownOption } from '@/components/common/ui/form/dropdown/types';
import { GetGroupDisciplines } from '@/lib/api/group/types/GetGroupDisciplines';
import { GetDisciplinesWithTeachers } from '@/lib/api/group/types/GetGroupTeachers';

export const getTeacherOptions = (
  data: GetDisciplinesWithTeachers,
): DropDownOption[] => {
  const result: DropDownOption[] = [];

  for (const subject of data) {
    for (const teacher of subject.teachers) {
      result.push({
        id: teacher.id,
        label: `${teacher.lastName} ${teacher.firstName} ${teacher.middleName}`,
      });
    }
  }

  return result;
};

export const getDisciplineOptions = (
  data: GetGroupDisciplines,
): DropDownOption[] => {
  return data.disciplines.map(discipline => ({
    id: discipline.id,
    label: discipline.subject.name,
  }));
};
