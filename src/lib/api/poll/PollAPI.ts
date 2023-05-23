import { PollTeachersDTO } from '@/lib/api/poll/dto/PollTeachersDTO';
import { getAuthorizationHeader } from '@/lib/api/utils';

import { client } from '../instance';

import { CreateTeacherGradeBody } from './dto/CreateTeacherGradeBody';
import { GetTeacherQuestionsDTO } from './dto/GetTeacherQuestionsDTO';

class PollAPI {
  async getTeacherQuestions(
    disciplineTeacherId: string,
    token: string,
  ): Promise<GetTeacherQuestionsDTO> {
    const { data } = await client.get(
      `/disciplineTeachers/${disciplineTeacherId}/questions`,
      getAuthorizationHeader(token),
    );
    return data;
  }

  async createTeacherGrade(
    disciplineTeacherId: string,
    token: string,
    body: CreateTeacherGradeBody,
  ) {
    const { data } = await client.post(
      `/disciplineTeachers/${disciplineTeacherId}/answers`,
      body,
      getAuthorizationHeader(token),
    );
    return data;
  }

  async getUserTeachers(
    userId: string,
    token: string,
  ): Promise<PollTeachersDTO> {
    const { data } = await client.get(
      `/poll/teachers/${userId}`,
      getAuthorizationHeader(token),
    );

    return data;
  }
}

export default new PollAPI();
