import React from 'react'

const Portfolio = () => {
    return (
        <>
            <div className="py-16 px-4" style={{ opacity: 1 }}>
                <div className="text-center mb-20 mt-8">
                    <h2 className="text-4xl font-bold text-teal-800 mb-4">Take a sneak peek at our work!</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-12">
                        Discover the impactful projects we have worked on. Our portfolio showcases the creativity and expertise behind each one.
                    </p>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-7xl mx-auto mb-24">

                    {/* Case Studies */}
                    <div className="relative overflow-hidden rounded-lg shadow-lg group" style={{ opacity: 1, transform: "none" }}>
                        <img
                            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            alt="Case Studies"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/40 bg-opacity-40 transition duration-300 group-hover:bg-opacity-60"></div>
                        {/* Text above overlay */}
                        <div className="absolute inset-0 flex justify-center items-center z-10">
                            <h3 className="text-white text-4xl font-bold">Case Studies</h3>
                        </div>
                        {/* Hover panel */}
                        <div
                            className="absolute top-0 right-0 w-48 h-full bg-teal-800 bg-opacity-90 p-4 flex items-center z-20 
                                       opacity-0 transform -translate-x-full 
                                       transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0"
                        >
                            <p className="text-white text-xl">
                                Innovative solutions driving meaningful impact across industries and challenges.
                            </p>
                        </div>
                    </div>

                    {/* Blog */}
                    <div className="relative overflow-hidden rounded-lg shadow-lg group" style={{ opacity: 1, transform: "none" }}>
                        <img
                            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            alt="Blog"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-opacity-40 bg-black/40 transition duration-300 group-hover:bg-opacity-60"></div>
                        {/* Text above overlay */}
                        <div className="absolute inset-0 flex justify-center items-center z-10">
                            <h3 className="text-white text-4xl font-bold">Blog</h3>
                        </div>
                        {/* Hover panel */}
                        <div
                            className="absolute top-0 right-0 w-48 h-full bg-teal-800 bg-opacity-90 p-4 flex items-center z-20 
                                       opacity-0 transform -translate-x-full 
                                       transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0"
                        >
                            <p className="text-white text-xl">
                                Insights and perspectives exploring the latest trends in technology and design.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section - Our Approach */}
                <section
                    className="relative py-16 md:py-24 px-4 md:px-8 bg-gray-900 overflow-hidden"
                    style={{ opacity: 1, transform: "none" }}
                >
                    <div className="absolute inset-0 z-0 opacity-50">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-900/40 to-indigo-900/40 mix-blend-overlay"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-dot-white/[0.2] pointer-events-none"></div>
                    </div>
                    <div className="relative z-10 max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 lg:space-x-16">
                        <div
                            className="w-full md:w-1/2 text-center md:text-left space-y-4 md:space-y-6 mt-8 sm:mt-0"
                            style={{ opacity: 1, transform: "none" }}
                        >
                            <div className="bg-teal-600/20 inline-block px-3 py-1 md:px-4 md:py-2 rounded-full">
                                <span className="text-teal-300 font-medium text-xs md:text-sm tracking-wide">Our Approach</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                                Unity Makes Us Stronger
                            </h2>
                            <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
                                By coming together and collaborating, we achieve even the most challenging goals. Our collective strength transforms individual potential into extraordinary results.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                                <button
                                    className="relative overflow-hidden bg-teal-700 text-white font-bold py-3 px-6 rounded-lg 
                                    transform perspective-1000 
                                    hover:shadow-2xl 
                                    transition-all duration-300 
                                    flex items-center justify-center 
                                    group"
                                    tabIndex="0"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-800 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                                    <span className="relative z-10 flex items-center whitespace-nowrap">
                                        <span className="hidden ipad-air:flex ipad-air:flex-col ipad-air:items-center ipad-mini:flex ipad-mini:flex-col ipad-mini:items-center">
                                            <span className="flex items-center">Our Team of</span>
                                            <span>Professionals</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </span>
                                        <span className="ipad-air:hidden ipad-mini:hidden flex items-center">
                                            Our Team of Professionals
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </span>
                                    </span>
                                </button>
                                <div className="flex items-center space-x-2 whitespace-nowrap">
                                    <span className="text-teal-300">★</span>
                                    <span className="text-gray-400 text-sm">Proven Team Collaboration</span>
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-2xl border-4 border-teal-800/50 hover:scale-105 transition-transform duration-300"
                            style={{ opacity: 1, transform: "none" }}
                        >
                            <div className="relative aspect-video md:aspect-square">
                                <img
                                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                    alt="Team Collaboration"
                                    className="w-full h-full object-cover transform transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-teal-900/30 mix-blend-multiply"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section - Our Philosophy */}
                <section
                    className="relative py-16 md:py-24 px-4 md:px-8 bg-gray-950 overflow-hidden"
                    style={{ opacity: 1, transform: "none" }}
                >
                    <div className="absolute inset-0 z-0 opacity-50">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-900/40 to-indigo-900/40 mix-blend-overlay"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-dot-white/[0.2] pointer-events-none"></div>
                    </div>
                    <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 lg:space-x-16">
                        <div
                            className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-2xl border-4 border-indigo-800/50 hover:scale-105 transition-transform duration-300"
                            style={{ opacity: 1, transform: "none" }}
                        >
                            <div className="relative aspect-video md:aspect-square">
                                <img
                                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                    alt="Team Innovation"
                                    className="w-full h-full object-cover transform transition-transform duration-300 "
                                />
                                <div className="absolute inset-0 bg-indigo-900/30 mix-blend-multiply"></div>
                            </div>
                        </div>
                        <div
                            className="w-full md:w-1/2 text-center md:text-right space-y-4 md:space-y-6"
                            style={{ opacity: 1, transform: "none" }}
                        >
                            <div className="bg-indigo-600/20 inline-block px-3 py-1 md:px-4 md:py-2 rounded-full">
                                <span className="text-indigo-300 font-medium text-xs md:text-sm tracking-wide">Our Philosophy</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                                Embracing Uncertainty Sparks Innovation
                            </h2>
                            <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
                                As consultants, we thrive in uncertainty. Our creative process transforms challenges into breakthrough solutions, turning potential obstacles into pathways of innovation and growth.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end space-y-4 sm:space-y-0 sm:space-x-6">
                                <div className="flex items-center space-x-2 whitespace-nowrap">
                                    <span className="text-indigo-300">★</span>
                                    <span className="text-gray-400 text-sm">Innovative Problem Solving</span>
                                </div>
                                <button className="text-indigo-300 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                                    <span>Learn More</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Button */}
                <div className="flex justify-center mt-12">
                    <button className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-teal-700 transition-colors duration-300">
                        Get in Touch
                    </button>
                </div>
            </div>
        </>
    )
}

export default Portfolio
