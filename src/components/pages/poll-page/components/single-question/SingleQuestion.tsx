import React, { FC } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';

import { TextArea } from '@/components/common/ui/form';
import RadioGroup from '@/components/common/ui/form/radio';
import { SliderSize } from '@/components/common/ui/form/slider/types';
import FormikSlider from '@/components/common/ui/form/with-formik/slider';
import theme from '@/styles/theme';
import { Question, QuestionType } from '@/types/poll';

import * as styles from './SingleQuestion.style';

interface QuestionProps {
  id: number;
  count?: number;
  question: Question;
}

const QuestionToggle: FC<QuestionProps> = ({ question, ...rest }) => {
  return (
    <RadioGroup
      //TODO move to constants somehow
      options={[
        { value: '1', label: 'так' },
        { value: '0', label: 'ні' },
      ]}
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        gap: '36px',
      }} //TODO remove inline styles when refactor
      name={question.id}
    />
  );
};

const QuestionScale: FC<QuestionProps> = ({ question, ...rest }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('desktop'));
  return (
    <FormikSlider
      name={question.id}
      size={isMobile ? SliderSize.SMALL : SliderSize.MEDIUM}
    />
  );
};

const SingleQuestion: FC<QuestionProps> = ({ id, question, count }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('desktop'));
  const numberRowsTextArea = isMobile ? 8 : 4;
  const questionNumber =
    question.type === QuestionType.TEXT
      ? `Відкрите питання`
      : `Питання ${id + 1} / ${count}`;

  return (
    // className={styles['question']
    <Box key={question.id}>
      {/*Question header block: number, title, description*/}
      <Typography component="p" sx={styles.questionNumber}>
        {questionNumber}
      </Typography>
      <Typography component="p" sx={styles.questionTitle}>
        {question.text}
      </Typography>
      {question.description && (
        <Typography component="p" sx={styles.questionDescription}>
          {question.description}
        </Typography>
      )}
      {/*Question itself*/}
      {question.type === QuestionType.SCALE && (
        <QuestionScale question={question} id={id} />
      )}
      {question.type === QuestionType.TOGGLE && (
        <QuestionToggle question={question} id={id} />
      )}
      {question.type === QuestionType.TEXT && (
        <TextArea
          rowsNumber={numberRowsTextArea}
          // sx={styles.textArea}
          name={question.id}
        />
      )}
      {/*Question bottom block with explanation */}
      {question.criteria && (
        <Typography component="p" sx={styles.questionCriteria}>
          {question.criteria}
        </Typography>
      )}
    </Box>
  );
};

export default SingleQuestion;
