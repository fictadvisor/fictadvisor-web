import { client } from '@/lib/api/instance';
import { getAuthorizationHeader } from '@/lib/api/utils';

class CathedraAPI {
  async getAll() {
    const { data } = await client.get('/cathedras', getAuthorizationHeader());
    return data;
  }
}

export default new CathedraAPI();
