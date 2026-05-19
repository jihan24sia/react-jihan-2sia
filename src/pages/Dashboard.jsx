import { useState } from "react";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign, FaPlus, FaPrint, FaBullhorn, FaUtensils } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import Container from "../components/Container";
import {
    LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, CartesianGrid
} from "recharts";

export default function Dashboard() {
    const [filter, setFilter] = useState("weekly");

    // Dummy Data untuk Top Products
    const topProducts = [
        { name: "Nasi Goreng Spesial", sales: 120, progress: "w-[85%]", color: "bg-emerald-500" },
        { name: "Kopi Susu Gula Aren", sales: 98, progress: "w-[70%]", color: "bg-amber-500" },
        { name: "Mie Goreng Jawa", sales: 75, progress: "w-[55%]", color: "bg-blue-500" },
    ];

    const DonutChart = ({ value, color, label }) => (
        <div className="flex flex-col items-center group">
            <div className="relative w-[110px] h-[110px] flex items-center justify-center transition-transform group-hover:scale-110">
                <PieChart width={110} height={110}>
                    <Pie
                        data={[{ value }, { value: 100 - value }]}
                        dataKey="value"
                        innerRadius={35}
                        outerRadius={45}
                        startAngle={90}
                        endAngle={-270}
                        stroke="none"
                    >
                        <Cell fill={color} />
                        <Cell fill="#F3F4F6" />
                    </Pie>
                </PieChart>
                <div className="absolute font-black text-gray-800 text-lg">{value}%</div>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2">{label}</p>
        </div>
    );

    return (
        <Container>
            <div className="max-w-6xl mx-auto p-6 space-y-8">
                
                {/* 1. HEADER DENGAN QUICK ACTIONS */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <PageHeader title="Main Dashboard" breadcrumb={["Admin", "Overview"]} />
                    <div className="flex gap-2">
                        <button className="bg-white border border-gray-200 p-3 rounded-2xl shadow-sm hover:bg-gray-50 transition-all text-gray-600">
                            <FaPrint size={18} />
                        </button>
                        <button className="bg-emerald-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-emerald-100 hover:bg-emerald-700 transition-all flex items-center gap-2 text-sm">
                            <FaPlus /> New Order
                        </button>
                    </div>
                </div>

                {/* 2. STATS CARDS (GRID 4) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { label: "Total Orders", val: "1,280", icon: <FaShoppingCart />, light: "bg-emerald-50 text-emerald-600" },
                        { label: "Revenue", val: "Rp 12.8M", icon: <FaDollarSign />, light: "bg-amber-50 text-amber-600" },
                        { label: "Delivered", val: "1,120", icon: <FaTruck />, light: "bg-blue-50 text-blue-600" },
                        { label: "Canceled", val: "40", icon: <FaBan />, light: "bg-rose-50 text-rose-600" },
                    ].map((card, i) => (
                        <div key={i} className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex items-center gap-5">
                            <div className={`${card.light} p-4 rounded-2xl text-2xl`}>{card.icon}</div>
                            <div>
                                <h3 className="text-2xl font-black text-gray-800">{card.val}</h3>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{card.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 3. MAIN ANALYTICS SECTION (GRID 3) */}
                <div className="grid lg:grid-cols-3 gap-8">
                    
                    {/* LEFT: LINE CHART (Column Span 2) */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                            <div className="flex justify-between items-center mb-8">
                                <div>
                                    <h3 className="font-black text-gray-800 text-xl">Sales Performance</h3>
                                    <p className="text-gray-400 text-sm">Data penjualan 7 hari terakhir</p>
                                </div>
                                <select className="bg-gray-50 border-none px-4 py-2 rounded-xl text-xs font-bold text-emerald-600 outline-none">
                                    <option>Weekly View</option>
                                    <option>Monthly View</option>
                                </select>
                            </div>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={[
                                    { name: "Sun", v: 400 }, { name: "Mon", v: 700 }, { name: "Tue", v: 500 },
                                    { name: "Wed", v: 900 }, { name: "Thu", v: 600 }, { name: "Fri", v: 800 }, { name: "Sat", v: 1000 }
                                ]}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} />
                                    <YAxis hide />
                                    <Tooltip contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}} />
                                    <Line type="monotone" dataKey="v" stroke="#10b981" strokeWidth={4} dot={{ r: 6, fill: '#10b981', strokeWidth: 3, stroke: '#fff' }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* RIGHT: TOP PRODUCTS & PROGRESS */}
                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 h-full">
                            <h3 className="font-black text-gray-800 text-lg mb-6">Best Sellers</h3>
                            <div className="space-y-6">
                                {topProducts.map((item, idx) => (
                                    <div key={idx} className="space-y-2">
                                        <div className="flex justify-between text-sm font-bold">
                                            <span className="text-gray-700">{item.name}</span>
                                            <span className="text-emerald-600">{item.sales} sold</span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <div className={`${item.color} ${item.progress} h-full rounded-full transition-all duration-1000`}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            {/* MINI DONUT AREA */}
                            <div className="mt-10 pt-8 border-t border-gray-50 flex justify-between">
                                <DonutChart value={81} color="#10b981" label="Target" />
                                <DonutChart value={45} color="#3b82f6" label="Stock" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. QUICK ACTION CARDS (BELOW) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-emerald-600 p-6 rounded-[2rem] text-white flex items-center justify-between group cursor-pointer hover:scale-[1.02] transition-transform">
                        <div>
                            <p className="text-emerald-100 text-xs font-bold uppercase tracking-widest">Promotion</p>
                            <h4 className="text-lg font-black">Broadcast Member</h4>
                        </div>
                        <FaBullhorn className="text-3xl text-emerald-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <div className="bg-slate-800 p-6 rounded-[2rem] text-white flex items-center justify-between group cursor-pointer hover:scale-[1.02] transition-transform">
                        <div>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Inventory</p>
                            <h4 className="text-lg font-black">Manage Stock</h4>
                        </div>
                        <FaUtensils className="text-3xl text-slate-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="bg-white border border-gray-100 p-6 rounded-[2rem] flex items-center justify-between group cursor-pointer hover:shadow-md transition-all">
                        <div>
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Help Desk</p>
                            <h4 className="text-lg font-black text-gray-800">Support Center</h4>
                        </div>
                        <div className="bg-gray-100 p-3 rounded-xl text-gray-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                            <FaPlus />
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    );
}