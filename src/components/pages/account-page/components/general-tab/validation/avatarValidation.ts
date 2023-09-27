import { isValidFile } from '@/components/pages/account-page/components/general-tab/utils/isValidFile';
import { UseToastReturn } from '@/hooks/use-toast/types';

export const avatarValidation = (file: File, toast: UseToastReturn) => {
  if (!isValidFile(file)) {
    toast.error(
      'Неправильне розширення файлу файлу',
      'Підтримуванні розширення: .png, .jpg, .jpeg, .webp',
      4000,
    );
    return;
  }

  if (file.size > 1.5 * 1024 * 1024) {
    toast.error('Розмір файлу не повинен бути більше 1.5 МБ', '', 4000);
    return;
  }
};
