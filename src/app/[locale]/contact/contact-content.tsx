'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Check,
  Clock,
} from 'lucide-react';

export default function ContactContent() {
  const t = useTranslations('contact');
  const tf = useTranslations('footer');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const form = e.currentTarget;
    const data = {
      name:     (form.elements.namedItem('name')     as HTMLInputElement).value,
      email:    (form.elements.namedItem('email')    as HTMLInputElement).value,
      company:  (form.elements.namedItem('company')  as HTMLInputElement).value,
      phone:    (form.elements.namedItem('phone')    as HTMLInputElement).value,
      product:  (form.elements.namedItem('product')  as HTMLInputElement).value,
      quantity: (form.elements.namedItem('quantity') as HTMLInputElement).value,
      message:  (form.elements.namedItem('message')  as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const payload = await res.json().catch(() => null);
      if (!res.ok) {
        throw new Error(payload?.error || 'send_failed');
      }
      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error && err.message !== 'send_failed'
          ? err.message
          : 'Failed to send. Please email us directly at fulibearing@163.com'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            {submitted ? (
              <Card className="border-green-200 bg-green-50">
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-green-800">
                    {t('form.success')}
                  </h3>
                </CardContent>
              </Card>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('form.name')}</Label>
                    <Input id="name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('form.email')}</Label>
                    <Input id="email" type="email" required />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="company">{t('form.company')}</Label>
                    <Input id="company" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('form.phone')}</Label>
                    <Input id="phone" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="product">{t('form.product')}</Label>
                    <Input id="product" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quantity">{t('form.quantity')}</Label>
                    <Input id="quantity" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t('form.message')}</Label>
                  <Textarea id="message" rows={5} />
                </div>
                {error && (
                  <p className="text-sm text-red-600">{error}</p>
                )}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#e85d04] hover:bg-[#d04a00] text-white disabled:opacity-60"
                  size="lg"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {loading ? 'Sending…' : t('form.submit')}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#0f2744]">
              {t('info.title')}
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-lg bg-gray-50 p-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-[#e85d04]" />
                <div>
                  <div className="font-medium text-[#0f2744]">
                    {t('info.whatsapp')}
                  </div>
                  <div className="text-sm text-gray-600">+86 186 0631 1628</div>
                  <div className="text-sm text-gray-600">+86 178 6111 6848</div>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg bg-gray-50 p-4">
                <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-[#e85d04]" />
                <div>
                  <div className="font-medium text-[#0f2744]">
                    {t('info.wechat')}
                  </div>
                  <div className="text-sm text-gray-600">+86 186 0631 1628</div>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg bg-gray-50 p-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-[#e85d04]" />
                <div>
                  <div className="font-medium text-[#0f2744]">
                    {tf('phone')}
                  </div>
                  <div className="text-sm text-gray-600">+86 635 5312 885</div>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg bg-gray-50 p-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-[#e85d04]" />
                <div>
                  <div className="font-medium text-[#0f2744]">
                    {tf('email')}
                  </div>
                  <div className="text-sm text-gray-600">fulibearing@163.com</div>
                  <div className="text-sm text-gray-600">
                    fulimachinery@foxmail.com
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg bg-gray-50 p-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#e85d04]" />
                <div>
                  <div className="font-medium text-[#0f2744]">
                    {tf('address')}
                  </div>
                  <div className="text-sm text-gray-600">
                    {tf('addressValue')}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg bg-gray-50 p-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-[#e85d04]" />
                <div>
                  <div className="font-medium text-[#0f2744]">
                    {t('info.workingHours')}
                  </div>
                  <div className="text-sm text-gray-600">
                    {t('info.workingHoursValue')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
