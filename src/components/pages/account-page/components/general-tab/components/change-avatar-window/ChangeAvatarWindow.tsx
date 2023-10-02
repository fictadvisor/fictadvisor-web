import { FC } from 'react';

import Button from '@/components/common/ui/button-mui';
import {
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button-mui/types';
import Popup from '@/components/common/ui/pop-ups/Popup';

interface ChangeAvatarWindowProps {
  setPopupOpen: (popupOpen: boolean) => void;
}

const ChangeAvatarWindow: FC<ChangeAvatarWindowProps> = ({ setPopupOpen }) => {
  return (
    <Popup
      onClose={() => setPopupOpen(false)}
      open={true}
      title={'Змінити аватар'}
      content={
        <Button
          text={'Лишити'}
          size={ButtonSize.SMALL}
          variant={ButtonVariant.OUTLINE}
          onClick={() => setPopupOpen(false)}
        />
      }
      firstButton={
        <Button
          text={'Лишити'}
          size={ButtonSize.SMALL}
          variant={ButtonVariant.OUTLINE}
          onClick={() => setPopupOpen(false)}
        />
      }
    />
  );
};

export default ChangeAvatarWindow;
