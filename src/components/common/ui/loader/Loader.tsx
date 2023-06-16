import React, { FC } from 'react';
import cn from 'classnames';

import { LargeProgressCircle } from '@/components/common/custom-svg/progress/LargeProgressCircle';
import { LargestProgressCircle } from '@/components/common/custom-svg/progress/LargestProgressCircle';
import { MediumProgressCircle } from '@/components/common/custom-svg/progress/MediumProgressCircle';
import { SmallestProgressCircle } from '@/components/common/custom-svg/progress/SmallestProgressCircle';
import { SmallProgressCircle } from '@/components/common/custom-svg/progress/SmallProgressCircle';

import styles from './Loader.module.scss';

export enum LoaderSize {
  SMALLEST = 'smallest-loader',
  SMALL = 'small-loader',
  MEDIUM = 'medium-loader',
  LARGE = 'big-loader',
  LARGEST = 'biggest-loader',
}

interface LoaderProps {
  size?: LoaderSize;
  className?: string;
}

const LoaderMap = {
  [LoaderSize.SMALLEST]: SmallestProgressCircle,
  [LoaderSize.SMALL]: SmallProgressCircle,
  [LoaderSize.MEDIUM]: MediumProgressCircle,
  [LoaderSize.LARGE]: LargeProgressCircle,
  [LoaderSize.LARGEST]: LargestProgressCircle,
};

const Loader: FC<LoaderProps> = ({ size = LoaderSize.SMALLEST, className }) => {
  const LoaderIcon = LoaderMap[size];

  return (
    <div className={cn(styles[size], className)}>
      <LoaderIcon />
    </div>
  );
};

export default Loader;
