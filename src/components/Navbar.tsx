import { useState, useEffect } from 'react';

interface NavbarProps {
    activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Filtered sections to match the requested design
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-max max-w-[95vw] sm:max-w-[90vw]">
            <nav
                className={`
                    flex items-center gap-1 sm:gap-2 p-1 sm:p-1.5 rounded-full 
                    bg-black/80 backdrop-blur-md border border-white/10 shadow-2xl
                    transition-all duration-300 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
                    ${isScrolled ? 'shadow-white/5' : ''}
                `}
            >
                {sections.map((section) => (
                    <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className={`
                            px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap
                            ${activeSection === section
                                ? 'bg-accent-cyan text-black shadow-lg shadow-accent-cyan/20'
                                : 'text-gray-400 hover:text-white hover:bg-white/10'
                            }
                        `}
                        aria-label={`Navigate to ${section}`}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                ))}
            </nav>
        </div>
    );
};

export default Navbar;
