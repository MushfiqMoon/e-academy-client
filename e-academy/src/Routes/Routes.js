import { createBrowserRouter } from "react-router-dom";
import Category from "../components/Category";
import Courses from "../components/Courses";
import Account from "../layout/Account";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegistarPage from "../pages/RegistarPage";

export const routes = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        element: <Main />,
        children: [
            {
                path: "/",
                element: <HomePage />,
                loader:()=> fetch(`http://localhost:5000/courses/all`),
            },
            {
                path: "/category/:id",
                element: <Category/>,
                loader:({params})=> fetch(`http://localhost:5000/category/${params.id}`),
            },
            {
                path: "/course/:id",
                element: <Courses/>,
                loader:({params})=> fetch(`http://localhost:5000/category/${params.id}`),
            },
            {
                path: "account",
                element: <ErrorPage />,
            },
        ]
    },
    {
        path: "account",
        errorElement: <ErrorPage />,
        element: <Account />,
        children: [
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "register",
                element: <RegistarPage />,
            },

        ]
    },


]);