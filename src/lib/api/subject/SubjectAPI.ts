import { SubjectSearchFormFields } from '@/components/pages/search-pages/search-form/types';
import { getAuthorizationHeader } from '@/lib/api/utils';

import { client } from '../instance';

import { GetListOfSubjectsDTO } from './dto/GetListOfSubjectsDTO';
import { GetTeachersBySubjectDTO } from './dto/GetTeachersBySubjectDTO';

class SubjectsAPI {
  async getTeachersBySubject(
    disciplineId: string,
  ): Promise<GetTeachersBySubjectDTO> {
    const { data } = await client.get(`subjects/${disciplineId}/teachers`);
    return data;
  }

  async getAll(
    { search, order, sort, group }: SubjectSearchFormFields,
    pageSize: number,
  ): Promise<GetListOfSubjectsDTO> {
    const url = `/subjects?${search ? `search=${search}` : ''}${
      order ? `&order=${order}` : ''
    }${sort ? `&sort=${sort}` : ''}${group ? `&group=${group}` : ''}${
      pageSize ? `&pageSize=${pageSize}` : ''
    }`;

    const { data } = await client.get(url, getAuthorizationHeader());
    return data;
  }
}

export default new SubjectsAPI();
