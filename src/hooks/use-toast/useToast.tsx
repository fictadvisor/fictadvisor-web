import { AlertType } from '@/components/common/ui/alert-mui/types';

import { useToastContext } from './toast-context';
import { UseToastReturn } from './types';

const useToast = (): UseToastReturn => {
  const { showToast } = useToastContext();

  return {
    error: (title, description) =>
      showToast({ title, description, type: AlertType.ERROR }),
    warning: (title, description) =>
      showToast({ title, description, type: AlertType.WARNING }),
    success: (title, description) =>
      showToast({ title, description, type: AlertType.SUCCESS }),
    info: (title, description) =>
      showToast({ title, description, type: AlertType.INFO }),
  };
};

export default useToast;
