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
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/96 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#f6d5c3] bg-[#fff3ec] text-[#f26a21]">
            <Cog className="h-5 w-5" />
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f1923]">
              FULI
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              Machinery
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-[13px] font-semibold tracking-[0.08em] transition-colors ${
                isActive(link.href)
                  ? 'bg-[#fff1e8] text-[#f26a21]'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-[#0f1923]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={switchPath}
            className="rounded-full border border-slate-200 px-3 py-2 text-[12px] font-semibold tracking-[0.08em] text-slate-600 transition-colors hover:border-slate-300 hover:text-[#0f1923]"
          >
            {locale === 'en' ? 'العربية' : 'English'}
          </Link>
          <Button
            asChild
            className="h-11 rounded-full bg-[#f26a21] px-5 text-xs font-semibold tracking-[0.12em] text-white hover:bg-[#dd5b17]"
          >
            <Link href={`/${locale}/contact`}>
              <Phone className="mr-2 h-3.5 w-3.5" />
              {t('inquiry')}
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            href={switchPath}
            className="rounded-full border border-slate-200 px-3 py-2 text-[12px] font-semibold tracking-[0.08em] text-slate-600"
          >
            {locale === 'en' ? 'العربية' : 'EN'}
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-[#0f1923]"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 border-slate-200 bg-white px-0">
              <div className="mt-8 flex flex-col gap-1 px-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-sm font-semibold tracking-[0.08em] transition-colors ${
                      isActive(link.href)
                        ? 'bg-[#fff1e8] text-[#f26a21]'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-[#0f1923]'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className="mt-4 h-11 rounded-full bg-[#f26a21] text-xs font-semibold tracking-[0.12em] text-white hover:bg-[#dd5b17]"
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
