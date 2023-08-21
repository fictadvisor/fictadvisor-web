import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

import PageLayout from '@/components/common/layout/page-layout/PageLayout';
import Button from '@/components/common/ui/button-mui';
import {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button-mui/types';
import Divider from '@/components/common/ui/divider';
import TokenPopup from '@/components/pages/main-page/components/token-popup';
import * as stylesMUI from '@/components/pages/main-page/MainPage.styles';
import { resourcesCards } from '@/components/pages/main-page/MainPage.styles';
import useAuthentication from '@/hooks/use-authentication';
import { GetStudentResourcesResponse } from '@/lib/api/student-resources/types/GetStudentResourcesResponse';

import BannerImage from '../../common/icons/BannerImage';

import ResourceCard from './components/resource-card/ResourceCard';

import styles from './MainPage.module.scss';

export interface MainPageProps {
  data: GetStudentResourcesResponse | null;
}

const MainPage: FC<MainPageProps> = ({ data }) => {
  const { query, isReady } = useRouter();
  const token = query.token as string;
  const { isLoggedIn } = useAuthentication();

  return (
    <PageLayout
      description="FICT Advisor - офіційний сайт Студради ФІОТ.
     Зустрічайте ваш студентський портал, який надає багато корисних інструментів для студентів.
     Тут ви знайдете опитування про викладачів, багатофункціональний розклад, можливість керувати групою,
      набори в активне ком’юніті та багато інших цікавих інструментів."
      className={styles['main-page']}
    >
      <Box sx={stylesMUI.mainPageContent}>
        {token && isReady && <TokenPopup token={token} />}
        <Box sx={stylesMUI.header}>
          <Box sx={stylesMUI.headerInfo}>
            <Box className={styles['header-info-content']}>
              <Typography variant={'h1'} sx={stylesMUI.title}>
                Твій студентський портал
              </Typography>
              <Typography paragraph sx={stylesMUI.titlePar}>
                Зустрічай FICT Advisor — офіційний сайт Студради ФІОТ.
                Опитування про викладачів, багатофункціональний розклад,
                керування групою, набори в наше активне ком’юніті, розіграш шар
                та інші інструменти — шукай саме тут!
              </Typography>
              <Box sx={stylesMUI.buttons}>
                <Box sx={stylesMUI.buttonDesk}>
                  {!isLoggedIn && (
                    <>
                      <Link href={'/contract'}>
                        <Button
                          text="Договір про навчання"
                          disabled={false}
                          color={ButtonColor.PRIMARY}
                          variant={ButtonVariant.FILLED}
                          size={ButtonSize.LARGE}
                        />
                      </Link>
                      <Divider sx={stylesMUI.buttonDivider} />
                      {/*<hr className={styles['button-divider']} />*/}
                    </>
                  )}
                  <Link href={'/priority'}>
                    <Button
                      text={'Обрати пріоритет'}
                      disabled={false}
                      variant={ButtonVariant.OUTLINE}
                      size={ButtonSize.LARGE}
                    />
                  </Link>
                </Box>
                <Box sx={stylesMUI.buttonTab}>
                  {!isLoggedIn && (
                    <>
                      <Link href={'/contract'}>
                        <Button
                          text="Договір про навчання"
                          disabled={false}
                          color={ButtonColor.PRIMARY}
                          variant={ButtonVariant.FILLED}
                          size={ButtonSize.MEDIUM}
                        />
                      </Link>
                      <Divider sx={stylesMUI.buttonDivider} />
                      {/*<hr className={styles['button-divider']} />*/}
                    </>
                  )}
                  <Link href={'/priority'}>
                    <Button
                      text={'Обрати пріоритет'}
                      disabled={false}
                      variant={ButtonVariant.OUTLINE}
                      size={ButtonSize.MEDIUM}
                    />
                  </Link>
                </Box>
                <Box sx={stylesMUI.buttonMob}>
                  {!isLoggedIn && (
                    <>
                      <Link href={'/contract'}>
                        <Button
                          text="Договір про навчання"
                          disabled={false}
                          color={ButtonColor.PRIMARY}
                          variant={ButtonVariant.FILLED}
                          size={ButtonSize.SMALL}
                        />
                      </Link>
                    </>
                  )}
                  <Link href={'/priority'}>
                    <Button
                      text={'Обрати пріоритет'}
                      disabled={false}
                      variant={ButtonVariant.OUTLINE}
                      size={ButtonSize.SMALL}
                    />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={stylesMUI.buildImage}>
            <BannerImage />
          </Box>
        </Box>
        <Box sx={stylesMUI.resources}>
          <Typography variant={'h3'}>Студентські ресурси</Typography>
          <Box className={styles['resource-card-container']}>
            <Box sx={stylesMUI.resourcesCards}>
              {data?.studentResources.map(({ name, id, icon, link }) => (
                <Box className={styles['card-holder']} key={id}>
                  <ResourceCard text={name} image={icon} href={link} />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </PageLayout>
  );
};

export default MainPage;
