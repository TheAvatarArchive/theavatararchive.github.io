import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ClassPage from "./pages/ClassPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "/class/:c",
                Component: ClassPage,
            },
        ]
    },
    {
        path: "/class/:c",
        Component: ClassPage,
    },
    {
        path: "/class/:c/profile/:a",
        Component: ProfilePage,
    },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <RouterProvider router={router} />,
);