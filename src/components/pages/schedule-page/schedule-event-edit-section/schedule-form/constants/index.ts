import { DropDownOption } from '@/components/common/ui/form/dropdown/types';
import { TagColor } from '@/components/common/ui/tag-mui/types';
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

export const eventTypeList: DropDownOption[] = [
  {
    id: TDiscipline.LABORATORY,
    text: 'Лабораторна',
    color: TagColor.MINT,
  },
  {
    id: TDiscipline.EXAM,
    text: 'Екзамен',
    color: TagColor.VIOLET,
  },
  {
    id: TDiscipline.WORKOUT,
    text: 'Тренування',
    color: TagColor.PRIMARY,
  },
  {
    id: TDiscipline.PRACTICE,
    text: 'Практика',
    color: TagColor.ORANGE,
  },
  {
    id: TDiscipline.LECTURE,
    text: 'Лекція',
    color: TagColor.INDIGO,
  },
  {
    id: TDiscipline.CONSULTATION,
    text: 'Консультація',
    color: TagColor.SUCCESS,
  },
];

export const periodOptions: DropDownOption[] = [
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
