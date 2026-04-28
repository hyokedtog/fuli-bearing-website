import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ContactContent from './contact-content';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://fuli-bearing-website.vercel.app';

const meta = {
  en: {
    title: 'Request a Bearing Quote | Contact FULI Machinery',
    description:
      'Get a competitive quote on industrial bearings from FULI Machinery. Send your RFQ and receive a response within 24 hours. WhatsApp, email, or contact form.',
  },
  ar: {
    title: 'طلب عرض سعر محامل | اتصل بفولي ماشينري',
    description:
      'احصل على عرض سعر تنافسي على المحامل الصناعية من فولي ماشينري. أرسل طلبك وستتلقى ردًا خلال 24 ساعة.',
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
      canonical: `${BASE_URL}/${locale}/contact`,
      languages: { en: `${BASE_URL}/en/contact`, ar: `${BASE_URL}/ar/contact` },
    },
    openGraph: { title: m.title, description: m.description, url: `${BASE_URL}/${locale}/contact`, siteName: 'FULI Machinery' },
  };
}

export default async function ContactPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'contact' });

  return (
    <div className="flex flex-col">
      <section className="bg-[#0f2744] py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            {t('title')}
          </h1>
          <p className="mt-4 text-lg text-gray-300">{t('subtitle')}</p>
        </div>
      </section>
      <ContactContent />
    </div>
  );
}
