
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCliente, {action as nuevoClienteAction} from './pages/NuevoCliente'
import Index, {loader as clientesLoader} from './pages/Index'
import ErrorPage from './components/ErrorPage'
import EditarCliente, { loader as editarClienteLoader } from './pages/EditarCliente'

const router = createBrowserRouter([
    { 
        path: '/', 
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Index />,
                loader: clientesLoader,
                errorElement: <ErrorPage />
            },
            {
                path: '/clientes/nuevo',
                element: <NuevoCliente />,
                action: nuevoClienteAction
            }, 
            {
                path: '/clientes/:clienteId/editar',
                element: <EditarCliente />,
                loader: editarClienteLoader
            }
        ]
    }, 

])

ReactDOM.createRoot(document.getElementById('root')).render(

<RouterProvider 
    router={router}
/>    

)
