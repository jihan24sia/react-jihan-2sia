import React from 'react';

export default function InputField({ label, placeholder, type = "text" }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="text-sm font-bold text-gray-700">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-emerald-500 outline-none shadow-sm"
      />
    </div>
  );
}