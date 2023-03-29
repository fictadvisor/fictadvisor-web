import {
  AcademicCapIcon,
  LockClosedIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';

const accountButtons = [
  {
    link: '/account?tab=general',
    text: 'Загальне',
    icon: <AcademicCapIcon />,
  },
  {
    link: '/account?tab=security',
    text: 'Безпека',
    icon: <LockClosedIcon />,
  },
  {
    link: '/account?tab=group',
    text: 'Група',
    icon: <UsersIcon />,
  },
];

export default accountButtons;
