import { SharedEventBody } from '@/lib/api/schedule/types/shared';
import { TDiscipline, TEventPeriod } from '@/types/schedule';
export const initialValues: SharedEventBody = {
  name: '',
  disciplineId: '',
  disciplineType: '',
  teachers: [],
  startTime: '',
  endTime: '',
  period: '',
  url: '',
  disciplineInfo: '',
  eventInfo: '',
};

export const eventTypeList = [
  {
    id: TDiscipline.LABORATORY,
    text: 'Лабораторна',
  },
  {
    id: TDiscipline.EXAM,
    text: 'Екзамен',
  },
  {
    id: TDiscipline.WORKOUT,
    text: 'Тренування',
  },
  {
    id: TDiscipline.PRACTICE,
    text: 'Практика',
  },
  {
    id: TDiscipline.LECTURE,
    text: 'Лекція',
  },
  {
    id: TDiscipline.CONSULTATION,
    text: 'Консультація',
  },
];

export const periodList = [
  {
    id: TEventPeriod.NO_PERIOD,
    label: 'Одиночна подія',
  },
  {
    id: TEventPeriod.EVERY_FORTNIGHT,
    label: 'Раз на 2 тижні',
  },
  {
    id: TEventPeriod.EVERY_WEEK,
    label: 'Раз на тиждень',
  },
];
