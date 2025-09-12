import React from "react";

const HappyClients = ({
    title = "Join A Family Of Happy Clients",
    subtitle = "Through Creativity, Integrity & Innovation",
    buttonText = "Get started today",
    onButtonClick
}) => {
    return (
        <div className="bg-black py-16 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
            <p className="text-xl text-gray-400 mb-8">{subtitle}</p>
            <button
                className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-3 text-lg font-semibold rounded hover:outline-orange-600 hover:scale-110 transition-scale duration-300 cursor-pointer"
                tabIndex={0}
                onClick={onButtonClick}
            >
                {buttonText}
            </button>
        </div>
    );
};

export default HappyClients;
