import { TeacherRole } from '@/types/teacher';

export enum RadarMarkType {
  RADAR = 'RADAR',
  CIRCLE = 'CIRCLE',
}

export interface RadarMark {
  name: string;
  amount: number;
  type: RadarMarkType;
  mark: number;
}

export interface RadarProps {
  roles: TeacherRole[];
  marks: RadarMark[];
}
