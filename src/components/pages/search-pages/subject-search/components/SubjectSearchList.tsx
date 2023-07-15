import { useCallback, useEffect } from 'react';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { SubjectCard } from '@/components/common/ui/cards/subject-card';
import useToast from '@/hooks/use-toast';
import { GetListOfSubjectsResponse } from '@/lib/api/subject/types/GetListOfSubjectsResponse';

import * as styles from './SubjectSearchList.styles';
const TOAST_TIMER = 4000;

export const SubjectSearchList = ({ subjects }: GetListOfSubjectsResponse) => {
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    if (!subjects.length) {
      toast.error('Цього предмета не існує', '', TOAST_TIMER);
    }
  }, [subjects.length]);

  const redirect = useCallback(
    (subjectId: string) => () => {
      void router.push(`/subjects/${subjectId}/teachers`);
    },
    [],
  );

  return (
    <Box component="ul" sx={styles.subjectList}>
      {subjects &&
        subjects.map(subject => (
          <Box component="li" key={subject.id}>
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
          </Box>
        ))}
    </Box>
  );
};
