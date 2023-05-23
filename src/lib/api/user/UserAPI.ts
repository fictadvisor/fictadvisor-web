import { ChangeInfoBody } from '@/lib/api/user/dto/ChangeInfoBody';
import { GetContactsDTO } from '@/lib/api/user/dto/GetContactsDTO';
import { LinkTelegramBody } from '@/lib/api/user/dto/LinkTelegramBody';
import { RequestNewGroupBody } from '@/lib/api/user/dto/RequestNewGroupBody';
import { getAuthorizationHeader } from '@/lib/api/utils';

import { client } from '../instance';

import { AddContactBody } from './dto/AddContactBody';

class UserAPI {
  async changeInfo(userId: string, body: ChangeInfoBody) {
    const { data } = await client.patch(
      `/users/${userId}/student`,
      body,
      getAuthorizationHeader(),
    );
    return data;
  }

  async linkTelegram(userId: string, body: LinkTelegramBody) {
    const { data } = await client.post(
      `/users/${userId}/telegram`,
      body,
      getAuthorizationHeader(),
    );
    return data;
  }

  async addContact(userId: string, body: AddContactBody) {
    const { data } = await client.post(
      `/users/${userId}/contacts`,
      body,
      getAuthorizationHeader(),
    );
    return data;
  }

  async getContacts(userId: string): Promise<GetContactsDTO> {
    const { data } = await client.get(
      `/users/${userId}/contacts`,
      getAuthorizationHeader(),
    );
    return data;
  }

  async deleteContact(userId: string, contactName: string) {
    const { data } = await client.delete(
      `/users/${userId}/contacts/${contactName}`,
      getAuthorizationHeader(),
    );
    return data;
  }

  async requestNewGroup(body: RequestNewGroupBody, userId: string) {
    const { data } = await client.patch(
      `/users/${userId}/requestNewGroup`,
      body,
      getAuthorizationHeader(),
    );
    return data;
  }
}

export default new UserAPI();
