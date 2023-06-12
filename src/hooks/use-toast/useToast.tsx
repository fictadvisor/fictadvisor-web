import { useContext } from 'react';

import { AlertType } from '@/components/common/ui/alert-mui/types';
import { ToastContext } from '@/hooks/use-toast/toast-context';

const useToast = () => {
  const { showToast } = useContext(ToastContext);

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
