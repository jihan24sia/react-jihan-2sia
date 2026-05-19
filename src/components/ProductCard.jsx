import React from 'react';
import Badge from './Badge';
import Button from './Button';
import { FaCartPlus } from "react-icons/fa";

export default function ProductCard({ image, name, price, description, onAdd }) {
  return (
    <div className="bg-white rounded-[2.5rem] p-4 shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-300">
      {/* Container Image */}
      <div className="relative h-48 w-full rounded-[2rem] overflow-hidden mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <Badge type="success" className="backdrop-blur-md bg-emerald-500/80 text-white border-none">
            {price}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="px-2 space-y-2">
        <h4 className="font-black text-gray-800 text-lg leading-tight">{name}</h4>
        <p className="text-gray-400 text-xs line-clamp-2">{description}</p>
        
        <div className="pt-4">
          <Button 
            onClick={onAdd}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl"
          >
            <FaCartPlus /> Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}