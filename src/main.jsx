import './index.css';

// Components
import App from './App.jsx';
import Cart from "./components/Cart.jsx";
import NotFound from "./components/NotFound.jsx";
import About from "./components/About.jsx";
import Search from "./components/Search.jsx";
import ProductList from "./components/ProductList.jsx";
import ProductDetails from "./components/ProductDetails.jsx";

// Functions,utilities
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<NotFound/>,
        children:[
            {
                path:"/",
                element:
                <main>
                    <Search/>
                    <ProductList/>
                </main>,
            },
            {
                path:"/cart",
                element:<Cart/>,
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/product/:id",
                element:<ProductDetails/>
            }
        ]
    },
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)