import React, { FunctionComponent, useRef } from 'react';
import { useField } from 'formik';

import styles from './Slider.module.scss';

export enum SliderType {
  MOBILE = 'mobile',
  DESKTOP = 'desktop',
}

interface SliderProps extends React.ComponentPropsWithoutRef<'input'> {
  name: string;
  type?: SliderType;
}

const Slider: FunctionComponent<SliderProps> = ({
  type = SliderType.DESKTOP,
  ...rest
}) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sliderRef = useRef(null);
  const [{ value }, {}, { setTouched, setValue }] = useField(rest.name);

  const handleInput = () => {
    sliderRef.current.style.setProperty(
      '--background-size',
      `${calculateBackgroundSize()}%`,
    );
    setValue(sliderRef.current.value);
    setTouched(true);
  };

  const calculateBackgroundSize = () => {
    const min = sliderRef.current.min || 0;
    const max = sliderRef.current.max || 100;
    const value = sliderRef.current.value;
    return ((value - min) / (max - min)) * 100;
  };

  return (
    <div className={styles['slider-container']}>
      <input
        ref={sliderRef}
        type="range"
        min="1"
        max="10"
        step="1"
        className={styles['slider'] + ' ' + styles[`slider-${type}`]}
        onInput={handleInput}
        {...rest}
        value={value.toString()}
      />
      <div className={styles[`${type}-target`]}>
        {numbers.map((number, index) => (
          <div className={styles['component-target']} key={index}>
            <div className={styles['white']}></div>
            <p className={styles[`${type}-font`]}>{number}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;