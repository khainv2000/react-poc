import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/ui/layout/Layout";
import { AboutPage } from "@/ui/pages/about/AboutPage";
import { HomePage } from "@/ui/pages/home/HomePage";
import { NotFoundPage } from "@/ui/pages/not-found/NotFoundPage";
import { UsersPage } from "@/ui/pages/users/UsersPage";

export const router = createBrowserRouter([
	    {
	        path: "/",
	        element: <Layout />,
	        errorElement: <NotFoundPage />,
	        children: [
	            { index: true, element: <HomePage /> },
	            { path: "users", element: <UsersPage /> },
	            { path: "about", element: <AboutPage /> },
	        ],
	    },
	    {
	        path: "*",
	        element: <NotFoundPage />,
	    },
	]);
