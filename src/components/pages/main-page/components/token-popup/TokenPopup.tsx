import { FC, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Popup } from '@/components/common/composite/popup';
import Button, {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button';
import useAuthentication from '@/hooks/use-authentication';
import useToast from '@/hooks/use-toast';
import AuthAPI from '@/lib/api/auth/AuthAPI';
import UserAPI from '@/lib/api/user/UserAPI';
import AuthService from '@/lib/services/auth';
import StorageUtil from '@/lib/utils/StorageUtil';

interface TokenPopupProps {
  token: string;
}
const TokenPopup: FC<TokenPopupProps> = ({ token }) => {
  const { push } = useRouter();
  const { user, isLoggedIn, update, token: accessToken } = useAuthentication();
  const [isOpen, setIsOpen] = useState(false);
  const toast = useToast();

  const loadData = useCallback(
    async token => {
      const { isRegistered } = await AuthAPI.checkRegisterTelegram(
        token as string,
      );
      if (isRegistered) {
        setIsOpen(true);
      } else {
        toast.error('Поганий токен!');
        if (isLoggedIn) await push('/account');
        else await push('/register');
      }
    },
    [isLoggedIn, push, toast],
  );

  useEffect(() => {
    void loadData(token);
  }, [loadData, token]);

  const handleClick = async () => {
    try {
      await AuthService.registerTelegram();
      if (isLoggedIn) {
        await UserAPI.linkTelegram(user.id, accessToken, {
          ...StorageUtil.getTelegramInfo().telegram,
        });
        update();
        StorageUtil.deleteTelegramInfo();
        toast.success('Telegram успішно приєднано!');
        await push('/account');
      } else {
        toast.success('Telegram успішно приєднано, дозаповни усі поля!');
        await push('/register');
      }
    } catch (e) {
      toast.error('Не вдалось підключити Telegram, спробуй ще раз');
    } finally {
      setIsOpen(false);
    }
  };

  return (
    isOpen && (
      <Popup
        isClosable={false}
        hasIcon
        isTelegramIcon
        title="Підключи Telegram"
        text="Натисни, щоб підключити Telegram"
        closeFunction={setIsOpen}
        firstButton={
          <Button
            size={ButtonSize.MEDIUM}
            text="Прийняти"
            color={ButtonColor.PRIMARY}
            variant={ButtonVariant.FILLED}
            onClick={handleClick}
          />
        }
      />
    )
  );
};

export default TokenPopup;
