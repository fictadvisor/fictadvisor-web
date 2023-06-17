export enum UserGroupRole {
  CAPTAIN = 'CAPTAIN',
  MODERATOR = 'MODERATOR',
  STUDENT = 'STUDENT',
}

export enum UserGroupState {
  APPROVED = 'APPROVED',
  DECLINED = 'DECLINED',
  PENDING = 'PENDING',
}

export interface UserGroup {
  id: string;
  code: string;
  role?: UserGroupRole;
  state: UserGroupState;
}

export interface User {
  id: string;
  username: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  telegramId?: number;
  group?: UserGroup;
  avatar: string;
}
