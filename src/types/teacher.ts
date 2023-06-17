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

export enum TeacherContactType {
  YOUTUBE = 'YOUTUBE',
  DISCORD = 'DISCORD',
  TELEGRAM = 'TELEGRAM',
  INSTAGRAM = 'INSTAGRAM',
  FACEBOOK = 'FACEBOOK',
  GITHUB = 'GITHUB',
  TWITTER = 'TWITTER',
  MAIL = 'MAIL',
}

export interface TeacherContact {
  link: string;
  id: string;
  name: TeacherContactType;
  displayName: string;
}

export interface TeacherWithContact extends Teacher {
  contacts: TeacherContact[];
}
