import React from 'react';
import Link from 'next/link';

import { SubjectTeacherCard } from '@/components/common/ui/cards/subject-teacher-card';
import { Teacher } from '@/types/teacher';

import styles from './SubjectTeacherSearchList.module.scss';

export interface SubjectTeacherSearchListProps {
  subjectId: string;
  teachers: Teacher[];
}

export const SubjectTeacherSearchList: React.FC<
  SubjectTeacherSearchListProps
> = ({ subjectId, teachers }) => {
  return (
    <ul className={styles[`subject-teacher-search-list`]}>
      {teachers &&
        teachers.map((teacher, index) => (
          <Link
            key={index}
            href={`/discipline?teacherId=${teacher.id}&subjectId=${subjectId}`}
          >
            <SubjectTeacherCard
              avatar={teacher.avatar}
              key={teacher.id}
              name={`${teacher.lastName} ${teacher.firstName} ${teacher.middleName}`}
              roles={teacher.roles}
            />
          </Link>
        ))}
    </ul>
  );
};
