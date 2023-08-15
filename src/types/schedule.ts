export enum TDiscipline {
  PRACRIVE = 'practive',
  LECTION = 'lection',
  SELECTIVE = 'selective',
  LABRATORY = 'labratory',
  OTHER = 'other',
}

export interface Event {
  id: string;
  name: string;
  startTime: string;
  endTime: string;
  disciplineType: {
    Id: string;
    disciplineId: string;
    name: TDiscipline;
  };
}
