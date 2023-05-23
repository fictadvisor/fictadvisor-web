import { AddStudentsByMailBody } from '@/lib/api/group/dto/AddStudentsByMailBody';
import { AddStudentsByMailDTO } from '@/lib/api/group/dto/AddStudentsByMailDTO';
import { GetAllDTO } from '@/lib/api/group/dto/GetAllDTO';
import { GetGroupStudentsDTO } from '@/lib/api/group/dto/GetGroupStudentsDTO';
import { GetRequestDTO } from '@/lib/api/group/dto/GetRequestDTO';
import { VerifyStudentBody } from '@/lib/api/group/dto/VerifyStudentBody';
import { VerifyStudentDTO } from '@/lib/api/group/dto/VerifyStudentDTO';
import { getAuthorizationHeader } from '@/lib/api/utils';

import { client } from '../instance';

class GroupAPI {
  async addStudentsByMail(
    groupId: string,
    body: AddStudentsByMailBody,
  ): Promise<AddStudentsByMailDTO> {
    return await client.post(
      `/groups/${groupId}/addEmails`,
      body,
      getAuthorizationHeader(),
    );
  }

  async getAll(): Promise<GetAllDTO> {
    const res = await client.get('/groups');
    return res.data;
  }

  async getGroupStudents(groupId: string): Promise<GetGroupStudentsDTO> {
    const res = await client.get(
      `/groups/${groupId}/students`,
      getAuthorizationHeader(),
    );
    return res.data;
  }

  async getRequestStudents(groupId: string): Promise<GetRequestDTO> {
    const res = await client.get(
      `/groups/${groupId}/unverifiedStudents`,
      getAuthorizationHeader(),
    );
    return res.data;
  }

  async removeStudent(groupId, studentId) {
    await client.delete(
      `/groups/${groupId}/remove/${studentId}`,
      getAuthorizationHeader(),
    );
  }

  async switchStudentRole(groupId, studentId, body) {
    await client.patch(
      `/groups/${groupId}/switch/${studentId}`,
      body,
      getAuthorizationHeader(),
    );
  }

  async verifyStudent(
    groupId: string,
    userId: string,
    body: VerifyStudentBody,
  ): Promise<VerifyStudentDTO> {
    const { data } = await client.patch(
      `/groups/${groupId}/verify/${userId}`,
      body,
      getAuthorizationHeader(),
    );
    return data;
  }
}

export default new GroupAPI();
