'use client';

import { useState } from 'react';
import { FiBarChart, FiX } from 'react-icons/fi';

import { links } from '@/config/nav-links';

import { ActiveLink } from './ui/active-link';
import { Button } from './ui/button';
import { Logo } from './ui/Logo';

export const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <Button
        variant="ghost"
        onClick={() => handleToggleMenu()}
        aria-label="Menu"
        className="md:hidden"
      >
        <FiBarChart size={20} className="rotate-90" />
      </Button>
      <nav
        className={`absolute z-10 bg-background border-r-[0.5px] border-border px-2 pt-6 w-[75vw] max-w-[400px] h-screen flex flex-col md:hidden gap-y-6 top-0 duration-500 ${isMenuOpen ? 'left-0' : 'left-[-100%]'}`}
      >
        <Button
          variant="ghost"
          onClick={() => handleToggleMenu()}
          aria-label="Fechar menu"
          className="absolute top-4 right-4"
        >
          <FiX size={20} />
        </Button>
        <Logo.Root>
          <Logo.Name />
        </Logo.Root>
        <ul className="flex flex-col gap-y-3">
          {links.map((link) => (
            <li key={link.name}>
              <ActiveLink
                href={link.href}
                title={link.name}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </ActiveLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
