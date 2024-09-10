import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Share } from "lucide-react";
import { useProduct } from "../../context/product";

const ImagePreview = ({ id }) => {
    const { data } = useProduct();
    let productData = data?.data.filter((product) => product.id == id.id);
    const images = productData[0].images;
    let imageArrayLength = images.length;
    const [index, setIndex] = useState(0);
    const shifImageRight = () => {
        index >= imageArrayLength - 1
            ? setIndex(0)
            : setIndex((prev) => prev + 1);
    };
    const shifImageLeft = () => {
        index <= 0
            ? setIndex(imageArrayLength - 1)
            : setIndex((prev) => prev - 1);
    };

    return (
        <div>
            <div className="sp mx-auto max-w-7xl sm:pl-10 px-4 py-6">
                <div className="overflow-hidden ">
                    <div className="mb-9 pt-4 md:px-6 md:pt-7 lg:mb-2 lg:p-8 2xl:p-10 2xl:pt-10">
                        <div className="items-start justify-between lg:flex lg:space-x-8">
                            <div className="mb-6 items-center justify-center overflow-hidden md:mb-8 lg:mb-0 xl:flex">
                                <div className="w-full xl:flex xl:flex-row-reverse">
                                    <div className="relative mb-2.5 w-full shrink-0 overflow-hidden rounded-md md:mb-3 xl:w-[400px] 2xl:w-[500px]">
                                        <div className="relative flex items-center justify-center">
                                            <img
                                                alt="Product gallery 1"
                                                src={images[index].src}
                                                width={650}
                                                height={590}
                                                className="rounded-lg object-cover md:h-[300px] md:w-full lg:h-full select-none"
                                            />
                                            <div className="absolute top-2/4 z-10 flex w-full items-center justify-between text-3xl p-2">
                                                <ChevronLeft
                                                    className="text-white cursor-pointer bg-transparent/20 rounded-full text-3xl"
                                                    onClick={shifImageLeft}
                                                />
                                                <ChevronRight
                                                    className="text-white cursor-pointer bg-transparent/20 rounded-full text-3xl"
                                                    onClick={shifImageRight}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex overflow-auto gap-2 xl:flex-col">
                                        {images.map((image, index) => {
                                            return (
                                                <div
                                                    onClick={() =>
                                                        setIndex(index)
                                                    }
                                                    key={index}
                                                    className="border-border-base rounded-md flex cursor-pointer items-center justify-center overflow-auto transition hover:opacity-75
                                                    h-22 md:h-26 lg:h-32 xl:h-36
                                                    "
                                                >
                                                    <img
                                                        alt={`Product ${index}`}
                                                        src={image.src}
                                                        decoding="async"
                                                        loading="lazy"
                                                        className="w-20 h-full object-contain md:w-24 lg:w-28 xl:w-32"
                                                    />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImagePreview;
