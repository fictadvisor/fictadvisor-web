import React, { useRef, useState } from 'react';
import mergeClassNames from 'merge-class-names';

import styles from '@/components/common/composite/cards/Cards.module.scss';

import Tooltip from '../../ui/tooltip/Tooltip';

import { DivProps } from './Cards';

type HeaderCardProps = {
  name: string;
  groupName: string;
  position: string;
  url?: string;
} & DivProps;

type LecturerHeaderCardProps = {
  name: string;
  description: string;
  url?: string;
} & DivProps;

export const HeaderCard: React.FC<HeaderCardProps> = ({
  name,
  groupName,
  position,
  url = '/assets/icons/frog36.png',
  ...rest
}) => {
  return (
    <div className={mergeClassNames(styles[`header-card-container`])} {...rest}>
      <div className={styles[`header-card-info`]}>
        <h4 className={styles[`card-name`]}>{name}</h4>
        <div>
          <span className={styles['header-card-postition']}>{position}</span>
          <span className={styles['header-card-group-name']}>{groupName}</span>
        </div>
      </div>
      <img src={url} alt="Картинка профілю" />
    </div>
  );
};

export const LecturerHeaderCard: React.FC<LecturerHeaderCardProps> = ({
  name,
  description,
  url = '/assets/icons/lecturer60.png',
  ...rest
}) => {
  return (
    <div
      className={mergeClassNames(
        styles['card'],
        styles['header-lecturer-card-container'],
      )}
      {...rest}
    >
      <img src={url} alt="картинка викладача" />
      <div className={styles['header-lecturer-card-info']}>
        <h4 className={styles['card-name']}>{name}</h4>
        <Tooltip
          text={description}
          style={{
            fontSize: '11px',
            width: '300px',
          }}
        >
          <div className={styles['lecturer-description']}>{description}</div>
        </Tooltip>
      </div>
    </div>
  );
};
