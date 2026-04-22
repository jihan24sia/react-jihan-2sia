import { useState } from "react";
import { orders } from "../data/orders";
import PageHeader from "../components/PageHeader";

export default function Orders() {
    const [showForm, setShowForm] = useState(false);

    return (
        <div>

            {/* HEADER + BUTTON */}
            <PageHeader
                title="Orders"
                breadcrumb={["Dashboard", "Orders"]}
            >
                <button
                    onClick={() => setShowForm(true)}
                    className="bg-hijau text-white px-4 py-2 rounded"
                >
                    + Add Orders
                </button>
            </PageHeader>

            {/* TABLE */}
            <table className="w-full mt-4 bg-white shadow rounded">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-2 bg-hijau text-white">ID</th>
                        <th className="p-2 bg-hijau text-white">Name</th>
                        <th className="p-2 bg-hijau text-white">Status</th>
                        <th className="p-2 bg-hijau text-white">Price</th>
                        <th className="p-2 bg-hijau text-white">Date</th>
                    </tr>
                </thead>

                <tbody>
                    {orders.map((o, i) => (
                        <tr key={i} className="text-center border-t">
                            <td className="p-2">{o.id}</td>
                            <td className="p-2">{o.name}</td>
                            <td className="p-2">{o.status}</td>
                            <td className="p-2">{o.price}</td>
                            <td className="p-2">{o.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* MODAL FORM */}
            {showForm && (
                <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

                    <div className="bg-white p-6 rounded-lg w-[350px] shadow-lg">

                        <h2 className="font-bold text-lg mb-3">Add Order</h2>

                        <input
                            placeholder="Customer Name"
                            className="border p-2 mb-2 w-full rounded"
                        />

                        <select className="border p-2 mb-2 w-full rounded">
                            <option>Pending</option>
                            <option>Completed</option>
                            <option>Cancelled</option>
                        </select>

                        <input
                            placeholder="Total Price"
                            className="border p-2 mb-2 w-full rounded"
                        />

                        <input
                            type="date"
                            className="border p-2 mb-4 w-full rounded"
                        />

                        <div className="flex justify-between">
                            <button
                                onClick={() => setShowForm(false)}
                                className="bg-gray-400 text-white px-3 py-1 rounded"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={() => setShowForm(false)}
                                className="bg-hijau text-white px-3 py-1 rounded"
                            >
                                Save
                            </button>
                        </div>

                    </div>

                </div>
            )}

        </div>
    );
}