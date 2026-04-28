import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

import enMessages from './messages/en.json';
import arMessages from './messages/ar.json';

const messagesByLocale: Record<string, typeof enMessages> = {
  en: enMessages,
  ar: arMessages,
};

export default getRequestConfig(async ({ locale }) => {
  return {
    locale: locale ?? defaultLocale,
    messages: messagesByLocale[locale ?? defaultLocale],
  };
});
