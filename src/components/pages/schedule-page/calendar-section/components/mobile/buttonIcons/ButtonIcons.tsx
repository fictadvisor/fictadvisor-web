import { ArrowUpIcon, PlusIcon } from '@heroicons/react/24/solid';
import { Box } from '@mui/material';

import ButtonIcon from '@/components/common/ui/icon-button-mui/IconButton';
import useAuthentication from '@/hooks/use-authentication';
import { useSchedule } from '@/store/schedule/useSchedule';
import { UserGroupRole } from '@/types/user';

import * as styles from './buttonIcons.styles';

export const ButtonIcons = () => {
  const { user } = useAuthentication();
  const { groupId } = useSchedule(state => ({ groupId: state.groupId }));

  console.log(window.scrollY);

  return (
    <Box sx={styles.buttonIcons}>
      {user && user.group?.role === UserGroupRole.CAPTAIN && (
        <ButtonIcon icon={<PlusIcon />} />
      )}

      <ButtonIcon
        icon={<ArrowUpIcon />}
        onClick={() => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        }}
      />
    </Box>
  );
};
