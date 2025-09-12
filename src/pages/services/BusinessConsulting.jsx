import React from "react";

const BusinessConsulting = () => {
    const services = [
        {
            id: 1,
            title: "Strategic Planning",
            desc: "Develop comprehensive strategies aligned with your business vision and market dynamics.",
            button: "Explore Strategy",
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
                    className="lucide lucide-target text-teal-600 mx-auto mb-4"
                >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                </svg>
            ),
        },
        {
            id: 2,
            title: "Project Management",
            desc: "Expert guidance and oversight to ensure successful project execution and delivery.",
            button: "View Services",
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
                    className="lucide lucide-clipboard-list text-teal-600 mx-auto mb-4"
                >
                    <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <path d="M12 11h4"></path>
                    <path d="M12 16h4"></path>
                    <path d="M8 11h.01"></path>
                    <path d="M8 16h.01"></path>
                </svg>
            ),
        },
        {
            id: 3,
            title: "Organizational Analysis",
            desc: "In-depth assessment of organizational structure, processes, and performance potential.",
            button: "Learn More",
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
                    className="lucide lucide-settings text-teal-600 mx-auto mb-4"
                >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                </svg>
            ),
        },
    ];

    const steps = [
        {
            id: 1,
            title: "Initial Consultation",
            desc: "We begin by deeply understanding your business challenges, goals, and unique context. Our consultants conduct in-depth interviews with key stakeholders to gain comprehensive insights into your operational dynamics, market positioning, and strategic objectives.",
            reverse: true,
        },
        {
            id: 2,
            title: "Strategic Assessment",
            desc: "Our team performs a thorough analysis of your current business landscape. We conduct market research, competitive analysis, and internal capability assessment to identify opportunities for improvement, potential risks, and strategic leverage points.",
            reverse: false,
        },
        {
            id: 3,
            title: "Solution Design",
            desc: "Based on our assessment, we develop a customized strategic roadmap. This involves creating detailed recommendations, potential intervention strategies, and a clear implementation plan that aligns with your specific business goals and organizational culture.",
            reverse: true,
        },
        {
            id: 4,
            title: "Collaborative Planning",
            desc: "We work closely with your leadership team to refine and validate our proposed strategies. Through collaborative workshops and iterative discussions, we ensure that our recommendations are not just theoretically sound but practically executable.",
            reverse: false,
        },
        {
            id: 5,
            title: "Implementation Support",
            desc: "Our consultants provide hands-on support during the implementation phase. We offer guidance, monitor progress, help manage change within your organization, and provide real-time adjustments to ensure smooth execution of the strategic plan.",
            reverse: true,
        },
        {
            id: 6,
            title: "Continuous Optimization",
            desc: "We dont just deliver a plan and walk away. Our ongoing support includes performance tracking, periodic review meetings, and adaptive strategies to ensure your business continues to evolve and improve in a dynamic market environment.",
            reverse: false,
        },
    ];

    return (
        <>
            <div className="bg-gray-50 min-h-screen">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-r from-teal-500 to-blue-600 text-white py-20 px-8">
                    <div
                        className="max-w-5xl mx-auto text-center"
                        style={{ opacity: 1, transform: "none" }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            Strategic Business Solutions
                        </h1>
                        <p className="text-lg md:text-xl mb-6">
                            Transform challenges into opportunities with our comprehensive
                            consulting approach.
                        </p>
                        <button
                            className="px-6 py-3 bg-white text-teal-600 font-semibold rounded-full shadow-md hover:shadow-lg"
                            style={{
                                backgroundColor: "rgb(255, 255, 255)",
                                color: "rgb(13, 148, 136)",
                                transform: "none",
                            }}
                        >
                            Consultation Request
                        </button>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-20 px-8">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
                            Our Consulting Services
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl"
                                    style={{ opacity: 1, transform: "none" }}
                                >
                                    {service.icon}
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{service.desc}</p>
                                    <button className="text-teal-600 font-medium underline">
                                        {service.button}
                                    </button>
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
                                KSD is a trusted partner to clients from diverse industries and
                                organizations of all sizes. Our business consulting specialists
                                take the time to understand every facet of your operations,
                                delivering tailored solutions that address the distinct needs of
                                your business.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <img
                                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="Team Collaboration"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </section>

                {/* Methodology Section */}
                <section className="bg-teal-50 py-20 px-8">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">
                            Our Consulting Methodology
                        </h2>
                        <p className="text-xl text-gray-800 mb-12">
                            We transform complex business challenges into strategic
                            opportunities through a comprehensive, collaborative approach that
                            combines deep expertise with innovative thinking.
                        </p>
                        <div className="relative">
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-300 z-0"></div>
                            <div className="relative space-y-12">
                                {steps.map((step) => (
                                    <div
                                        key={step.id}
                                        className={`flex items-center w-full ${step.reverse ? "flex-row-reverse" : "flex-row"
                                            }`}
                                        style={{ opacity: 1, transform: "none" }}
                                    >
                                        <div className="w-12 h-12 flex-shrink-0 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold z-10 relative">
                                            {step.id}
                                        </div>
                                        <div
                                            className={`flex-grow mx-4 p-6 bg-white shadow-lg rounded-lg ${step.reverse
                                                ? "mr-auto text-right"
                                                : "ml-auto text-left"
                                                }`}
                                            style={{ width: "calc(50% - 3rem)" }}
                                        >
                                            <p className="text-gray-800 text-lg font-semibold mb-3">
                                                {step.title}
                                            </p>
                                            <p className="text-gray-600 text-sm">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-8 bg-gradient-to-r from-teal-500 to-blue-600 text-white text-center">
                    <h2
                        className="text-3xl font-bold mb-6"
                        style={{ opacity: 1, transform: "none" }}
                    >
                        Ready to Elevate Your Business?
                    </h2>
                    <button className="px-8 py-3 bg-white text-teal-600 font-bold rounded-full shadow-lg">
                        Start Your Journey
                    </button>
                </section>
            </div>
        </>
    );
};

export default BusinessConsulting;
