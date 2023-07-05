import { FC, Fragment, useEffect } from 'react';
import { InfiniteData } from 'react-query';
import { useRouter } from 'next/router';

import { SubjectCard } from '@/components/common/ui/cards/subject-card';
import useToast from '@/hooks/use-toast';
import { GetListOfSubjectsResponse } from '@/lib/api/subject/types/GetListOfSubjectsResponse';

import styles from './SubjectSearchList.module.scss';

const TOAST_TIMER = 4000;

interface SubjectSearchListProps {
  data: InfiniteData<GetListOfSubjectsResponse>;
}

export const SubjectSearchList: FC<SubjectSearchListProps> = ({ data }) => {
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    if (!data?.pages[0].subjects.length) {
      toast.error('Цього предмета не існує', '', TOAST_TIMER);
    }
  }, [data.pages[0].subjects]);

  const redirect = (subjectId: string) => {
    void router.push(`/subjects/${subjectId}/teachers`);
  };

  return (
    <ul className={styles['subject-search-list']}>
      {data.pages.map((page, index) => (
        <Fragment key={index}>
          {page.subjects.map(subject => (
            <SubjectCard
              key={subject.id}
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
          ))}
        </Fragment>
      ))}
    </ul>
  );
};
