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
  disciplineTeacherId: string;
  roles: TeacherRole[];
  firstName: string;
  middleName: string;
  lastName: string;
  avatar: string;
  subject: TeacherSubject;
}
