import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Nikita",
            role: "Senior .Net developer",
            quote: "Providing innovative solutions that transform technological landscapes.",
            img: "https://picsum.photos/300?random=1",
        },
        {
            id: 2,
            name: "Anish Pandey",
            role: "Full stack Software Developer",
            quote: "Brainstorming and creativity are encouraged, which is critical for producing the best results for our clients",
            img: "https://picsum.photos/300?random=2",
        },
        {
            id: 3,
            name: "Manas Kandpal",
            role: ".Net developer",
            quote: "Creating interfaces that bridge user experience with cutting-edge design.",
            img: "https://picsum.photos/300?random=3",
        },
        {
            id: 4,
            name: "Priyag Panchal",
            role: "Full-Stack Android Developer",
            quote: "Designing scalable and secure cloud infrastructures for modern enterprises.",
            img: "https://picsum.photos/300?random=4",
        },
        {
            id: 5,
            name: "Rachit Mundapi",
            role: "Python Developer",
            quote: "Transforming raw data into strategic insights that drive business growth.",
            img: "https://picsum.photos/300?random=5",
        },
    ];

    const features = [
        {
            id: 1,
            title: "24/7 Support",
            description: "Continuous, responsive technical support and assistance.",
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
                    className="lucide lucide-clock text-teal-400 bg-teal-400/20 rounded-full p-2"
                >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
            ),
            gradient: "from-cyan-500 to-blue-500",
        },
        {
            id: 2,
            title: "Expert Consulting",
            description: "Strategic guidance from industry-leading technology consultants.",
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
                    className="lucide lucide-target text-teal-400 bg-teal-400/20 rounded-full p-2"
                >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                </svg>
            ),
            gradient: "from-purple-500 to-pink-500",
        },
        {
            id: 3,
            title: "Advanced Productivity",
            description: "Cutting-edge tools and methodologies to enhance operational efficiency.",
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
            id: 4,
            title: "Global Solutions",
            description: "Comprehensive technology strategies for international markets.",
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
                    className="lucide lucide-globe text-teal-400 bg-teal-400/20 rounded-full p-2"
                >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                </svg>
            ),
            gradient: "from-orange-500 to-yellow-500",
        },
        {
            id: 5,
            title: "Innovative Strategy",
            description: "Forward-thinking approaches to technological challenges.",
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
                    className="lucide lucide-lightbulb text-teal-400 bg-teal-400/20 rounded-full p-2"
                >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                    <path d="M9 18h6"></path>
                    <path d="M10 22h4"></path>
                </svg>
            ),
            gradient: "from-red-500 to-rose-500",
        },
    ];

    return (
        <>
            <div>
                <div className="relative min-h-screen bg-white overflow-hidden">
                    <div className="relative z-10 container mx-auto px-6 py-16">
                        {/* ===== Hero Section ===== */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700">
                            Transforming Digital Landscapes
                        </h1>

                        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 mb-12 shadow-xl border border-green-600 cursor-default">
                            <p className="text-gray-800 mb-4 leading-relaxed text-lg">
                                With two decades of pioneering technological solutions, we transcend traditional consulting paradigms. Our holistic approach integrates cutting-edge technologies, strategic insights, and transformative methodologies to architect digital ecosystems that propel businesses into future-ready environments.
                            </p>
                            <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-700">
                                "Bridging imagination with technological reality through precision and innovation"
                            </blockquote>
                        </div>

                        {/* ===== Founder Section ===== */}
                        <div className="py-16 px-4 bg-white">
                            <h1 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700">
                                Meet Our Founder
                            </h1>

                            <div className="max-w-2xl mx-auto">
                                <div className="bg-white shadow-lg rounded-2xl p-6 text-center border border-green-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="mb-4">
                                        <img
                                            src="https://picsum.photos/300?random=7"
                                            alt="Aabid Khan"
                                            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-green-200"
                                        />
                                    </div>
                                    <h2 className="text-xl font-semibold text-green-800">Aabid Khan</h2>
                                    <p className="text-sm text-green-600 mb-4">Founder &amp; Chief Visionary</p>
                                    <p className="text-gray-700 italic mb-4">
                                        "Innovation is not just about technology, it's about reimagining possibilities and creating transformative solutions."
                                    </p>
                                    <p className="text-gray-700 mb-6">
                                        With over 10 years of experience in strategic technology consulting, Alexandra has led digital transformation initiatives for global enterprises, driving innovation and sustainable growth.
                                    </p>
                                    <a href="#" className="inline-block px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                                        Connect on LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* ===== Team Section ===== */}
                        <div className="py-16 px-4 bg-white">
                            <h1 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700">
                                Our Expert Team
                            </h1>

                            <h1 className="text-xl text-center mb-12">
                                Our highly experienced team members <br />
                                come from strong backgrounds and have the <br />
                                business and technical expertise, experience, and commitment.
                            </h1>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                {teamMembers.map((member) => (
                                    <div
                                        key={member.id}
                                        className="bg-white shadow-lg rounded-2xl p-6 text-center border border-green-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                    >
                                        <div className="mb-4">
                                            <img
                                                src={member.img}
                                                alt={member.name}
                                                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-green-200"
                                            />
                                        </div>
                                        <h2 className="text-xl font-semibold text-green-800">{member.name}</h2>
                                        <p className="text-sm text-green-600 mb-4">{member.role}</p>
                                        <p className="text-gray-700 italic">"{member.quote}"</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ===== Features Section ===== */}
                        <section className="relative py-24 bg-[#0a0a1a] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a2a] to-[#1a1a3a] opacity-50 pointer-events-none"></div>
                            <div className="absolute inset-0 opacity-20 pointer-events-none">
                                <div className="absolute w-full h-full bg-[length:40px_40px] bg-grid-white/[0.02]"></div>
                            </div>

                            <div className="max-w-7xl mx-auto relative z-10 px-8">
                                <div className="text-center mb-16">
                                    <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 mb-6">
                                        Core Features
                                    </h2>
                                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                        Empowering your business with comprehensive, innovative technological solutions.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {features.map((feature) => (
                                        <div
                                            key={feature.id}
                                            className="bg-[#1a1a2a] border border-gray-800/50 rounded-2xl p-6 transform transition-all duration-300 hover:border-transparent relative overflow-hidden group"
                                        >
                                            <div
                                                className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl blur-lg`}
                                            ></div>
                                            <div className="relative z-10">
                                                <div className="flex items-center space-x-4 mb-4">
                                                    <div>{feature.icon}</div>
                                                    <h3 className="text-2xl font-semibold text-gray-100">{feature.title}</h3>
                                                </div>
                                                <p className="text-gray-400 text-base mb-4">{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* ===== Services CTA ===== */}
                        <div className="text-center mt-16">
                            <a className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-700 text-white px-12 py-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all">
                                View Our Services
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-arrow-right ml-2"
                                >
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Outlet />
        </>
    );
};

export default About;
