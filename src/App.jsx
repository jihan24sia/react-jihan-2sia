import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react";
import ReactDOM from "react-dom/client";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import "./assets/tailwind.css";
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import NotFound from "./pages/NotFound";

function App() {
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

          <Routes>

            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

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

export default App
