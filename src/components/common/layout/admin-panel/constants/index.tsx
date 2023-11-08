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
    link: '/',
    text: 'Ролі',
    icon: <Captain />,
  },

  {
    link: '/',
    text: 'Користувач',
    icon: <UserCircleIcon />,
  },
  {
    link: '/',
    text: 'Студенти',
    icon: <IdentificationIcon />,
  },
  {
    link: '/',
    text: 'Групи',
    icon: <UserGroupIcon />,
  },
  {
    link: '/',
    text: 'Кафедри',
    icon: <BuildingLibraryIcon />,
  },
  {
    link: '/',
    text: 'Викладачі',
    icon: <BriefcaseIcon />,
  },
  {
    link: '/',
    text: 'Дисципліни',
    icon: <NewspaperIcon />,
  },
  {
    link: '/',
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
