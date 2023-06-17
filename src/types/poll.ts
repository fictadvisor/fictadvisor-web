export enum QuestionType {
  TOGGLE = 'TOGGLE',
  TEXT = 'TEXT',
  SCALE = 'SCALE',
}

export enum QuestionDisplay {
  AMOUNT = 'AMOUNT',
  PERCENT = 'PERCENT',
  TEXT = 'TEXT',
}

export interface Question {
  id: string;
  name: string;
  criteria: string;
  isRequired: boolean;
  text: string;
  type: QuestionType;
  description: string;
  display: QuestionDisplay;
}

export interface Answer {
  questionId: string;
  value: string;
}

export interface PollTeacher {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  avatar: string;
}

export interface Category {
  name: string;
  count: number;
  questions: Question[];
}
