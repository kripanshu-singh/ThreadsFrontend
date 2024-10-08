import React from "react";
import { useProduct } from "../../context/product";
import BackButton from "../../assets/back-button.svg";
import { Link } from "react-router-dom";

const menuItems = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "About",
        href: "about",
    },
    {
        name: "Contact",
        href: "contact",
    },
];

export default function Navbar() {
    const { searchVal, setSearchVal, showSearch } = useProduct();

    return (
        <div className="relative w-full border-b-[1px] border-black">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <div className="inline-flex items-center space-x-2">
                    {!showSearch ? (
                        <Link to="/" className="flex items-center h-[40px]">
                            <img
                                className="h-[35px] mr-2 cursor-pointer"
                                onClick={() => {}}
                                src={BackButton}
                                title="Back"
                            ></img>
                            <span className="font-bold ml-1">Back</span>
                        </Link>
                    ) : (
                        <>
                            <span>
                                <svg
                                    fill="#000000"
                                    height="40px"
                                    width="40px"
                                    version="1.1"
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 512 512"
                                    xml:space="preserve"
                                >
                                    <g
                                        id="SVGRepo_bgCarrier"
                                        strokeWidth="0"
                                    ></g>
                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <g transform="translate(1 1)">
                                            {" "}
                                            <g>
                                                {" "}
                                                <path d="M476.867,84.333c-18.773,0-34.133,15.36-34.133,34.133c0,6.128,1.645,11.887,4.503,16.872l-56.556,50.239V95.427 c0-15.36-12.8-28.16-28.16-28.16h-39.253V27.16c0-15.36-12.8-28.16-29.013-28.16h-79.36c-15.36,0-28.16,12.8-28.16,28.16v40.107 h-40.107c-15.36,0-28.16,12.8-28.16,28.16v206.887l-67.576,60.105c-5.182-3.18-11.265-5.019-17.758-5.019 C14.36,357.4-1,372.76-1,391.533c0,18.773,15.36,34.133,34.133,34.133c18.773,0,34.133-15.36,34.133-34.133 c0-6.117-1.639-11.867-4.488-16.847l55.688-49.532v89.418c0,15.36,12.8,28.16,28.16,28.16h40.96v40.107 c0,15.36,12.8,28.16,28.16,28.16h79.36c15.36,0,28.16-12.8,29.013-28.16v-40.107h39.253c15.36,0,28.16-12.8,27.307-29.013V208.405 l68.454-60.808c5.176,3.171,11.251,5.003,17.733,5.003c18.773,0,34.133-15.36,34.133-34.133S495.64,84.333,476.867,84.333z M33.133,408.6c-9.387,0-17.067-7.68-17.067-17.067c0-9.387,7.68-17.067,17.067-17.067c9.387,0,17.067,7.68,17.067,17.067 C50.2,400.92,42.52,408.6,33.133,408.6z M135.533,413.72v-36l43.101,14.365l-42.897,23.65 C135.608,415.079,135.533,414.406,135.533,413.72z M371.083,87.675c1.9,2.024,2.954,4.781,2.53,7.752v27.209L192.694,229.56 l-43.728-11.658L371.083,87.675z M316.254,316.211l-180.721-50.193v-34.035l224.79,59.932L316.254,316.211z M276.686,251.954 l96.927-58.174v31.383l-58.991,36.906L276.686,251.954z M373.613,173.876l-119.89,71.956l-37.914-10.108l157.804-93.263V173.876z M135.533,283.73L294.89,327.99l-38.145,21.031l-121.212-32.329V283.73z M235.154,360.924l-36.184,19.949l-63.437-21.143v-25.376 L235.154,360.924z M200.664,399.428l0.898,0.299l0.324-0.973l171.727-94.678v40.412l-136.666,80.326H154.62L200.664,399.428z M373.613,277.796l-36.427-9.712l36.427-22.789V277.796z M343.038,84.333l-207.505,121.66v-39.826l147.196-81.834h40.537H343.038z M203.8,27.16c0-5.973,5.12-11.093,11.947-11.093h79.36c5.973,0,11.093,5.12,11.093,11.093v40.107H203.8V27.16z M146.627,84.333 h40.107h60.873L135.533,146.64V95.427C135.533,89.453,140.653,84.333,146.627,84.333z M305.347,482.84 c0,5.973-5.12,11.093-11.093,11.093h-79.36c-5.973,0-11.093-5.12-11.093-11.093v-40.107h101.547V482.84z M362.52,424.813h-91.892 l102.986-60.53v49.437C373.613,419.693,368.493,424.813,362.52,424.813z M476.867,135.533c-9.387,0-17.067-7.68-17.067-17.067 s7.68-17.067,17.067-17.067s17.067,7.68,17.067,17.067S486.253,135.533,476.867,135.533z"></path>{" "}
                                            </g>{" "}
                                        </g>{" "}
                                    </g>
                                </svg>
                            </span>
                            <span className="font-bold ml-1">Threads</span>
                        </>
                    )}
                </div>
                <div className="hidden lg:block">
                    <ul className="inline-flex space-x-8">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.href}
                                    className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {showSearch && (
                    <div className="hidden lg:block">
                        <div className="flex grow justify-end">
                            <input
                                onChange={(e) =>
                                    setSearchVal(e.target.value.toLowerCase())
                                }
                                value={searchVal}
                                className="flex h-10 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                placeholder="Serach"
                            ></input>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
