import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import ProviderData from './component/Provider/ProviderData';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Root from './component/Root/Root';

import DashBord from './component/DashBord/DashBord';
import ProductDetails from './component/ProductDetails/ProductDetails';

import Home from './component/Home/Home';
import Statistics from './component/Statistics/Statistics';
import Cart from './component/Cart/Cart';

const router = createBrowserRouter([

  {
    path: "/",
    element: <Root></Root>,
    errorElement:<h1>Page Do not Found</h1>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/public/devices.json'),
      },
      {
        path:'/datas/:product_id',
        element:<ProductDetails></ProductDetails>,
        loader:() => fetch('/public/devices.json')
      },
      {
        path:'/Statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/dashbord',
        element:<DashBord></DashBord>,
        loader:() => fetch('/public/devices.json')
      },
      {
        path:'/cart',
        element:<Cart></Cart>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ProviderData>
      <RouterProvider router={router} />
    </ProviderData>
  </StrictMode>,
)
