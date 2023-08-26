import { ScheduleEventFormFields } from '@/components/pages/schedule-page/schedule-event-edit-section/components/schedule-form/types';

export const initialValues: ScheduleEventFormFields = {
  groupId: '',
  name: '',
  disciplineId: '',
  disciplineType: '',
  teachers: [''],
  startTime: '',
  endTime: '',
  period: '',
  url: '',
  disciplineInfo: '',
  eventInfo: '',
};

export const eventTypeList = [
  {
    id: '1',
    text: 'Лекція',
  },
  {
    id: '2',
    text: 'Практика',
  },
  {
    id: '3',
    text: 'Лабораторна',
  },
  {
    id: '4',
    text: 'Інша подія',
  },
];

export const periodList = [
  {
    id: '1',
    text: 'кожен тиждень',
  },
  {
    id: '2',
    text: 'раз на 2 тижні',
  },
];
