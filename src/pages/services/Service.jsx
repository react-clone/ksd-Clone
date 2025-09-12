import React from "react";
import {
    BarChart3,
    Briefcase,
    Laptop,
    Cog,
    HeartHandshake,
    FolderSync,
} from "lucide-react";

const Services = () => {
    // Data for "Why Choose Us" list
    const whyChooseUs = [
        { icon: "fas fa-check-circle", text: "Get top results" },
        { icon: "fas fa-clock", text: "Save Time and Energy" },
        { icon: "fas fa-user-tie", text: "Get expert's advice" },
        { icon: "fas fa-key", text: "Unlock Opportunity" },
        { icon: "fas fa-cogs", text: "Get working strategies" },
    ];

    // Data for buttons
    const buttons = [
        {
            leftIcon: <BarChart3 size={24} />,
            text: "Business Focused",
            rightIcon: <Briefcase size={24} />,
        },
        {
            leftIcon: <Laptop size={24} />,
            text: "Technology Focused",
            rightIcon: <Cog size={24} />,
        },
    ];

    // Data for popular services cards
    const popularServices = [
        {
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
                    className="lucide lucide-briefcase text-teal-600 mr-4"
                >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                </svg>
            ),
            title: "Custom Software Development",
            description:
                "Our consultants collaborate with your teams to create custom software solutions that meet your business needs. Whether it's a web app, mobile app, or enterprise software, we ensure scalability, security, and high performance. From concept to deployment, we guide you through the entire development process.",
            benefits: ["Tailored Solutions", "Scalability & Flexibility", "Enhanced Security"],
        },
        {
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
                    className="lucide lucide-globe text-teal-600 mr-4"
                >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                </svg>
            ),
            title: "Project & Process Management",
            description:
                "Effective project and process management is crucial for successful software development. We help establish clear governance frameworks, define milestones, and manage risks to ensure on-time, high-quality delivery, while optimizing workflows and fostering collaboration with your internal teams.",
            benefits: ["Governance Frameworks", "Risk Management", "Workflow Optimization"],
        },
        {
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
                    className="lucide lucide-chart-no-axes-column-increasing text-teal-600 mr-4"
                >
                    <line x1="12" x2="12" y1="20" y2="10"></line>
                    <line x1="18" x2="18" y1="20" y2="4"></line>
                    <line x1="6" x2="6" y1="20" y2="16"></line>
                </svg>
            ),
            title: "Software Quality Assurance and Testing",
            description:
                "We believe that quality is paramount. Our consultants help design and implement comprehensive testing strategies to ensure your software is free of bugs, performs as expected, and delivers an exceptional user experience. From unit tests to end-to-end testing, we ensure that quality is built into the development process from the start.",
            benefits: [
                "Manual and automated testing",
                "Performance and load testing",
                "Security and compliance testing",
            ],
        },
    ];

    return (
        <div className="py-16 px-4" style={{ opacity: 1 }}>
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-teal-800 mb-4">
                    Our Consulting Services
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Grow Your Business Potential
                </p>
            </div>

            {/* Intro Text */}
            <div className="w-full md:w-3/4 lg:w-1/2 mx-auto text-center">
                <p className="text-lg text-gray-600 mb-4">
                    Businesses come to{" "}
                    <span className="font-semibold text-teal-700">Ksd</span> for guidance
                    and expertise. The consulting services we provide are intended to
                    simplify processes, create efficiencies, and smooth out workflows. In
                    other words, we push projects to the finish line and fill in missing
                    gaps.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                    To find out more about our consulting solutions, read below and click
                    to explore details. Don’t have the time? Hit the
                    <span className="font-semibold text-teal-700 cursor-pointer">
                        “contact us”
                    </span>{" "}
                    button for important information and a quick response.
                </p>
            </div>

            {/* Collaboration / Why Choose Us */}
            <div className="bg-teal-50 p-8 rounded-lg shadow-md mb-12">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                    {/* Left Side */}
                    <div className="w-full md:w-1/2 px-4 flex flex-col items-start">
                        <div className="p-6 rounded-lg w-full">
                            <div className="mb-6 flex items-center space-x-4">
                                <span className="text-teal-800 text-3xl ">
                                    <HeartHandshake size={24} />
                                </span>
                                <h3 className="text-xl font-bold text-teal-800">Collaborate</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Our team values collaboration and communication. We include our
                                clients at every stage of our services to ultimately save you
                                time and effort.
                            </p>

                            <div className="mb-6 flex items-center space-x-4">
                                <span className="text-teal-800 text-3xl">
                                    <Laptop size={24} />
                                </span>
                                <h3 className="text-xl font-bold text-teal-800">Innovate</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Innovation is the backbone of Aciron. Our consultants develop
                                cutting-edge solutions to solve your greatest challenges. Aciron
                                flows with you so that it’s not just one project but hitting
                                multiple goals and expanding timelines with custom software and
                                strategies.
                            </p>

                            <div className="flex items-center space-x-4">
                                <span className="text-teal-800 text-3xl">
                                    <FolderSync />
                                </span>
                                <h3 className="text-xl font-bold text-teal-800">Transform</h3>
                            </div>
                            <p className="text-gray-600">
                                Watch your business transform with our technology and business
                                consulting services to create lasting improvements.
                            </p>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="w-full md:w-1/2 px-4 flex flex-col items-start">
                        <h3 className="text-4xl font-bold text-teal-800 mb-6">
                            Why Choose Us
                        </h3>
                        <ul className="list-disc text-lg md:text-xl list-inside text-gray-700 space-y-4">
                            {whyChooseUs.map((item, index) => (
                                <li key={index}>
                                    <span className="text-teal-700">
                                        <i className={item.icon}></i>
                                    </span>{" "}
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center items-center space-x-0 sm:space-x-6 space-y-4 sm:space-y-0 py-8 mb-10">
                {buttons.map((btn, index) => (
                    <div key={index} className="relative group">
                        <button className="relative flex items-center justify-between w-72 h-16 px-6 sm:px-8 py-3 sm:py-4 bg-teal-100 border border-gray-300 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out group-hover:bg-teal-600">
                            <span className="text-2xl text-teal-800 transform transition-all duration-300 ease-in-out group-hover:-translate-x-12 group-hover:opacity-0">
                                {btn.leftIcon}
                            </span>
                            <span className="ml-4 flex-grow text-center font-semibold text-black text-base sm:text-lg whitespace-nowrap transition-all duration-300 ease-in-out group-hover:-translate-x-8 group-hover:text-white">
                                {btn.text}
                            </span>
                            <span className="absolute right-6 text-2xl text-teal-50 opacity-0 transform translate-x-8 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0">
                                {btn.rightIcon}
                            </span>
                        </button>
                    </div>
                ))}
            </div>

            {/* Popular Services */}
            <div className="text-center mb-8 mt-20">
                <h3 className="text-2xl font-semibold text-teal-600">
                    Most Popular Consulting Services
                </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {popularServices.map((service, index) => (
                    <div key={index}>
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="flex items-center mb-4">
                                {service.icon}
                                <h3 className="text-2xl font-semibold text-teal-800">
                                    {service.title}
                                </h3>
                            </div>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            <div className="mt-4">
                                <h4 className="font-medium text-teal-700 mb-2">Key Benefits:</h4>
                                <ul className="space-y-2">
                                    {service.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-center text-gray-700">
                                            <span className="w-2 h-2 bg-teal-500 mr-2 rounded-full"></span>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
