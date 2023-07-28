import { Box } from '@mui/material';

import Breadcrumbs from '@/components/common/ui/breadcrumbs';
import PersonalForm from '@/components/pages/contract-page/PersonalForm';

import * as styles from './ContractPage.styles';

const ContractPage = () => {
  return (
    <Box sx={styles.page}>
      <Breadcrumbs
        sx={styles.breadcrumbs}
        items={[
          { label: 'Головна', href: '/' },
          { label: 'Договір про навчання', href: '/contract' },
        ]}
      />
      <Box sx={styles.form}>
        <PersonalForm />
      </Box>
    </Box>
  );
};
export default ContractPage;
