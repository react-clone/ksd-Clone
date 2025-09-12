import React from "react";
import Button from "./Button";

const ButtonGroup = ({ navItems, isMobile }) => {
    return (
        <div
            className={`${isMobile
                ? "flex flex-col w-full mt-4 bg-white rounded-lg"
                : "flex space-x-4"
                }`}
        >
            {navItems.map((item, index) => (
                <Button
                    key={index}
                    icon={item.icon}
                    label={item.label}
                    hasDropdown={item.hasDropdown}
                    isMobile={isMobile}
                    submenu={item.submenu}
                    path={item.path} // Pass path to Button
                />
            ))}
        </div>
    );
};

export default ButtonGroup;
