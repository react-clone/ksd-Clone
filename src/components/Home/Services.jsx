import React from "react";

const Services = () => {
    const services = [
        {
            icon: "👥",
            title: "10+ Years of Consulting Experience",
            description:
                "We have a track record of delivering results for global clients with our deep industry knowledge and agile methodologies.",
        },
        {
            icon: "💻",
            title: "Modern Web & Mobile Solutions",
            description:
                "From web apps to mobile platforms, we build scalable and secure technology solutions tailored to your business goals.",
        },
        {
            icon: "🛡️",
            title: "Security & Compliance Focused",
            description:
                "We prioritize the protection of your data and operations, implementing best practices and industry-standard compliance measures.",
        },
    ];

    return (
        <>
            {/* Services Section */}
            <div className="bg-gradient-to-br from-gray-50 via-teal-50 to-white py-16 px-6 relative">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                    <div className="absolute top-20 left-20 bg-teal-100 w-64 h-64 rounded-full mix-blend-multiply filter blur-2xl"></div>
                    <div className="absolute bottom-20 right-20 bg-blue-100 w-80 h-80 rounded-full mix-blend-multiply filter blur-2xl"></div>
                </div>

                {/* Heading */}
                <div className="relative text-center mb-12 z-10">
                    <h2 className="text-5xl font-bold text-teal-900 mb-4 relative">
                        Our Services are Efficient, Modern, and Customer-Focused
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        We revolutionize businesses with innovative strategies, advanced web applications, SharePoint expertise, and more. Discover why we're a leading consulting firm.
                    </p>
                </div>

                {/* Service Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-2xl text-center relative overflow-hidden border-2 border-transparent hover:border-teal-200 transition-all duration-300"
                        >
                            <div className="text-teal-600 text-4xl mb-4 inline-block">{service.icon}</div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Services;
