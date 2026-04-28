import { useState } from "react";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import {
    LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell
} from "recharts";

export default function Dashboard() {

    const lineData = [
        { name: "Sun", value: 20 },
        { name: "Mon", value: 40 },
        { name: "Tue", value: 60 },
        { name: "Wed", value: 30 },
        { name: "Thu", value: 50 },
        { name: "Fri", value: 70 },
        { name: "Sat", value: 90 },
    ];

    const DonutChart = ({ value, color, label }) => (
        <div className="flex flex-col items-center">
            <div className="relative w-[120px] h-[120px] flex items-center justify-center">
                <PieChart width={120} height={120}>
                    <Pie
                        data={[{ value }, { value: 100 - value }]}
                        dataKey="value"
                        innerRadius={35}
                        outerRadius={50}
                        startAngle={90}
                        endAngle={-270}
                    >
                        <Cell fill={color} />
                        <Cell fill="#e5e7eb" />
                    </Pie>
                </PieChart>

                <div className="absolute font-bold">{value}%</div>
            </div>

            <p className="text-sm text-gray-500 mt-3">{label}</p>
        </div>
    );

    const [showModal, setShowModal] = useState(false);
    const [filter, setFilter] = useState("weekly");


    const getData = () => {
        if (filter === "daily") {
            return [
                { name: "Mon", value: 10 },
                { name: "Tue", value: 20 },
                { name: "Wed", value: 15 },
                { name: "Thu", value: 25 },
                { name: "Fri", value: 30 },
            ];
        }

        if (filter === "monthly") {
            return [
                { name: "Jan", value: 100 },
                { name: "Feb", value: 200 },
                { name: "Mar", value: 150 },
                { name: "Apr", value: 250 },
            ];
        }

        return lineData;
    };

    return (
        <div id="dashboard-container">


            <PageHeader
                title="Dashboard"
                breadcrumb={["Dashboard", "Order List"]}
            >
                <button className="bg-hijau text-white px-4 py-2 rounded-lg">
                    + Add Data
                </button>
            </PageHeader>

            <div className="flex justify-between items-center p-5">
                <h2 className="font-semibold text-gray-600">Filter Data</h2>

                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="border px-3 py-2 rounded-lg bg-white shadow"
                >
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                </select>
            </div>

            {/* CARD */}
            <div className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div className="bg-hijau rounded-full p-4">
                        <FaShoppingCart className="text-3xl text-white" />
                    </div>
                    <div>
                        <span className="text-2xl font-bold">75</span>
                        <p className="text-gray-400">Total Orders</p>
                    </div>
                </div>

                <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div className="bg-blue-500 rounded-full p-4">
                        <FaTruck className="text-3xl text-white" />
                    </div>
                    <div>
                        <span className="text-2xl font-bold">175</span>
                        <p className="text-gray-400">Total Delivered</p>
                    </div>
                </div>

                <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div className="bg-red-500 rounded-full p-4">
                        <FaBan className="text-3xl text-white" />
                    </div>
                    <div>
                        <span className="text-2xl font-bold">40</span>
                        <p className="text-gray-400">Total Canceled</p>
                    </div>
                </div>

                <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div className="bg-yellow-500 rounded-full p-4">
                        <FaDollarSign className="text-3xl text-white" />
                    </div>
                    <div>
                        <span className="text-2xl font-bold">Rp.128</span>
                        <p className="text-gray-400">Total Revenue</p>
                    </div>
                </div>
            </div>

            {/* CHART */}
            <div className="p-5 grid md:grid-cols-2 gap-4">

                {/* PIE */}
                <div className="bg-white p-5 rounded-lg shadow">
                    <h2 className="font-bold mb-4">Pie Chart</h2>

                    <div className="flex justify-around">
                        <DonutChart value={81} color="#ef4444" label="Total Order" />
                        <DonutChart value={22} color="#22c55e" label="Customer Growth" />
                        <DonutChart value={62} color="#3b82f6" label="Total Revenue" />
                    </div>
                </div>

                {/* LINE */}
                <div className="bg-white p-5 rounded-lg shadow">
                    <h2 className="font-bold mb-4">Chart Order</h2>

                    <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={getData()}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke="#3b82f6"
                                strokeWidth={3}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

            </div>
        </div>
    );
}