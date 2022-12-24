import React from 'react';
import { Navigate, useLocation, useRoutes } from "react-router-dom";
import AuthMainLayout from '../layout/AuthMainLayout';
import MainLayout from '../layout/MainLayout';
import Login from '../Components/Login';
import Products from '../Components/Products';
import ProductCart from '../Components/ProductCard';
export default function Router() {
    return useRoutes([
        {
            path: "",
            element: <MainLayout />,
            children: [
                {
                    path: "",
                    element: <Products />,
                },
                {
                    path: "/productCart",
                    element: <ProductCart />
                }
            ]
        },
        {
            path: "",
            element: <AuthMainLayout />,
            children: [
                {
                    path: "login",
                    element: <Login />
                },
            ]
        }
    ])
}