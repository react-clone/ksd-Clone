import React from "react";

const TechnologyConsulting = () => {
    // Reusable data for Expertise Section
    const expertise = [
        {
            id: 1,
            title: "Custom Software Development",
            description:
                "Tailored software solutions to streamline your business processes.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-briefcase text-teal-600 mx-auto mb-4"
                >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                </svg>
            ),
        },
        {
            id: 2,
            title: "SharePoint Consulting",
            description:
                "Comprehensive SharePoint services for enhanced collaboration.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-share text-teal-600 mx-auto mb-4"
                >
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                    <polyline points="16 6 12 2 8 6"></polyline>
                    <line x1="12" x2="12" y1="2" y2="15"></line>
                </svg>
            ),
        },
        {
            id: 3,
            title: "Cloud Data Migration",
            description: "Seamless and secure migration of your data to the cloud.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-layers text-teal-600 mx-auto mb-4"
                >
                    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
                    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
                    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
                </svg>
            ),
        },
    ];

    // Reusable data for Steps Section
    const steps = [
        {
            id: 1,
            title: "Initial Consultation",
            description:
                "In our initial sessions, our consultants take the time to understand your business and its specific technology or software requirements...",
            align: "right",
        },
        {
            id: 2,
            title: "Documentation and Planning",
            description:
                "After a thorough understanding of your requirements, we meticulously document the project scope, objectives, and technical specifications...",
            align: "left",
        },
        {
            id: 3,
            title: "Design & Development",
            description:
                "Our expert designers and developers transform the project blueprint into a tangible solution using cutting-edge technologies...",
            align: "right",
        },
        {
            id: 4,
            title: "Testing & QA",
            description:
                "Our rigorous testing and quality assurance phase involves unit testing, integration testing, and user acceptance testing...",
            align: "left",
        },
        {
            id: 5,
            title: "Implementation",
            description:
                "We carefully plan and execute the implementation of your software solution with minimal disruption...",
            align: "right",
        },
        {
            id: 6,
            title: "Support & Maintenance",
            description:
                "We provide ongoing support, monitoring, updates, and patches to keep your solution secure and optimized...",
            align: "left",
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-teal-500 to-blue-600 text-white py-20 px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Empowering Businesses Through Technology
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Driving innovation with tailored technology solutions for your
                        business growth.
                    </p>
                    <button className="px-6 py-3 bg-white text-teal-600 font-semibold rounded-full shadow-md hover:shadow-lg">
                        Contact Us Now
                    </button>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="py-20 px-8">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
                        Our Expertise
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {expertise.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl"
                            >
                                {item.icon}
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 text-center md:text-left">
                        <p className="text-2xl text-gray-600 mb-6">
                            As an Information Technology Consulting Firm Ksd has a proven
                            track record of implementing custom software, commercial
                            off-the-shelf systems, and Microsoft SharePoint...
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            alt="Team Collaboration"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section className="bg-teal-50 py-20 px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">
                        What's our approach?
                    </h2>
                    <p className="text-xl text-gray-800 mb-12">
                        Our team of technical consultants excels at connecting business
                        objectives with the intricate world of technology...
                    </p>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-300 z-0"></div>
                        <div className="relative space-y-12">
                            {steps.map((step) => (
                                <div
                                    key={step.id}
                                    className={`flex items-center w-full flex-row${step.align === "right" ? "-reverse" : ""
                                        }`}
                                >
                                    <div className="w-12 h-12 flex-shrink-0 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold z-10 relative">
                                        {step.id}
                                    </div>
                                    <div
                                        className={`flex-grow mx-4 p-6 bg-white shadow-lg rounded-lg ${step.align === "right"
                                            ? "mr-auto text-right"
                                            : "ml-auto text-left"
                                            }`}
                                        style={{ width: "calc(50% - 3rem)" }}
                                    >
                                        <p className="text-gray-800 text-lg font-semibold mb-3">
                                            {step.title}
                                        </p>
                                        <p className="text-gray-600 text-sm">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-8 bg-gradient-to-r from-teal-500 to-blue-600 text-white text-center">
                <h2 className="text-3xl font-bold mb-6">
                    Ready to Transform Your Business?
                </h2>
                <button className="px-8 py-3 bg-white text-teal-600 font-bold rounded-full shadow-lg">
                    Contact Us Now
                </button>
            </section>
        </div>
    );
};

export default TechnologyConsulting;
