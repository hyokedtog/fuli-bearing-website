import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Clock, Boxes, Globe, Factory } from 'lucide-react';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://fuli-bearing-website.vercel.app';

const meta = {
  en: {
    title: 'About FULI Machinery | 15+ Years Bearing Factory, Shandong China',
    description:
      'FULI Machinery (Shandong) Limited — 15+ years of precision bearing manufacturing. ISO 9001 certified, 2000+ products, export to 50+ countries. Factory-direct supply for OEM & distributors.',
  },
  ar: {
    title: 'عن فولي ماشينري | مصنع محامل 15+ عاماً، شاندونغ الصين',
    description:
      'شركة فولي ماشينري (شاندونغ) المحدودة — أكثر من 15 عامًا في تصنيع المحامل الدقيقة. معتمدة ISO 9001، 2000+ منتج، تصدير لأكثر من 50 دولة.',
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
      canonical: `${BASE_URL}/${locale}/about`,
      languages: { en: `${BASE_URL}/en/about`, ar: `${BASE_URL}/ar/about` },
    },
    openGraph: { title: m.title, description: m.description, url: `${BASE_URL}/${locale}/about`, siteName: 'FULI Machinery' },
  };
}

export default function AboutPage() {
  const t = useTranslations();

  const stats = [
    { key: 'experience', value: '15+', icon: Clock },
    { key: 'products', value: '2000+', icon: Boxes },
    { key: 'countries', value: '50+', icon: Globe },
    { key: 'capacity', value: '500K', icon: Factory },
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-[#0f2744] py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            {t('about.title')}
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-gray-700 text-center">
            {t('about.intro')}
          </p>
          <p className="mt-6 text-gray-600 leading-relaxed text-center">
            {t('about.description')}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.key} className="text-center">
                  <CardContent className="p-6">
                    <Icon className="mx-auto h-8 w-8 text-[#e85d04]" />
                    <div className="mt-3 text-3xl font-bold text-[#0f2744]">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-gray-600">
                      {t(`about.stats.${stat.key}`)}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-l-4 border-l-[#e85d04]">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-6 w-6 text-[#e85d04]" />
                  <h3 className="text-xl font-bold text-[#0f2744]">
                    {t('about.mission')}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {t('about.missionText')}
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-[#1a3a5c]">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="h-6 w-6 text-[#1a3a5c]" />
                  <h3 className="text-xl font-bold text-[#0f2744]">
                    {t('about.vision')}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {t('about.visionText')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Factory placeholder note */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0f2744]">
            Factory & Equipment
          </h2>
          <p className="mt-4 text-gray-600">
            Our factory features advanced CNC grinding machines, automatic assembly lines, and precision testing equipment. Contact us to schedule a factory tour.
          </p>
        </div>
      </section>
    </div>
  );
}
