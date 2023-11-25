'use client';

import { FC } from 'react';

import PageLayout from '@/components/common/layout/page-layout/PageLayout';
import SubjectTeacherPage from '@/components/pages/search-pages/subject-teacher-search';
interface SubjectTeacherPage {
  params: {
    subjectId: string;
  };
}
const SubjectPage: FC<SubjectTeacherPage> = ({ params }) => {
  return (
    <PageLayout title="Предмет">
      <SubjectTeacherPage subjectId={params.subjectId} />
    </PageLayout>
  );
};

export default SubjectPage;
