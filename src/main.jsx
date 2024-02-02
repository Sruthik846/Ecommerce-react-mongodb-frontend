import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Shop from './Pages/Shop.jsx';
import ShopCategory from './Pages/ShopCategory.jsx';
import ShopContextProvider from './Context/ShopContext.jsx';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import LoginSignup from './Pages/LoginSignup.jsx';
import Cart from './Pages/Cart.jsx';
import Product from './Pages/Product.jsx';
import OrderHistory from './Pages/OrderHistory.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children : [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/mens",
        element: <ShopCategory banner={men_banner} category="men" />,
      },
      {
        path: "/womens",
        element: <ShopCategory banner={women_banner} category="women" />,
      },
      {
        path: "/kids",
        element: <ShopCategory banner={kid_banner} category="kid" />,
      },
      {
        path: "/login",
        element: <LoginSignup />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:productId",
        element: <Product />,
      },
      {
        path: "/order_history",
        element: <OrderHistory />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>
  </React.StrictMode>,
)
