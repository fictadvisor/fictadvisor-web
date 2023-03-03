import React, { useEffect } from 'react';

import {
  LecturerHeaderCard,
  PollCard,
} from '@/components/common/composite/cards';

import { Category, Subject, Teacher } from '../../PollPage';
import { Answer } from '../poll-form/PollForm';

import styles from './QuestionsList.module.scss';

interface QuestionListProps {
  categories: Category[];
  teacher: Teacher;
  subject: Subject;
  progress: number[];
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  setQuestionsListStatus: React.Dispatch<React.SetStateAction<boolean>>;
  answers: Answer[];
}

const QuestionsList: React.FC<QuestionListProps> = ({
  categories,
  teacher,
  subject,
  progress,
  current,
  setCurrent,
  setQuestionsListStatus,
  answers,
}) => {
  const { lastName, firstName, middleName, avatar } = teacher;

  return (
    <div className={styles.wrapper}>
      <LecturerHeaderCard
        name={`${lastName} ${firstName} ${middleName}`}
        description={subject.name}
        url={avatar || undefined}
      />
      {categories.slice(0, categories.length - 1).map((category, id) => (
        <PollCard
          key={id}
          numberOfQuestions={category.count}
          questionNumber={1 + id}
          question={category.name}
          numberOfAnswered={progress[id]}
          isActive={current === id}
          onClick={() => {
            if (current !== id) setCurrent(id);
            setQuestionsListStatus(false);
          }}
        />
      ))}
      <PollCard
        questionNumber={categories.length}
        question={'Ваш коментар'}
        isComment={true}
        numberOfQuestions={1}
        numberOfAnswered={progress[categories.length - 1]}
        isActive={current === categories.length - 1}
        onClick={() => {
          setCurrent(categories.length - 1);
          setQuestionsListStatus(false);
        }}
      />
    </div>
  );
};

export default QuestionsList;
