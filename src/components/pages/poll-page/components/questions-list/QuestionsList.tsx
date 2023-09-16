import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import { GetTeacherQuestionsResponse } from '@/lib/api/poll/types/GetTeacherQuestionsResponse';
import { usePollStore } from '@/store/poll-page/usePollStore';

import PollCard from './components/poll-card';
import TeacherHeaderCard from './components/teacher-header-card';
import * as styles from './QuestionsList.styles';

interface QuestionListProps {
  data: GetTeacherQuestionsResponse;
  progress: number[];
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
      const parsedProgress = JSON.parse(localStorageProgress).progress;
      setFilterProgress(parsedProgress);
    }

    if (!checkIfAllZeros(progress)) {
      setFilterProgress(progress);
    }
  }, [progress]);

  function checkIfAllZeros(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        return false;
      }
    }
    return true;
  }

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
