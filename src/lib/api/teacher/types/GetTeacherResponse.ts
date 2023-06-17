import { Contact } from '@/types/contact';
import { Teacher, TeacherRole } from '@/types/teacher';

export interface GetTeacherResponse {
  teacher: Omit<Teacher, 'roles'>;
  roles: TeacherRole[];
  contacts: Contact[];
}
