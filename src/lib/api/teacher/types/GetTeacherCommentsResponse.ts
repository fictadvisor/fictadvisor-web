import { Meta } from '@/types/api';
import { TeacherQuestion } from '@/types/teacher';

export interface GetTeacherCommentsResponse {
  questions: TeacherQuestion[];
  meta: Meta;
}
