import React from 'react';

export default function FeatureSection({ title, features = [] }) {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-black text-gray-800 uppercase tracking-tighter italic">{title}</h2>
        <div className="w-20 h-1.5 bg-hijau mx-auto mt-2 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-emerald-50 text-hijau rounded-2xl flex items-center justify-center mb-6 group-hover:bg-hijau group-hover:text-white transition-colors">
              {item.icon}
            </div>
            <h4 className="font-black text-gray-800 mb-2">{item.name}</h4>
            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}