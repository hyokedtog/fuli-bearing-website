'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { CheckCircle2, Cog, Mail, MapPin, Phone } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  const locale = useLocale();

  const copy =
    locale === 'ar'
      ? {
          description:
            'حلول محامل احترافية للآلات الزراعية. مصممة للأداء.',
          trustItems: [
            'معتمد ISO 9001',
            'تصدير مباشر من المصنع',
            'شحن إلى أكثر من 30 دولة',
            'جاهز لـ OEM / ODM',
          ],
          productsTitle: 'المنتجات',
          products: [
            { label: 'محامل الحراثة', href: `/${locale}/products` },
            { label: 'محامل الديسك هارو', href: `/${locale}/products` },
            { label: 'محامل البذارات', href: `/${locale}/products` },
            { label: 'محامل الحصادات', href: `/${locale}/products` },
            { label: 'محامل PTO', href: `/${locale}/products` },
            { label: 'حلول مخصصة', href: `/${locale}/products` },
          ],
          companyTitle: 'الشركة',
          company: [
            { label: 'من نحن', href: `/${locale}/about` },
            { label: 'جودتنا' },
            { label: 'التصنيع' },
            { label: 'الأخبار والرؤى' },
            { label: 'اتصل بنا', href: `/${locale}/contact` },
          ],
          contactTitle: 'اتصل بنا',
          copyright:
            '© 2026 شركة فولي ماشينري (شاندونغ) المحدودة. جميع الحقوق محفوظة.',
        }
      : {
          description:
            'Professional bearing solutions for agricultural machinery. Built for performance.',
          trustItems: [
            'ISO 9001 Certified',
            'Factory Direct Export',
            'Ships to 30+ Countries',
            'OEM / ODM Ready',
          ],
          productsTitle: 'Products',
          products: [
            { label: 'Tillage Bearings', href: `/${locale}/products` },
            { label: 'Disc Harrow Bearings', href: `/${locale}/products` },
            { label: 'Planter Bearings', href: `/${locale}/products` },
            { label: 'Combine Bearings', href: `/${locale}/products` },
            { label: 'PTO Bearings', href: `/${locale}/products` },
            { label: 'Custom Solutions', href: `/${locale}/products` },
          ],
          companyTitle: 'Company',
          company: [
            { label: 'About Us', href: `/${locale}/about` },
            { label: 'Our Quality' },
            { label: 'Manufacturing' },
            { label: 'News & Insights' },
            { label: 'Contact Us', href: `/${locale}/contact` },
          ],
          contactTitle: 'Contact',
          copyright:
            '© 2026 FULI Machinery (Shandong) Limited Company. All rights reserved.',
        };

  return (
    <footer className="border-t border-slate-800 bg-[#0e1d2d] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1fr]">
          <div className="space-y-6">
            <Link href={`/${locale}`} className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#5b3a1f] bg-[#17293d] text-[#f26a21]">
                <Cog className="h-6 w-6" />
              </span>
              <div className="flex flex-col">
                <span className="text-base font-bold uppercase tracking-[0.18em] text-white">
                  FULI
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#f26a21]">
                  Machinery
                </span>
              </div>
            </Link>

            <p className="max-w-sm text-sm leading-7 text-slate-300">{copy.description}</p>

            <div className="grid gap-3 sm:grid-cols-2">
              {copy.trustItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-white/5 px-4 py-3"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#f26a21]" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#f26a21]">
              {copy.productsTitle}
            </h3>
            <ul className="space-y-3">
              {copy.products.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#f26a21]">
              {copy.companyTitle}
            </h3>
            <ul className="space-y-3">
              {copy.company.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-sm text-slate-400">{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#f26a21]">
              {copy.contactTitle}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#f26a21]" />
                <div className="space-y-1">
                  <p>+86 186 0631 1628</p>
                  <p>+86 178 6111 6848</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#f26a21]" />
                <p>fulibearing@163.com</p>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#f26a21]" />
                <p>Yandian Town, Liaocheng City, Shandong Province, China</p>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-slate-800" />

        <p className="text-center text-sm text-slate-400">{copy.copyright}</p>
      </div>
    </footer>
  );
}
