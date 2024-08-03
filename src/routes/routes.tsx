import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Admin from "../pages/admin/admin";
import Login from "../pages/login/Login";
import AllStudent from "../pages/admin/AllStudent";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Admin />
            },
            {
                path: 'admin',
                element: <Admin />
            },
            {
                path: 'admin/all-student',
                element:<AllStudent/>
            } 
        ]
    },
    {
        path: '/auth/sign-in',
        element:<Login/>
    }
])

export default router