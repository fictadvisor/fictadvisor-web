import React, { FormEvent, useMemo } from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { Form, Formik, FormikValues } from 'formik';
import { useRouter } from 'next/router';

import Button from '@/components/common/ui/button/Button';
import Progress from '@/components/common/ui/progress';
import SingleQuestion from '@/components/pages/poll-page/components/single-question/SingleQuestion';
import useToast from '@/hooks/use-toast';
import PollAPI from '@/lib/api/poll/PollAPI';
import getErrorMessage from '@/lib/utils/getErrorMessage';
import { Answer, Question, QuestionType } from '@/types/poll';

import { usePollFormStore } from '../../store/index';
import { SendingStatus } from '../poll-form/PollForm';

import AnswersSaved from './AnswersSaved';

import styles from './AnswersSheet.module.scss';

interface AnswersSheetProps {
  setProgress: React.Dispatch<React.SetStateAction<number[]>>;
  isTheLast: boolean;
}

const getProgress = (answers: Answer[], questions: Question[]) => {
  let count = 0;
  const resultAnswers = [...answers];
  for (const question of questions) {
    const isCompleted = resultAnswers.find(
      answer => answer.questionId === question.id,
    );
    if (isCompleted) count++;
  }
  return count;
};

const setCollectAnswers = (answers: Answer[], values: FormikValues) => {
  const resultAnswersMap = new Map(
    answers.map(answer => [answer.questionId, answer]),
  );

  for (const [valueId, value] of Object.entries(values)) {
    const existingAnswer = resultAnswersMap.get(valueId);
    if (existingAnswer !== undefined) {
      existingAnswer.value = value;
    } else {
      resultAnswersMap.set(valueId, { value, questionId: valueId });
    }
  }

  return Array.from(resultAnswersMap.values());
};

const AnswersSheet: React.FC<AnswersSheetProps> = ({
                                                     setProgress,
                                                     isTheLast,
                                                   }) => {
  const {
    setCurrentCategory,
    currentCategory,
    answers,
    setAnswers,
    isValid,
    sendingStatus,
    setIsSendingStatus,
    currentQuestions,
    setQuestionsListOpened,
  } = usePollFormStore();
  const toast = useToast();
  const router = useRouter();
  const disciplineTeacherId = router.query.disciplineTeacherId as string;

  const initialValues: Record<string, string> = useMemo(() => {
    return currentQuestions?.questions
      .filter(question => question.type === QuestionType.SCALE)
      .reduce((initialVals, question) => {
        initialVals[question.id] = '1';
        return initialVals;
      }, {} as Record<string, string>);
  }, []);

  const handleFormEvent = (
    event: FormEvent<HTMLFormElement>,
    values: Record<string, string>,
  ) => {
    const name = (event.target as HTMLFormElement).name;
    const value = (event.target as HTMLFormElement).value;
    if (name && value) {
      updateAnswer({ ...values, [name]: value });
    }
  };

  const handleSubmit = (value: Record<string, string>) => {
    updateAnswer(value);
    if (!isTheLast) {
      setCurrentCategory(currentCategory + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setIsSendingStatus(SendingStatus.LOADING);
    sendData();
  };

  const updateAnswer = (values: FormikValues) => {
    const resultAnswers = setCollectAnswers(answers, values);
    setAnswers(resultAnswers);
    const count = getProgress(resultAnswers, currentQuestions?.questions);
    setProgress(previousProgress => {
      const temp = [...previousProgress];
      temp[currentCategory] = count;
      return temp;
    });
  };

  const sendData = async () => {
    try {
      const formattedAnswers = answers
        .map(answer => ({
          ...answer,
          value: answer.value.trim(),
        }))
        .filter(answer => !!answer.value);

      await PollAPI.createTeacherGrade(
        { answers: formattedAnswers },
        disciplineTeacherId,
      );
      setIsSendingStatus(SendingStatus.SUCCESS);
    } catch (error) {
      const message = getErrorMessage(error);
      const errorMessage = message
        ? message
        : 'Щось пішло не так, спробуй пізніше!';
      toast.error('Помилка!', errorMessage);
      setIsSendingStatus(SendingStatus.ERROR);
    }
  };

  return (
    <div
      className={
        sendingStatus === SendingStatus.SUCCESS
          ? styles.successWrapper
          : styles.wrapper
      }
    >
      {sendingStatus === SendingStatus.LOADING ? (
        <div className={styles.loaderWrapper}>
          <Progress />
        </div>
      ) : sendingStatus === SendingStatus.SUCCESS ? (
        <div className={styles.wrapper}>
          <AnswersSaved />
        </div>
      ) : (
        <>
          <div
            className={styles.toQuestionsList}
            onClick={() => {
              setQuestionsListOpened(true);
            }}
          >
            <ChevronLeftIcon style={{ height: '20px' }} />
            <b>
              {currentCategory + 1} . {currentQuestions?.name}
            </b>
          </div>
          <div className={styles.answersWrapper}>
            <Formik
              validateOnMount
              validateOnChange
              initialValues={initialValues}
              enableReinitialize
              onSubmit={handleSubmit}
            >
              {({ values }) => (
                <Form
                  onClick={(event: FormEvent<HTMLFormElement>) =>
                    handleFormEvent(event, values)
                  }
                  onChange={(event: FormEvent<HTMLFormElement>) =>
                    handleFormEvent(event, values)
                  }
                  className={styles['form']}
                >
                  {currentQuestions?.questions.map((question, key) => (
                    <SingleQuestion
                      key={key}
                      question={question}
                      id={key}
                      count={currentQuestions.count}
                    />
                  ))}
                  <Button
                    className={styles['button']}
                    text={
                      isTheLast ? 'Завершити опитування' : 'Наступні питання'
                    }
                    type="submit"
                    disabled={isTheLast && !isValid}
                  />
                </Form>
              )}
            </Formik>
          </div>
        </>
      )}
    </div>
  );
};

export default AnswersSheet;