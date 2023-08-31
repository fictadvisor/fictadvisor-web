import { GetGroupDisciplines } from '@/lib/api/group/types/GetGroupDisciplines';
import { GetDisciplinesWithTeachers } from '@/lib/api/group/types/GetGroupTeachers';

export interface getDisciplinesAndTeachers {
  disciplines: GetGroupDisciplines;
  teachers: GetDisciplinesWithTeachers;
}
