import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayouts";
import { AboutPage, CellPhonesPage, HomePage } from "../pages";

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
                path: 'nosotros',
                element: <AboutPage />,
            },
        ],
    },
]);