import Link from '@/components/common/ui/link-mui';

enum LinkType {
  White = 'white',
  Blue = 'blue',
}

const LinkPage = () => {
  return (
    <div>
      <Link
        href="#"
        text="Click here to open documentation"
        type={LinkType.Blue}
      />
      <br />
      <Link
        href="#"
        text="Click here to open documentation"
        type={LinkType.White}
      />
    </div>
  );
};

export default LinkPage;
