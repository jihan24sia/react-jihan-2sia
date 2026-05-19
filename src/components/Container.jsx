export default function Container({ children, className = "" }) {
  return (
    /* Ganti 'container mx-auto' dengan 'w-full'. 
       Kita kontrol lebar maksimalnya di level halaman saja biar lebih presisi.
       Kurangi padding vertikal defaultnya.
    */
    <div className={`w-full min-h-screen bg-gray-50/50 ${className}`}>
      {children}
    </div>
  );
}