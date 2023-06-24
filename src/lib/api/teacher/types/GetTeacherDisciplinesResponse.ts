export interface TeacherDiscipline {
  disciplineTeacherId: string;
  subjectName: string;
}

export type GetTeacherDisciplinesResponse = TeacherDiscipline[];
