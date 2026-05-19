export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex justify-center items-center z-[999] p-4">
      <div className="bg-white rounded-[2.5rem] w-full max-w-sm shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="p-6">
          <h2 className="text-xl font-black text-gray-800 mb-2">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
}