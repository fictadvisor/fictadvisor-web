import { AxiosResponse } from 'axios';

import { client } from '@/lib/api/instance';
import { User } from '@/types/user';

import { PERMISSION, PermissionData, PermissionResponse } from './types';

class PermissionService {
  async getPermissionList(permissions: PERMISSION[], user: User) {
    const body: PermissionData = {
      permissions: permissions,
      values: {
        userId: user.id,
        groupId: user.group?.id,
        roleId: user.group?.role,
      },
    };

    const response: AxiosResponse<PermissionResponse> = await client.post(
      `/permissions/check?userId=${user.id}`,
      body,
    );
    return response.data;
  }
}

export default new PermissionService();
