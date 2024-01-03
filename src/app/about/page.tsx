import { Metadata } from 'next';

import PageLayout from '@/components/common/layout/page-layout';
import AboutPage from '@/components/templates/about-page';
export const metadata: Metadata = {
  title: 'Про нас | FICT Advisor',
};
export default function About() {
  return (
    <PageLayout>
      <AboutPage />
    </PageLayout>
  );
}
