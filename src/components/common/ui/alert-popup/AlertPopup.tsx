import React from 'react';

import Alert from '@/components/common/ui/alert-mui';
import {
  AlertType,
  AlertVariantType,
} from '@/components/common/ui/alert-mui/Alert';

import styles from './AlertPopup.module.scss';

export interface AlertPopupProps {
  title: string;
  description?: string;
  color?: AlertType;
  variant?: AlertVariantType;
  closeFunction: () => void;
}

const AlertPopup: React.FC<AlertPopupProps> = ({
  title,
  description,
  color,
  variant,
  closeFunction,
}) => {
  return (
    <div className={styles.wrapper}>
      <Alert
        // isClosable={true}
        title={title}
        description={description}
        type={color}
        variant={variant}
        onClose={closeFunction}
      />
    </div>
  );
};

export default AlertPopup;
