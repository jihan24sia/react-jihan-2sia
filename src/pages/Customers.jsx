import { useState } from "react";
import { Link } from "react-router-dom"; 
import { customers } from "../data/customers";
// 1. Tambahkan import Container
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import { MdEmail, MdPhone, MdPerson } from "react-icons/md";

export default function Customers() {
    const [showForm, setShowForm] = useState(false);

    const getLoyaltyBadge = (level) => {
        if (level === "Gold") return "bg-yellow-50 text-yellow-600 border-yellow-200";
        if (level === "Silver") return "bg-slate-50 text-slate-600 border-slate-200";
        return "bg-orange-50 text-orange-600 border-orange-200";
    };

    return (
        <Container>
            {/* 2. Wrapper untuk kontrol lebar dan jarak */}
            <div className="max-w-6xl mx-auto p-6 space-y-6">
                
                <PageHeader title="Customers" breadcrumb={["Dashboard", "Customers"]}>
                    <button
                        onClick={() => setShowForm(true)}
                        className="bg-emerald-600 text-white px-5 py-2.5 rounded-2xl font-bold shadow-md hover:bg-emerald-700 transition-all flex items-center gap-2 text-sm"
                    >
                        <MdPerson size={18} /> Tambah Customer
                    </button>
                </PageHeader>

                {/* 3. Card Wrapper untuk Tabel */}
                <div className="bg-white shadow-sm rounded-3xl overflow-hidden border border-gray-100">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-emerald-600 text-white uppercase text-[10px] font-bold tracking-widest">
                                <tr>
                                    <th className="p-5 text-left w-20">ID</th>
                                    <th className="p-5 text-left">Nama Lengkap</th>
                                    <th className="p-5 text-left">Kontak</th>
                                    <th className="p-5 text-center">Loyalty</th>
                                    <th className="p-5 text-center">Total Order</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {customers.map((c) => (
                                    <tr key={c.id} className="hover:bg-emerald-50/40 transition-colors group">
                                        <td className="p-5 font-mono text-gray-400 text-xs">
                                            #{c.id}
                                        </td>
                                        
                                        <td className="p-5">
                                            <Link 
                                                to={`/customers/${c.id}`} 
                                                className="font-bold text-gray-800 group-hover:text-emerald-600 transition-all"
                                            >
                                                {c.name}
                                            </Link>
                                        </td>

                                        <td className="p-5">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2 text-gray-500 text-xs">
                                                    <MdEmail className="text-emerald-400" />
                                                    {c.email}
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-500 text-xs">
                                                    <MdPhone className="text-emerald-400" />
                                                    {c.phone}
                                                </div>
                                            </div>
                                        </td>

                                        <td className="p-5 text-center">
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-black border uppercase tracking-tighter ${getLoyaltyBadge(c.loyalty)}`}>
                                                {c.loyalty}
                                            </span>
                                        </td>

                                        <td className="p-5 text-center">
                                            <div className="inline-block bg-gray-50 px-3 py-1 rounded-lg border border-gray-100">
                                                <span className="font-black text-gray-700">{c.totalOrders}</span>
                                                <span className="ml-1 text-[10px] text-gray-400 font-normal uppercase">Porsi</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* MODAL FORM */}
            {showForm && (
                <div className="fixed inset-0 bg-slate-900/40 flex justify-center items-center z-50 backdrop-blur-sm p-4">
                    <div className="bg-white p-8 rounded-[2.5rem] w-full max-w-sm shadow-2xl">
                        <div className="w-12 h-1.5 bg-gray-100 mx-auto mb-6 rounded-full"></div>
                        <h2 className="text-2xl font-black mb-1 text-gray-800">New Member</h2>
                        <p className="text-gray-400 text-sm mb-6">Daftarkan pelanggan baru anda.</p>
                        
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase text-gray-400 ml-1">Full Name</label>
                                <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none text-sm" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase text-gray-400 ml-1">Email Address</label>
                                <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none text-sm" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase text-gray-400 ml-1">Loyalty Level</label>
                                <select className="w-full bg-gray-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none text-sm appearance-none">
                                    <option>Bronze</option>
                                    <option>Silver</option>
                                    <option>Gold</option>
                                </select>
                            </div>
                            <div className="flex gap-3 pt-4">
                                <button onClick={() => setShowForm(false)} className="flex-1 text-gray-400 font-bold text-sm">Cancel</button>
                                <button onClick={() => setShowForm(false)} className="flex-1 bg-emerald-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all">Save Member</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Container>
    );
}