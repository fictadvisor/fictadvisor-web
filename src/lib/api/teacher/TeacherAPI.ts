import { TeacherSearchFormFields } from '@/components/pages/search-pages/search-form/types';
import { GetTeacherResponse } from '@/lib/api/teacher/types/GetTeacherResponse';
import { GetTeachersResponse } from '@/lib/api/teacher/types/GetTeachersResponse';
import { GetTeacherSubjectsResponse } from '@/lib/api/teacher/types/GetTeacherSubjectsResponse';
import { getAuthorizationHeader } from '@/lib/api/utils';
import { TeacherWithContact } from '@/types/teacher';

import { client } from '../instance';

class TeacherAPI {
  async get(teacherId: string): Promise<GetTeacherResponse> {
    const { data } = await client.get(
      `/teachers/${teacherId}`,
      getAuthorizationHeader(),
    );
    return data;
  }

  async getAll(
    { search, order, sort, group }: TeacherSearchFormFields,
    pageSize: number,
  ) {
    const { data } = await client.get<GetTeachersResponse>('/teachers', {
      params: {
        search,
        order,
        sort,
        group,
        pageSize,
      },
    });
    return data;
  }

  async getTeacherSubjects(teacherId: string) {
    const { data } = await client.get<GetTeacherSubjectsResponse>(
      `/teachers/${teacherId}/subjects`,
    );
    return data;
  }

  async getTeacherSubject(teacherId: string, subjectId: string) {
    const { data } = await client.get<TeacherWithContact>(
      `/teachers/${teacherId}/subjects/${subjectId}`,
    );
    return data;
  }
}

export default new TeacherAPI();
