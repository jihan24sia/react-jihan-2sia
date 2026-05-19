import React from 'react';

export default function SelectField({ label, options = [] }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="text-sm font-bold text-gray-700">{label}</label>}
      <select className="w-full border border-gray-200 rounded-xl p-3 bg-white focus:ring-2 focus:ring-emerald-500 outline-none shadow-sm">
        {options.map((opt, index) => (
          <option key={index} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}