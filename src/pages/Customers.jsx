import { useState } from "react";
import { customers } from "../data/customers";
import PageHeader from "../components/PageHeader";

export default function Customers() {
    const [showForm, setShowForm] = useState(false);

    return (
        <div>

            <PageHeader
                title="Customers"
                breadcrumb={["Dashboard", "Customers"]}
            >
                <button
                    onClick={() => setShowForm(true)}
                    className="bg-hijau text-white px-4 py-2 rounded-lg"
                >
                    + Add Customer
                </button>
            </PageHeader>

            {/* TABLE */}
           <table className="w-full mt-4 bg-white shadow rounded">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-2 bg-hijau text-white">ID</th>
                        <th className="p-2 bg-hijau text-white">Name</th>
                        <th className="p-2 bg-hijau text-white">Email</th>
                        <th className="p-2 bg-hijau text-white">Phone</th>
                        <th className="p-2 bg-hijau text-white">Loyalty</th>
                    </tr>
                </thead>

                 <tbody>
                                    {customers.map((c, i) => (
                                        <tr key={i} className="text-center border-t">
                                            <td className="p-2">{c.id}</td>
                                            <td className="p-2">{c.name}</td>
                                            <td className="p-2">{c.email}</td>
                                            <td className="p-2">{c.phone}</td>
                                            <td className="p-2">{c.loyalty}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                
            {/* 🔥 MODAL FORM */}
            {showForm && (
                <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

                    <div className="bg-white p-6 rounded-xl w-[400px] shadow-xl">

                        <h2 className="text-lg font-bold mb-4">Add Customer</h2>

                        <input
                            type="text"
                            placeholder="Customer Name"
                            className="w-full border p-2 mb-3 rounded"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border p-2 mb-3 rounded"
                        />

                        <input
                            type="text"
                            placeholder="Phone"
                            className="w-full border p-2 mb-3 rounded"
                        />

                        <select className="w-full border p-2 mb-4 rounded">
                            <option>Bronze</option>
                            <option>Silver</option>
                            <option>Gold</option>
                        </select>

                        <div className="flex justify-end space-x-2">
                            <button
                                onClick={() => setShowForm(false)}
                                className="bg-gray-400 text-white px-4 py-2 rounded"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={() => setShowForm(false)}
                                className="bg-hijau text-white px-4 py-2 rounded"
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