import { Box, Typography } from '@mui/material';

import * as styles from '@/components/pages/main-page/completely-normal-folder/GreetingBlock.styles';

import stylesCSS from './GreetingBlock.module.scss';

const GreetingBlock = () => {
  const imgScr = '/images/admin-default/avatars/';

  const avatars = [
    '/images/admin-default/avatars/stas.png',
    '/images/admin-default/avatars/svyat.png',
    '/images/admin-default/avatars/oleg.png',
    '/images/admin-default/avatars/danya.png',
    '/images/admin-default/avatars/katya.png',
    '/images/admin-default/avatars/pasha.png',
    '/images/admin-default/avatars/dima.png',
    '/images/admin-default/avatars/illia.png',
    '/images/admin-default/avatars/vovka.png',
    '/images/admin-default/avatars/artem.png',
    '/images/admin-default/avatars/sasha.png',
  ];
  const names = [
    'Стасік',
    'Свят',
    'Олег',
    'Даня',
    'Катя',
    'Паша',
    'Діма',
    'Ілля',
    'Вова',
    'Артем',
    'Саша',
  ];

  const tags = [
    '@stbasarab',
    '@hoshion',
    '@fogoog',
    '@DanioRerio8',
    '@srebniukk',
    '@pseudo_otter',
    '@CyC_lik',
    '@K_Illya',
    '@vovka_yakor',
    '@artemiiiiiiiiiiiiiii',
    '@freakman_s',
  ];

  return (
    <Box sx={styles.greetingWrapper}>
      <Typography sx={styles.greetingTitle}>
        1000-ний коміт на Back-end
      </Typography>
      <Typography sx={styles.greetingSubtitle}>
        Вітаємо цих чудових котиків!!!
      </Typography>
      <Box sx={styles.kittensBlock}>
        {names.map((name, index) => (
          <Box key={index} sx={styles.kittenCard}>
            <img
              className={stylesCSS['kitten-image']}
              width={200}
              height={200}
              src={avatars[index]}
              alt={name}
            />
            <Typography sx={styles.kittenName}>{name}</Typography>
            <Typography sx={styles.kittenTag}>{tags[index]}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default GreetingBlock;
