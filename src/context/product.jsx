import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext();

function useProduct() {
    const context = useContext(ProductContext);
    if (context === undefined) {
        throw new Error(
            "This hook cannot be used outside the ProductDataProvider Component"
        );
    }
    return context;
}

function ProductProvider({ children }) {
    const [searchVal, setSearchVal] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [data, setData] = useState({ data: [], status: "loading" });

    const contextValue = {
        searchVal,
        setSearchVal,
        showSearch,
        setShowSearch,
        data,
        setData,
    };

    return (
        <ProductContext.Provider value={contextValue}>
            {children}
        </ProductContext.Provider>
    );
}

export { useProduct, ProductProvider };
