import React from 'react';
import { MdCheckCircle, MdError, MdInfo, MdWarning } from "react-icons/md";

export default function Alert({ type = "success", message }) {
  const styles = {
    success: "bg-emerald-50 text-emerald-700 border-emerald-200",
    error: "bg-red-50 text-red-700 border-red-200",
    warning: "bg-yellow-50 text-yellow-700 border-yellow-200",
    info: "bg-blue-50 text-blue-700 border-blue-200",
  };

  const icons = {
    success: <MdCheckCircle size={20} />,
    error: <MdError size={20} />,
    warning: <MdWarning size={20} />,
    info: <MdInfo size={20} />,
  };

  return (
    <div className={`p-4 rounded-xl border flex items-center gap-3 ${styles[type]}`}>
      {icons[type]}
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}