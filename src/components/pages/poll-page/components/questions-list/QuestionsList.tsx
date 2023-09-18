import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import PollCard from '@/components/common/ui/cards/poll-card';
import TeacherHeaderCard from '@/components/common/ui/cards/teacher-header-card';
import { GetTeacherQuestionsResponse } from '@/lib/api/poll/types/GetTeacherQuestionsResponse';
import { usePollStore } from '@/store/poll-page/usePollStore';

import * as styles from './QuestionsList.styles';

interface QuestionListProps {
  data: GetTeacherQuestionsResponse;
  progress: number[];
}

function checkIfAllZeros(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      return false;
    }
  }
  return true;
}

function uniteArrs(arg1: number[], arg2: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < arg1.length; i++) {
    result.push(arg2[i] > 0 ? arg2[i] : arg1[i]);
  }

  return result;
}

const QuestionsList: React.FC<QuestionListProps> = ({ data, progress }) => {
  const { subject, teacher, categories } = data;
  const { lastName, firstName, middleName, avatar } = teacher;
  const { currentCategory, setCurrentCategory, setQuestionsListOpened } =
    usePollStore();
  const [filterProgress, setFilterProgress] = useState<number[]>(progress);

  useEffect(() => {
    const localStorageProgress = localStorage.getItem('progressPoll');
    if (localStorageProgress) {
      setFilterProgress(
        uniteArrs(JSON.parse(localStorageProgress).progress, progress),
      );
    }

    if (!checkIfAllZeros(progress)) {
      const currentProgress = uniteArrs(filterProgress, progress);
      setFilterProgress(currentProgress);
      localStorage.setItem(
        'progressPoll',
        JSON.stringify({ progress: currentProgress }),
      );
    }
  }, [progress]);

  return (
    <Box sx={styles.wrapper}>
      <TeacherHeaderCard
        name={`${lastName} ${firstName} ${middleName}`}
        description={subject.name}
        url={avatar || undefined}
      />
      {categories.map((category, id) => (
        <Box key={id}>
          <PollCard
            key={id}
            numberOfQuestions={category.count}
            isComment={category.questions[0].type === 'TEXT'}
            questionNumber={1 + id}
            question={category.name}
            numberOfAnswered={filterProgress[id]}
            isActive={currentCategory === id}
            onClick={() => {
              if (currentCategory !== id) setCurrentCategory(id);
              setQuestionsListOpened(false);
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default QuestionsList;
