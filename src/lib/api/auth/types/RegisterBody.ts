import { Student } from '@/types/student';
import { TelegramUser } from '@/types/telegram';

export interface RegisterBody {
  student: Student;
  user: {
    username: string;
    email: string;
    password: string;
  };
  telegram?: TelegramUser;
}
