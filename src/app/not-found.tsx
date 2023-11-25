import { Metadata } from 'next';
import NotFoundPage from 'page-elements/404-page';

import PageLayout from '@/components/common/layout/page-layout';

export const metadata: Metadata = {
  title: 'Сторінку не знайдено',
};
export default function NotFound() {
  return (
    <PageLayout hasFooter={false}>
      <NotFoundPage />
    </PageLayout>
  );
}
