import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react";
import ReactDOM from "react-dom/client";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import "./assets/tailwind.css";

function App() {
  const [count, setCount] = useState(0)

  return (
   <div id="app-container" className="bg-gray-100 min-h-screen flex">
  
              <div id="layout-wrapper" className="flex flex-row flex-1">
  
                  {/* SIDEBAR */}
                  <Sidebar />
  
                  {/* MAIN CONTENT */}
                  <div id="main-content" className="flex-1 p-4">
  
                      <Dashboard />
                  </div>
  
              </div>
  
          </div>
  )
}

export default App
