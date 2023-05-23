import { ChangeInfoBody } from '@/lib/api/user/dto/ChangeInfoBody';
import { GetContactsDTO } from '@/lib/api/user/dto/GetContactsDTO';
import { LinkTelegramBody } from '@/lib/api/user/dto/LinkTelegramBody';
import { RequestNewGroupBody } from '@/lib/api/user/dto/RequestNewGroupBody';
import { getAuthorizationHeader } from '@/lib/api/utils';

import { client } from '../instance';

import { AddContactBody } from './dto/AddContactBody';

class UserAPI {
  async changeInfo(userId: string, token: string, body: ChangeInfoBody) {
    const { data } = await client.patch(
      `/users/${userId}/student`,
      body,
      getAuthorizationHeader(token),
    );
    return data;
  }

  async linkTelegram(userId: string, token: string, body: LinkTelegramBody) {
    const { data } = await client.post(
      `/users/${userId}/telegram`,
      body,
      getAuthorizationHeader(token),
    );
    return data;
  }

  async addContact(userId: string, token: string, body: AddContactBody) {
    const { data } = await client.post(
      `/users/${userId}/contacts`,
      body,
      getAuthorizationHeader(token),
    );
    return data;
  }

  async getContacts(userId: string, token: string): Promise<GetContactsDTO> {
    const { data } = await client.get(
      `/users/${userId}/contacts`,
      getAuthorizationHeader(token),
    );
    return data;
  }

  async deleteContact(userId: string, contactName: string, token: string) {
    const { data } = await client.delete(
      `/users/${userId}/contacts/${contactName}`,
      getAuthorizationHeader(token),
    );
    return data;
  }

  async requestNewGroup(
    body: RequestNewGroupBody,
    userId: string,
    token: string,
  ) {
    const { data } = await client.patch(
      `/users/${userId}/requestNewGroup`,
      body,
      getAuthorizationHeader(token),
    );
    return data;
  }
}

export default new UserAPI();
