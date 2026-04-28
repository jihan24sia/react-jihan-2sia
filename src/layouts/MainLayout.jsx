import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState } from 'react';

export default function MainLayout() {
    const [count, setCount] = useState(0)
    const [showModal, setShowModal] = useState(false);

    return (
        <div id="app-container" className="bg-gray-100 min-h-screen flex">

            <div id="layout-wrapper" className="flex flex-row flex-1">


                {/* SIDEBAR */}
                <Sidebar />

                {/* MAIN CONTENT */}
                <div id="main-content" className="flex-1 p-4">
                    <Header openModal={() => setShowModal(true)} />
                    {/* <Dashboard /> */}

                    <Outlet />

                    {/* <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/error400" element={<Error400 />} />
            <Route path="/error401" element={<Error401 />} />
            <Route path="/error403" element={<Error403 />} />
            <Route path="*" element={<NotFound />} /> */}


                </div>

            </div>
            {/* MODAL */}
            {showModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-xl w-[400px] shadow-xl">

                        <h2 className="text-lg font-bold mb-3">Search</h2>

                        <input
                            type="text"
                            placeholder="Cari sesuatu..."
                            className="w-full border px-3 py-2 rounded mb-4"
                        />

                        <button
                            onClick={() => setShowModal(false)}
                            className="bg-red-500 text-white px-4 py-2 rounded"
                        >
                            Close
                        </button>

                    </div>
                </div>
            )}

        </div>
    )
}