'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import MuxPlayer from '@mux/mux-player-react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const TRUST_BADGES = [
  'ISO 9001 Certified',
  'Factory Direct Export',
  'Ships to 30+ Countries',
  'OEM / ODM Ready',
];

export default function HeroSection() {
  const locale = useLocale();

  return (
    <section className="relative w-full bg-white">
      <div className="flex flex-col lg:flex-row" style={{ minHeight: 'calc(100vh - 72px)' }}>

        {/* ── Left: Content ── */}
        <div className="flex flex-col justify-center px-8 py-20 lg:px-16 lg:py-24 lg:w-[56%]">

          {/* Pre-label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-px bg-[#e85d04]" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#e85d04] uppercase">
              Agricultural Bearing Specialist · Shandong, China
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-display text-[52px] md:text-[64px] lg:text-[72px] font-extrabold text-[#0f1923] leading-[0.97] tracking-tight mb-7">
            Reliable<br />
            Agricultural<br />
            <em className="not-italic text-[#e85d04]">Bearings</em><br />
            for Global<br />
            Machinery Brands
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-gray-500 font-normal leading-relaxed max-w-lg mb-10">
            Stable quality, practical solutions, and export-ready bearing support for
            agricultural equipment, low-speed machinery, and replacement markets.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-[#e85d04] hover:bg-[#c94d00] text-white text-[15px] font-bold tracking-wide transition-colors duration-200"
            >
              Request a Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href={`/${locale}/products`}
              className="inline-flex items-center justify-center gap-2 px-9 py-4 border-2 border-[#0f1923] text-[#0f1923] hover:bg-[#0f1923] hover:text-white text-[15px] font-semibold tracking-wide transition-colors duration-200"
            >
              View Bearing Solutions
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 pt-5 border-t border-gray-100">
            {TRUST_BADGES.map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#e85d04] shrink-0" />
                <span className="text-sm font-medium text-gray-500">{badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Video panel ── */}
        {/*
          TO REPLACE VIDEO: change playbackId below to your agricultural machinery Mux video ID.
          Or swap <MuxPlayer> with <img src="..." /> for a static photo.
          Keep the absolute/inset-0 wrapper so the image/video fills the panel.
        */}
        <div className="relative lg:flex-1 min-h-[50vh] lg:min-h-full bg-gray-100 overflow-hidden">
          <div className="absolute inset-0">
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

          {/* Left fade to blend with white content panel */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />

          {/* Bottom caption tag */}
          <div className="absolute bottom-6 left-6">
            <div className="inline-block bg-white/90 backdrop-blur-sm px-4 py-2 border-l-2 border-[#e85d04]">
              <p className="text-[11px] font-bold text-gray-600 uppercase tracking-[0.2em]">
                Tractors · Harvesters · Tillage Equipment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
