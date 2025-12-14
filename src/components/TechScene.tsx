import { FaReact, FaGithub, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiNextdotjs } from 'react-icons/si';

const TechScene = () => {
    // All icons use the accent green color
    const greenColor = '#00ff9d';

    const icons = [
        {
            Icon: FaReact,
            position: 'top-[20%] right-[30%]',
            delay: '0s',
            size: 'text-6xl md:text-7xl'
        },
        {
            Icon: SiTypescript,
            position: 'top-[35%] right-[15%]',
            delay: '1s',
            size: 'text-5xl md:text-6xl'
        },
        {
            Icon: SiMongodb,
            position: 'bottom-[25%] right-[25%]',
            delay: '2s',
            size: 'text-5xl md:text-6xl'
        },
        {
            Icon: SiNextdotjs,
            position: 'bottom-[35%] right-[45%]',
            delay: '3s',
            size: 'text-5xl md:text-6xl'
        },
        {
            Icon: FaNodeJs,
            position: 'top-[30%] right-[55%]',
            delay: '1.5s',
            size: 'text-5xl md:text-6xl'
        },
        {
            Icon: FaGithub,
            position: 'bottom-[15%] right-[35%]',
            delay: '2.5s',
            size: 'text-4xl md:text-5xl'
        }
    ];

    return (
        <div className="relative w-full h-[500px] hidden md:block select-none pointer-events-none">
            {/* Center decorative element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-48 h-48 bg-accent-cyan/10 rounded-full blur-3xl animate-pulse" />
                <div className="w-24 h-24 border border-accent-cyan/20 rounded-full animate-spin-slow" />
            </div>

            {icons.map(({ Icon, position, delay, size }, index) => (
                <div
                    key={index}
                    // Added transparency (opacity-50) and kept hover effect
                    className={`absolute ${position} animate-float opacity-50 hover:opacity-100 transition-opacity duration-300`}
                    style={{
                        animationDelay: delay,
                        filter: `drop-shadow(0 0 5px ${greenColor}20)`
                    }}
                >
                    <div className="relative group">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-accent-cyan/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <Icon
                            className={`${size} transform hover:scale-110 transition-transform duration-300`}
                            style={{ color: greenColor }}
                        />
                    </div>
                </div>
            ))}

            {/* Connecting lines (lighter and tighter) */}
            <svg className="absolute inset-0 w-full h-full opacity-10" style={{ zIndex: -1 }}>
                <defs>
                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#00ff9d" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
                <path d="M 350 150 Q 450 250 550 200" stroke="url(#line-gradient)" strokeWidth="1" fill="none" className="animate-pulse" />
                <path d="M 250 250 Q 350 350 450 300" stroke="url(#line-gradient)" strokeWidth="1" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }} />
            </svg>
        </div>
    );
};

export default TechScene;
