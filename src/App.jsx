import "./assets/tailwind.css";
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Error400 from "./pages/Error400";
import Error401 from "./pages/Error401";
import Error403 from "./pages/Error403";
import MainLayout from './layouts/MainLayout';
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";  
import AuthLayout from "./layouts/AuthLayout";


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>

        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/error400" element={<Error400 />} />
        <Route path="/error401" element={<Error401 />} />
        <Route path="/error403" element={<Error403 />} />
        <Route path="*" element={<NotFound />} />


      </Route>
       <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot" element={<Forgot/>} />
        </Route>
    </Routes>
  )
}

export default App
