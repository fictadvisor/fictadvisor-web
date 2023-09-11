import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { create } from 'zustand';

import useAuthentication from '@/hooks/use-authentication';
import useToast from '@/hooks/use-toast';
import PollAPI from '@/lib/api/poll/PollAPI';
import { GetTeacherQuestionsResponse } from '@/lib/api/poll/types/GetTeacherQuestionsResponse';
import { Answer, Question, QuestionDisplay, QuestionType } from '@/types/poll';
import { Category } from '@/types/poll';

export enum SendingStatus {
  ANY = 'any',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

type PollFormStoreValidation = {
  isValid: boolean;
  // data: GetTeacherQuestionsResponse;
  setIsValid: (newValue: boolean) => void;
  // isSuccessFetching: boolean;
  // isQuestionsLoading: boolean;
  // error: Error | unknown;
  currentQuestions: Category;
  setCurrentQuestions: (newValue: Category) => void;
  // progress: number[];
  // setProgress: (newProgress: number[]) => void;
  answers: Answer[];
  setAnswers: (newAnswers: Answer[]) => void;
  currentCategory: number;
  setCurrentCategory: (newCategory: number) => void;

  sendingStatus: SendingStatus;
  setIsSendingStatus: (newStatus: SendingStatus) => void;
  // useInit: () => void;
};

export const usePollFormStore = create<PollFormStoreValidation>()(set => ({
  // data: {
  //   teacher: {
  //     id: '',
  //     roles: [],
  //     firstName: '',
  //     middleName: '',
  //     lastName: '',
  //     avatar: '',
  //     description: '',
  //     rating: 1,
  //     contacts: [],
  //   },
  //   subject: {
  //     id: '',
  //     name: '',
  //   },
  //   categories: [
  //     {
  //       name: '',
  //       count: 1,
  //       questions: [
  //         {
  //           id: '',
  //           name: '',
  //           criteria: '',
  //           isRequired: true,
  //           text: '',
  //           type: QuestionType.TOGGLE,
  //           description: '',
  //           display: QuestionDisplay.AMOUNT,
  //         },
  //       ],
  //     },
  //   ],
  // },
  isValid: false,
  // error: undefined,
  // isSuccessFetching: false,
  // isQuestionsLoading: true,
  // currentQuestions: {
  //   name: '',
  //   count: 1,
  //   questions: Question[];
  // },
  currentQuestions: {
    name: '',
    count: 1,
    questions: [
      {
        id: '',
        name: '',
        criteria: '',
        isRequired: true,
        text: '',
        type: QuestionType.TOGGLE,
        description: '',
        display: QuestionDisplay.AMOUNT,
      },
    ],
  },
  // progress: Array([].length).fill(0),
  answers: [],
  currentCategory: 0,
  sendingStatus: SendingStatus.ANY,

  setIsValid: (newValue: boolean) => set({ isValid: newValue }),
  setCurrentQuestions: (newValue: Category) =>
    set({ currentQuestions: newValue }),
  // setProgress: (newProgress: number[]) => set({ progress: newProgress }),
  setAnswers: (newAnswers: Answer[]) => set({ answers: newAnswers }),
  setCurrentCategory: (newCategory: number) =>
    set({ currentCategory: newCategory }),
  setIsSendingStatus: (newStatus: SendingStatus) =>
    set({ sendingStatus: newStatus }),
  // useInit: () => {
  //   const { user, isLoggedIn } = useAuthentication();
  //   const router = useRouter();
  //   const disciplineTeacherId = router.query.disciplineTeacherId as string;
  //   const toast = useToast();
  //   const {
  //     error,
  //     isSuccess: isSuccessFetching,
  //     data,
  //     isLoading: isQuestionsLoading,
  //   } = useQuery(
  //     ['pollQuestions', disciplineTeacherId],
  //     async () => await PollAPI.getTeacherQuestions(disciplineTeacherId),
  //     {
  //       retry: false,
  //       enabled: Boolean(user),
  //       refetchOnWindowFocus: false,
  //       keepPreviousData: false,
  //     },
  //   );
  //   // useEffect(() => {
  //   //   // ...
  //   //   if (data && data.categories.length > 0) {
  //   //     set({ currentQuestions: data.categories[0] });
  //   //   }
  //   // }, []);
  //   useEffect(() => {
  //     if (!isLoggedIn) {
  //       //TODO replace with error hook
  //       toast.error('Для проходження опитування потрібно авторизуватися');
  //
  //       void router.replace('login/?redirect=~poll');
  //     }
  //   }, [toast, isLoggedIn, router]);
  //
  //   // useEffect(() => {
  //   //   set({ isLoading: isQuestionsLoading });
  //   // }, [isQuestionsLoading]);
  //
  //   // const status =
  //   //   error && (error as AxiosError<{ error: string }>).response?.data?.error;
  //   //
  //   // if (error && !isLoading) {
  //   //   //TODO: replace with error hook
  //   //   toast.error(
  //   //     'Помилка!',
  //   //     status === 'InvalidEntityIdException'
  //   //       ? 'Не знайдено опитування з таким id'
  //   //       : status === 'AnswerInDatabasePermissionException'
  //   //       ? 'Ти вже пройшов опитування за цього викладача!'
  //   //       : status === 'NoPermissionException'
  //   //       ? 'У тебе недостатньо прав для цієї дії'
  //   //       : status === 'WrongTimeException'
  //   //       ? 'Час проходження опитування сплив або опитування ще не почалось'
  //   //       : 'Помилка на сервері =(',
  //   //   );
  //   //   void router.push('/poll');
  //   // }
  //
  //   set({ data: data });
  //   set({ error: error });
  //   set({ isSuccessFetching: isSuccessFetching });
  //   set({ isQuestionsLoading: isQuestionsLoading });
  // },
}));
