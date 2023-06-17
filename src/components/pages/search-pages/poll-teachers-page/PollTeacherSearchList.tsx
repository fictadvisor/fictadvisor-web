import { FC } from 'react';

import { PollTeacherCard } from '@/components/common/composite/cards/poll-teacher-card';
import { PollTeachersResponse } from '@/lib/api/poll/types/PollTeachersResponse';

import styles from './PollTeacherSearchList.module.scss';

interface PollTeacherSearchListProps {
  data: PollTeachersResponse;
  className: string;
}
const PollTeacherSearchList: FC<PollTeacherSearchListProps> = ({
  data,
  className,
}) => {
  return (
    <ul className={styles[`${className}-search-list`]}>
      {data &&
        data.teachers?.map(teacher => (
          <PollTeacherCard
            key={teacher.disciplineTeacherId}
            description={teacher.subject.name}
            avatar={teacher.avatar}
            name={`${teacher.lastName} ${teacher.firstName} ${teacher.middleName}`}
            roles={teacher.roles}
            href={`/poll/${teacher.disciplineTeacherId}`}
          />
        ))}
    </ul>
  );
};

export default PollTeacherSearchList;
