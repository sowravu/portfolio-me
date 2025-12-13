import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolio';

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
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 animate-fade-in text-accent-cyan">
                    {personalInfo.name}
                </h1>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 text-gray-200 min-h-[1.5em]">
                    {typedText}
                    <span className="animate-pulse">|</span>
                </h2>

                <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-300 leading-relaxed">
                    {personalInfo.tagline}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href={personalInfo.resume}
                        download
                        className="btn-primary inline-block"
                        aria-label="Download Resume"
                    >
                        Download Resume
                    </a>

                    <button
                        onClick={scrollToContact}
                        className="btn-secondary"
                        aria-label="Contact Me"
                    >
                        Contact Me
                    </button>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
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
