import { useRouter } from 'next/navigation';

import PageLayout from '@/components/common/layout/page-layout';
import EntrantAdminPage from '@/components/templates/entrant-admin-page';
import useAuthentication from '@/hooks/use-authentication';
export default function EntrantAdmin() {
  const { isLoggedIn } = useAuthentication();
  const router = useRouter();

  if (!isLoggedIn) router.push('/login');
  return (
    <PageLayout /*title="Менеджент вступника | FICT Advisor"*/>
      <EntrantAdminPage />
    </PageLayout>
  );
}
