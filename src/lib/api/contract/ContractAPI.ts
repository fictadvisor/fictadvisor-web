import { ContractBody } from '@/lib/api/contract/types/ContractBody';
import { DeleteEntrantBody } from '@/lib/api/contract/types/DeleteEntrantBody';
import { EntrantFuIlResponse } from '@/lib/api/contract/types/EntrantFullResponse';
import { PriorityDataBody } from '@/lib/api/contract/types/PriorityDataBody';
import { client } from '@/lib/api/instance';
import { getAuthorizationHeader } from '@/lib/api/utils';
import { Fullname } from '@/types/contract';

import { AdminContractBody } from './types/AdminContractBody';

class ContractAPI {
  async createContract(body: ContractBody) {
    const { data } = await client.post('/documents/contract', body);
    return data;
  }

  async createAdminContract(body: AdminContractBody) {
    const { data } = await client.post(
      '/entrants/contract',
      body,
      getAuthorizationHeader(),
    );
    return data;
  }

  async getEntrantPriority(body: Fullname) {
    const data = await client.get(`/entrants/priority`, {
      params: body,
      ...getAuthorizationHeader(),
    });
    return data.data;
  }

  async entrantPriorityApprove(body: Fullname) {
    await client.patch(
      '/entrants/priority/approve',
      body,
      getAuthorizationHeader(),
    );
  }

  async createPriority(body: PriorityDataBody) {
    const { data } = await client.post('/documents/priority', body);
    return data;
  }

  async deleteEntrant(body: DeleteEntrantBody) {
    const { data } = await client.delete('/entrants/data', {
      params: body,
      ...getAuthorizationHeader(),
    });
    return data;
  }

  async getEntrantInfo(body: Fullname) {
    const { data } = await client.get<EntrantFuIlResponse>('/entrants', {
      params: body,
      ...getAuthorizationHeader(),
    });
    return data;
  }
}

export default new ContractAPI();
