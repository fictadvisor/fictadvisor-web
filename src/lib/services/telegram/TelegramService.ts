import config from '@/config';
import { AuthAPI } from '@/lib/api/auth/AuthAPI';
import { AuthTelegramBody } from '@/lib/api/auth/dto/AuthTelegramBody';
import StorageUtil from '@/lib/utils/StorageUtil';

class TelegramService {
  private static openAuthenticationDialog() {
    return new Promise((resolve, reject) => {
      try {
        const Telegram = (window as any).Telegram;
        Telegram.Login.auth(
          { bot_id: config.botId, request_access: true },
          data => {
            return data
              ? resolve(data)
              : reject(new Error('Failed to authenticate'));
          },
        );
      } catch (e) {
        console.log(e);
        reject(e);
      }
    });
  }

  private static async tryTelegramLogin() {
    try {
      const data: AuthTelegramBody =
        (await TelegramService.openAuthenticationDialog()) as AuthTelegramBody;
      const { accessToken, refreshToken } = await AuthAPI.authTelegram(data);

      StorageUtil.setTokens(accessToken, refreshToken);

      return true;
    } catch (e) {
      return false;
    }
  }

  static async login(): Promise<boolean> {
    return await TelegramService.tryTelegramLogin();
  }

  private static async tryTelegramRegister() {
    try {
      const data: AuthTelegramBody =
        (await TelegramService.openAuthenticationDialog()) as AuthTelegramBody;
      console.log(data);
      StorageUtil.setTelegramInfo({ telegram: data });

      return true;
    } catch (e) {
      return false;
    }
  }

  static async register() {
    await TelegramService.tryTelegramRegister();
  }
}

export default TelegramService;