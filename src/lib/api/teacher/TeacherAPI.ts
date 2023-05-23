import { TeacherSearchFormFields } from '@/components/pages/search-pages/search-form/types';
import { GetTeacherSubjectDTO } from '@/lib/api/teacher/dto/GetTeacherSubjectDTO';
import { GetTeacherSubjectsDTO } from '@/lib/api/teacher/dto/GetTeacherSubjectsDTO';
import { getAuthorizationHeader } from '@/lib/api/utils';

import { client } from '../instance';

import { GetTeacherDTO } from './dto/GetTeacherDTO';
import { GetTeacherStatsDTO } from './dto/GetTeacherStatsDTO';

class TeacherAPI {
  async get(teacherId: string): Promise<GetTeacherDTO> {
    const { data } = await client.get(
      `/teachers/${teacherId}`,
      getAuthorizationHeader(),
    );
    return data;
  }

  async getAll(
    { search, order, sort, group }: TeacherSearchFormFields,
    pageSize: number,
  ): Promise<{ teachers: GetTeacherDTO[] }> {
    const url = `/teachers?${search ? `search=${search}` : ''}${
      order ? `&order=${order}` : ''
    }${sort ? `&sort=${sort}` : ''}${group ? `&group=${group}` : ''}${
      pageSize ? `&pageSize=${pageSize}` : ''
    }`;

    const { data } = await client.get(url, getAuthorizationHeader());
    return data;
  }

  async getTeacherStats(
    teacherId: string,
    semester: number | string,
    subject: string,
    year: number,
  ): Promise<GetTeacherStatsDTO> {
    const { data } = await client.get(`/teachers/${teacherId}/stats?
        semester=${semester}
        &subject=${subject}
        &year=${year}`);
    return data;
  }
  async getTeacherSubjects(teacherId: string): Promise<GetTeacherSubjectsDTO> {
    const { data } = await client.get(`/teachers/${teacherId}/subjects`);
    return data;
  }
  async getTeacherSubject(
    teacherId: string,
    subjectId: string,
  ): Promise<GetTeacherSubjectDTO> {
    const { data } = await client.get(
      `/teachers/${teacherId}/subjects/${subjectId}`,
    );
    return data;
  }
}

export default new TeacherAPI();
