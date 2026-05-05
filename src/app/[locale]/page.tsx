import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/hero-section';
import {
  ArrowRight,
  CircleDollarSign,
  Gauge,
  PackageCheck,
  ShieldCheck,
  Wrench,
  Wheat,
  Cog,
  Tractor,
  Sprout,
  PackageSearch,
} from 'lucide-react';

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

const HOME_COPY = {
  en: {
    valueEyebrow: 'WHY MANUFACTURERS CHOOSE FULI',
    valueTitle: 'Built for Agricultural Machinery',
    valueText: 'Practical bearings for real field conditions — not just specs on paper.',
    valueCards: [
      {
        title: 'Agricultural Equipment Bearings',
        text: 'Disc harrow, insert, pillow block, and flanged units built for tractors, seeders, and harvesters.',
        icon: Wheat,
      },
      {
        title: 'Stable Quality for Low-Speed Applications',
        text: 'Consistent dimensional tolerance and grease retention for field-facing, low-RPM bearing positions.',
        icon: Gauge,
      },
      {
        title: 'Export Packing & Custom Support',
        text: 'Neutral packing, branded boxes, or bulk export cartons. OEM marking and documentation available.',
        icon: PackageCheck,
      },
      {
        title: 'Practical Solutions, Not Just Cheap Prices',
        text: 'Mid-range quality that performs reliably — a better choice than ultra-cheap bearings that fail in the field.',
        icon: ShieldCheck,
      },
    ],
    featuresEyebrow: 'MANUFACTURER ADVANTAGE',
    featuresTitle: 'Why Choose FULI',
    featuresIntro:
      'Factory-direct supply with full export documentation and dedicated international support.',
    features: [
      {
        title: 'PREMIUM QUALITY',
        description:
          'ISO 9001 certified manufacturing with strict quality control at every stage.',
        badge: 'ISO 9001 CERTIFIED',
        icon: ShieldCheck,
      },
      {
        title: 'COMPETITIVE PRICING',
        description: 'Factory-direct prices without middlemen. Volume discounts available.',
        badge: 'FACTORY DIRECT',
        icon: CircleDollarSign,
      },
      {
        title: 'FAST DELIVERY',
        description:
          'Large inventory ready for immediate shipment. Custom orders in 15–30 days.',
        badge: 'SHIPS 24–72 HRS',
        icon: PackageCheck,
      },
      {
        title: 'CUSTOM SOLUTIONS',
        description:
          'OEM/ODM accepted. Special sizes, materials, and packaging upon request.',
        badge: 'OEM / ODM READY',
        icon: Wrench,
      },
    ],
    applicationsEyebrow: 'APPLICATIONS',
    applicationsTitle: 'Where Our Bearings Work',
    applicationsText:
      'Reliable bearing solutions for core agricultural equipment and replacement markets.',
    applications: [
      {
        title: 'Tractors',
        items: ['Wheel hubs', 'Gearboxes', 'PTO systems'],
        icon: Tractor,
      },
      {
        title: 'Harvesters',
        items: ['Header units', 'Conveyors', 'Grain systems'],
        icon: Wheat,
      },
      {
        title: 'Tillage Equipment',
        items: ['Disc harrows', 'Plows', 'Cultivators'],
        icon: Cog,
      },
      {
        title: 'Seeders & Planters',
        items: ['Row units', 'Gauge wheels', 'Opener systems'],
        icon: Sprout,
      },
      {
        title: 'Balers',
        items: ['Rollers', 'Shafts', 'Chain-drive support points'],
        icon: PackageCheck,
      },
      {
        title: 'Replacement Market',
        items: ['Fast-moving models', 'For distributors', 'And dealers'],
        icon: PackageSearch,
      },
    ],
    ctaEyebrow: 'GET IN TOUCH',
    ctaTitle: 'Ready to Order?',
    ctaText: 'Send us your requirements and get a competitive quote within 24 hours.',
    ctaButton: 'Request a Quote',
  },
  ar: {
    valueEyebrow: 'لماذا يختار المصنعون فولي',
    valueTitle: 'مصمم للمعدات الزراعية',
    valueText: 'محامل عملية لظروف العمل الحقيقية في الحقول، وليست مجرد مواصفات على الورق.',
    valueCards: [
      {
        title: 'محامل للمعدات الزراعية',
        text: 'وحدات ديسك هارو وإنسيرت وبيلو بلوك وفلانج مصممة للجرارات والزارعات والحصادات.',
        icon: Wheat,
      },
      {
        title: 'جودة مستقرة للتطبيقات منخفضة السرعة',
        text: 'ثبات في الأبعاد واحتفاظ بالشحم في مواقع المحامل المعرضة لظروف الحقول وسرعات RPM المنخفضة.',
        icon: Gauge,
      },
      {
        title: 'دعم التغليف والتخصيص للتصدير',
        text: 'تغليف محايد أو صناديق بعلامتك أو كراتين تصدير بالجملة. الوسم والوثائق متاحة لـ OEM.',
        icon: PackageCheck,
      },
      {
        title: 'حلول عملية وليست مجرد أسعار رخيصة',
        text: 'جودة متوسطة موثوقة في الأداء، وخيار أفضل من المحامل الرخيصة جدًا التي تفشل في الحقل.',
        icon: ShieldCheck,
      },
    ],
    featuresEyebrow: 'ميزة الشركة المصنّعة',
    featuresTitle: 'لماذا تختار فولي',
    featuresIntro:
      'توريد مباشر من المصنع مع وثائق تصدير كاملة ودعم دولي مخصص.',
    features: [
      {
        title: 'جودة ممتازة',
        description: 'تصنيع معتمد ISO 9001 مع رقابة صارمة على الجودة في كل مرحلة.',
        badge: 'ISO 9001 CERTIFIED',
        icon: ShieldCheck,
      },
      {
        title: 'أسعار تنافسية',
        description: 'أسعار مباشرة من المصنع دون وسطاء، مع خصومات للكميات.',
        badge: 'FACTORY DIRECT',
        icon: CircleDollarSign,
      },
      {
        title: 'تسليم سريع',
        description: 'مخزون كبير جاهز للشحن الفوري، والطلبات المخصصة خلال 15 إلى 30 يومًا.',
        badge: 'SHIPS 24–72 HRS',
        icon: PackageCheck,
      },
      {
        title: 'حلول مخصصة',
        description: 'نقبل OEM/ODM مع مقاسات ومواد وتغليف خاص حسب الطلب.',
        badge: 'OEM / ODM READY',
        icon: Wrench,
      },
    ],
    applicationsEyebrow: 'التطبيقات',
    applicationsTitle: 'أين تعمل محاملنا',
    applicationsText:
      'حلول محامل موثوقة للمعدات الزراعية الأساسية وأسواق الاستبدال.',
    applications: [
      {
        title: 'الجرارات',
        items: ['مراكز العجلات', 'علب التروس', 'أنظمة PTO'],
        icon: Tractor,
      },
      {
        title: 'الحصادات',
        items: ['وحدات الهيدر', 'الناقلات', 'أنظمة الحبوب'],
        icon: Wheat,
      },
      {
        title: 'معدات الحراثة',
        items: ['الديسك هارو', 'المحاريث', 'المزارع'],
        icon: Cog,
      },
      {
        title: 'الزارعات والبذارات',
        items: ['وحدات الصف', 'عجلات القياس', 'أنظمة الفتح'],
        icon: Sprout,
      },
      {
        title: 'المكابس',
        items: ['البكرات', 'الأعمدة', 'نقاط دعم السلسلة'],
        icon: PackageCheck,
      },
      {
        title: 'سوق الاستبدال',
        items: ['الموديلات السريعة الحركة', 'للموزعين', 'وللتجار'],
        icon: PackageSearch,
      },
    ],
    ctaEyebrow: 'تواصل معنا',
    ctaTitle: 'جاهز للطلب؟',
    ctaText: 'أرسل لنا متطلباتك واحصل على عرض سعر تنافسي خلال 24 ساعة.',
    ctaButton: 'اطلب عرض سعر',
  },
} as const;

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
    openGraph: {
      title: m.title,
      description: m.description,
      url: `${BASE_URL}/${locale}`,
      siteName: 'FULI Machinery',
    },
  };
}

export default function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const copy = HOME_COPY[locale as keyof typeof HOME_COPY] ?? HOME_COPY.en;

  return (
    <div className="flex flex-col bg-white">
      <HeroSection />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl lg:mb-14">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-10 bg-[#f26a21]" />
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#f26a21]">
                {copy.valueEyebrow}
              </p>
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-[#0f1923] sm:text-5xl">
              {copy.valueTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              {copy.valueText}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {copy.valueCards.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[26px] border border-slate-200 bg-white p-7 shadow-[0_20px_50px_-36px_rgba(15,25,35,0.45)] transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1e8] text-[#f26a21]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-lg font-bold leading-7 text-[#0f1923]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7fa] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-5 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-10 bg-[#f26a21]" />
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#f26a21]">
                  {copy.featuresEyebrow}
                </p>
              </div>
              <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-[#0f1923] sm:text-5xl">
                {copy.featuresTitle}
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              {copy.featuresIntro}
            </p>
          </div>

          <div className="rounded-[30px] border border-slate-200 bg-white px-6 shadow-[0_24px_70px_-50px_rgba(15,25,35,0.45)] sm:px-8">
            {copy.features.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === copy.features.length - 1;
              return (
                <div
                  key={item.title}
                  className={`flex flex-col gap-5 py-7 sm:py-8 lg:flex-row lg:items-center lg:gap-8 ${isLast ? '' : 'border-b border-slate-200'}`}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#fff1e8] text-[#f26a21]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold uppercase tracking-[0.14em] text-[#0f1923]">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {item.badge}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl lg:mb-14">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-10 bg-[#f26a21]" />
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#f26a21]">
                {copy.applicationsEyebrow}
              </p>
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-[#0f1923] sm:text-5xl">
              {copy.applicationsTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              {copy.applicationsText}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {copy.applications.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[26px] border border-slate-200 bg-white p-7 shadow-[0_20px_50px_-36px_rgba(15,25,35,0.42)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff1e8] text-[#f26a21]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0f1923]">{item.title}</h3>
                  </div>
                  <div className="mt-6 space-y-3">
                    {item.items.map((bullet) => (
                      <p key={bullet} className="flex items-center gap-3 text-sm text-slate-600">
                        <span className="h-2 w-2 rounded-full bg-[#f26a21]" />
                        {bullet}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7fa] py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[30px] border border-slate-200 bg-white px-6 py-14 text-center shadow-[0_26px_70px_-52px_rgba(15,25,35,0.42)] sm:px-10 sm:py-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#f26a21]">
              {copy.ctaEyebrow}
            </p>
            <h2 className="mt-5 font-display text-4xl font-extrabold tracking-[-0.03em] text-[#0f1923] sm:text-5xl">
              {copy.ctaTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              {copy.ctaText}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="mt-9 inline-flex items-center gap-2 rounded-2xl bg-[#f26a21] px-7 py-4 text-sm font-semibold tracking-[0.08em] text-white shadow-[0_16px_36px_-22px_rgba(242,106,33,0.95)] transition-colors duration-200 hover:bg-[#dd5b17]"
            >
              {copy.ctaButton}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
