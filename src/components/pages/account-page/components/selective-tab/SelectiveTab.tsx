import { FC, useState } from 'react';
import { Box, Typography } from '@mui/material';

import SelectiveBlock from '@/components/pages/account-page/components/selective-tab/components/selective-block';

import * as styles from './SelectiveTab.styles';

const SelectiveTab: FC = () => {
  //useQuery
  const [openedBlocksNum, setOpenedBlockNum] = useState(0);

  const changeOpenedBlockNum = (num: number) => {
    setOpenedBlockNum(openedBlocksNum + num);
  };

  return (
    <Box sx={styles.wrapper}>
      <Typography component="h4" sx={styles.title}>
        Мої вибіркові
      </Typography>
      {openedBlocksNum > 0 && (
        <Typography sx={styles.description}>
          За допомогою цієї сторінки ти можеш налаштувати викладачів, що будуть
          доступні в опитуванні. Ця сторінка не є вибріковим, які проводить КПІ,
          тому обирайте ті предмети на які потрапили
        </Typography>
      )}
      <SelectiveBlock
        userId={'123'}
        semester={1}
        year={'2023-2024'}
        disciplines={['adsad']}
        disciplinesNumber={3}
        refetch={() => {}}
        onOpenBlock={changeOpenedBlockNum}
      />
      <SelectiveBlock
        userId={'123'}
        semester={2}
        year={'2023-2024'}
        disciplines={['12 321312312 3123123123123123231232 131231', 'asdad']}
        disciplinesNumber={3}
        refetch={() => {}}
        onOpenBlock={changeOpenedBlockNum}
      />
    </Box>
  );
};

export default SelectiveTab;
