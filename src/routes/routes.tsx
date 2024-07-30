import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Admin from "../pages/admin/admin";
import Faculty from "../pages/faculty/faculty";
import Semester from "../pages/semester/semester";
import Login from "../pages/login/Login";

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
                path: 'faculty',
                element: <Faculty />
            },
            {
                path: 'semester',
                element: <Semester />
            },
        ]
    },
    {
        path: '/auth/sign-in',
        element:<Login/>
    }
])

export default router