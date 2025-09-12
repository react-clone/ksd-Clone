import React from "react";

// Reusable Button Component
const ServiceButton = ({ from, to, hoverFrom, hoverTo, ring, icon, text }) => {
    return (
        <button
            className={`
        relative
        flex items-center justify-center
        bg-gradient-to-br ${from} ${to}
        hover:${hoverFrom} hover:${hoverTo}
        text-white
        px-8 py-5
        rounded-2xl
        shadow-xl
        transform transition-all
        duration-300
        group
        text-lg
        font-bold
        space-x-3
        tracking-wide
        focus:outline-none
        focus:ring-4
        ${ring}
        focus:ring-opacity-50
        overflow-hidden
      `}
            tabIndex={0}
        >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <span className="mr-2 opacity-80">{icon}</span>
            {text}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lucide lucide-chevron-right w-6 h-6 opacity-0 group-hover:opacity-100 transition-all ml-2 transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="m9 18 6-6-6-6" />
            </svg>
        </button>
    );
};

const DiscoverServices = () => {
    const services = [
        {
            text: "Technology Consulting",
            from: "from-teal-600",
            to: "to-teal-800",
            hoverFrom: "from-indigo-700",
            hoverTo: "to-indigo-900",
            ring: "focus:ring-teal-500",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="lucide lucide-server w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                    <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                    <line x1="6" x2="6.01" y1="6" y2="6" />
                    <line x1="6" x2="6.01" y1="18" y2="18" />
                </svg>
            ),
        },
        {
            text: "Business Consulting",
            from: "from-indigo-600",
            to: "to-indigo-800",
            hoverFrom: "from-teal-700",
            hoverTo: "to-teal-900",
            ring: "focus:ring-indigo-500",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="lucide lucide-briefcase w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    <rect width="20" height="14" x="2" y="6" rx="2" />
                </svg>
            ),
        },
    ];

    return (
        <div className="bg-white/10 backdrop-blur-lg border border-white/10 shadow-2xl my-12 p-10 rounded-3xl max-w-5xl mx-auto">
            <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600">
                Discover KSD's Comprehensive Consulting Services
            </h2>
            <div className="flex justify-center space-x-8">
                {services.map((service, i) => (
                    <ServiceButton key={i} {...service} />
                ))}
            </div>
        </div>
    );
};

export default DiscoverServices;
