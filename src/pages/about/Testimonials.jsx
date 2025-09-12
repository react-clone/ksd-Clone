import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Testimonials = () => {
    const [current, setCurrent] = useState(0)

    const testimonials = [
        {
            quote:
                '"A game-changing partnership that helped us streamline our operations and embrace innovation."',
            name: 'Sarah Rodriguez',
            title: 'COO at GlobalReach Enterprises',
            initial: 'S',
        },
        {
            quote:
                '"Working with them increased our conversion rate and helped us scale without losing quality."',
            name: 'Mark Thompson',
            title: 'Founder at BrightWave',
            initial: 'M',
        },
        {
            quote:
                '"Their team delivered ahead of schedule and the results exceeded expectations."',
            name: 'Aisha Khan',
            title: 'Head of Growth at NovaLabs',
            initial: 'A',
        },
    ]

    const prev = () =>
        setCurrent((i) => (i - 1 + testimonials.length) % testimonials.length)
    const next = () => setCurrent((i) => (i + 1) % testimonials.length)

    return (
        <>
            <div className="py-16 px-4 bg-gray-100" style={{ opacity: 1 }}>
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-teal-800 mb-4">
                        Client Success Stories
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Real impact, real transformation. Hear from businesses we've helped
                        succeed.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
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
                                    className="lucide lucide-quote text-teal-500 mx-auto mb-4"
                                >
                                    <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                                    <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                                </svg>

                                <p className="text-xl text-gray-700 italic mb-6">
                                    {testimonials[current].quote}
                                </p>

                                <div className="flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-teal-200 flex items-center justify-center mr-4">
                                        {testimonials[current].initial}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-teal-800">
                                            {testimonials[current].name}
                                        </h4>
                                        <p className="text-gray-600">
                                            {testimonials[current].title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex justify-center mt-8 space-x-4">
                        <button
                            className="bg-teal-500 text-white p-2 rounded-full"
                            tabIndex={0}
                            onClick={prev}
                        >
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
                                className="lucide lucide-chevron-left"
                            >
                                <path d="m15 18-6-6 6-6"></path>
                            </svg>
                        </button>
                        <button
                            className="bg-teal-500 text-white p-2 rounded-full"
                            tabIndex={0}
                            style={{ transform: 'none' }}
                            onClick={next}
                        >
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
                                className="lucide lucide-chevron-right"
                            >
                                <path d="m9 18 6-6-6-6"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials
