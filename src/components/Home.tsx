import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolio';
import TechScene from './TechScene';

const Home = () => {
    const [typedText, setTypedText] = useState('');
    const fullText = personalInfo.title;

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setTypedText((prev) => {
                if (index < fullText.length) {
                    index++;
                    return fullText.slice(0, index);
                }
                clearInterval(intervalId);
                return prev;
            });
        }, 100); // Typing speed

        return () => clearInterval(intervalId);
    }, [fullText]);

    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">


            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">

                <div className="flex-1 text-center md:text-left z-20">
                    <p className="text-lg sm:text-xl md:text-2xl text-accent-cyan font-medium mb-4 animate-fade-in tracking-wide">
                        Hi, I'm
                    </p>

                    {/* Name container with nowrap to enforce single line */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 animate-fade-in text-light-cream tracking-tight leading-tight whitespace-nowrap">
                        {personalInfo.name}
                    </h1>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-gray-400 min-h-[1.5em] flex items-center justify-center md:justify-start gap-2">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-teal">
                            {typedText}
                        </span>
                        <span className="animate-pulse text-accent-cyan">|</span>
                    </h2>

                    <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-10 text-gray-300 leading-relaxed font-light">
                        {personalInfo.tagline}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                        <a
                            href={personalInfo.resume}
                            download
                            className="px-8 py-3 bg-white/80 backdrop-blur-sm text-primary-dark font-semibold rounded-md transition-all duration-300 hover:bg-accent-cyan hover:text-white hover:shadow-lg hover:shadow-accent-cyan/30 inline-block min-w-[160px]"
                            aria-label="Download Resume"
                        >
                            Download CV
                        </a>

                        <button
                            onClick={scrollToContact}
                            className="btn-secondary min-w-[160px]"
                            aria-label="Contact Me"
                        >
                            Contact Me
                        </button>
                    </div>
                </div>

                {/* Tech Constellation Scene */}
                <div className="hidden md:block flex-1 h-[500px]">
                    <TechScene />
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="flex flex-col items-center gap-2 text-gray-500 text-sm tracking-widest uppercase">
                    <span>Scroll</span>
                    <svg
                        className="w-6 h-6 text-accent-cyan"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Home;
