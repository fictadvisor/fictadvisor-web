import React from 'react';

import { Category, PollTeacher } from '@/types/poll';
import { TeacherSubject } from '@/types/teacher';

import { usePollFormStore } from '../../store/index';

import PollCard from './components/poll-card';
import TeacherHeaderCard from './components/teacher-header-card';

import styles from './QuestionsList.module.scss';

interface QuestionListProps {
  categories: Category[];
  teacher: PollTeacher;
  subject: TeacherSubject;
  progress: number[];
  setQuestionsListStatus: React.Dispatch<React.SetStateAction<boolean>>;
}
import { Box } from '@mui/material';

const QuestionsList: React.FC<QuestionListProps> = ({
  categories,
  teacher,
  subject,
  progress,
  setQuestionsListStatus,
}) => {
  const { lastName, firstName, middleName, avatar } = teacher;
  const { currentCategory, setCurrentCategory } = usePollFormStore();
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
              setQuestionsListStatus(false);
            }}
          />
        </Box>
      ))}
    </div>
  );
};

export default QuestionsList;
