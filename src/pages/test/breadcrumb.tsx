import MUIBreadcrumbPage from '@/components/pages/test-pages/mui-breadcrumb-page';

const items = [
  { label: 'test1', href: '#' },
  { label: 'test2', href: '#' },
  { label: 'test3', href: '#' },
  { label: 'long test4', href: '#' },
];

const Breadcrumb = () => <MUIBreadcrumbPage items={items} />;

export default Breadcrumb;
