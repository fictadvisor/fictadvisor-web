import { Contact } from '@/types/contact';

export enum TeacherRole {
  LECTURER = 'LECTURER',
  LABORANT = 'LABORANT',
  PRACTICIAN = 'PRACTICIAN',
}

export interface TeacherSubject {
  id: string;
  name: string;
}

export interface Teacher {
  id: string;
  roles: TeacherRole[];
  firstName: string;
  middleName: string;
  lastName: string;
  avatar: string;
}

export interface DisciplineTeacher extends Teacher {
  disciplineTeacherId: string;
  subject: TeacherSubject;
}

export interface TeacherWithContact extends Teacher {
  contacts: Contact[];
}
