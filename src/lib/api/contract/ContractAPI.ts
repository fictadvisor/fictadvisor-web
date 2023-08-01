import { ContractBody } from '@/lib/api/contract/types/ContractBody';
import { client } from '@/lib/api/instance';
import { getAuthorizationHeader } from '@/lib/api/utils';

import { AdminContractData } from './types/ContractBody';

class ContractAPI {
  async createContract(body: ContractBody) {
    const { data } = await client.post('/documents/contract', body);
    return data;
  }
  async createAdminContract(body: AdminContractData) {
    const { data } = await client.post(
      '/entrants/contract',
      body,
      getAuthorizationHeader(),
    );
    return data;
  }
}

export default new ContractAPI();
