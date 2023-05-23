import { getAuthorizationHeader } from '@/lib/api/utils';

import { client } from '../instance';

import { CreateLessonBody } from './dto/CreateLessonBody';
import { GetDynamicLessonsDTO } from './dto/GetDynamicLessonsDTO';
import { GetLessonDTO } from './dto/GetLessonDTO';
import { GetScheduleDTO } from './dto/GetScheduleDTO';
import { GetSessionScheduleDTO } from './dto/GetSessionScheduleDTO';
import { GetTeacherScheduleDTO } from './dto/GetTeacherScheduleDTO';
import { UpdateDynamicLessonBody } from './dto/UpdateDynamicLessonBody';
import { UpdateStaticLessonBody } from './dto/UpdateStaticLessonBody';

class ScheduleAPI {
  async getSession(
    groupId: string,
    token: string,
  ): Promise<GetSessionScheduleDTO> {
    const { data } = await client.get(
      `/group/${groupId}/session`,
      getAuthorizationHeader(token),
    );
    return data;
  }

  async getSchedule(
    id: string,
    token: string,
    fortnight?: string,
  ): Promise<GetScheduleDTO> {
    const { data } = await client.get(
      `/groups/${id}/static/${fortnight}`,
      getAuthorizationHeader(token),
    );
    return data;
  }

  async getDynamicLessons(
    id: string,
    token: string,
    fortnight?: string,
  ): Promise<GetDynamicLessonsDTO> {
    const { data } = await client.get(
      `schedule/groups/${id}/temporary/${fortnight}`,
      getAuthorizationHeader(token),
    );
    return data;
  }

  async createLesson(token: string, body: CreateLessonBody) {
    const { data } = await client.post(
      `/schedule`,
      body,
      getAuthorizationHeader(token),
    );
    return data;
  }

  async updateStaticLesson(
    lessonId: string,
    token: string,
    body: UpdateStaticLessonBody,
  ) {
    const { data } = await client.patch(
      `/schedule/lessons/static/${lessonId}`,
      body,
      getAuthorizationHeader(token),
    );
    return data;
  }

  async updateDynamicLesson(
    id: string,
    fortnight: string,
    token: string,
    body: UpdateDynamicLessonBody,
  ) {
    const { data } = await client.patch(
      `/schedule/lessons/static/${id}/${fortnight}}`,
      body,
      getAuthorizationHeader(token),
    );
    return data;
  }

  async getStaticLesson(
    id: string,
    groupId: string,
    token: string,
  ): Promise<GetLessonDTO> {
    const { data } = await client.get(
      `/schedule/group/${groupId}/lessons/static/${id}`,
      getAuthorizationHeader(token),
    );
    return data;
  }

  async getTemporaryLesson(
    id: string,
    groupId: string,
    token: string,
  ): Promise<GetLessonDTO> {
    const { data } = await client.get(
      `/schedule/group/${groupId}/lessons/temporary/${id}`,
      getAuthorizationHeader(token),
    );
    return data;
  }

  async getTeacherSchedule(
    teacherId: string,
    token: string,
    fortnight?: string,
  ): Promise<GetTeacherScheduleDTO> {
    const { data } = await client.get(
      `/schedule/teachers/${teacherId}/static/${fortnight}`,
      getAuthorizationHeader(token),
    );
    return data;
  }
}

export default new ScheduleAPI();
