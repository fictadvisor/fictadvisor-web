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

export interface TeacherWithContactsAndSubject extends Teacher {
  contacts: Contact[];
  subject: TeacherSubject;
}

export enum TeacherMarkType {
  RADAR = 'RADAR',
  CIRCLE = 'CIRCLE',
  AMOUNT = 'AMOUNT',
}

export interface TeacherAmountMark {
  name: string;
  amount: number;
  type: TeacherMarkType.AMOUNT;
  mark: {
    [key: number]: number;
  };
}

export interface TeacherRadarCircleMark {
  name: string;
  amount: number;
  type: TeacherMarkType.RADAR | TeacherMarkType.CIRCLE;
  mark: number;
}

export interface TeacherComment {
  discipline: string;
  semester: number;
  year: number;
  comment: string;
}

export interface TeacherQuestion {
  name: string;
  amount: number;
  comments: TeacherComment[];
}
