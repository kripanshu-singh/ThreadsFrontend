import React, { useState } from "react";
import Card from "./Card";
import CardSkeleton from "./CardSkeleton";
import { useProduct } from "../../context/product";
import { useEffect } from "react";
import { searchByName } from "../../helper";
import ErrorPage from "../ErrorPage";

const CardContainer = () => {
    const { setShowSearch, data } = useProduct();
    const { searchVal } = useProduct();

    useEffect(() => {
        setShowSearch(true);
        return () => {
            setShowSearch(false);
        };
    }, []);

    if (data?.status === "error") {
        return <ErrorPage />;
    }

    return (
        <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
            {data?.status === "success"
                ? searchByName(searchVal, data?.data).map((product) => (
                      <Card
                          key={product.id}
                          title={product.title}
                          oldprice={product.variants[0].compare_at_price}
                          newprice={product.variants[0].price}
                          prodID={product.id}
                          imageURL={product.images[0].src}
                      />
                  ))
                : [...Array(10)].map((_, index) => (
                      <CardSkeleton key={index} />
                  ))}
        </div>
    );
};

export default CardContainer;
