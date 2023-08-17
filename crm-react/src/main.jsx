
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    { 
        path: '/', 
        element: <h1>Inicio</h1>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(

<RouterProvider 
    router={router}
/>    

)
