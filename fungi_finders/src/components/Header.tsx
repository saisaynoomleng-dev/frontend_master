'use client';

import { NavLinkProps } from '@/app/_types/definitions';
import Image from 'next/image';
import Navlink from './Navlink';
import Link from 'next/link';
import { Button } from './ui/button';
import { useState } from 'react';
import clsx from 'clsx';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const links = [
    { name: 'Discover', url: '/' },
    { name: 'Mushroom Guide', url: '/mushroom-guide' },
  ];
  return (
    <header className="p-5 max-w-[1000px] flex justify-between items-center">
      <Link href="/" className="max-md:self-center">
        <Image
          src={'/Logo.svg'}
          width={50}
          height={100}
          priority
          alt=""
          className="w-[100px] h-auto"
        />
      </Link>

      <Button
        className="hidden max-md:block max-md:sticky max-md:right-[.5rem] max-md:top-0 text-brand-400 max-md:z-50"
        onClick={() => setNavOpen((prev) => !prev)}
        aria-controls="#nav"
      >
        {navOpen ? <IoMdClose /> : <GiHamburgerMenu />}
      </Button>

      <nav
        id="nav"
        className={clsx(
          'flex gap-3 items-center max-md:fixed max-md:inset-0 max-md:top-[1rem] max-md:left-[50%] max-md:bottom-[70%] max-md:flex-col max-md:items-start max-md:pt-10 max-md:bg-teal-500 max-md:px-10 max-md:transition-transform max-md:duration-700 max-md:z-30',
          navOpen ? 'max-md:translate-x-0' : 'max-md:translate-x-full',
        )}
        role="navigation"
        aria-label="Main Menu"
        aria-expanded={navOpen}
      >
        {links.map((link: NavLinkProps) => (
          <Navlink
            name={link.name}
            url={link.url}
            key={link.name}
            onClick={() => setNavOpen(false)}
          />
        ))}
      </nav>
    </header>
  );
};

export default Header;
