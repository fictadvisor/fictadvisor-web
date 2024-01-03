import { Metadata } from 'next';

import PageLayout from '@/components/common/layout/page-layout';
import PrivacyPage from '@/components/templates/privacy-page';

export const metadata: Metadata = {
  title: 'Політика конфіденційності | FICT Advisor',
  description:
    'На цій сторінці ми надаємо опис процесу збору та обробки персональних даних, а також умови їх видалення. Персональні дані видаляються після відрахування користувача з факультету, за власним запитом користувача або після деактивації системи.',
};

export default function Privacy() {
  return (
    <PageLayout>
      <PrivacyPage />
    </PageLayout>
  );
}
