'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const HERO_COPY = {
  en: {
    eyebrow: 'AGRICULTURAL BEARING SPECIALIST · SHANDONG, CHINA',
    titleFirst: 'Reliable Agricultural',
    titleSecond: 'Bearings for Global',
    titleThird: 'Machinery Brands',
    subtitle:
      'Stable quality, practical solutions, and export-ready support for agricultural equipment and low-speed machinery.',
    primaryCta: 'Request a Quote',
    secondaryCta: 'View Bearing Solutions',
    trustItems: [
      'ISO 9001 Certified',
      'Factory Direct Export',
      'Ships to 30+ Countries',
      'OEM / ODM Ready',
    ],
    mediaAlt: 'Industrial branded agricultural bearing poster',
    mediaLabel: 'STATIC BRAND VISUAL',
    mediaCardTitle: 'Export-Ready Support',
    mediaCardText: 'Bearing supply for distributors, OEM buyers, and replacement markets.',
    mediaCaption: 'TRACTORS · HARVESTERS · TILLAGE EQUIPMENT',
  },
  ar: {
    eyebrow: 'متخصص المحامل الزراعية · شاندونغ، الصين',
    titleFirst: 'محامل زراعية موثوقة',
    titleSecond: 'للشركات العالمية',
    titleThird: 'المصنّعة للآلات',
    subtitle:
      'جودة مستقرة، حلول عملية، ودعم جاهز للتصدير لمعدات الزراعة والآلات منخفضة السرعة.',
    primaryCta: 'اطلب عرض سعر',
    secondaryCta: 'عرض حلول المحامل',
    trustItems: [
      'معتمد ISO 9001',
      'تصدير مباشر من المصنع',
      'شحن إلى أكثر من 30 دولة',
      'جاهز لـ OEM / ODM',
    ],
    mediaAlt: 'ملصق صناعي دعائي لمحامل زراعية',
    mediaLabel: 'صورة علامة ثابتة',
    mediaCardTitle: 'دعم جاهز للتصدير',
    mediaCardText: 'توريد محامل للموزعين ومشتري OEM وأسواق الاستبدال.',
    mediaCaption: 'جرارات · حصادات · معدات حراثة',
  },
} as const;

export default function HeroSection() {
  const locale = useLocale();
  const copy = HERO_COPY[locale as keyof typeof HERO_COPY] ?? HERO_COPY.en;

  return (
    <section className="bg-[#f5f7fa]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] lg:items-center">
          <div className="flex flex-col justify-center">
            <div className="mb-7 flex items-center gap-3">
              <div className="h-px w-12 bg-[#f26a21]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#f26a21]">
                {copy.eyebrow}
              </span>
            </div>

            <h1 className="max-w-4xl font-display text-[46px] font-extrabold leading-[0.94] tracking-[-0.03em] text-[#0f1923] sm:text-[60px] lg:text-[74px]">
              <span className="block">{copy.titleFirst}</span>
              <span className="block">
                <span className="text-[#f26a21]">
                  {locale === 'ar' ? copy.titleSecond : 'Bearings'}
                </span>
                {locale === 'ar' ? null : ' for Global'}
              </span>
              <span className="block">
                {locale === 'ar' ? copy.titleThird : 'Machinery Brands'}
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              {copy.subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#f26a21] px-7 py-4 text-sm font-semibold tracking-[0.08em] text-white shadow-[0_16px_36px_-22px_rgba(242,106,33,0.95)] transition-colors duration-200 hover:bg-[#dd5b17]"
              >
                {copy.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={`/${locale}/products`}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-7 py-4 text-sm font-semibold tracking-[0.08em] text-[#0f1923] transition-colors duration-200 hover:border-slate-400 hover:bg-slate-50"
              >
                {copy.secondaryCta}
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {copy.trustItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-[0_12px_28px_-24px_rgba(15,25,35,0.45)]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0e7] text-[#f26a21]">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-slate-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative min-h-[360px] overflow-hidden rounded-[32px] border border-slate-200 bg-[#e9eef2] shadow-[0_30px_90px_-50px_rgba(15,25,35,0.48)] sm:min-h-[460px] lg:min-h-[620px]">
              <Image
                src="/homepage-hero-poster.svg"
                alt={copy.mediaAlt}
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(15,25,35,0.08))]" />
              <div className="absolute left-5 top-5 rounded-2xl border border-white/80 bg-white/88 px-4 py-3 shadow-lg backdrop-blur">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#f26a21]">
                  {copy.mediaLabel}
                </p>
                <p className="mt-2 text-sm font-semibold text-[#0f1923]">{copy.mediaCardTitle}</p>
                <p className="mt-1 max-w-[16rem] text-sm leading-6 text-slate-600">
                  {copy.mediaCardText}
                </p>
              </div>
              <div className="absolute bottom-5 left-5">
                <div className="rounded-full border border-white/80 bg-white/92 px-5 py-3 shadow-lg backdrop-blur">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-600">
                    {copy.mediaCaption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
