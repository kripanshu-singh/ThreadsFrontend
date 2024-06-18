import React from "react";
import ImagePreview from "./ImagePreview";
import { useParams } from "react-router-dom";
import ProductInfo from "./ProductInfo";
import { useProduct } from "../../context/product";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
    const id = useParams();
    const { data } = useProduct();
    const navigate = useNavigate();
    if (data?.status === "loading") {
        navigate("/");
        return;
    }

    return (
        <div>
            <div className="block grid-cols-2 items-start gap-x-0 pb-10 lg:grid lg:pb-14 xl:gap-x-0 2xl:pb-20">
                <ImagePreview id={id} />
                <ProductInfo id={id} />
            </div>
        </div>
    );
};

export default ProductDetail;
