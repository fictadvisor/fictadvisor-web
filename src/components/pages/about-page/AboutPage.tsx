import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';

import theme from '@/styles/theme';

import * as styles from './AboutPage.styles';
import { eclipse } from './AboutPage.styles';

export enum EclipseSize {
  LARGE = 'LARGE',
  MEDIUM = 'MEDIUM',
  SMALL = 'SMALL',
}

export enum EclipseType {
  RED = 'RED',
  BLUE = 'BLUE',
  VIOLET = 'VIOLET',
}

const AboutPage = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('desktop'));
  return (
    <Box sx={styles.container}>
      <Box
        sx={{
          display: 'flex',
          height: '775px',
        }}
      >
        {!isMobile && (
          <Box
            sx={{
              width: '40%',
              left: '0%',
              top: '0%',
              position: 'absolute',
              background: 'rgba(30, 30, 30, 0.99)',
              boxShadow: '50px 0px 50px 0px #1e1e1e',
              height: '100%',
              backdropFilter: 'blur(1px)',
              zIndex: 1,
            }}
          />
        )}
        <Box
          sx={{
            borderRadius: '100%',
            background: 'rgba(135, 48, 48, 0.70)',
            filter: 'blur(60px)',
            width: '420px',
            height: '350px',
            top: '40%',
            left: '-5%',
            position: 'absolute',
            zIndex: 1,
          }}
        />
        <Box
          width="100%"
          display="flex"
          justifyContent={isMobile ? ' center' : 'flex-start'}
        >
          <Box sx={styles.fictCard}>
            <Typography variant={isMobile ? 'h4Bold' : 'h2Bold'}>
              ФІОТ
            </Typography>
            <Typography variant={isMobile ? 'body1' : 'h6'}>
              <b>Факультет інформатики та обчислювальної техніки</b> — це не
              просто гучна назва, а ціла спільнота з{' '}
              <b>понад 3 тисяч студентів</b>, які розподілені на багатьох
              освітніх програмах та разом рухають галузь комп`ютерної науки
              нашої країни вперед.
            </Typography>
          </Box>
        </Box>
      </Box>
      <img
        src="/images/about-page/vitrazh.png"
        style={{
          right: isMobile ? 'unset' : 0,
          top: 0,
          position: 'absolute',
          borderRadius: '0 0 0 12px',
          zIndex: 0,
        }}
        alt="Вітраж"
      />

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: { desktop: 'row', mobile: 'column-reverse' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: '5%',
          marginTop: '140px',
        }}
      >
        <Box
          sx={{
            maxWidth: '400px',
            gap: { desktop: '18px', mobile: '6px' },
            zIndex: 1,
            marginTop: { desktop: 0, mobile: '16px' },
          }}
        >
          <Typography variant={isMobile ? 'h6Bold' : 'h4Bold'}>
            Із чого все починалось?
          </Typography>
          <Typography
            variant={isMobile ? 'body1' : 'body2'}
            mt={isMobile ? '6px' : '18px'}
          >
            У 1918 році в КПІ заснували електротехнічний факультет, з якого
            беруть початок сучасні катедри ФІОТу.
            <br />
            <br />
            Протягом століття він зазнав багатьох оновлень та реорганізацій, і у
            1985 році світ побачив факультет інформатики та обчислювальної
            техніки, який очолила докторка технічних наук{' '}
            <b>Краснопрошіна Аїда Андріївна</b>.
            <br />
            <br />
            На цьому зміни не завершилися, і з моменту заснування ФІОТ постійно
            оновлюється, щоб відповідати стрімкому розвитку технологій.
          </Typography>
        </Box>
        <Box
          sx={{
            height: { desktop: '360px', mobile: '200px' },
            width: { desktop: '520px', mobile: '310px' },
            zIndex: 1,
          }}
        >
          <img
            src="/images/about-page/basic.png"
            style={{
              borderRadius: '12px',
              width: '100%',
              height: '100%',
            }}
            alt="Basic"
          />
        </Box>
        <Box
          sx={styles.eclipse(EclipseSize.MEDIUM, EclipseType.BLUE, 0.3)}
          right={0}
          zIndex={0}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          gap: '18px',
          marginTop: '140px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant={isMobile ? 'h6Bold' : 'h4Bold'}>
            Катедри факультету
          </Typography>
          <Typography
            variant={isMobile ? 'body1Medium' : 'body2Medium'}
            mt="9px"
          >
            Після реструктуризації факультету у 2021 році катедр залишилося лише
            три:
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            position: 'relative',
            flexDirection: { desktop: 'row', mobile: 'column' },
            height: 'fit-content',
          }}
        >
          <Box sx={styles.cathedraCard}>
            <Typography variant="h4Bold">ОТ</Typography>
            <Box
              sx={styles.eclipse(EclipseSize.SMALL, EclipseType.RED, 0.35)}
              top="60%"
              right="65%"
              zIndex={-1}
            />
            <Typography variant="body2Medium" marginTop="52px" flexGrow={1}>
              Катедра <b>обчислювальної техніки</b> найстаріша на факультеті,
              заснована у 1960 році. Освітній план спрямований на підготовку
              фахівців у галузі розробки високопродуктивних систем реального
              часу, мережевого програмного забезпечення та штучного інтелекту.
            </Typography>
            <Typography variant="body1" marginTop="36px" flexGrow={1}>
              Надає освітні програми для 121 та 123 спеціальностей.
            </Typography>
          </Box>
          <Box sx={styles.cathedraCard}>
            <Typography variant="h4Bold">ІПІ</Typography>
            <Box
              sx={styles.eclipse(EclipseSize.SMALL, EclipseType.BLUE, 0.7)}
              bottom="60%"
              left="70%"
              zIndex={-1}
            />
            <Typography variant="body2Medium" marginTop="52px" flexGrow={1}>
              Катедра <b>інформатики та програмної інженерії</b> доволі молода
              на факультеті, заснована лише у 2021 році. Викладання орієнтоване
              на розвиток у студентів системного та алгоритмічного мислення в
              галузі розробки програмного забезпечення.
            </Typography>
            <Typography variant="body1" marginTop="36px" flexGrow={1}>
              Надає освітню програму для 121 спеціальності.
            </Typography>
          </Box>
          <Box sx={styles.cathedraCard}>
            <Typography variant="h4Bold">ІСТ</Typography>
            <Typography variant="body2Medium" marginTop="52px" flexGrow={1}>
              Катедра <b>інформаційних систем та технологій</b> також заснована
              у 2021 році. Головною особливістю освітньої програми є підготовка
              випускників з глибокими різногалузевими знаннями найсучасніших
              напрямів: інформаційних технологій, комп`ютеризованих систем
              управління, обчислювальної техніки та електроніки.
            </Typography>
            <Typography variant="body1" marginTop="36px" flexGrow={1}>
              Надає освітні програми для 126 спеціальності.
            </Typography>

            <Box
              sx={styles.eclipse(EclipseSize.LARGE, EclipseType.VIOLET, 0.7)}
              top="70%"
              left="-8%"
              zIndex={-1}
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {
            desktop: 'row',
            mobile: 'column',
          },
          marginTop: '140px',
          gap: '16px',
          zIndex: 0,
        }}
        position="relative"
        justifyContent="space-around"
      >
        <Box
          sx={styles.eclipse(EclipseSize.SMALL, EclipseType.RED, 0.35)}
          top="18%"
          left="-8%"
          zIndex={-1}
        />
        <Box
          sx={styles.eclipse(EclipseSize.SMALL, EclipseType.VIOLET, 0.35)}
          top="15%"
          left="30%"
          zIndex={-1}
        />
        <Box
          sx={styles.eclipse(EclipseSize.MEDIUM, EclipseType.VIOLET, 0.7)}
          bottom="15%"
          left="70%"
          zIndex={-1}
        />
        <Box display="flex" flexDirection="column" gap="26px">
          <Box marginTop="30px">
            <Typography variant={isMobile ? 'h6Bold' : 'h4Bold'} width="370px">
              Спеціальності факультету
            </Typography>
            <Typography
              width="340px"
              marginTop="16px"
              variant={isMobile ? 'body1' : 'body2'}
            >
              Факультет надає можливість обрати власну спеціалізацію та стати
              фахівцем у галузі ІТ-технологій. Наразі катедри пропонують освітні
              програми для трьох спеціальностей:
            </Typography>
          </Box>
          <Box sx={styles.specialtyTextCard}>
            <Typography variant={isMobile ? 'h6Bold' : 'h4Bold'}>
              121
            </Typography>
            <Typography variant={isMobile ? 'body1' : 'body2'}>
              Спеціальність «121 Інженерія програмного забезпечення» готує
              програмістів у класичному розумінні. Протягом навчання можна
              поглиблено опанувати розробку програмного забезпечення для різних
              операційних систем, мережеву інженерію та роботу зі штучним
              інтелектом.
              <br /> Факультет пропонує гнучкий освітній план із новітніми
              теоретичними матеріалами та застосуванням сучасних концепцій у
              світі інформаційних технологій.
            </Typography>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" gap="20px">
          <Box sx={styles.specialtyTextCard}>
            <Typography variant={isMobile ? 'h6Bold' : 'h4Bold'}>
              123
            </Typography>
            <Typography variant={isMobile ? 'body1' : 'body2'}>
              Спеціальність «123 Комп`ютерна інженерія» зосереджена на
              низькорівневому програмуванні та фізичних аспектах комп`ютерів.
              Випускники мають глибокі знання в галузі проєктування процесорів,
              системного програмування та моделювання комп`ютерних мереж.
              <br />
              Матеріал курсу опановується без проблем завдяки чітким та
              зрозумілим освітнім ресурсам, досвідченим викладачам та достатній
              кількості необхідного обладнання на факультеті.
            </Typography>
          </Box>
          <Box sx={styles.specialtyTextCard}>
            <Typography variant={isMobile ? 'h6Bold' : 'h4Bold'}>
              126
            </Typography>
            <Typography variant={isMobile ? 'body1' : 'body2'}>
              Спеціальність «126 Інформаційні системи та технології» виникла в
              Україні саме за ініціативи ФІОТу в 2017 році. Студентам надають
              знання з усіх можливих галузей: бекенд, створення серверних
              застосунків, фізичні основи комп`ютерів та веброзробка.
              <br /> Також підготована велика кількість освітніх програм для
              різних напрямів, що ґрунтуються на сучасних технологіях та
              принципах програмування.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        display="flex"
        width="100%"
        alignItems="center"
        mt="140px"
        justifyContent="center"
      >
        <Box display="flex" flexDirection="column">
          <Typography variant="h4Bold">Студентська активність</Typography>
          <Box width="100%" display="flex" marginTop="16px" gap="16px">
            <Box>
              <img
                src="/images/about-page/events.png"
                style={{ borderRadius: '12px' }}
              />
            </Box>

            <Box sx={styles.studentTextCard}>
              <Typography variant="h4Bold">Студрада</Typography>
              <Typography variant="body2">
                Студентська рада ФІОТу одна з найбільш активних в університеті.
                Її члени проводять різноманітні тематичні заходи як для
                студентів, так і для вступників, ведуть новинні канали, а також
                розробляють власний вебсайт. <br />
                За певний напрям роботи відповідає окремий відділ. Кожен студент
                може долучитися до роботи та допомогти в розвитку факультету.
              </Typography>
            </Box>
          </Box>

          <Box display="flex" marginTop="16px" gap="16px">
            <Box>
              <img
                src="/images/about-page/dayF.png"
                style={{ borderRadius: '12px' }}
              />
            </Box>
            <Box sx={styles.studentTextCard}>
              <Typography variant="h4Bold">Заходи</Typography>
              <Typography variant="body2">
                Щорічно Студрада організовує День факультету, Абітфест, гітарні
                та літературні вечори, а також освітні лекції від спонсорів.
                <br /> Музичні заходи проводяться у клубі «Барви». Зробивши
                благодійний внесок для ЗСУ, студенти мають змогу послухати
                авторські пісні андеграунд гуртів.
                <br />
                Для освітніх ініціатив існує Хаб ФІОТ — унікальний проєкт
                співпраці з провідними ІТ-компаніями, де проводять безплатні
                лекції, літні школи та навчальні курси.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.studentTextCard} ml="16px">
          <Typography variant="h4Bold">Благодійність</Typography>
          <Typography variant="body2">
            З початку повномасштабного вторгнення студентство факультету
            регулярно проводить збори на зброю та обладнання для наших
            захисників.
            <br />
            Завдяки небайдужим, на фронт відправилися нові автомобілі, термінали
            зв’язку, прилади нічного бачення, аптечки, бронежилети та інші речі,
            які необхідні нашим студентам та випускникам на фронті.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{ display: 'flex', width: '100%', height: '395px' }}
        justifyContent="space-between"
        mt="145px"
      >
        <Box
          sx={styles.eclipse(EclipseSize.LARGE, EclipseType.RED, 0.7)}
          left="10%"
          zIndex={1}
        />
        <img
          src="/images/about-page/wallFICE.png"
          style={{
            left: 0,
            position: 'absolute',
          }}
          alt="FICE composition"
        />
        <Box
          sx={styles.eclipse(EclipseSize.LARGE, EclipseType.VIOLET, 0.7)}
          right="5%"
          zIndex={1}
        />
        <img
          src="/images/about-page/wallFICE.png"
          style={{
            right: 0,
            position: 'absolute',
          }}
          alt="FICE composition"
        />
        <Box
          sx={{
            borderRadius: '16px',
            width: '50%',
            border: '1px solid #A3A3A3',
            textAlign: 'center',
            mt: '4%',
            left: '25%',
            position: 'absolute',
            background: 'rgba(30, 30, 30, 0.35)',
            backdropFilter: 'blur(10px)',
            padding: '60px',
            zIndex: 1,
          }}
        >
          <Typography variant="h4Bold">
            Факультет інформатики та обчислювальної техніки — це не просто
            красивий корпус, а простір, де кожен може отримати знання та знайти
            себе.
          </Typography>
        </Box>
        <Box
          sx={{
            width: '45%',
            left: '27.5%',
            position: 'absolute',
            background: 'rgba(30, 30, 30, 1)',
            mt: '-20px',
            boxShadow: '40px 0px 20px 0px #1e1e1e, -30px 0 10px -4px #1e1e1e',
            height: '450px',
            zIndex: 0,
          }}
        />
      </Box>
    </Box>
  );
};

export default AboutPage;
