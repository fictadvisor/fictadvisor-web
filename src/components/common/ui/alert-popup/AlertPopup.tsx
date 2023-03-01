//margin right 80px margin bottom 36px
import React from 'react';

import Alert, { AlertColor, AlertVariant } from '../alert/Alert';

import styles from './AlertPopup.module.scss';

export interface AlertPopupProps {
  title: string;
  description?: string;
  color?: AlertColor;
  variant?: AlertVariant;
  isClosable?: boolean;
  className?: string;
}

const AlertPopup: React.FC<AlertPopupProps> = ({
  title,
  description,
  color,
  variant,
  isClosable,
  className,
}) => {
  return (
    <div className={styles.wrapper}>
      <Alert
        className={className}
        isClosable={isClosable}
        title={title}
        description={description}
        variant={variant}
        color={color}
      />
    </div>
  );
};

export default AlertPopup;