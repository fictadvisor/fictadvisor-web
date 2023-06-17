import { Teacher, TeacherContact, TeacherRole } from '@/types/teacher';

export interface GetTeacherResponse {
  teacher: Omit<Teacher, 'roles'>;
  roles: TeacherRole[];
  contacts: TeacherContact[];
}
