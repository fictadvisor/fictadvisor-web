import { ScheduleEventFormFields } from '@/components/pages/schedule-page/schedule-event-edit-section/components/schedule-form/types';
import { client } from '@/lib/api/instance';
import { DetailedEventBody } from '@/lib/api/schedule/types/DetailedEventBody';
import { GetEventBody } from '@/lib/api/schedule/types/GetEventBody';
import { getAuthorizationHeader } from '@/lib/api/utils';
class ScheduleAPI {
  async getEvents(
    groupId: string,
    week: number,
    addLecture = true,
    addLaboratory = true,
    addPractice = true,
  ) {
    const { data } = await client.get<GetEventBody>(
      `schedule/groups/${groupId}/general`,
      { params: { week, addLecture, addLaboratory, addPractice } },
    );
    return data;
  }

  async getEventsAuthorized(
    groupId: string,
    week: number,
    showOwnSelective: boolean,
    addLecture = true,
    addLaboratory = true,
    addPractice = true,
    otherEvents = true,
  ): Promise<GetEventBody> {
    const { data } = await client.get<GetEventBody>(
      `schedule/groups/${groupId}/events`,
      {
        ...getAuthorizationHeader(),
        params: {
          week,
          showOwnSelective,
          addLecture,
          addLaboratory,
          addPractice,
          otherEvents,
        },
      },
    );
    return data;
  }

  async getEventInfo(
    eventId: string,
    week: number | string,
  ): Promise<DetailedEventBody> {
    const { data } = await client.get<DetailedEventBody>(
      `schedule/events/${eventId}`,
      {
        ...getAuthorizationHeader(),
        params: { week },
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

  async addEvent(body: ScheduleEventFormFields): Promise<DetailedEventBody> {
    const { data } = await client.post<DetailedEventBody>(
      `schedule/events`,
      body,
      getAuthorizationHeader(),
    );
    return data;
  }
}
export default new ScheduleAPI();
