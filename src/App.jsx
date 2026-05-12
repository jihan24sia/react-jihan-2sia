import "./assets/tailwind.css";
import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import Loading from "./components/Loading";

function App() {
  // --- DEKLARASI PAGES (Lazy Loading) ---
  const Dashboard = React.lazy(() => import("./pages/Dashboard"))
  const Orders = React.lazy(() => import("./pages/Orders"))
  const Customers = React.lazy(() => import("./pages/Customers"))
  const CustomersDetail = React.lazy(() => import("./pages/CustomersDetail")) // Perbaikan Nama & Path
  const Produk = React.lazy(() => import("./pages/Produk"))
  const ProductDetail = React.lazy(() => import("./pages/ProductDetail")) // Sekarang cuma satu deklarasi
  const NotFound = React.lazy(() => import("./pages/NotFound"))
  const Error400 = React.lazy(() => import("./pages/Error400"))
  const Error401 = React.lazy(() => import("./pages/Error401"))
  const Error403 = React.lazy(() => import("./pages/Error403"))
  const Login = React.lazy(() => import("./pages/auth/Login"))
  const Register = React.lazy(() => import("./pages/auth/Register"))
  const Forgot = React.lazy(() => import("./pages/auth/Forgot"))
  const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
  const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Layout Utama untuk Menu Resto & Customer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          
          {/* Rute Customer */}
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/:id" element={<CustomersDetail />} />
          
          {/* Rute Produk/Menu */}
          <Route path="/produk" element={<Produk />} />
          <Route path="/products/:id" element={<ProductDetail />} /> 

          {/* Rute Error & Not Found */}
          <Route path="/error400" element={<Error400 />} />
          <Route path="/error401" element={<Error401 />} />
          <Route path="/error403" element={<Error403 />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Layout untuk Login/Register */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App;