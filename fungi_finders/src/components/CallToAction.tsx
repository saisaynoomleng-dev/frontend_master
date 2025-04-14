import clsx from 'clsx';
import Link from 'next/link';

const CallToAction = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={clsx(
        'bg-green-600 text-white font-bold px-4 py-2 capitalize rounded-sm hover:scale-[1.01] transition-transform duration-500',
        className,
      )}
    >
      {children}
    </Link>
  );
};

export default CallToAction;
