import { FC } from 'react';
import { useField } from 'formik';

import Slider, { SliderProps } from '../../slider/Slider';

interface FormikSliderProps extends Omit<SliderProps, 'value'> {
  name: string;
}

const FormikSlider: FC<FormikSliderProps> = ({ name, ...props }) => {
  const [{ value }, {}, { setTouched, setValue }] = useField(name);

  const onChange = (_event: Event, value: number | number[]) => {
    setTouched(true);
    setValue(value as number);
  };

  return <Slider {...props} value={value} onChange={onChange} />;
};

export default FormikSlider;
