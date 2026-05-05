import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://fuli-bearing-website.vercel.app';

const meta = {
  en: {
    title: 'FULI Machinery | Bearing Manufacturer & Exporter | Shandong China',
    description:
      'FULI Machinery manufactures deep groove ball bearings, tapered roller bearings, spherical roller bearings and pillow block units. ISO 9001 certified, factory-direct pricing, ships worldwide.',
  },
  ar: {
    title: 'فولي ماشينري | مصنع ومصدر محامل | شاندونغ الصين',
    description:
      'تصنع فولي ماشينري محامل الكرات الأخدود العميق، محامل الأسطوانات المخروطية، محامل الأسطوانات الكروية. معتمدة ISO 9001، أسعار مصنع مباشرة، شحن دولي.',
  },
};

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const m = meta[locale as 'en' | 'ar'] ?? meta.en;
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: { en: `${BASE_URL}/en`, ar: `${BASE_URL}/ar` },
    },
    openGraph: { title: m.title, description: m.description, url: `${BASE_URL}/${locale}`, siteName: 'FULI Machinery' },
  };
}
import HeroSection from '@/components/hero-section';
import SplashScreen from '@/components/splash-screen';
import {
  ArrowRight,
  ShieldCheck,
  Wrench,
  CircleDollarSign,
  HardHat,
  Cog,
  Zap,
  Building2,
  Gauge,
  PackageCheck,
  Wheat,
  Car,
} from 'lucide-react';

export default function HomePage() {
  const t = useTranslations();

  const valueProps = [
    {
      icon: Wheat,
      title: 'Agricultural Equipment Bearings',
      desc: 'Disc harrow, insert, pillow block, and flanged units built for tractors, seeders, and harvesting machines.',
    },
    {
      icon: Gauge,
      title: 'Stable Quality for Low-Speed Applications',
      desc: 'Consistent dimensional tolerance and grease retention for field-facing, low-RPM bearing positions.',
    },
    {
      icon: PackageCheck,
      title: 'Export Packing & Custom Support',
      desc: 'Neutral packing, branded boxes, or bulk export cartons. OEM marking and documentation available.',
    },
    {
      icon: ShieldCheck,
      title: 'Practical Solutions, Not Just Cheap Prices',
      desc: 'Mid-range quality that performs reliably — a better choice than ultra-cheap bearings that fail in the field.',
    },
  ];

  const features = [
    { key: 'quality', icon: ShieldCheck, badge: 'ISO 9001 Certified' },
    { key: 'price', icon: CircleDollarSign, badge: 'Factory Direct' },
    { key: 'delivery', icon: PackageCheck, badge: 'Ships 24–72 hrs' },
    { key: 'custom', icon: Wrench, badge: 'OEM / ODM Ready' },
  ];

  const applications = [
    {
      key: 'automotive',
      icon: Car,
      uses: ['Wheel hubs', 'Transmissions', 'Steering columns'],
    },
    {
      key: 'agriculture',
      icon: Wheat,
      uses: ['Combine harvesters', 'Grain augers', 'Tractors'],
    },
    {
      key: 'mining',
      icon: HardHat,
      uses: ['Rock crushers', 'Conveyor systems', 'Drilling rigs'],
    },
    {
      key: 'machinery',
      icon: Cog,
      uses: ['Pumps & compressors', 'Gearboxes', 'Machine tools'],
    },
    {
      key: 'electric',
      icon: Zap,
      uses: ['Motor shafts', 'Generators', 'Industrial fans'],
    },
    {
      key: 'construction',
      icon: Building2,
      uses: ['Excavators', 'Tower cranes', 'Concrete mixers'],
    },
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* 品牌加载仪式 */}
      <SplashScreen />

      {/* Hero Section */}
      <HeroSection />

      {/* Value Propositions */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#e85d04]" />
              <p className="text-[11px] font-bold tracking-[0.22em] text-[#e85d04] uppercase">
                Why Manufacturers Choose FULI
              </p>
            </div>
            <h2 className="font-display text-4xl font-extrabold text-[#0f1923] tracking-tight">
              Built for Agricultural Machinery
            </h2>
            <p className="mt-3 text-base text-gray-500 max-w-xl leading-relaxed">
              Practical bearings for real field conditions — not just specs on paper.
            </p>
          </div>

          {/* 4 value prop cards */}
          <div className="grid grid-cols-1 gap-px bg-gray-100 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white p-8 flex flex-col gap-5 group hover:shadow-md transition-shadow duration-200">
                  <div className="flex h-12 w-12 items-center justify-center bg-orange-50 border border-orange-100 group-hover:bg-orange-100 transition-colors duration-200">
                    <Icon className="h-6 w-6 text-[#e85d04]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0f1923] leading-snug mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-[#04080f] border-t border-slate-800/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-slate-600" />
                <p className="text-xs font-semibold tracking-[0.22em] text-slate-400 uppercase">
                  Manufacturer Advantage
                </p>
              </div>
              <h2 className="font-display text-4xl font-bold text-white tracking-tight">
                {t('features.title')}
              </h2>
            </div>
            <p className="text-base text-slate-400 max-w-xs lg:text-right leading-relaxed shrink-0">
              Factory-direct supply with full export documentation and dedicated international support.
            </p>
          </div>

          {/* Feature rows */}
          <div className="divide-y divide-slate-800/70">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.key}
                  className="group flex items-center gap-6 py-7 transition-colors hover:bg-slate-900/30 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
                >
                  {/* Icon */}
                  <div className="shrink-0 flex h-12 w-12 items-center justify-center border border-slate-800 group-hover:border-slate-700 bg-slate-900/50 transition-all duration-300">
                    <Icon className="h-5 w-5 text-orange-500" />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-white uppercase tracking-[0.08em] mb-1.5">
                      {t(`features.${feat.key}.title`)}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {t(`features.${feat.key}.description`)}
                    </p>
                  </div>

                  {/* Credential badge */}
                  <div className="shrink-0 hidden sm:block">
                    <span className="text-xs font-mono font-semibold text-slate-400 group-hover:text-slate-300 border border-slate-700 group-hover:border-slate-600 px-3 py-1.5 tracking-[0.1em] uppercase whitespace-nowrap transition-colors duration-300">
                      {feat.badge}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Applications */}
      <section className="py-24 bg-slate-950 border-t border-slate-800/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-slate-600" />
              <p className="text-xs font-semibold tracking-[0.22em] text-slate-400 uppercase">
                Industries Served
              </p>
            </div>
            <h2 className="font-display text-4xl font-bold text-white tracking-tight">
              {t('applications.title')}
            </h2>
            <p className="mt-3 text-base text-slate-400 max-w-lg leading-relaxed">
              {t('applications.subtitle')}
            </p>
          </div>

          {/* Industry cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((app) => {
              const Icon = app.icon;
              return (
                <div
                  key={app.key}
                  className="group border border-slate-800 bg-slate-900/30 p-6 hover:border-slate-700 hover:bg-slate-900/60 transition-all duration-300"
                >
                  {/* Icon + label row */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex h-11 w-11 items-center justify-center border border-slate-800 group-hover:border-slate-700 bg-slate-950 transition-all duration-300 shrink-0">
                      <Icon className="h-5 w-5 text-slate-600 group-hover:text-orange-500 transition-colors duration-300" />
                    </div>
                    <h3 className="text-base font-bold text-white uppercase tracking-[0.1em]">
                      {t(`applications.${app.key}`)}
                    </h3>
                  </div>

                  {/* Use cases */}
                  <div className="space-y-2 pl-[60px]">
                    {app.uses.map((use) => (
                      <p key={use} className="flex items-center gap-2 text-sm text-slate-400">
                        <span className="w-1 h-1 rounded-full bg-orange-500/50 shrink-0" />
                        {use}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#04080f] border-t border-slate-800/60">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="border border-slate-800 bg-slate-900/40 p-12 md:p-16 text-center relative overflow-hidden">
            {/* Grid texture */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
            />
            {/* Top accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-orange-500/60" />
            <div className="relative z-10">
              <p className="text-xs font-semibold tracking-[0.22em] text-orange-500 uppercase mb-5">
                Get in Touch
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                {t('cta.title')}
              </h2>
              <p className="text-base text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
                {t('cta.description')}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-9 py-4 bg-orange-600 hover:bg-orange-500 text-white text-base font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(234,88,12,0.2)] hover:shadow-[0_0_40px_rgba(234,88,12,0.4)]"
              >
                {t('cta.button')}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
