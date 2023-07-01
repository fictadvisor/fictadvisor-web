import React, { useRef, useState } from 'react';
import cn from 'classnames';

import { DivProps } from '@/components/common/ui/cards/types';

// import Tooltip from '@/components/common/ui/tooltip-mui';
import styles from './TeacherHeaderCard.module.scss';

type TeacherHeaderCardProps = {
  name: string;
  description: string;
  url?: string;
} & DivProps;

const TeacherHeaderCard: React.FC<TeacherHeaderCardProps> = ({
  name,
  description,
  url = '/images/lecturer-avatar.png',
  ...rest
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  const onMouseOverHandler = () => {
    const elem = divRef.current;
    if (elem) {
      setIsTruncated(
        elem.scrollHeight - 1 > elem.getBoundingClientRect().height,
      );
    }
  };

  return (
    <div
      className={cn(styles['card'], styles['header-lecturer-card-container'])}
      {...rest}
    >
      <img src={url} alt="картинка викладача" />
      <div className={styles['header-lecturer-card-info']}>
        <h4 className={styles['card-name']}>{name}</h4>
        <div className={styles['lecturer-description']}>{description}</div>
        {/*//TODO proper usage of Tooltip*/}
        {/*<Tooltip text={description} hasArrow={false}>*/}
        {/*  <div className={styles['lecturer-description']}>{description}</div>*/}
        {/*</Tooltip>*/}
      </div>
    </div>
  );
};

export default TeacherHeaderCard;
