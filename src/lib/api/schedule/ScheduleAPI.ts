import { client } from '@/lib/api/instance';
import { getAuthorizationHeader } from '@/lib/api/utils';
import { Event, TDiscipline } from '@/types/schedule';
class ScheduleAPI {
  async getLessons(groupId: string, week: number) {
    const { data } = await client.get<Event[]>(
      `/schedule/groups/${groupId}/general`,
      {
        params: { week },
      },
    );

    return data;
  }

  async getLessonsByGroup(groupId: string, week: number): Promise<Event[]> {
    const { data } = await client.get(`schedule/groups/${groupId}/events`, {
      ...getAuthorizationHeader(),
      params: { week },
    });
    return data;
  }
}

export default new ScheduleAPI();
