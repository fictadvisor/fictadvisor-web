'use client';

import { FC } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import PageLayout from '@/components/common/layout/page-layout/PageLayout';
import PersonalTeacherPage from '@/components/templates/personal-teacher-page';
import useAuthentication from '@/hooks/use-authentication';
import TeacherAPI from '@/lib/api/teacher/TeacherAPI';
import TeacherService from '@/lib/services/teacher/TeacherService';
import { Teacher } from '@/types/teacher';
interface PersonalTeacherProps {
  params: {
    teacherId: string;
  };
}

const PersonalTeacher: FC<PersonalTeacherProps> = async ({ params }) => {
  const router = useRouter();
  const query = useSearchParams();
  const teacherId = params.teacherId;
  const { user } = useAuthentication();
  const info = await TeacherAPI.get(teacherId);
  const data = await TeacherService.getTeacherPageInfo(teacherId, user?.id);
  if (!info) {
    router.push('/teachers');
    return null;
  }
  return (
    <PageLayout
    // title={info?.lastName + ' ' + info?.firstName + ' ' + info?.middleName}
    // description={info?.description || 'Викладач'}
    >
      <PersonalTeacherPage
        teacher={info as Teacher}
        data={data}
        query={query}
        teacherId={teacherId}
        router={router}
      />
    </PageLayout>
  );
};

export default PersonalTeacher;
