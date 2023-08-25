import React, { FC } from 'react';
import { useField } from 'formik';

import Input from '@/components/common/ui/form/input-mui';
import {
  InputProps,
  InputType,
} from '@/components/common/ui/form/input-mui/types';

interface FormikInputProps extends InputProps {
  type?: InputType;
  name: string;
}

const FormikInput: FC<FormikInputProps> = ({ name, type, ...props }) => {
  const [field, { touched, error }] = useField(name);

  // const [isHidden, setIsHidden] = useState(type === InputType.PASSWORD);
  // //
  // handleRightIconClick = () => {
  //   if (type === InputType.PASSWORD) {
  //     setIsHidden(!isHidden);
  //   }
  //   if (type === InputType.SEARCH) {
  //     setTouched(false);
  //     setValue('');
  //   }
  // };

  return (
    <Input
      {...props}
      onChange={field.onChange}
      value={field.value}
      name={name}
      touched={touched}
      error={error}
      type={type}
    />
  );
};

export default FormikInput;
