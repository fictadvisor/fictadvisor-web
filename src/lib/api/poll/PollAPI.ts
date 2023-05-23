import { PollTeachersDTO } from '@/lib/api/poll/dto/PollTeachersDTO';
import { getAuthorizationHeader } from '@/lib/api/utils';

import { client } from '../instance';

import { CreateTeacherGradeBody } from './dto/CreateTeacherGradeBody';
import { GetTeacherQuestionsDTO } from './dto/GetTeacherQuestionsDTO';

class PollAPI {
  async getTeacherQuestions(
    disciplineTeacherId: string,
  ): Promise<GetTeacherQuestionsDTO> {
    const { data } = await client.get(
      `/disciplineTeachers/${disciplineTeacherId}/questions`,
      getAuthorizationHeader(),
    );
    return data;
  }

  async createTeacherGrade(
    body: CreateTeacherGradeBody,
    disciplineTeacherId: string,
  ) {
    const { data } = await client.post(
      `/disciplineTeachers/${disciplineTeacherId}/answers`,
      body,
      getAuthorizationHeader(),
    );
    return data;
  }

  async getUserTeachers(userId: string): Promise<PollTeachersDTO> {
    const { data } = await client.get(
      `/poll/teachers/${userId}`,
      getAuthorizationHeader(),
    );

    return data;
  }
}

export default new PollAPI();
