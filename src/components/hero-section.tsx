'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import MuxPlayer from '@mux/mux-player-react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="relative w-full min-h-screen flex items-end overflow-hidden">

      {/* 底层：Mux 视频背景 */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <MuxPlayer
          playbackId="TJx5LIjkM501J00OYq7YSOJWqMPgQIGJORoohjfpUL8vc"
          streamType="on-demand"
          autoPlay="muted"
          loop
          muted
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          className="w-full h-full object-cover [&_media-control-bar]:hidden"
        />
      </div>

      {/* 中层：环境光遮蔽 — 底部暗角渐变 */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />

      {/* 表层：文案与交互 — 左下角定位 */}
      <div className="relative z-20 w-full px-6 pb-16 pt-32 md:px-16 md:pb-24">
        <div className="max-w-3xl">

          {/* 主标题 */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-[108px] font-extrabold text-white tracking-tight leading-[0.92] mb-6">
            Precision<br />
            Bearings<br />
            <span className="text-white/90">for Industry</span>
          </h1>

          {/* 副标题 */}
          <p className="text-base md:text-xl text-white/60 font-light tracking-wide mb-8 max-w-lg">
            <span className="text-orange-500 font-medium">Deep Groove Ball</span>
            {' · '}
            <span className="text-white/80">Tapered Roller</span>
            {' · '}
            <span className="text-white/80">Spherical Roller</span>
            {' · '}
            <span className="text-white/80">Pillow Block</span>
          </p>

          {/* 理念文案 */}
          <p className="text-sm md:text-base text-white/50 font-light leading-relaxed max-w-md mb-10">
            {t('hero.description')}
          </p>

          {/* CTA 按钮组 */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={`/${locale}/products`}
              className="group inline-flex items-center justify-center px-7 py-3.5 bg-orange-600 hover:bg-orange-500 text-white text-base font-semibold rounded-sm transition-all duration-300 shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_30px_rgba(234,88,12,0.5)]"
            >
              {t('hero.ctaPrimary')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-transparent border border-white/30 hover:border-white/60 hover:bg-white/5 text-white text-base font-medium rounded-sm transition-all duration-300"
            >
              {t('hero.ctaSecondary')}
            </Link>
          </div>
        </div>
      </div>

      {/* 右下角：向下滚动提示 */}
      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-20">
        <div className="flex flex-col items-center gap-2 text-white/30 text-xs tracking-widest uppercase">
          <span>Scroll</span>
          <div className="w-px h-8 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-3 bg-white/60 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
