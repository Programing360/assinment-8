
import './App.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Root from './component/Root/Root';

import DashBord from './component/DashBord/DashBord';
import ProductDetails from './component/ProductDetails/ProductDetails';

import Home from './component/Home/Home';
function App() {
  const router = createBrowserRouter([

  {
    path: "/",
    element: <Root></Root>,
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
        path:'/dashbord',
        element:<DashBord></DashBord>,
        loader:() => fetch('/public/devices.json')
      }
    ]
  },
]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
