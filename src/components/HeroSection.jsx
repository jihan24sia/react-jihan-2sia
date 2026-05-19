import React from 'react';
import Button from './Button';

export default function HeroSection({ title, subtitle, image }) {
  return (
    <section className="relative bg-emerald-900 rounded-3xl overflow-hidden min-h-[400px] flex items-center p-8 md:p-16 text-white">
      <div className="relative z-10 max-w-2xl space-y-6">
        <h1 className="text-4xl md:text-6xl font-black leading-tight italic">
          {title}
        </h1>
        <p className="text-emerald-100 text-lg opacity-90">
          {subtitle}
        </p>
        <div className="flex gap-4">
          <Button type="primary" className="px-8 py-4 shadow-xl">Pesan Sekarang</Button>
          <Button type="secondary" className="px-8 py-4 border border-white/20 text-white">Lihat Menu</Button>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-800/50 to-transparent hidden md:block" />
      {image && (
        <img src={image} className="absolute right-0 bottom-0 w-1/3 opacity-40 md:opacity-100 object-contain p-8" alt="Hero" />
      )}
    </section>
  );
}