'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Cog, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/products`, label: t('products') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  const isActive = (href: string) => pathname === href;

  const switchLocale = locale === 'en' ? 'ar' : 'en';
  const switchPath = pathname.replace(`/${locale}`, `/${switchLocale}`);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2.5">
          <Cog className="h-7 w-7 text-orange-500" />
          <div className="flex flex-col">
            <span className="text-sm font-bold leading-tight tracking-[0.12em] text-white">
              FULI
            </span>
            <span className="text-[9px] font-semibold leading-tight tracking-[0.2em] text-slate-500 uppercase">
              Machinery
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-[13px] font-medium transition-colors tracking-wide ${
                isActive(link.href)
                  ? 'text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={switchPath}
            className="border border-slate-700 hover:border-slate-500 px-3 py-1.5 text-[12px] font-medium text-slate-400 hover:text-white transition-colors tracking-wide"
          >
            {locale === 'en' ? 'العربية' : 'English'}
          </Link>
          <Button
            asChild
            className="bg-orange-600 hover:bg-orange-500 text-white rounded-none h-8 px-4 text-xs tracking-wide font-semibold"
            size="sm"
          >
            <Link href={`/${locale}/contact`}>
              <Phone className="mr-1.5 h-3.5 w-3.5" />
              {t('inquiry')}
            </Link>
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href={switchPath}
            className="border border-slate-700 px-2 py-1 text-xs font-medium text-slate-400"
          >
            {locale === 'en' ? 'العربية' : 'EN'}
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-slate-950 border-slate-800">
              <div className="mt-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 text-sm font-medium tracking-wide transition-colors ${
                      isActive(link.href)
                        ? 'text-white border-l-2 border-orange-500 bg-slate-900/60'
                        : 'text-slate-400 hover:text-white hover:bg-slate-900/40 border-l-2 border-transparent'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className="mt-4 bg-orange-600 hover:bg-orange-500 rounded-none text-xs tracking-wide font-semibold"
                >
                  <Link href={`/${locale}/contact`} onClick={() => setOpen(false)}>
                    <Phone className="mr-2 h-3.5 w-3.5" />
                    {t('inquiry')}
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
