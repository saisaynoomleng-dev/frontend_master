'use client';

import { NavLinkProps } from '@/app/_types/definitions';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navlink = ({ name, url, className, onClick }: NavLinkProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={url}
      className={clsx(
        `font-semibold`,
        pathname === url && 'text-brand-500',
        className,
      )}
      onClick={onClick}
    >
      {name}
    </Link>
  );
};

export default Navlink;
