import { createBrowserRouter } from "react-router-dom";
import Category from "../components/Category";
import Courses from "../components/Courses";
import Account from "../layout/Account";
import Main from "../layout/Main";
import Blog from "../pages/Blog";
import ErrorPage from "../pages/ErrorPage";
import FAQs from "../pages/FAQs";
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
                loader: () => fetch(`https://b610-lerning-platform-server-side-mushfiq-moon.vercel.app/courses/all`),
            },
            {
                path: "/home",
                element: <HomePage />,
                loader: () => fetch(`https://b610-lerning-platform-server-side-mushfiq-moon.vercel.app/courses/all`),
            },
            {
                path: "/courses",
                element: <HomePage />,
                loader: () => fetch(`https://b610-lerning-platform-server-side-mushfiq-moon.vercel.app/courses/all`),
            },
            {
                path: "/category/:id",
                element: <Category />,
                loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-mushfiq-moon.vercel.app/category/${params.id}`),
            },
            {
                path: "/course/:id",
                element: <Courses />,
                loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-mushfiq-moon.vercel.app/course/${params.id}`),
            },
            {
                path: "account",
                element: <ErrorPage />,
            },

        ]
    },
    {
        path: "blog",
        element: <Blog />,
    },
    {
        path: "faq",
        element: <FAQs/>,
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