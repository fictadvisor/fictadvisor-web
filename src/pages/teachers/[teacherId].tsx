import { FC } from 'react';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import PersonalTeacherPage from '@/components/pages/personal-teacher-page';
import type { PersonalTeacherPageProps } from '@/components/pages/personal-teacher-page/PersonalTeacherPage';
import { TeacherAPI } from '@/lib/api/teacher/TeacherAPI';

const PersonalTeacher: FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = props => <PersonalTeacherPage {...props} />;

export const getServerSideProps: GetServerSideProps<
  PersonalTeacherPageProps
> = async context => {
  let data = null,
    subjectData = null,
    isError = false;

  try {
    const teacherId = context.params.teacherId as string;
    data = await TeacherAPI.get(teacherId);
    subjectData = await TeacherAPI.getTeacherSubjects(teacherId);
  } catch (_) {
    isError = true;
  }

  return {
    props: { data, subjectData, isError },
  };
};

export default PersonalTeacher;
