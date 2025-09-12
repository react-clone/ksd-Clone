import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    const quickLinks = [
        { name: "Home", path: "/home" },
        { name: "Services", path: "/services" },
        { name: "Testimonials", path: "/about/testimonials" },
        { name: "Contact", path: "/contact" },
    ]

    const socialLinks = [
        {
            name: "Facebook",
            url: "https://www.facebook.com",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="lucide lucide-facebook">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
            )
        },
        {
            name: "Twitter",
            url: "https://www.twitter.com",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="lucide lucide-twitter">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
            )
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="lucide lucide-linkedin">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            )
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="lucide lucide-instagram">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
            )
        },
    ]

    return (
        <footer className="bg-teal-800 text-white py-12">
            <div className="container mx-auto grid md:grid-cols-3 gap-8 px-4">
                {/* Brand */}
                <div>
                    <h3 className="text-2xl font-bold mb-4">KSD</h3>
                    <p className="text-gray-300">
                        Empowering businesses through strategic consulting and innovative solutions.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        {quickLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `hover:text-teal-200 ${isActive ? "text-teal-200 font-semibold" : ""}`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
                    <div className="flex space-x-4">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-teal-200"
                            >
                                {social.svg}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Note */}
            <div className="border-t border-teal-700 mt-8 pt-4 text-center">
                <p>© 2025 KSD. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
