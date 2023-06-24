import { Teacher } from '@/types/teacher';

export interface GetTeachersResponse {
  teachers: Omit<Teacher, 'role'>[];
}
