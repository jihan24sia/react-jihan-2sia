import React from 'react';

export default function TextArea({ label, placeholder }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="text-sm font-bold text-gray-700">{label}</label>}
      <textarea
        placeholder={placeholder}
        className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-emerald-500 outline-none min-h-[100px] shadow-sm"
      />
    </div>
  );
}