import React, { FC, useState } from 'react';
import { useField } from 'formik';

import Input from '@/components/common/ui/form/input-mui';
import {
  InputProps,
  InputType,
} from '@/components/common/ui/form/input-mui/types';

interface FormikInputProps extends Omit<InputProps, 'value'> {
  type?: InputType;
  name: string;
}

const FormikInput: FC<FormikInputProps> = ({
  name,
  handleRightIconClick,
  type,
  ...props
}) => {
  const [{ value }, { touched, error }, { setValue, setTouched }] =
    useField(name);
  const [isHidden, setIsHidden] = useState(type === InputType.PASSWORD);

  handleRightIconClick = () => {
    if (type === InputType.PASSWORD) {
      setIsHidden(!isHidden);
    }
    if (type === InputType.SEARCH) {
      setTouched(false);
      setValue('');
    }
  };

  return (
    <Input
      {...props}
      value={value}
      touched={touched}
      error={error}
      handleRightIconClick={handleRightIconClick}
    />
  );
};

export default FormikInput;
