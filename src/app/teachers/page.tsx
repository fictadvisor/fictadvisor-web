import { Metadata } from 'next';

import PageLayout from '@/components/common/layout/page-layout/PageLayout';
import TeacherSearchPage from '@/components/templates/search-pages/teacher-search';
export const metadata: Metadata = {
  title: 'Викладачі',
  description:
    'Тут ти знайдеш інформацію про викладачів, яка допоможе тобі знайти викладача для твоїх потреб. Ця сторінка пропонує широкі можливості пошуку та фільтрації, щоб забезпечити точні й зручні результати.',
};

export default function TeacherPage() {
  return (
    <PageLayout>
      <TeacherSearchPage />
    </PageLayout>
  );
}
