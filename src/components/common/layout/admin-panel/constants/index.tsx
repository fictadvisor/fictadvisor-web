import {
  AcademicCapIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  CalendarIcon,
  ClipboardDocumentListIcon,
  HomeIcon,
  IdentificationIcon,
  NewspaperIcon,
  PencilSquareIcon,
  UserCircleIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

import { Captain } from '@/components/common/icons/Captain';

export const adminPanelTabs = [
  {
    link: '/roles',
    text: 'Ролі',
    icon: <Captain />,
  },

  {
    link: '/users',
    text: 'Користувачі',
    icon: <UserCircleIcon />,
  },
  {
    link: '/students',
    text: 'Студенти',
    icon: <IdentificationIcon />,
  },
  {
    link: '/groups',
    text: 'Групи',
    icon: <UserGroupIcon />,
  },
  {
    link: '/departments',
    text: 'Кафедри',
    icon: <BuildingLibraryIcon />,
  },
  {
    link: '/teachers',
    text: 'Викладачі',
    icon: <BriefcaseIcon />,
  },
  {
    link: '/disciplines',
    text: 'Дисципліни',
    icon: <NewspaperIcon />,
  },
  {
    link: '/subjects',
    text: 'Предмети',
    icon: <AcademicCapIcon />,
  },
  {
    link: '/',
    text: 'Розклад',
    icon: <CalendarIcon />,
  },
  'Опитування',
  {
    link: '/',
    text: 'База питань',
    icon: <PencilSquareIcon />,
  },
  {
    link: '/',
    text: 'База відповідей',
    icon: <ClipboardDocumentListIcon />,
  },
  {
    link: '/',
    text: 'Головна сторінка',
    icon: <HomeIcon />,
  },
];
