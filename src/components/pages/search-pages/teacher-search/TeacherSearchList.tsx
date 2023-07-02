import { FC, HTMLProps, useEffect, useState } from 'react';
import Link from 'next/link';

import { TeacherCard } from '@/components/common/ui/cards/teacher-card';
import useToast from '@/hooks/use-toast';
import { GetTeachersResponse } from '@/lib/api/teacher/types/GetTeachersResponse';
import { Teacher } from '@/types/teacher';

import styles from './TeacherSearchList.module.scss';

interface TeacherSearchListProps
  extends HTMLProps<HTMLDivElement>,
    GetTeachersResponse {}

const TOAST_TIMER = 4000;

export const TeacherSearchList: FC<TeacherSearchListProps> = ({
  teachers,
  className,
}) => {
  const toast = useToast();
  const [teacherList, setTeacherList] = useState<Omit<Teacher, 'role'>[]>([]);

  useEffect(() => {
    if (!teachers.length) {
      toast.error('Цього викладача не існує', '', TOAST_TIMER);
    } else {
      setTeacherList([...teacherList, ...teachers]);
    }
  }, [teachers]);

  return (
    <ul className={styles[`${className}-search-list`]}>
      {teacherList?.map((teacher, index) => (
        <Link key={index} href={`/teachers/${teacher.id}`}>
          <TeacherCard
            avatar={teacher.avatar}
            key={teacher.id}
            name={`${teacher.lastName} ${teacher.firstName} ${teacher.middleName}`}
            rating={teacher.rating / 20}
          />
        </Link>
      ))}
    </ul>
  );
};
