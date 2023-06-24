import { Dispatch, FC, SetStateAction } from 'react';

import Button from '@/components/common/ui/button-mui';
import Popup from '@/components/common/ui/pop-ups-mui/Popup';

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
      contentLeft={true}
      open={true}
      text="Чи дійсно ви бажаєте пропустити опитування про викладача? У разі схвальної відповіді, ви більше не зможете зробити відгук. Пам'ятайте, що ваша оцінка є важливою для наступних поколінь."
      title={'Пропустити опитування'}
      firstButton={
        <Button
          text={'Лишити'}
          size={'small'}
          variant="outline"
          onClick={() => setOpen(false)}
        />
      }
      hasCross={true}
      secondButton={
        <Button text={'Пропустити'} size={'small'} onClick={onTeacherSkip} />
      }
      onClose={() => setOpen(false)}
    />
  );
};