import React from "react";

const features = [
    {
        label: "Global Reach",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe mb-2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
            </svg>
        ),
    },
    {
        label: "Advanced Tech",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cpu mb-2">
                <rect width="16" height="16" x="4" y="4" rx="2"></rect>
                <rect width="6" height="6" x="9" y="9" rx="1"></rect>
                <path d="M15 2v2"></path>
                <path d="M15 20v2"></path>
                <path d="M2 15h2"></path>
                <path d="M2 9h2"></path>
                <path d="M20 15h2"></path>
                <path d="M20 9h2"></path>
                <path d="M9 2v2"></path>
                <path d="M9 20v2"></path>
            </svg>
        ),
    },
    {
        label: "Secure Solutions",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield mb-2">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
            </svg>
        ),
    },
    {
        label: "Rapid Innovation",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket mb-2">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
            </svg>
        ),
    },
];

const Hero = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-blue-50 opacity-50 -z-10"
                    style={{ opacity: 0.357379 }}
                ></div>
                <div
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-100/30 rounded-full blur-3xl -z-20"
                    style={{ opacity: 0, transform: "scale(1.18246) rotate(228.121deg)" }}
                ></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-100/30 rounded-full blur-3xl -z-20"
                    style={{ opacity: 0, transform: "scale(1.08041) rotate(-316.486deg)" }}
                ></div>

                <div className="text-center max-w-4xl px-6">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 mb-6 leading-tight">
                        Digital Transformation
                        <br />
                        Reimagined
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
                        We architect innovative technology solutions that propel businesses into the future, combining strategic insight with cutting-edge digital expertise.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-12 py-4 rounded-xl flex items-center shadow-lg transition-all duration-300 ease-in-out" tabIndex={0}>
                            Explore Solutions
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-3 -mr-1">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </button>
                        <button className="bg-white border-2 border-teal-500 text-teal-800 px-12 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out" tabIndex={0}>
                            Contact Us
                        </button>
                    </div>
                </div>

                {/* Features Icons */}
                <div className="mt-16 flex justify-center space-x-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-gray-700 hover:text-teal-700 transition-colors"
                        >
                            {feature.icon}
                            <span className="text-sm font-medium">{feature.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Hero;
