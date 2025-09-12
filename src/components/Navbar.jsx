import React, { useEffect, useState } from 'react'
import ButtonGroup from './ButtonGroup'
import HamburgerButton from './HamburgerButton'
import { Home, Briefcase, BookOpen, Folder, MessageCircle } from "lucide-react";


const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1023);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navItems = [
        { label: "Home", path: '/home', hasDropdown: false, icon: <Home size={18} /> },
        {
            label: "Services",
            path: "/services",
            hasDropdown: true,
            icon: <Briefcase size={18} />,
            submenu: [
                { label: "Technology Consulting", path: "/services/TechnologyConsulting" },
                { label: "Business Consulting", path: "/services/BusinessConsulting" },
            ],
        },
        {
            label: "About",
            path: "/about",
            hasDropdown: true,
            icon: <BookOpen size={18} />,
            submenu: [
                { label: "Careers", path: "/about/careers" },
                { label: "Testimonials", path: "/about/testimonials" },
                { label: "FAQs", path: "/about/faqs" },
            ],
        },
        {
            label: "Portfolio",
            path: "/portfolio",
            hasDropdown: true,
            icon: <Folder size={18} />,
            submenu: [
                { label: "Case Studies", path: "/portfolio/case-studies" },
                { label: "Blog", path: "/portfolio/blog" },
            ],
        },
        { label: "Contact", path: '/contact', hasDropdown: false, icon: <MessageCircle size={18} /> },
    ];

    return (
        <nav className='bg-white shadow-md sticky top-0 z-50' style={{ opacity: 1 }}>
            <div className='container mx-auto flex justify-between items-center p-4 lg:px-6'>
                <div className='text-xl lg:text-2xl font-bold text-teal-800'>
                    KSD
                </div>

                {!isMobile && (
                    <ButtonGroup navItems={navItems} isMobile={isMobile} activeItem="Contact" />
                )}

                {isMobile && (
                    <HamburgerButton
                        isMobile={isMobile}
                        isOpen={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                )}
            </div>

            {isMobile && menuOpen && (
                <div className="px-4 pb-4">
                    <ButtonGroup navItems={navItems} isMobile={isMobile} activeItem="Contact" />
                </div>
            )}
        </nav>
    )
}

export default Navbar
