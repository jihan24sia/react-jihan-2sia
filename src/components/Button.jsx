export default function Button({
    children,
    type = "primary",
    onClick, // Ambil props onClick di sini
    className = ""
}) {
    const styles = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white",
        secondary: "bg-gray-600 hover:bg-gray-700 text-white",
        success: "bg-green-600 hover:bg-green-700 text-white",
        danger: "bg-red-600 hover:bg-red-700 text-white",
        warning: "bg-yellow-500 hover:bg-yellow-600 text-white",
    };

    return (
        <button
            onClick={onClick} // PASANG DI SINI! Kalau nggak ada ini, tombol cuma pajangan.
            className={`px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg transition-all active:scale-95 ${styles[type]} ${className}`}
        >
            {children}
        </button>
    );
}