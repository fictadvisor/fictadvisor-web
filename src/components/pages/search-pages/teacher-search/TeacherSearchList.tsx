import { FC, Fragment, useEffect } from 'react';
import { InfiniteData } from 'react-query';
import Link from 'next/link';

import { TeacherCard } from '@/components/common/ui/cards/teacher-card';
import useToast from '@/hooks/use-toast';
import { GetTeachersResponse } from '@/lib/api/teacher/types/GetTeachersResponse';

import styles from './TeacherSearchList.module.scss';

interface TeacherSearchListProps {
  data: InfiniteData<GetTeachersResponse>;
  className: string;
}

const TOAST_TIMER = 4000;

export const TeacherSearchList: FC<TeacherSearchListProps> = ({
  className,
  data,
}) => {
  const toast = useToast();
  useEffect(() => {
    if (!data?.pages[0].teachers.length) {
      toast.error('Цього викладача не існує', '', TOAST_TIMER);
    }
  }, [data]);

  return (
    <ul className={styles[`${className}-search-list`]}>
      {data?.pages.map((page, index) => (
        <Fragment key={index}>
          {page.teachers.map(teacher => (
            <Link key={teacher.id} href={`/teachers/${teacher.id}`}>
              <TeacherCard
                avatar={teacher.avatar}
                key={teacher.id}
                name={`${teacher.lastName} ${teacher.firstName} ${teacher.middleName}`}
                rating={teacher.rating / 20}
              />
            </Link>
          ))}
        </Fragment>
      ))}
    </ul>
  );
};
