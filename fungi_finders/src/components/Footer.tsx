import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="text-center min-w-full">
      <p className="font-bold">Happy Foraging!</p>
      <Link href={`mailto:contact@fungifinder.com`}>
        contact@fungifinder.com
      </Link>
    </footer>
  );
};

export default Footer;
