import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage";

export const routes = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        element: <Main />,
    },
]);