import { useState } from "react";
import { Link } from "react-router-dom"; 
import { customers } from "../data/customers";
import PageHeader from "../components/PageHeader";
import { MdEmail, MdPhone, MdPerson, MdStars } from "react-icons/md";

export default function Customers() {
    const [showForm, setShowForm] = useState(false);

    const getLoyaltyBadge = (level) => {
        if (level === "Gold") return "bg-yellow-100 text-yellow-700 border-yellow-200";
        if (level === "Silver") return "bg-slate-100 text-slate-700 border-slate-200";
        return "bg-orange-100 text-orange-700 border-orange-200";
    };

    return (
        <div className="p-4">
            <PageHeader title="Customers" breadcrumb={["Dashboard", "Customers"]}>
                <button
                    onClick={() => setShowForm(true)}
                    className="bg-hijau text-white px-4 py-2 rounded-xl font-bold shadow-lg hover:opacity-90 transition-all flex items-center gap-2"
                >
                    <MdPerson /> + Tambah Customer
                </button>
            </PageHeader>

            <div className="bg-white shadow-xl rounded-2xl overflow-hidden mt-6 border border-gray-100">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-hijau text-white uppercase text-[10px] tracking-widest">
                            <tr>
                                <th className="p-4 text-left">ID</th>
                                <th className="p-4 text-left">Nama Lengkap</th>
                                <th className="p-4 text-left">Email</th>
                                <th className="p-4 text-left">No. Telepon</th>
                                <th className="p-4 text-center">Loyalty</th>
                                <th className="p-4 text-center">Total Order</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {customers.map((c) => (
                                <tr key={c.id} className="hover:bg-emerald-50 transition-colors">
                                    <td className="p-4 font-mono text-gray-400 text-xs">
                                        {c.id}
                                    </td>
                                    
                                    <td className="p-4">
                                        <Link 
                                            to={`/customers/${c.id}`} 
                                            className="font-bold text-emerald-600 hover:text-hijau transition-all text-sm"
                                        >
                                            {c.name}
                                        </Link>
                                    </td>

                                    <td className="p-4 text-gray-600 flex items-center gap-2">
                                        <MdEmail className="text-gray-300" />
                                        {c.email}
                                    </td>

                                    <td className="p-4 text-gray-600">
                                        <div className="flex items-center gap-2">
                                            <MdPhone className="text-gray-300" />
                                            {c.phone}
                                        </div>
                                    </td>

                                    <td className="p-4 text-center">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-black border ${getLoyaltyBadge(c.loyalty)}`}>
                                            {c.loyalty}
                                        </span>
                                    </td>

                                    <td className="p-4 text-center font-bold text-gray-700">
                                        {c.totalOrders} <span className="text-[10px] text-gray-400 font-normal">Porsi</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* MODAL FORM (Tetap Sama) */}
            {showForm && (
                <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 backdrop-blur-sm p-4">
                    <div className="bg-white p-6 rounded-2xl w-full max-w-sm shadow-2xl border-t-8 border-hijau">
                        <h2 className="text-xl font-black mb-4 text-gray-800">Tambah Member</h2>
                        <div className="space-y-3">
                            <input type="text" placeholder="Nama Lengkap" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-hijau outline-none" />
                            <input type="email" placeholder="Alamat Email" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-hijau outline-none" />
                            <input type="text" placeholder="No. WhatsApp" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-hijau outline-none" />
                            <select className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-hijau outline-none bg-white">
                                <option>Bronze</option>
                                <option>Silver</option>
                                <option>Gold</option>
                            </select>
                            <div className="flex gap-2 pt-4">
                                <button onClick={() => setShowForm(false)} className="flex-1 bg-gray-100 text-gray-500 py-3 rounded-xl font-bold">Batal</button>
                                <button onClick={() => setShowForm(false)} className="flex-1 bg-hijau text-white py-3 rounded-xl font-bold shadow-lg">Simpan</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}