import { useEffect } from 'react';
import Link from 'next/link';

import { TeacherCard } from '@/components/common/ui/cards/teacher-card';
import rating from '@/components/common/ui/rating-mui';
import useToast from '@/hooks/use-toast';
import { GetTeachersBySubjectDTO } from '@/lib/api/subject/dto/GetTeachersBySubjectDTO';
import { GetTeachersDTO } from '@/lib/api/teacher/dto/GetTeacherDTO';

import styles from './TeacherSearchList.module.scss';

const TOAST_TIMER = 4000;

export const TeacherSearchList = ({
  teachers,
  className,
}:
  | (GetTeachersDTO & { className: string })
  | (Omit<GetTeachersBySubjectDTO, 'subjectName'> & { className: string })) => {
  const toast = useToast();
  //TODO: replace with real rating
  const rating = 4;
  useEffect(() => {
    if (teachers.length === 0) {
      toast.error('Цього викладача не існує', '', TOAST_TIMER);
    }
  }, [teachers.length]);

  return (
    <ul className={styles[`${className}-search-list`]}>
      {teachers &&
        teachers?.map((teacher, index) => (
          <Link key={index} href={`/teachers/${teacher.id}`}>
            <TeacherCard
              avatar={teacher.avatar}
              key={teacher.id}
              name={`${teacher.lastName} ${teacher.firstName} ${teacher.middleName}`}
              rating={rating}
            />
          </Link>
        ))}
    </ul>
  );
};
