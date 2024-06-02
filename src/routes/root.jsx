import { createBrowserRouter } from "react-router-dom"
import Layout from "../layout/Layout"
import Compras from "../pages/Compras"
import Roles from "../pages/Roles"
import Clientes from "../pages/Clientes"
import Empleados from "../pages/Empleados"
import Proveedores from "../pages/Proveedores"

 const router = createBrowserRouter([
    { path: '/login', element: <div>Login</div>, },
    { path: '/register', element: <div>register</div>,},
    { path: '/',
        element: <Layout />,
        children : [
            { path: '/compras', element: <Compras/>, },
            { path: '/ventas', element: <div>ventas</div>, },
            { path: '/clientes', element: <Clientes/>, },
            { path: '/productos', element: <div>productos</div>, },
            { path: '/proveedores', element: <Proveedores />, },
            { path: '/empleados', element: <Empleados/>, },
            { path: '/roles', element: <Roles />, },
      
        ]
    }
])

export default router