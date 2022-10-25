import { createBrowserRouter } from "react-router-dom";
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