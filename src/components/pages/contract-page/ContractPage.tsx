import { Box } from '@mui/material';

import Breadcrumbs from '@/components/common/ui/breadcrumbs';
import PersonalForm from '@/components/pages/contract-page/PersonalForm';

const ContractPage = () => {
  return (
    <Box>
      <Breadcrumbs
        items={[
          { label: 'Головна', href: '/' },
          { label: 'Договір про навчання', href: '/contract' },
        ]}
      />
      <PersonalForm />
    </Box>
  );
};
export default ContractPage;
