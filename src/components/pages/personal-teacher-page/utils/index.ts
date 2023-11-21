import { NextParsedUrlQuery } from 'next/dist/server/request-meta';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { ReadonlyURLSearchParams } from 'next/navigation';

import { TeacherPageInfo } from '@/lib/services/teacher/types';
import { Teacher } from '@/types/teacher';

export enum TeachersPageTabs {
  GENERAL = 'general',
  SUBJECTS = 'subjects',
  COMMENTS = 'reviews',
}

export interface PersonalTeacherPageProps {
  isLoading: boolean;
  isError: boolean;
  teacher: Teacher;
  data: TeacherPageInfo | undefined;
  query: ReadonlyURLSearchParams | null;
  teacherId: string;
  router: AppRouterInstance;
}
