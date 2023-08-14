import { client } from '@/lib/api/instance';
import { DetailedEventBody } from '@/lib/api/schedule/types/DetailedEventBody';
import { GetEventBody } from '@/lib/api/schedule/types/GetEventBody';
import { getAuthorizationHeader } from '@/lib/api/utils';
class ScheduleAPI {
  async getEvents(groupId: string, week: number) {
    const { data } = await client.get<GetEventBody>(
      `schedule/groups/${groupId}/general`,
      {
        params: { week },
      },
    );

    return data;
  }

  async getEventsAuthorized(
    groupId: string,
    week: number,
    showOwnSelective: boolean,
  ): Promise<GetEventBody> {
    const { data } = await client.get<GetEventBody>(
      `schedule/groups/${groupId}/events`,
      {
        ...getAuthorizationHeader(),
        params: { week, showOwnSelective },
      },
    );
    return data;
  }

  async getEventInfo(eventId: string): Promise<DetailedEventBody> {
    const { data } = await client.get<DetailedEventBody>(
      `schedule/events/${eventId}`,
      {
        ...getAuthorizationHeader(),
      },
    );

    return data;
  }

  async deleteEventById(eventId: string): Promise<DetailedEventBody> {
    const { data } = await client.delete<DetailedEventBody>(
      `schedule/events/${eventId}`,
      getAuthorizationHeader(),
    );
    return data;
  }

  async addEvent(body: DetailedEventBody): Promise<DetailedEventBody> {
    const { data } = await client.post<DetailedEventBody>(
      `schedule/events`,
      body,
      getAuthorizationHeader(),
    );
    return data;
  }
}
export default new ScheduleAPI();
