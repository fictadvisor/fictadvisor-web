import { ContactType } from '@/components/pages/personal-teacher-page/contacts';

export enum TeacherRoles {
  LECTURER = 'LECTURER',
  LABORANT = 'LABORANT',
  PRACTICIAN = 'PRACTICIAN',
}

export interface GetTeacherDTO {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  description: string;
  avatar: string;
  rating: number;
  roles: TeacherRoles[];
  contacts: {
    link: string;
    id: string;
    name: ContactType;
    displayName: string;
  }[];
}
export interface GetTeachersDTO {
  teachers: GetTeacherDTO[];
  meta: {
    pageSize: number;
    page: number;
    prevPageElems: number;
    nextPageElems: number;
  };
}
