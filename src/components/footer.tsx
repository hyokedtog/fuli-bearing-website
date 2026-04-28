'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Cog, Phone, Mail, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const year = new Date().getFullYear();

  const companyLinks = [
    { href: `/${locale}/about`, label: t('companyLinks') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  return (
    <footer className="border-t bg-[#0f2744] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <Cog className="h-8 w-8 text-[#e85d04]" />
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">FULI</span>
                <span className="text-[10px] font-medium leading-tight tracking-wider text-[#e85d04]">
                  MACHINERY
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-300">{t('tagline')}</p>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#e85d04]">
              {t('products')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}/products`}
                  className="text-sm text-gray-300 hover:text-white"
                >
                  {t('products')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#e85d04]">
              {t('companyLinks')}
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#e85d04]">
              {t('contact')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#e85d04]" />
                <span>
                  <div>+86 186 0631 1628</div>
                  <div>+86 178 6111 6848</div>
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#e85d04]" />
                <span>fulibearing@163.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#e85d04]" />
                <span>{t('addressValue')}</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="text-center text-sm text-gray-400">
          {t('copyright', { year })}
        </div>
      </div>
    </footer>
  );
}
