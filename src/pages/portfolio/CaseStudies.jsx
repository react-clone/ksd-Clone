import React from "react";

const CaseStudies = () => {
    const caseStudies = [
        {
            id: 1,
            img: "https://picsum.photos/600/400?random=1",
            title: "Revolutionizing Retail with AI and Cloud Solutions",
            category: "Digital Transformation",
            alt: "Digital Transformation for Retail Giant",
        },
        {
            id: 2,
            img: "https://picsum.photos/600/400?random=2",
            title: "From MVP to Market Leader",
            category: "Fintech Innovation",
            alt: "Scaling Fintech Startup",
        },
        // 👉 Add more case studies here if needed
    ];

    return (
        <div className="py-16 px-4 bg-gray-100" style={{ opacity: 1 }}>
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-6xl font-bold text-teal-800 mb-4">
                    See What Makes KSD Unique
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Explore how we've helped businesses transform and achieve breakthrough results.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {caseStudies.map((study) => (
                    <div
                        key={study.id}
                        className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                        <img
                            src={study.img}
                            alt={study.alt}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-teal-800 mb-2">
                                {study.title}
                            </h3>
                            <p className="text-gray-600">{study.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CaseStudies;
