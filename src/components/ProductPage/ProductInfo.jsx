import React, { useState } from "react";
import {
    convertTagsToArray,
    extractFirstPTagText,
    removeFirstPTag,
} from "../../helper";
import { sizes } from "../../constant";
import { useProduct } from "../../context/product";

const ProductInfo = ({ id }) => {
    const { data } = useProduct();
    let productData = data?.data.filter((product) => product.id == id.id)[0];
    const variants = productData.variants.map((item) =>
        item.title === "Default Title" ? { ...item, title: "M" } : item
    );

    const [varity, setVarity] = useState(variants[0]);
    const tagArray = convertTagsToArray(productData.tags);
    const availableSizes = variants.map((item) => item.title);
    const htmlInput = productData.body_html;
    const extractedText = extractFirstPTagText(htmlInput);
    const modifiedHtml = removeFirstPTag(htmlInput);

    const setCurrVarity = (size) => {
        variants.forEach((item) => {
            if (item.title === size) setVarity(item);
        });
    };

    return (
        <div>
            {" "}
            <div className="mx-auto max-w-7xl px-4 md:px-4 2xl:px-2 md:mt-14 sm:mt-0">
                <div className="col-span-4 pt-8 lg:pt-0">
                    <div className="mb-7 border-b border-gray-300 pb-7">
                        <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
                            {productData.title}
                        </h2>
                        <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
                            {extractedText}
                        </p>
                        <div className="mt-5 flex items-center ">
                            <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
                                ₹ {variants[0].price}
                            </div>
                            <span className="font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
                                ₹ {variants[0].compare_at_price}
                            </span>
                            <span className="bg-white text-black rounded-md px-2 mr-4 ">
                                {parseInt(
                                    ((variants[0].compare_at_price -
                                        variants[0].price) /
                                        variants[0].compare_at_price) *
                                        100
                                )}
                                % Discount 🎉
                            </span>
                        </div>
                    </div>
                    <div className="border-b border-gray-300 pb-3  ">
                        <div className="mb-4">
                            <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">
                                Tags
                            </h3>
                            <div className="mt-4">
                                {tagArray.map((tags, i) => (
                                    <span
                                        className="mb-3 mr-3 inline-block rounded-full bg-gray-200 px-3 py-1 text-[12px] font-semibold text-gray-900"
                                        key={i}
                                    >
                                        {tags}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">
                                size
                            </h3>
                            <ul className="colors -mr-3 flex flex-wrap">
                                {sizes.map((item) =>
                                    availableSizes.includes(item) ? (
                                        <li
                                            key={item}
                                            className="text-heading mb-2 mr-2 flex h-9 w-9  items-center justify-center rounded border border/[#d7d7d7] p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm cursor-pointer"
                                            style={{
                                                border:
                                                    varity.title === item
                                                        ? "1px solid black"
                                                        : "",
                                            }}
                                            onClick={() => setCurrVarity(item)}
                                        >
                                            {item}
                                        </li>
                                    ) : (
                                        <li
                                            key={item}
                                            title="Size not available 🙁"
                                            className="text-heading mb-2 mr-2 flex h-9 w-9  items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out  md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm cursor-not-allowed bg-[#fbfbfb] text-gray-400 "
                                        >
                                            {item}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="py-6 ">
                        <ul className="space-y-5 pb-1 text-sm">
                            <li>
                                <span className="text-heading inline-block pr-2 font-semibold">
                                    Category:
                                </span>

                                {productData.product_type}
                            </li>
                            <li className="productTags">
                                <span className="text-heading inline-block pr-2 font-semibold">
                                    Quantity:
                                </span>
                                {varity.inventory_quantity}
                            </li>
                            <li>
                                <span className="text-heading inline-block pr-2 font-semibold">
                                    Product ID:
                                </span>
                                {productData.id}
                            </li>
                            <li>
                                <span className="text-heading inline-block pr-2 font-semibold">
                                    Variant ID:
                                </span>
                                {varity.id}
                            </li>
                            <li>
                                <span className="text-heading inline-block pr-2 font-semibold">
                                    SKU:
                                </span>
                                {varity.sku}
                            </li>
                        </ul>
                    </div>
                    <div className="shadow-sm ">
                        <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
                            <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                                Product Details
                            </h2>
                            <div className="relative flex h-4 w-4 flex-shrink-0 items-center justify-center">
                                <div className="bg-heading h-0.5 w-full rounded-sm" />
                                <div className="bg-heading absolute bottom-0 h-full w-0.5 origin-bottom scale-0 transform rounded-sm transition-transform duration-500 ease-in-out" />
                            </div>
                        </header>
                        <div>
                            <div className="pb-6 text-sm leading-7 text-gray-600 md:pb-7 flex flex-col justify-start items-start">
                                <div
                                    className="text-body text-sm leading-6  lg:text-base lg:leading-8 "
                                    dangerouslySetInnerHTML={{
                                        __html: modifiedHtml,
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    );
};

export default ProductInfo;
