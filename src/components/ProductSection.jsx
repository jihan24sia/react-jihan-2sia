import React from 'react';
import ProductCard from './ProductCard';

export default function ProductSection({ title, products, onAddToCart }) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-black text-gray-800">{title}</h2>
          <p className="text-gray-400 text-sm">Pilihan menu terbaik untuk kamu</p>
        </div>
        <button className="text-emerald-600 font-bold text-sm hover:underline">
          Lihat Semua
        </button>
      </div>

      {/* Grid Otomatis */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((item, index) => (
          <ProductCard
            key={index}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
            onAdd={() => onAddToCart(item)}
          />
        ))}
      </div>
    </div>
  );
}