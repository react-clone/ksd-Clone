import React from "react";

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            img: "https://picsum.photos/800/400?random=1",
            title: "The Future of AI in Software Development",
            desc: "Exploring how artificial intelligence is transforming the landscape of software engineering and development processes.",
            author: "Anish Pandey",
            date: "June 15, 2024",
        },
        {
            id: 2,
            img: "https://picsum.photos/800/400?random=2",
            title: "Sustainable Design in Modern Web Applications",
            desc: "Innovative approaches to creating eco-friendly and performance-optimized web applications.",
            author: "Emma Rodriguez",
            date: "May 22, 2024",
        },
        {
            id: 3,
            img: "https://picsum.photos/800/400?random=3",
            title: "Scaling Tech Teams Effectively",
            desc: "Best practices for growing engineering teams without compromising on culture and productivity.",
            author: "Emma Rodrigue",
            date: "May 22, 2024",
        },
        {
            id: 4,
            img: "https://picsum.photos/800/400?random=4",
            title: "Cloud-Native Architectures for Startups",
            desc: "How startups can leverage cloud-native solutions to scale rapidly and cost-effectively.",
            author: "Emma Rodriguez",
            date: "May 22, 2024",
        },
    ];

    return (
        <section className="bg-gray-50 py-16 px-4" style={{ opacity: 1 }}>
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-teal-800 mb-4">
                    Insights &amp; Perspectives
                </h2>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <div key={post.id} className="cursor-pointer perspective-1000">
                        <div className="relative z-10 rounded-xl overflow-hidden shadow-lg transition-all duration-500 bg-white/80 hover:scale-105 hover:shadow-2xl">
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={post.img}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-teal-800 mb-3">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{post.desc}</p>

                                {/* Footer */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                                            {/* User Icon */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-user text-teal-700"
                                            >
                                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="12" cy="7" r="4"></circle>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-800">
                                                {post.author}
                                            </p>
                                            <p className="text-xs text-gray-500">{post.date}</p>
                                        </div>
                                    </div>

                                    {/* Arrow Icon */}
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
                                        className="lucide lucide-arrow-right text-teal-600 hover:text-teal-800"
                                    >
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
