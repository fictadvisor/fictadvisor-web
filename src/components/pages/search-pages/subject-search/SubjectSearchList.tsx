import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { SubjectCard } from '@/components/common/ui/cards/subject-card';
import useToast from '@/hooks/use-toast';
import { GetListOfSubjectsResponse } from '@/lib/api/subject/types/GetListOfSubjectsResponse';
import { Subject } from '@/types/subject';

import styles from './SubjectSearchList.module.scss';

const TOAST_TIMER = 4000;

export const SubjectSearchList = ({ subjects }: GetListOfSubjectsResponse) => {
  const router = useRouter();
  const toast = useToast();
  const [subjectList, setSubjectList] = useState<Subject[]>([]);

  useEffect(() => {
    if (!subjects.length) {
      toast.error('Цього предмета не існує', '', TOAST_TIMER);
    } else {
      setSubjectList([...subjectList, ...subjects]);
    }
  }, [subjects]);

  const redirect = (subjectId: string) => {
    void router.push(`/subjects/${subjectId}/teachers`);
  };

  return (
    <ul className={styles['subject-search-list']}>
      {subjectList.map(subject => (
        <li key={subject.id}>
          <SubjectCard
            onClick={() => redirect(subject.id)}
            name={`${subject.name}`}
            details={`${
              subject.amount +
              ' ' +
              (subject.amount === 1
                ? 'викладач'
                : subject.amount === 2 ||
                  subject.amount === 3 ||
                  subject.amount === 4
                ? 'викладачі'
                : 'викладачів')
            }`}
          />
        </li>
      ))}
    </ul>
  );
};
