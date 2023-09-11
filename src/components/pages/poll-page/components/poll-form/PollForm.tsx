import { FC, useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';

import { GetTeacherQuestionsResponse } from '@/lib/api/poll/types/GetTeacherQuestionsResponse';
import theme from '@/styles/theme';
import { Answer, Category, Question } from '@/types/poll';

import { usePollFormStore } from '../../store/index';
import AnswersSheet from '../answers-sheet/AnswersSheet';
import QuestionsList from '../questions-list/QuestionsList';

import styles from './PollForm.module.scss';

interface PollFormProps {
  data: GetTeacherQuestionsResponse;
}

export enum SendingStatus {
  ANY = 'any',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

const validateResults = (answers: Answer[], questions: Question[]) => {
  for (const question of questions) {
    if (
      question.isRequired &&
      !answers.find(answer => answer.questionId === question.id)
    ) {
      return false;
    }
  }
  return true;
};

const getAllQuestionsArray = (categories: Category[]): Question[] => {
  const questions = categories.reduce<Question[]>(
    (acc, { questions }) => [...acc, ...questions],
    [],
  );

  return questions;
};

const PollForm: FC<PollFormProps> = ({ data }) => {
  const {
    setIsValid,
    answers,
    currentCategory,
    sendingStatus,
    setCurrentQuestions,
  } = usePollFormStore();
  const { categories, teacher, subject } = data;
  const isMobile = useMediaQuery(theme.breakpoints.down('desktop'));
  const [isQuestionsListOpened, setQuestionsListOpened] = useState(false);
  const [questionsArray, setQuestionsArray] = useState<Question[]>([]);
  const [progress, setProgress] = useState<number[]>(
    Array(categories.length).fill(0),
  );
  useEffect(() => {
    setQuestionsArray(getAllQuestionsArray(categories));
  }, [categories]);

  useEffect(() => {
    setCurrentQuestions(categories[currentCategory]);
    setIsValid(validateResults(answers, questionsArray));
  }, [currentCategory, categories, answers, questionsArray]);

  return (
    <div
      className={
        sendingStatus === SendingStatus.SUCCESS
          ? styles.successWrapper
          : styles.wrapper
      }
    >
      <div
        style={{
          display: !isMobile || isQuestionsListOpened ? 'block' : 'none',
        }}
      >
        {sendingStatus !== SendingStatus.SUCCESS && (
          <QuestionsList
            categories={categories}
            teacher={teacher}
            subject={subject}
            progress={progress}
            setQuestionsListStatus={setQuestionsListOpened}
          />
        )}
      </div>
      <div
        style={{
          display: !isMobile || !isQuestionsListOpened ? 'block' : 'none',
        }}
      >
        <AnswersSheet
          setProgress={setProgress}
          isTheLast={currentCategory === categories.length - 1}
          setQuestionsListStatus={setQuestionsListOpened}
        />
      </div>
    </div>
  );
};

export default PollForm;
