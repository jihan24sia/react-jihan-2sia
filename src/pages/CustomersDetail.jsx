import { useParams, useNavigate } from "react-router-dom";
import { customers } from "../data/customers";
import { MdArrowBack, MdStars, MdShoppingBag, MdPhone, MdEmail } from "react-icons/md";

export default function CustomersDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    // Gunakan == agar string "1" dari URL cocok dengan number 1 di data
    const customer = customers.find((c) => c.id == id);

    // Tambahkan log ini untuk debug di console browser (F12)
    console.log("ID dari URL:", id);
    console.log("Data Customer Ditemukan:", customer);

    if (!customer) {
        return (
            <div className="p-20 text-center">
                <p className="text-red-500 font-bold mb-4">Customer dengan ID {id} tidak ditemukan!</p>
                <button onClick={() => navigate("/customers")} className="text-hijau underline">
                    Kembali ke Daftar
                </button>
            </div>
        );
    }

    return (
        <div className="p-4 sm:p-8 max-w-4xl mx-auto">
            {/* ... sisa kode return kamu sudah benar ... */}
            <button 
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-gray-500 hover:text-hijau mb-6 font-bold transition-all"
            >
                <MdArrowBack /> Back to Customer List
            </button>

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
                {/* Profile Header */}
                <div className="bg-hijau md:w-1/3 p-8 text-white flex flex-col items-center justify-center text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-4xl font-black mb-4 border-4 border-white/30">
                        {customer.name?.charAt(0)}
                    </div>
                    <h2 className="text-xl font-black mb-1">{customer.name}</h2>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                        {customer.loyalty} Member
                    </span>
                </div>

                <div className="md:w-2/3 p-8">
                    <h3 className="text-gray-400 uppercase text-[10px] font-black tracking-[0.2em] mb-4">Customer Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center text-xl"><MdEmail /></div>
                            <div>
                                <p className="text-[10px] text-gray-400 font-bold uppercase">Email</p>
                                <p className="text-sm font-bold text-gray-700">{customer.email}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-green-50 text-green-500 rounded-xl flex items-center justify-center text-xl"><MdPhone /></div>
                            <div>
                                <p className="text-[10px] text-gray-400 font-bold uppercase">Phone</p>
                                <p className="text-sm font-bold text-gray-700">{customer.phone}</p>
                            </div>
                        </div>
                    </div>
                    <hr className="mb-6 border-gray-50" />
                    <h3 className="text-gray-400 uppercase text-[10px] font-black tracking-[0.2em] mb-4">Dining Statistics</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100">
                            <div className="flex items-center gap-2 text-orange-600 mb-1">
                                <MdShoppingBag /> <span className="text-[10px] font-black">TOTAL ORDERS</span>
                            </div>
                            <p className="text-2xl font-black text-orange-700">{customer.totalOrders} <span className="text-xs font-normal">Times</span></p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-2xl border border-purple-100">
                            <div className="flex items-center gap-2 text-purple-600 mb-1">
                                <MdStars /> <span className="text-[10px] font-black">FAVORITE DISH</span>
                            </div>
                            <p className="text-sm font-black text-purple-700">{customer.favorite}</p>
                        </div>
                    </div>
                    <button className="w-full mt-8 bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-black transition-all active:scale-95 shadow-lg">
                        Edit Profile Details
                    </button>
                </div>
            </div>
        </div>
    );
}