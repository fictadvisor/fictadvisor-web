import { FC, HTMLProps } from 'react';
import Link from 'next/link';

import { TeacherCard } from '@/components/common/composite/cards/teacher-card';
import { GetTeachersDTO } from '@/lib/api/teacher/dto/GetTeacherDTO';

import styles from './TeacherSearchList.module.scss';

interface TeacherSearchListProps
  extends HTMLProps<HTMLDivElement>,
    GetTeachersDTO {}

export const TeacherSearchList: FC<TeacherSearchListProps> = ({
  teachers,
  className,
}) => {
  return (
    <ul className={styles[`${className}-search-list`]}>
      {teachers?.map(({ teacher }, index) => (
        <Link key={index} href={`/teachers/${teacher.id}`}>
          <TeacherCard
            avatar={teacher.avatar}
            key={teacher.id}
            name={`${teacher.lastName} ${teacher.firstName} ${teacher.middleName}`}
          />
        </Link>
      ))}
    </ul>
  );
};
