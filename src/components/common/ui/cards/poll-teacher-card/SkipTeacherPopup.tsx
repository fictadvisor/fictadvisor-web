import { Dispatch, FC, SetStateAction } from 'react';

import Button from '@/components/common/ui/button-mui';
import { Popup } from '@/components/common/ui/popup';

interface skipTeacherPopupProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  onTeacherSkip: () => void;
}

export const SkipTeacherPopup: FC<skipTeacherPopupProps> = ({
  setOpen,
  onTeacherSkip,
}) => {
  return (
    <Popup
      isClosable={true}
      text={
        'Хто тримає цей район? Пес Патрон, пес Патрон Хто крутіший за iPhone?\n' +
        'Пес Патрон, пес Патрон Хто не ходить на газон? Пес Патрон, пес Патрон\n' +
        'В розмінуванні чемпіон Пес Патрон, пес Патрон'
      }
      title={'Пропустити опитування'}
      firstButton={
        <Button
          text={'Лишити'}
          size={'small'}
          variant="outline"
          onClick={() => setOpen(false)}
        />
      }
      secondButton={
        <Button text={'Пропустити'} size={'small'} onClick={onTeacherSkip} />
      }
      hasIcon={false}
      closeFunction={setOpen}
    />
  );
};
