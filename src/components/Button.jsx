import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Button = ({ label, icon, hasDropdown, submenu, path, isMobile }) => {
    const [isOpen, setIsOpen] = useState(false);

    const baseTopLevel =
        (isMobile
            ? "flex justify-between w-full py-4 border-b border-gray-300 text-base"
            : "flex items-center px-2 lg:px-4 py-2 text-sm lg:text-base") +
        " text-gray-600"; // base is always gray

    return (
        <div
            className={`relative ${!isMobile ? "group" : ""}`}
            onMouseEnter={() => !isMobile && hasDropdown && setIsOpen(true)}
            onMouseLeave={() => !isMobile && hasDropdown && setIsOpen(false)}
        >
            {/* Top-level NavLink (always clickable now) */}
            <NavLink
                to={path}
                className={({ isActive }) =>
                    `${baseTopLevel} ${isActive ? "text-teal-700 font-bold" : "text-gray-600 hover:text-teal-700"
                    }`
                }
                onClick={() => {
                    // On mobile, just navigate (no preventDefault) but toggle dropdown separately
                    if (isMobile && hasDropdown) {
                        setIsOpen(!isOpen);
                    }
                }}
            >
                {icon && !isMobile && <span className="mr-2">{icon}</span>}
                <span>{label}</span>

                {hasDropdown && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`ml-2 ${isMobile ? "" : "mt-0.5"}`}
                    >
                        <path d="m6 9 6 6 6-6"></path>
                    </svg>
                )}
            </NavLink>

            {/* Dropdown */}
            {hasDropdown && isOpen && (
                <div
                    className={`absolute left-0 mt-2 w-48 rounded-lg bg-white shadow-lg border border-gray-200 z-50 
            ${isMobile ? "relative w-full mt-0 shadow-none border-0" : ""}`}
                >
                    <ul className="py-2">
                        {submenu?.map((sub, index) => (
                            <li key={index}>
                                <NavLink
                                    to={sub.path}
                                    className={({ isActive }) =>
                                        `block px-4 py-2 ${isActive
                                            ? "bg-gray-100 text-teal-800 font-semibold"
                                            : "text-gray-600 hover:bg-gray-100 hover:text-teal-700"
                                        }`
                                    }
                                >
                                    {sub.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Button;
