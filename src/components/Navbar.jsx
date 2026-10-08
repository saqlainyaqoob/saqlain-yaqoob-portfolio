import { HiOutlineMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useState } from 'react'
import { SITE } from '../data/site'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
  { href: '#connect', label: 'Connect' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          onClick={closeMenu}
          className="font-code text-sm font-semibold tracking-tight transition-transform hover:-translate-y-0.5"
        >
          {SITE.name.split(' ')[0].toLowerCase()}
          <span className="text-amber-500">.</span>
          {SITE.name.split(' ')[1]?.toLowerCase()}
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 transition-colors hover:text-amber-500 dark:text-slate-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            className="rounded-md border border-slate-200 p-2 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-amber-500 hover:text-amber-500 dark:border-slate-700 dark:text-slate-300"
          >
            {theme === 'dark' ? <IoSunnyOutline size={16} /> : <IoMoonOutline size={16} />}
          </button>

          <button
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            className="rounded-md p-2 text-slate-600 md:hidden dark:text-slate-300"
          >
            {menuOpen ? <RxCross2 size={18} /> : <HiOutlineMenu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="animate-fade-up border-t border-slate-200 px-6 py-4 md:hidden dark:border-slate-800">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-sm text-slate-600 transition-colors hover:text-amber-500 dark:text-slate-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}