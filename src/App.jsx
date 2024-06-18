import React from "react";
import Layout from "./Layout";
import { ProductProvider } from "./context/product";

const App = () => {

    return (
        <ProductProvider>
            <Layout />
        </ProductProvider>
    );
};

export default App;
