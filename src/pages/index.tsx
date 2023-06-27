import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import PageLayout from '@/components/common/layout/page-layout/PageLayout';
import MainPage from '@/components/pages/main-page';
import { MainPageProps } from '@/components/pages/main-page/MainPage';
import StudentResourcesAPI from '@/lib/api/student-resources/StudentResourcesAPI';

export const getStaticProps: GetStaticProps<MainPageProps> = async () => {
  let data: MainPageProps['data'];

  try {
    data = await StudentResourcesAPI.getAll();
  } catch (error: unknown) {
    data = null;
  }

  return {
    props: {
      data,
    },
  };
};

const Main = (props: InferGetStaticPropsType<typeof getStaticProps>) => (
  <PageLayout description="FICT Advisor - офіційний сайт Студради ФІОТ. Зустрічайте твій студентський портал, який надає багато корисних інструментів для студентів. Тут ви знайдете опитування про викладачів, багатофункціональний розклад, можливість керувати групою, набори в активне ком’юніті, розіграші та багато інших цікавих інструментів.">
    <MainPage {...props} />
  </PageLayout>
);

export default Main;
