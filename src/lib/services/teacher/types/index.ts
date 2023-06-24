import { GetTeacherCommentsResponse } from '@/lib/api/teacher/types/GetTeacherCommentsResponse';
import { GetTeacherMarksResponse } from '@/lib/api/teacher/types/GetTeacherMarksResponse';
import { GetTeacherResponse } from '@/lib/api/teacher/types/GetTeacherResponse';
import { GetTeacherSubjectsResponse } from '@/lib/api/teacher/types/GetTeacherSubjectsResponse';
import { TeacherWithContactsAndSubject } from '@/types/teacher';

export interface TeacherButtonInfo {
  text: string;
  href: string;
}

export interface TeacherPageInfo {
  info: GetTeacherResponse;
  subjects: GetTeacherSubjectsResponse['subjects'];
  comments: GetTeacherCommentsResponse;
  marks: GetTeacherMarksResponse['marks'];
  hasEnoughMarks: boolean;
  marksText: string;
  commentText: string;
  buttonInfo: TeacherButtonInfo[];
}

export interface TeacherSubjectPageInfo {
  info: TeacherWithContactsAndSubject;
  comments: GetTeacherCommentsResponse;
  marks: GetTeacherMarksResponse['marks'];
  marksText: string;
  commentText: string;
  hasEnoughMarks: boolean;
  buttonInfo: TeacherButtonInfo[];
}
