import React from 'react';
import { useRouter } from 'next/router';

import { SubjectCard } from '@/components/common/ui/cards/subject-card';
import { GetListOfSubjectsResponse } from '@/lib/api/subject/types/GetListOfSubjectsResponse';

import styles from './SubjectSearchList.module.scss';

export const SubjectSearchList = ({ subjects }: GetListOfSubjectsResponse) => {
  const router = useRouter();

  const redirect = (subjectId: string) => {
    void router.push(`/subjects/${subjectId}/teachers`);
  };

  return (
    <ul className={styles['subject-search-list']}>
      {subjects &&
        subjects.map(subject => (
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
