import { createBrowserRouter, Navigate } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayouts";
import { AboutPage, CellPhonePage, CellPhonesPage, CheckoutPage, HomePage, LoginPage, OrdersUserPage, RegisterPage } from "../pages";
import { ClientLayout } from "../layouts/ClientLayouts";

export const router = createBrowserRouter ([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'celulares',
                element: <CellPhonesPage />,
            },
            {
                path: 'celulares/:slug',
                element: <CellPhonePage />,
            },
            {
                path: 'nosotros',
                element: <AboutPage />,
            },
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'registro',
                element: <RegisterPage />,
            },
            {
                path: 'account',
                element: <ClientLayout />,
                children: [
                    {
                        path: '',
                        element: <Navigate to='/account/pedidos' />,
                    },
                    {
                        path: 'pedidos',
                        element: <OrdersUserPage />,
                    },
                ],
            },
        ],
    },
    {
        path: '/checkout',
        element: <CheckoutPage />,
    },
]);