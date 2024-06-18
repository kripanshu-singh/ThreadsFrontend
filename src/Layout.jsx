import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Outlet,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductDetail from "./components/ProductPage";
import Navbar from "./components/HomePage/Navbar";
import Footer from "./components/HomePage/Footer";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contactus";
import { fetchData } from "./helper";
import { useEffect } from "react";
import { useProduct } from "./context/product";

function Layout() {
    const {setData}=useProduct();
    const routes = createBrowserRouter([
        {
            path: "/",
            element: (
                <>
                    <Navbar />
                    <Outlet />
                    <Footer />
                </>
            ),
            children: [
                {
                    path: "",
                    element: <HomePage />,
                },
                {
                    path: "product/:id",
                    element: <ProductDetail />,
                },
                {
                    path: "about",
                    element: <AboutUs />,
                },
                {
                    path: "contact",
                    element: <Contact />,
                },
            ],
        },
    ]);

    useEffect(async()=>{
    setData(await fetchData());
    },[])

    return (
        <>
            <RouterProvider router={routes} />
        </>
    );
}

export default Layout;
