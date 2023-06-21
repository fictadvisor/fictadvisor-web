import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  EyeIcon,
  EyeSlashIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

import {
  InputState,
  InputType,
} from '@/components/common/ui/form/input-mui/Input';

export const getState = (
  disabled: boolean,
  isTouched: boolean,
  error: string,
  isSuccessOnDefault: boolean,
): InputState => {
  if (disabled) return InputState.DISABLED;
  else if (isTouched && error) return InputState.ERROR;
  else if (isTouched && isSuccessOnDefault) return InputState.SUCCESS;
  else return InputState.DEFAULT;
};

export const getLeftIcon = (type: InputType) =>
  type === InputType.SEARCH ? MagnifyingGlassIcon : null;

export const getRightIcon = (
  type: InputType,
  isHidden: boolean,
  state: InputState,
  value: string,
) => {
  if (type === InputType.PASSWORD) {
    if (isHidden) return EyeSlashIcon;
    else return EyeIcon;
  } else {
    if (state === InputState.SUCCESS) return CheckCircleIcon;
    else if (state === InputState.ERROR) return ExclamationCircleIcon;
    else if (type === InputType.SEARCH && value) return XMarkIcon;
  }
};
