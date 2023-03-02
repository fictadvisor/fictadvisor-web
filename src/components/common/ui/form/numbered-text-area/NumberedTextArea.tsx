import React, { useState } from 'react';
import { useField } from 'formik';

import { FieldState } from '@/components/common/ui/form/common/types';

import styles from './NumberedTextArea.module.scss';

export enum NumberedTextAreaSize {
  LARGE = 'large',
  SMALL = 'small',
}

interface NumberedTextAreaProps {
  name: string;
  placeholder?: string;
  label?: string;
  size?: NumberedTextAreaSize;
  isDisabled?: boolean;
  isSuccessOnDefault?: boolean;
  defaultRemark?: string;
  showRemark?: boolean;
  className?: string;
}

const NumberedTextArea: React.FC<NumberedTextAreaProps> = ({
  name,
  placeholder,
  label,
  size = NumberedTextAreaSize.LARGE,
  isDisabled = false,
  isSuccessOnDefault = false,
  defaultRemark,
  showRemark = true,
  className,
}) => {
  const [field, { touched, error }] = useField(name);
  const [scrollTop, setScrollTop] = useState(0);
  let state: FieldState;
  const numbers = [];
  let numberOfLines = 0;
  const handlerScroll = e => {
    setScrollTop(e.target.scrollTop);
  };

  if (touched && error) state = FieldState.ERROR;
  else if (touched && isSuccessOnDefault) state = FieldState.SUCCESS;

  const divClasses = [
    styles['textarea'],
    styles[size ? `${size}-area` : ''],
    styles[state ? `${state}-area` : ''],
    className,
  ];

  if (field.value.includes(',') || field.value.includes(';')) {
    field.value = field.value
      .replace(/,/g, '\n')
      .replace(/;/g, '\n')
      .replace(/\s+/g, '\n')
      .replace(/\n\n/g, '\n');
  }
  field.value = field.value.replace(/\s+/g, '\n');
  field.value = field.value.replace(/\n\n/g, '\n');
  numberOfLines = field.value.split('\n').length;

  for (let i = 0; i < numberOfLines; i++) {
    numbers.push(<span key={i}></span>);
  }

  return (
    <div className={divClasses.join(' ')}>
      <div className={styles['divlines']}>
        <div className={styles['line-numbers']} style={{ top: -scrollTop }}>
          <>{numbers}</>
        </div>
      </div>
      {label && <label>{label}</label>}
      <textarea
        onScroll={e => handlerScroll(e)}
        {...field}
        className={styles['textarea_input']}
        disabled={isDisabled}
        placeholder={placeholder}
      />
      {showRemark && <p>{touched && error ? error : defaultRemark}</p>}
    </div>
  );
};

export default NumberedTextArea;