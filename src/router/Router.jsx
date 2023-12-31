import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../RouterPages/PrivateRouter";
import Carrer from "../Pages/Carrer/Carrer";
import Dashbord from "../Pages/Dashbord/Dashbord";
import News from "../Pages/News/News";
import About from "../Pages/About/About";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children : [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/news.json ')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>
            },
            {
                path: '/career',
                element: <PrivateRoute><Carrer></Carrer></PrivateRoute>
            },
            {
                path: '/dashbord',
                element: <PrivateRoute><Dashbord></Dashbord></PrivateRoute>
            }
        ]
    }
]);

export default router