import { FC } from 'react';
import { useField } from 'formik';

import NumberedTextArea from '../../numbered-text-area-mui/NumberedTextArea';
import { NumberedTextAreaProps } from '../../numbered-text-area-mui/types';

interface FormikNumberedTextAreaProps extends NumberedTextAreaProps {
  name: string;
}

const FormikNumberedTextArea: FC<FormikNumberedTextAreaProps> = ({
  name,
  ...props
}) => {
  const [field, { touched, error }] = useField(name);
  return (
    <NumberedTextArea
      {...props}
      touched={touched}
      error={error}
      field={field}
    />
  );
};

export default FormikNumberedTextArea;
