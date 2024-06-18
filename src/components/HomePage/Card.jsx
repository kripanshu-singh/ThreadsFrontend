import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Card = ({ title, oldprice, newprice, prodID, imageURL }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`product/${prodID}`);
    };

    return (
        <div>
            <div
                className="relative  w-auto rounded-md md:aspect-auto md:h-[400px] cursor-pointer "
                onClick={handleNavigate}
            >
                <img
                    src={imageURL}
                    className="z-0 h-full w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left right-4">
                    <h1 className="text-lg font-semibold text-white">
                        {title}
                    </h1>
                    <div className="mt-2 text-sm text-gray-300 flex gap-3 items-center">
                        <span className="line-through">
                            ₹{parseInt(oldprice)}
                        </span>
                        <span className="flex-1 ">₹{parseInt(newprice)}</span>
                        <span className="bg-green-500 text-black rounded-md px-2 mr-4 ">
                            {parseInt(((oldprice - newprice) / oldprice) * 100)}
                            %
                        </span>
                    </div>
                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                        Shop Now &rarr;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
