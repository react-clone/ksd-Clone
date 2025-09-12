import React from 'react';

const Careers = () => {
    return (
        <>
            <section className="py-16 px-4 bg-gray-50" style={{ opacity: 1 }}>
                <div className="max-w-4xl mx-auto mb-16 text-center">
                    <h2 className="text-4xl font-bold text-teal-800 mb-6">KSD Careers</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Hoping to jumpstart your career and head down the path to success? Our Cambridge Careers are the perfect place to start. We love hearing from bright individuals with unique ideas and new perspectives. Think you could see yourself fitting in with the culture here at our Cambridge office? Read more below to learn about our hiring process and discover our open positions.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
                    {/* Step 01 */}
                    <div className="relative overflow-hidden rounded-xl shadow-lg p-6 transition-all duration-300 bg-white text-gray-800 hover:shadow-2xl hover:scale-105">
                        <div className="relative z-10">
                            <div className="flex items-center mb-4">
                                <span className="text-3xl font-bold mr-4 opacity-50">01.</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-teal-600">
                                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                    <path d="m9 11 3 3L22 4"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Apply</h3>
                            <p className="transition-all duration-300 text-gray-600">
                                Once you apply for a career at KSD, you can expect to hear back from a recruiter within a few business days.
                            </p>
                        </div>
                        <div className="absolute inset-0 z-0 transition-all duration-300 opacity-0"></div>
                    </div>

                    {/* Step 02 */}
                    <div className="relative overflow-hidden rounded-xl shadow-lg p-6 transition-all duration-300 bg-white text-gray-800 hover:shadow-2xl hover:scale-105">
                        <div className="relative z-10">
                            <div className="flex items-center mb-4">
                                <span className="text-3xl font-bold mr-4 opacity-50">02.</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-teal-600">
                                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                    <path d="m9 11 3 3L22 4"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Interview</h3>
                            <p className="transition-all duration-300 text-gray-600">
                                Meet the team! It's important to us that you speak with the right people when you are in the office.
                            </p>
                        </div>
                        <div className="absolute inset-0 z-0 transition-all duration-300 opacity-0"></div>
                    </div>

                    {/* Step 03 */}
                    <div className="relative overflow-hidden rounded-xl shadow-lg p-6 transition-all duration-300 bg-white text-gray-800 hover:shadow-2xl hover:scale-105">
                        <div className="relative z-10">
                            <div className="flex items-center mb-4">
                                <span className="text-3xl font-bold mr-4 opacity-50">03.</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-teal-600">
                                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                    <path d="m9 11 3 3L22 4"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Join Our Team</h3>
                            <p className="transition-all duration-300 text-gray-600">
                                Expect your positive recruiting experience to carry over to your time at KSD!
                            </p>
                        </div>
                        <div className="absolute inset-0 z-0 transition-all duration-300 opacity-0"></div>
                    </div>
                </div>

                {/* Open Positions */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-teal-800 mb-4">Open Positions</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover exciting opportunities to grow, innovate, and make an impact.</p>
                </div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-20">
                    {/* Position Cards */}
                    {[
                        {
                            title: "Senior Software Engineer",
                            dept: "Engineering",
                            location: "Remote",
                            desc: "Drive innovation and build scalable solutions for our core platform."
                        },
                        {
                            title: "Product Designer",
                            dept: "Design",
                            location: "San Francisco, CA",
                            desc: "Create intuitive and delightful user experiences that solve complex problems."
                        },
                        {
                            title: "Customer Success Manager",
                            dept: "Sales",
                            location: "Hybrid",
                            desc: "Build and maintain strong relationships with our key enterprise clients."
                        },
                        {
                            title: "Data Scientist",
                            dept: "Analytics",
                            location: "New York, NY",
                            desc: "Leverage advanced analytics to drive strategic business insights."
                        }
                    ].map((job, i) => (
                        <div key={i} className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 bg-white text-gray-800 hover:shadow-2xl hover:scale-105">
                            <div className="p-6 relative z-10">
                                <div className="flex justify-between items-center mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                                        <div className="flex items-center space-x-2 text-sm opacity-75">
                                            <span>{job.dept}</span>
                                            <span>{job.location}</span>
                                        </div>
                                    </div>
                                    <div style={{ opacity: 0, transform: "translateX(20px)" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right text-teal-600">
                                            <path d="M5 12h14"></path>
                                            <path d="m12 5 7 7-7 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <p className="transition-all duration-300 text-gray-600">{job.desc}</p>
                            </div>
                            <div className="absolute inset-0 z-0 transition-all duration-300 opacity-0"></div>
                        </div>
                    ))}
                </div>

                {/* Team Culture Section */}
                <section className="bg-gray-900 text-white py-16 px-4 overflow-hidden" style={{ opacity: 1 }}>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-teal-300 mb-4">Our Team Culture</h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">We believe in creating an environment where innovation, creativity, and personal growth thrive.</p>
                    </div>
                    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                        {/* Team cards simplified for hover effect */}
                        {[{
                            title: "Continuous Learning",
                            color: "bg-blue-600",
                            desc: "Quarterly learning stipend and dedicated time for personal development.",
                            icon: "zap"
                        }, {
                            title: "Competitive Compensation",
                            color: "bg-purple-600",
                            desc: "Above-market salaries and performance-based bonuses.",
                            icon: "credit-card"
                        }, {
                            title: "Wellness Program",
                            color: "bg-green-600",
                            desc: "Mental health support, gym memberships, and wellness workshops.",
                            icon: "coffee"
                        }, {
                            title: "Remote Flexibility",
                            color: "bg-indigo-600",
                            desc: "Hybrid work model with full remote options and home office setup.",
                            icon: "headphones"
                        }, {
                            title: "Global Opportunities",
                            color: "bg-teal-600",
                            desc: "International projects and cross-team collaboration.",
                            icon: "globe"
                        }, {
                            title: "Inclusive Culture",
                            color: "bg-pink-600",
                            desc: "Diverse, supportive environment with employee resource groups.",
                            icon: "smile"
                        }].map((card, i) => (
                            <div key={i} className="relative perspective-1000">
                                <div className={`relative z-10 p-6 rounded-xl transition-all duration-500 bg-gray-800/50 hover:scale-105`}>
                                    <div className="flex items-center mb-4 space-x-4">
                                        <div className={`${card.color} w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-${card.icon}`}></svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-teal-300">{card.title}</h3>
                                    </div>
                                    <p className="text-gray-400">{card.desc}</p>
                                </div>
                                <div className="absolute inset-0 rounded-xl opacity-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20 transition-all duration-500" style={{ transform: "translateZ(-100px)", filter: "blur(60px)" }}></div>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </>
    );
};

export default Careers;
