import React, { FormEvent, useEffect, useState } from 'react';
import { RadioGroup } from '@mui/material';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';

import ArrowButton from '@/components/common/ui/arrow-button/ArrowButton';
import Button from '@/components/common/ui/button/Button';
import { Slider, TextArea } from '@/components/common/ui/form';
import Radio from '@/components/common/ui/form/radio';
import Loader from '@/components/common/ui/loader/Loader';
import useAuthentication from '@/hooks/use-authentication';
import useToast from '@/hooks/use-toast';
import PollAPI from '@/lib/api/poll/PollAPI';

import { Category } from '../../PollPage';
import { Answer, SendingStatus } from '../poll-form/PollForm';

import AnswersSaved from './AnswersSaved';

import styles from './AnswersSheet.module.scss';

interface AnswersSheetProps {
  questions: Category;
  setProgress: React.Dispatch<React.SetStateAction<number[]>>;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  setQuestionsListStatus: React.Dispatch<React.SetStateAction<boolean>>;
  isTheLast: boolean;
  isValid: boolean;
  current: number;
  answers: Answer[];
  setAnswers: React.Dispatch<React.SetStateAction<Answer[]>>;
  sendingStatus: SendingStatus;
  setIsSendingStatus: React.Dispatch<React.SetStateAction<SendingStatus>>;
}

const collectAnswers = (answers: Answer[], values) => {
  let resultAnswers = [...answers];
  for (const valueId of Object.keys(values)) {
    const index = resultAnswers.findIndex(el => el.questionId === valueId);
    if (index !== -1) {
      resultAnswers[index].value = values[valueId];
    } else {
      resultAnswers = [
        ...resultAnswers,
        { value: values[valueId], questionId: valueId },
      ];
    }
  }
  return resultAnswers;
};

export const getProgress = (answers: Answer[], questions) => {
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

const AnswersSheet: React.FC<AnswersSheetProps> = ({
  questions,
  isTheLast,
  current,
  answers,
  setQuestionsListStatus,
  setAnswers,
  setProgress,
  isValid,
  setCurrent,
  sendingStatus,
  setIsSendingStatus,
}) => {
  const toast = useToast();
  const [initialValues, setInitialValues] = useState({});
  const router = useRouter();
  const disciplineTeacherId = router.query.disciplineTeacherId as string;
  const { token } = useAuthentication();

  useEffect(() => {
    for (const question of questions.questions) {
      if (question.type === 'SCALE') {
        initialValues[question.id] = '1';
      }
    }
  }, [questions]);

  const answer = values => {
    const resultAnswers = collectAnswers(answers, values);
    setAnswers(resultAnswers);
    const count = getProgress(resultAnswers, questions.questions);
    setProgress(previousProgress => {
      const temp = [...previousProgress];
      temp[current] = count;
      return temp;
    });
  };

  const handleSubmit = () => {};

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
          <Loader />
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
              setQuestionsListStatus(true);
            }}
          >
            <ArrowButton className={styles.arrow} />
            <b>
              {current + 1} . {questions.name}
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
                  onClick={(event: FormEvent<HTMLFormElement>) => {
                    const name = (event.target as any).name;
                    const value = (event.target as any).value;
                    if (name && value) {
                      values[name] = String(value);
                      answer(values);
                    }
                  }}
                  onChange={(event: FormEvent<HTMLFormElement>) => {
                    const name = (event.target as any).name;
                    const value = (event.target as any).value;
                    if (name && value) {
                      values[name] = String(value);
                      answer(values);
                    }
                  }}
                  className={styles['form']}
                >
                  {questions.questions.map((question, id) => (
                    <div key={question.id} className={styles['question']}>
                      {question.type === 'TEXT' ? (
                        <p className={styles['question-number']}>
                          Відкрите питання
                        </p>
                      ) : (
                        <p className={styles['question-number']}>
                          Питання {id + 1} / {questions.count}
                        </p>
                      )}

                      <p className={styles['question-title']}>
                        {question.name}
                      </p>
                      {question.description && (
                        <p className={styles['question-description']}>
                          {question.description}
                        </p>
                      )}
                      {question.type === 'SCALE' ? (
                        <Slider
                          className={styles['slider']}
                          name={question.id}
                        />
                      ) : question.type === 'TOGGLE' ? (
                        <RadioGroup>
                          className={styles['options']}
                          <Radio value="1" label="так" name={question.id} />
                          <Radio value="0" label="ні" name={question.id} />
                        </RadioGroup>
                      ) : (
                        <TextArea
                          className={styles['textarea']}
                          name={question.id}
                        />
                      )}
                      {question.criteria && (
                        <p className={styles['question-criteria']}>
                          {question.criteria}
                        </p>
                      )}
                    </div>
                  ))}
                  <Button
                    className={styles['button']}
                    text={
                      isTheLast ? 'Завершити опитування' : 'Наступні питання'
                    }
                    type="submit"
                    disabled={isTheLast && !isValid}
                    onClick={async () => {
                      answer(values);
                      if (!isTheLast) {
                        setCurrent(prev => ++prev);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        setIsSendingStatus(SendingStatus.LOADING);
                        try {
                          await PollAPI.createTeacherGrade(
                            disciplineTeacherId,
                            token,
                            { answers },
                          );
                          setIsSendingStatus(SendingStatus.SUCCESS);
                        } catch (e) {
                          const errorName = e.response.data.error;
                          if (errorName === 'InvalidEntityIdException') {
                            toast.error(
                              'Помилка!',
                              'Не знайдено опитування з таким Id!',
                            );
                          } else if (errorName === 'ExcessiveAnswerException') {
                            toast.error(
                              'Помилка!',
                              'Знайдено зайві відповіді!',
                            );
                          } else if (
                            errorName === 'NotEnoughAnswersException'
                          ) {
                            toast.error(
                              'Помилка!',
                              `Ви відповіли не на всі обов'язкові запитання!`,
                            );
                          } else if (errorName === 'AlreadyAnsweredException') {
                            toast.error('Помилка!', `Ви вже відповіли!`);
                          } else if (errorName === 'NoPermissionException') {
                            toast.error('Помилка!', `Недостатньо прав!`);
                          } else {
                            toast.error('Помилка!', `Помилка на сервері :(`);
                          }
                          setIsSendingStatus(SendingStatus.ERROR);
                        }
                      }
                    }}
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
