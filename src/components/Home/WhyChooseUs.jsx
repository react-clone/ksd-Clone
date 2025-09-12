import React from "react";

const WhyChooseUs = () => {
    const cards = [
        {
            title: "Experienced Team",
            description:
                "KSD is backed by a full team of experienced developers, designers, and tech experts.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-zap text-teal-400 bg-teal-400/20 rounded-full p-2"
                >
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
            ),
            gradient: "from-cyan-500 to-blue-500",
        },
        {
            title: "End-to-End Service",
            description:
                "We are committed to providing end-to-end service that leaves our clients fully satisfied, every time.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-big text-teal-400 bg-teal-400/20 rounded-full p-2"
                >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                </svg>
            ),
            gradient: "from-purple-500 to-pink-500",
        },
        {
            title: "One-on-One Consulting",
            description:
                "Personalized calls with our business and technology consultants for tailored solutions.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-zap text-teal-400 bg-teal-400/20 rounded-full p-2"
                >
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
            ),
            gradient: "from-green-400 to-teal-500",
        },
        {
            title: "Long-Term Support",
            description:
                "Ongoing communication, check-ins, and strategies to align with your long-term goals.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-big text-teal-400 bg-teal-400/20 rounded-full p-2"
                >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                </svg>
            ),
            gradient: "from-orange-500 to-yellow-500",
        },
        {
            title: "Technology Expertise",
            description:
                "Industry-leading tech experts dedicated to driving your success.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-zap text-teal-400 bg-teal-400/20 rounded-full p-2"
                >
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
            ),
            gradient: "from-red-500 to-rose-500",
        },
    ];

    return (
        <section className="relative py-24 bg-[#0a0a1a] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a2a] to-[#1a1a3a] opacity-50 pointer-events-none"></div>
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute w-full h-full bg-[length:40px_40px] bg-grid-white/[0.02]"></div>
            </div>
            <div className="max-w-7xl mx-auto relative z-10 px-8">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 mb-6">
                        Why Choose Us?
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Unlock transformative potential with our cutting-edge solutions and innovative approach to technology.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-[#1a1a2a] border border-gray-800/50 rounded-2xl p-6 transform transition-all duration-300 hover:border-transparent relative overflow-hidden group"
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl blur-lg`}
                            ></div>
                            <div className="relative z-10">
                                <div className="flex items-center space-x-4 mb-4">
                                    {card.icon}
                                    <h3 className="text-2xl font-semibold text-gray-100">
                                        {card.title}
                                    </h3>
                                </div>
                                <p className="text-gray-400 text-base mb-4">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
