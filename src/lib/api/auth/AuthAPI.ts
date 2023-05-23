import { AuthBody } from '@/lib/api/auth/dto/AuthBody';
import { AuthTelegramBody } from '@/lib/api/auth/dto/AuthTelegramBody';
import { CheckRegisterTelegramDTO } from '@/lib/api/auth/dto/CheckRegisterTelegramDTO';
import { ForgotPasswordBody } from '@/lib/api/auth/dto/ForgotPasswordBody';
import { GetMeDTO } from '@/lib/api/auth/dto/GetMeDTO';
import { RefreshAccessTokenDTO } from '@/lib/api/auth/dto/RefreshAccesTokenDTO';
import { ResetPasswordBody } from '@/lib/api/auth/dto/ResetPasswordBody';
import { ResetPasswordDTO } from '@/lib/api/auth/dto/ResetPasswordDTO';
import { TokensDTO } from '@/lib/api/auth/dto/TokensDTO';
import { VerifyEmailBody } from '@/lib/api/auth/dto/VerifyEmailBody';
import { getAuthorizationHeader } from '@/lib/api/utils';

import { client } from '../instance';

import { ChangePasswordBody } from './dto/ChangePasswordBody';
import { RegisterBody } from './dto/RegisterBody';

class AuthAPI {
  async groupHasCaptain(groupId: string): Promise<boolean> {
    const { data } = await client.get(`/auth/checkCaptain/${groupId}`);
    return data;
  }

  async resetPassword(
    resetToken: string,
    body: ResetPasswordBody,
  ): Promise<ResetPasswordDTO> {
    const { data } = await client.post(
      `/auth/resetPassword/${resetToken}`,
      body,
    );
    return data;
  }

  async refreshAccessToken(
    refreshToken: string,
  ): Promise<RefreshAccessTokenDTO> {
    const { data } = await client.patch('/auth/refresh', null, {
      headers: { Authorization: `Bearer ${refreshToken}` },
    });
    return data;
  }

  async changePassword(
    token: string,
    body: ChangePasswordBody,
  ): Promise<TokensDTO> {
    const { data } = await client.put(
      '/auth/updatePassword',
      body,
      getAuthorizationHeader(token),
    );
    return data;
  }

  async getMe(token: string): Promise<GetMeDTO> {
    const { data } = await client.get(
      `/auth/me`,
      getAuthorizationHeader(token),
    );
    return data;
  }

  async authTelegram(body: AuthTelegramBody): Promise<TokensDTO> {
    const { data } = await client.post('/auth/loginTelegram', body);
    return data;
  }

  async auth(body: AuthBody): Promise<TokensDTO> {
    const { data } = await client.post('/auth/login', body);
    return data;
  }

  async register(body: RegisterBody): Promise<TokensDTO> {
    const { data } = await client.post('/auth/register', body);
    return data;
  }

  async forgotPassword(body: ForgotPasswordBody) {
    const { data } = await client.post('/auth/forgotPassword', body);
    return data;
  }

  async checkResetToken(token: string) {
    const { data } = await client.get(`auth/checkResetToken/${token}`);
    return data;
  }

  async verifyEmail(body: VerifyEmailBody) {
    const { data } = await client.post('/auth/register/verifyEmail', body);
    return data;
  }

  async verifyEmailToken(token: string): Promise<TokensDTO> {
    const { data } = await client.post(`/auth/register/verifyEmail/${token}`);
    return data;
  }

  async checkRegisterTelegram(
    token: string,
  ): Promise<CheckRegisterTelegramDTO> {
    const { data } = await client.get(`/auth/checkRegisterTelegram/${token}`);
    return data;
  }
}

export default new AuthAPI();
