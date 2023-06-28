import { ContactType } from '@/components/common/ui/teacher-page/contacts';
import { TeacherRoles } from '@/lib/api/teacher/dto/GetTeacherDTO';

export interface GetTeacherSubjectDTO {
  id: string;
  lastName: string;
  avatar: string;
  middleName: string;
  firstName: string;
  rating: number;
  subject?: {
    id: string;
    name: ContactType;
  };
  roles: TeacherRoles[];
  contacts: {
    link: string;
    id: string;
    name: ContactType;
    displayName: string;
  }[];
}
