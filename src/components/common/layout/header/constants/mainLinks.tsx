import {
  AcademicCapIcon,
  BriefcaseIcon,
  ClipboardIcon,
  HomeIcon,
} from '@heroicons/react/24/solid';

const mainLinks = [
  {
    link: '/',
    text: 'Головна',
    icon: <HomeIcon />,
  },
  {
    link: '/poll',
    text: 'Опитування',
    icon: <ClipboardIcon />,
  },
  {
    link: '/teachers',
    text: 'Викладачі',
    icon: <BriefcaseIcon />,
  },
  {
    link: '/subjects',
    text: 'Предмети',
    icon: <AcademicCapIcon />,
  },
];

export default mainLinks;
