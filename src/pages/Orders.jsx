import { useState } from "react";
import { orders } from "../data/orders";
import PageHeader from "../components/PageHeader";
import Container from "../components/Container";
import { MdAdd, MdReceipt, MdCalendarToday, MdAttachMoney } from "react-icons/md";

export default function Orders() {
    const [showForm, setShowForm] = useState(false);

    // Helper untuk styling status badge
    const getStatusStyle = (status) => {
        switch (status?.toLowerCase()) {
            case 'completed':
                return "bg-emerald-50 text-emerald-600 border-emerald-100";
            case 'pending':
                return "bg-amber-50 text-amber-600 border-amber-100";
            case 'cancelled':
                return "bg-rose-50 text-rose-600 border-rose-100";
            default:
                return "bg-gray-50 text-gray-600 border-gray-100";
        }
    };

    return (
        <Container>
            <div className="max-w-6xl mx-auto p-6 space-y-6">
                
                {/* HEADER + BUTTON */}
                <PageHeader
                    title="Orders List"
                    breadcrumb={["Dashboard", "Orders"]}
                >
                    <button
                        onClick={() => setShowForm(true)}
                        className="bg-emerald-600 text-white px-5 py-2.5 rounded-2xl font-bold shadow-md hover:bg-emerald-700 transition-all flex items-center gap-2 text-sm"
                    >
                        <MdAdd size={20} /> Tambah Order
                    </button>
                </PageHeader>

                {/* TABLE CARD */}
                <div className="bg-white shadow-sm rounded-3xl overflow-hidden border border-gray-100">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-emerald-600 text-white uppercase text-[10px] font-bold tracking-widest">
                                <tr>
                                    <th className="p-5 text-left w-24">Order ID</th>
                                    <th className="p-5 text-left">Customer Name</th>
                                    <th className="p-5 text-center">Status</th>
                                    <th className="p-5 text-right">Price</th>
                                    <th className="p-5 text-center">Date</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-50">
                                {orders.map((o, i) => (
                                    <tr key={i} className="hover:bg-emerald-50/40 transition-colors group">
                                        <td className="p-5 font-mono text-gray-400 text-xs">
                                            ORD-{String(o.id).padStart(4, '0')}
                                        </td>
                                        <td className="p-5 font-bold text-gray-800">
                                            {o.name}
                                        </td>
                                        <td className="p-5 text-center">
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-black border uppercase tracking-tighter ${getStatusStyle(o.status)}`}>
                                                {o.status}
                                            </span>
                                        </td>
                                        <td className="p-5 text-right font-black text-gray-800">
                                            Rp {Number(o.price).toLocaleString('id-ID')}
                                        </td>
                                        <td className="p-5 text-center text-gray-500 text-xs">
                                            <div className="flex items-center justify-center gap-1">
                                                <MdCalendarToday className="text-emerald-400" size={12} />
                                                {o.date}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* MODAL FORM */}
                {showForm && (
                    <div className="fixed inset-0 bg-slate-900/40 flex justify-center items-center z-50 backdrop-blur-sm p-4">
                        <div className="bg-white p-8 rounded-[2.5rem] w-full max-w-md shadow-2xl transition-all">
                            <div className="w-12 h-1.5 bg-gray-100 mx-auto mb-6 rounded-full"></div>
                            
                            <div className="flex items-center gap-3 mb-1">
                                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                                    <MdReceipt size={24} />
                                </div>
                                <h2 className="text-2xl font-black text-gray-800">New Order</h2>
                            </div>
                            <p className="text-gray-400 text-sm mb-6">Input detail pesanan baru pelanggan.</p>

                            <div className="space-y-4">
                                {/* Customer Name */}
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold uppercase text-gray-400 ml-1">Customer Name</label>
                                    <div className="relative">
                                        <input 
                                            type="text" 
                                            placeholder="Nama pelanggan..." 
                                            className="w-full bg-gray-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none text-sm" 
                                        />
                                    </div>
                                </div>

                                {/* Row Status & Price */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold uppercase text-gray-400 ml-1">Status</label>
                                        <select className="w-full bg-gray-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none text-sm appearance-none cursor-pointer">
                                            <option>Pending</option>
                                            <option>Completed</option>
                                            <option>Cancelled</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold uppercase text-gray-400 ml-1">Total Price</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-4 text-gray-400 text-sm">Rp</span>
                                            <input 
                                                type="number" 
                                                placeholder="0" 
                                                className="w-full bg-gray-50 border-none p-4 pl-10 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none text-sm" 
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Date */}
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold uppercase text-gray-400 ml-1">Order Date</label>
                                    <input 
                                        type="date" 
                                        className="w-full bg-gray-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none text-sm text-gray-600" 
                                    />
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-3 pt-6">
                                    <button 
                                        onClick={() => setShowForm(false)} 
                                        className="flex-1 text-gray-400 font-bold text-sm hover:text-gray-600 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                        onClick={() => setShowForm(false)} 
                                        className="flex-1 bg-emerald-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-emerald-100 hover:bg-emerald-700 transition-all active:scale-95"
                                    >
                                        Create Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Container>
    );
}