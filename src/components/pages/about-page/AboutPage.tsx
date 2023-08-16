import React from 'react';
import { Box, Typography } from '@mui/material';

import * as styles from './AboutPage.styles';

const AboutPage = () => {
  return (
    <Box sx={styles.container}>
      <Box
        sx={{
          display: 'flex',
          height: '777px',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            borderRadius: '100%',
            background: 'rgba(135, 48, 48, 0.70)',
            transform: 'rotate(15deg)',
            width: '421px',
            height: '347px',
            top: '40%',
            left: '-8%',
            filter: 'blur(60px)',
            position: 'absolute',
            flexShrink: 0,
          }}
        />
        <Box sx={styles.fictCard}>
          <Typography variant="h2Bold">ФІОТ</Typography>
          <Typography variant="h6">
            <b>Факультет інформатики та обчислювальної техніки</b> — це не
            просто гучна назва, а ціла спільнота з{' '}
            <b>понад 3 тисяч студентів</b>, які розподілені на багатьох освітніх
            програмах та разом рухають галузь комп`ютерної науки нашої країни
            вперед.
          </Typography>
        </Box>
      </Box>
      <Box>
        <img
          src="/images/about-page/vitrazh.jpg"
          style={{
            height: '775px',
            zIndex: 0,
          }}
        />
      </Box>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: '5%',
          marginTop: '140px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '400px',
            gap: '18px',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h4Bold">Із чого все починалось?</Typography>
          <Typography>
            <p>
              У 1918 році в КПІ заснували електротехнічний факультет, з якого
              беруть початок сучасні катедри ФІОТу.
            </p>
            <br />
            <p>
              Протягом століття він зазнав багатьох оновлень та реорганізацій, і
              у 1985 році світ побачив факультет інформатики та обчислювальної
              техніки, який очолила докторка технічних наук{' '}
              <b>Краснопрошіна Аїда Андріївна</b>.
            </p>
            <br />
            <p>
              На цьому зміни не завершилися, і з моменту заснування ФІОТ
              постійно оновлюється, щоб відповідати стрімкому розвитку
              технологій.
            </p>
          </Typography>
        </Box>
        <Box>
          <img
            src="/images/about-page/basic.jpg"
            style={{ height: '360px', borderRadius: '12px' }}
          />
        </Box>
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
        <Box display="flex" flexDirection="column" gap="9px">
          <Typography variant="h4Bold">Катедри факультету</Typography>

          <Typography variant="body2Medium">
            Після реструктуризації факультету у 2021 році катедр залишилося лише
            три:
          </Typography>
        </Box>
        <Box display="flex" gap="16px" position="relative">
          <Box sx={styles.cathedraCard}>
            <Typography variant="h4Bold">ОТ</Typography>
            <Box
              sx={{
                borderRadius: '100%',
                background: 'rgba(135, 48, 48, 0.70)',
                transform: 'rotate(15deg)',
                width: '100%',
                height: '249px',
                filter: 'blur(70px)',
                position: 'absolute',
                top: '60%',
                right: '45%',
                flexShrink: 0,
                zIndex: -1,
              }}
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
              sx={{
                borderRadius: '100%',
                background: 'rgba(48, 51, 135, 0.70)',
                width: '100%',
                height: '249px',
                filter: 'blur(70px)',
                position: 'absolute',
                bottom: '60%',
                left: '45%',
                flexShrink: 0,
                zIndex: -1,
              }}
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
              sx={{
                borderRadius: '100%',
                background: 'rgba(128, 48, 135, 0.70)',
                width: '100%',
                height: '340px',
                filter: 'blur(70px)',
                position: 'absolute',
                top: '70%',
                flexShrink: 0,
                zIndex: -1,
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={styles.section}
        marginTop="140px"
        position="relative"
        gap="16px"
        justifyContent="space-around"
        zIndex={0}
      >
        <Box
          sx={{
            borderRadius: '100%',
            background: 'rgba(222, 49, 49, 0.35)',
            width: '296px',
            height: '287px',
            filter: 'blur(60px)',
            top: '18%',
            left: '-8%',
            position: 'absolute',
            flexShrink: 0,
            zIndex: -1,
          }}
        />
        <Box
          sx={{
            borderRadius: '100%',
            background: 'rgba(80, 16, 91, 0.35)',
            width: '312px',
            height: '310px',
            top: '15%',
            left: '30%',
            filter: 'blur(60px)',
            position: 'absolute',
            flexShrink: 0,
            zIndex: -1,
          }}
        />
        <Box
          sx={{
            borderRadius: '100%',
            background: 'rgba(128, 48, 135, 0.70)',
            width: '431px',
            height: '416px',
            filter: 'blur(60px)',
            position: 'absolute',
            bottom: '15%',
            left: '70%',
            flexShrink: 0,
            zIndex: -1,
          }}
        />
        <Box display="flex" flexDirection="column" gap="26px">
          <Box marginTop="30px">
            <Typography variant="h4Bold" width="370px">
              Спеціальності факультету
            </Typography>
            <Typography width="340px" marginTop="16px">
              Факультет надає можливість обрати власну спеціалізацію та стати
              фахівцем у галузі ІТ-технологій. Наразі катедри пропонують освітні
              програми для трьох спеціальностей:
            </Typography>
          </Box>
          <Box
            sx={{
              gap: '20px',
              borderRadius: '12px',
              background: '#1E1E1E',
              alignItems: 'flex-start',
              padding: '30px 20px',
              maxWidth: '562px',
            }}
          >
            <Typography variant="h4Bold">121</Typography>
            <Typography>
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
          <Box
            sx={{
              gap: '20px',
              borderRadius: '12px',
              background: '#1E1E1E',
              alignItems: 'flex-start',
              padding: '30px 20px',
              maxWidth: '740px',
            }}
          >
            <Typography variant="h4Bold">123</Typography>
            <Typography>
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
          <Box
            sx={{
              gap: '20px',
              borderRadius: '12px',
              background: '#1E1E1E',
              alignItems: 'flex-start',
              padding: '30px 20px',
              maxWidth: '740px',
            }}
          >
            <Typography variant="h4Bold">126</Typography>
            <Typography>
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
      <Typography variant="h4Bold" mt="140px">
        Студентська активність
      </Typography>
      <Box display="flex" width="100%" alignItems="center">
        <Box display="flex" flexDirection="column">
          <Box
            height="260px"
            width="100%"
            display="flex"
            marginTop="16px"
            gap="16px"
          >
            <Box
              sx={{
                width: '500px',
                height: '260px',
                overflow: 'hidden',
                borderRadius: '12px',
                // marginTop: '16px',
              }}
            >
              <img
                src="/images/about-page/events.jpg"
                style={{
                  height: '100%',
                  width: '100%',
                }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                borderRadius: '12px',
                background: '#151515',
                alignItems: 'flex-start',
                padding: '20px',
                maxWidth: '520px',
                height: '260px',
                width: 'fit-content',
              }}
            >
              <Typography variant="h4Bold">Студрада</Typography>
              <Typography>
                Студентська рада ФІОТу одна з найбільш активних в університеті.
                Її члени проводять різноманітні тематичні заходи як для
                студентів, так і для вступників, ведуть новинні канали, а також
                розробляють власний вебсайт.
                <br /> За певний напрям роботи відповідає окремий відділ. Кожен
                студент може долучитися до роботи та допомогти в розвитку
                факультету.
              </Typography>
            </Box>
          </Box>

          <Box
            height="460px"
            width="100%"
            display="flex"
            marginTop="16px"
            gap="16px"
          >
            <Box
              sx={{
                width: '470px',
                height: '400px',
                overflow: 'hidden',
                borderRadius: '12px',
              }}
            >
              <img
                src="/images/about-page/dayF.jpg"
                style={{
                  height: '100%',
                  width: '100%',
                  transform: 'scale(1.2)',
                }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                borderRadius: '12px',
                background: '#151515',
                alignItems: 'flex-start',
                padding: '20px',
                maxWidth: '300px',
                height: 'fit-content',
                width: 'fit-content',
              }}
            >
              <Typography variant="h4Bold">Заходи</Typography>
              <Typography>
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
            <Box
              sx={{
                height: '320px',
                width: '230px',
                overflow: 'hidden',
                borderRadius: '12px',
              }}
            >
              <img
                src="/images/about-page/military-cerf.jpg"
                style={{
                  height: '100%',
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            borderRadius: '12px',
            background: '#151515',
            alignItems: 'flex-start',
            padding: '20px',
            maxWidth: '300px',
            height: 'fit-content',
            width: 'fit-content',
            marginLeft: '16px',
          }}
        >
          <Typography variant="h4Bold">Благодійність</Typography>
          <Typography>
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
      <Box sx={styles.section}></Box>
    </Box>
  );
};

export default AboutPage;
