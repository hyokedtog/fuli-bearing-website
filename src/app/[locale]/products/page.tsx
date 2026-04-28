import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://fuli-bearing-website.vercel.app';

const meta = {
  en: {
    title: 'Industrial Bearings Catalog | Deep Groove, Tapered Roller, Spherical | FULI Machinery',
    description:
      'Browse FULI\'s full bearing catalog: 6000/6200/6300 series ball bearings, 30200/32000 tapered roller bearings, 22200/23000 spherical roller bearings, UCP/UCF pillow blocks. OEM/ODM available.',
  },
  ar: {
    title: 'كتالوج المحامل الصناعية | أخدود عميق، أسطوانات مخروطية، كروية | فولي ماشينري',
    description:
      'تصفح كتالوج فولي الكامل: محامل كرات سلسلة 6000/6200/6300، محامل أسطوانات مخروطية 30200/32000، محامل كروية 22200/23000، كتائف UCP/UCF. متاح OEM/ODM.',
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
      canonical: `${BASE_URL}/${locale}/products`,
      languages: { en: `${BASE_URL}/en/products`, ar: `${BASE_URL}/ar/products` },
    },
    openGraph: { title: m.title, description: m.description, url: `${BASE_URL}/${locale}/products`, siteName: 'FULI Machinery' },
  };
}
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Download, Mail, ArrowRight, Check } from 'lucide-react';

const products = [
  {
    id: 'deep-groove',
    key: 'deepGroove',
    series: ['6000', '6200', '6300', '6400', '16000', '61800', '61900'],
    specs: ['d: 10-150mm', 'Open / ZZ / 2RS', 'P0 / P6 / P5 Precision', 'Chrome Steel / Stainless Steel'],
    features: ['High speed capability', 'Low noise & vibration', 'Long service life', 'Easy maintenance'],
  },
  {
    id: 'tapered-roller',
    key: 'taperedRoller',
    series: ['30200', '30300', '31300', '32000', '32200', '32300', '33000', '33100', '33200'],
    specs: ['d: 15-260mm', 'Metric / Inch Series', 'P0 / P6 Precision', 'Chrome Steel'],
    features: ['High radial & axial load capacity', 'Separable design', 'Precise clearance control', 'Wide size range'],
  },
  {
    id: 'spherical-roller',
    key: 'sphericalRoller',
    series: ['21300', '22200', '22300', '23000', '24000', '23100', '24100'],
    specs: ['d: 25-400mm', 'CC / CA / E / MB Cage', 'P0 / P6 Precision', 'Chrome Steel'],
    features: ['Self-aligning capability', 'High radial load capacity', 'Shock load resistance', 'Suitable for vibrating screens'],
  },
  {
    id: 'pillow-block',
    key: 'pillowBlock',
    series: ['UCP', 'UCF', 'UCT', 'UCFC', 'UCFL', 'UCPA', 'UCPH', 'UCPX'],
    specs: ['d: 12-140mm', 'Cast Iron / Stainless Housing', 'Grease nipple included', 'Chrome Steel Insert'],
    features: ['Easy installation & replacement', 'Sealed for life options', 'Various housing materials', 'Set screw / Eccentric locking'],
  },
];

export default function ProductsPage() {
  const t = useTranslations();

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-[#0f2744] py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            {t('products.title')}
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            {t('products.subtitle')}
          </p>
        </div>
      </section>

      {/* Product List */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {products.map((product, index) => (
              <div key={product.id} id={product.id}>
                {index > 0 && <Separator className="mb-12" />}
                <Card className="overflow-hidden border-2 border-gray-100">
                  <CardHeader className="bg-gray-50 pb-4">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <CardTitle className="text-2xl text-[#0f2744]">
                        {t(`categories.${product.key}.title`)}
                      </CardTitle>
                      <Button
                        asChild
                        variant="outline"
                        className="border-[#e85d04] text-[#e85d04] hover:bg-[#e85d04] hover:text-white"
                        size="sm"
                      >
                        <a href="mailto:fulibearing@163.com?subject=Inquiry: ${t(`categories.${product.key}.title`)}&body=Dear FULI Machinery,%0D%0A%0D%0AI am interested in your ${t(`categories.${product.key}.title`)}.%0D%0A%0D%0APlease send me more information including:%0D%0A- Model numbers required%0D%0A- Quantity%0D%0A- Target price%0D%0A%0D%0ABest regards">
                          <Mail className="mr-2 h-4 w-4" />
                          {t('products.inquiry')}
                        </a>
                      </Button>
                    </div>
                    <p className="mt-2 text-gray-600">
                      {t(`categories.${product.key}.description`)}
                    </p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid gap-6 md:grid-cols-3">
                      {/* Series */}
                      <div>
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#e85d04]">
                          Series
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {product.series.map((s) => (
                            <Badge
                              key={s}
                              variant="secondary"
                              className="bg-[#1a3a5c]/10 text-[#1a3a5c] hover:bg-[#1a3a5c]/20"
                            >
                              {s}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Specs */}
                      <div>
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#e85d04]">
                          {t('products.specs')}
                        </h4>
                        <ul className="space-y-1.5">
                          {product.specs.map((spec) => (
                            <li
                              key={spec}
                              className="flex items-center gap-2 text-sm text-gray-600"
                            >
                              <Check className="h-4 w-4 shrink-0 text-green-600" />
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#e85d04]">
                          Key Features
                        </h4>
                        <ul className="space-y-1.5">
                          {product.features.map((feat) => (
                            <li
                              key={feat}
                              className="flex items-center gap-2 text-sm text-gray-600"
                            >
                              <ArrowRight className="h-4 w-4 shrink-0 text-[#e85d04]" />
                              {feat}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Download CTA */}
          <div className="mt-16 rounded-xl bg-gray-50 p-8 text-center">
            <h3 className="text-xl font-semibold text-[#0f2744]">
              Need Full Specifications?
            </h3>
            <p className="mt-2 text-gray-600">
              Download our complete product catalogue with detailed dimension tables and technical drawings.
            </p>
            <Button
              className="mt-4 bg-[#1a3a5c] hover:bg-[#0f2744]"
              size="lg"
              asChild
            >
              <a href="mailto:fulibearing@163.com?subject=Request: Product Catalogue&body=Dear FULI Machinery,%0D%0A%0D%0APlease send me your complete product catalogue.%0D%0A%0D%0ACompany:%0D%0AName:%0D%0ACountry:%0D%0A%0D%0AThank you.">
                <Download className="mr-2 h-5 w-5" />
                {t('products.download')}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
