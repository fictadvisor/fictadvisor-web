import { client } from '@/lib/api/instance';
import { getAuthorizationHeader } from '@/lib/api/utils';
import { Event, TDiscipline } from '@/types/schedule';
class ScheduleAPI {
  async getLessonsByGroup(
    groupId: string,
    week: number,
    /*
     * TODO: add this to params when the back is ready
     * disciplineType:TDiscipline
     * */
  ) {
    const { data } = await client.get<Event[]>(
      `/schedule/groups/${groupId}/general`,
      {
        params: { week },
      },
    );

    return data;
  }
}

export default new ScheduleAPI();
