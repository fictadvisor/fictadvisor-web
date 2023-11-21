import PageLayout from '@/components/common/layout/page-layout';
import NotFoundPage from '@/components/pages/404-page';

export default function NotFound() {
  return (
    <PageLayout hasFooter={false} title="Сторінку не знайдено" robots="noindex">
      <NotFoundPage />
    </PageLayout>
  );
}
