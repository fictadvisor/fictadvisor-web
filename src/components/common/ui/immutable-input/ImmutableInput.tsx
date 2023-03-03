import React, { useState } from 'react';
import mergeClassNames from 'merge-class-names';
import Link from 'next/link';

import { FieldState } from '@/components/common/ui/form/common/types';

import styles from './ImmutableInput.module.scss';

export enum InputSize {
  LARGE = 'large',
  MEDIUM = 'medium',
}

export enum InputType {
  DEFAULT = 'text',
  PASSWORD = 'password',
  SEARCH = 'search',
}

interface InputProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  label?: string;
  placeholder?: string;
  size?: InputSize;
  type?: InputType;
  className?: string;
  value: string;
  href?: string;
}

const ImmutableInput: React.FC<InputProps> = ({
  label,
  placeholder,
  size = InputSize.MEDIUM,
  type = InputType.DEFAULT,
  className: additionalClassName,
  href,
  ...rest
}) => {
  const [isHidden, setIsHidden] = useState(type === InputType.PASSWORD);
  const inputType = isHidden ? 'password' : 'text';

  const customType = label || type === InputType.SEARCH ? type : 'unlabeled';
  const customLabel = type === InputType.SEARCH ? undefined : label;

  const state = FieldState.DEFAULT;

  const inputColor = `default-input-color`;
  const hasIcon =
    customType === InputType.PASSWORD ||
    (customType === InputType.SEARCH && rest.value !== '');
  const inputStyle = `${size}-${customType}${hasIcon ? '-icon' : ''}-input`;

  const className = mergeClassNames(
    styles[inputColor],
    styles[inputStyle],
    additionalClassName,
  );

  if (!href) {
    return (
      <div className={className}>
        {customLabel && <label> {customLabel} </label>}
        <input
          readOnly
          placeholder={placeholder}
          type={inputType}
          name={rest.name}
          {...rest}
        />
      </div>
    );
  }

  return (
    <Link href={href}>
      <div className={className}>
        {customLabel && <label> {customLabel} </label>}
        <input
          readOnly
          placeholder={placeholder}
          type={inputType}
          name={rest.name}
          {...rest}
        />
      </div>
    </Link>
  );
};

export default ImmutableInput;