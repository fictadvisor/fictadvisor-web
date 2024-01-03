import MainPage from '@/components/templates/main-page';
import { MainPageProps } from '@/components/templates/main-page/MainPage';
import StudentResourcesAPI from '@/lib/api/student-resources/StudentResourcesAPI';

export default async function Main() {
  let data: MainPageProps['data'];

  try {
    data = await StudentResourcesAPI.getAll();
  } catch (error: unknown) {
    data = null;
  }

  return <MainPage data={data} />;
}
