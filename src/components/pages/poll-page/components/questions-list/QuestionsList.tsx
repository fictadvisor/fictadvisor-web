import React from 'react';
import { Box } from '@mui/material';

import { GetTeacherQuestionsResponse } from '@/lib/api/poll/types/GetTeacherQuestionsResponse';
import { usePollStore } from '@/store/poll-page/usePollStore';

import PollCard from './components/poll-card';
import TeacherHeaderCard from './components/teacher-header-card';

import styles from './QuestionsList.module.scss';

interface QuestionListProps {
  data: GetTeacherQuestionsResponse;
  progress: number[];
}

const QuestionsList: React.FC<QuestionListProps> = ({ data, progress }) => {
  const { subject, teacher, categories } = data;
  const { lastName, firstName, middleName, avatar } = teacher;
  const { currentCategory, setCurrentCategory, setQuestionsListOpened } =
    usePollStore();
  return (
    <div className={styles.wrapper}>
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
            numberOfAnswered={progress[id]}
            isActive={currentCategory === id}
            onClick={() => {
              if (currentCategory !== id) setCurrentCategory(id);
              setQuestionsListOpened(false);
            }}
          />
        </Box>
      ))}
    </div>
  );
};

export default QuestionsList;
