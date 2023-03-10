import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import mergeClassNames from 'merge-class-names';

import { DivProps } from '@/components/common/composite/cards/Cards';
import { DoubleCheckIcon } from '@/components/common/custom-svg/card-icons/CheckIcon';

import styles from './PollCard.module.scss';

type PollCard = {
  questionNumber: number;
  question?: string;
  numberOfAnswered: number;
  numberOfQuestions: number;
  disabled?: boolean;
  isComment?: boolean;
  isActive: boolean;
} & DivProps;

const PollCard: React.FC<PollCard> = ({
  questionNumber,
  question,
  numberOfAnswered,
  numberOfQuestions,
  disabled,
  isComment,
  isActive,
  ...rest
}) => {
  let isDoubleCheckIcon,
    showIcon = true;
  if (numberOfAnswered >= 1 && numberOfAnswered !== numberOfQuestions) {
    isDoubleCheckIcon = false;
  } else if (numberOfAnswered === numberOfQuestions) {
    isDoubleCheckIcon = true;
  } else if (numberOfAnswered === 0) showIcon = false;

  return (
    <div
      className={mergeClassNames(
        styles['card'],
        styles['poll-card-container'],
        disabled && styles['poll-card-container-disabled'],
        isActive && styles['poll-card-container-active'],
      )}
      {...rest}
    >
      <div className={styles['main-content']}>
        <b>
          {isComment ? (
            'Ваш коментар'
          ) : (
            <>
              {questionNumber}. {question}
            </>
          )}
        </b>
        <p>
          {isComment
            ? 'Відкрите запитання'
            : `${numberOfAnswered}/${numberOfQuestions} запитання`}
        </p>
      </div>
      <div className="icon">
        {showIcon && (isDoubleCheckIcon ? <DoubleCheckIcon /> : <CheckIcon />)}
      </div>
    </div>
  );
};

export default PollCard;
