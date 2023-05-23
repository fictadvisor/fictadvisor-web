import { client } from '@/lib/api/instance';
import { GetStudentResourcesDTO } from '@/lib/api/student-resources/dto/GetStudentResourcesDTO';

class StudentResourcesAPI {
  async getAll() {
    const { data } = await client.get<GetStudentResourcesDTO>(
      '/studentResources',
    );
    return data;
  }
}

export default new StudentResourcesAPI();
