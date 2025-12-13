import { about } from '../data/portfolio';

const About = () => {
    return (
        <section id="about" className="section-container">
            <div className="max-w-4xl mx-auto">
                <h2 className="section-title">
                    About <span className="gradient-text">Me</span>
                </h2>

                <div className="space-y-6 text-lg leading-relaxed">
                    <p className="text-gray-300">
                        {about.introduction}
                    </p>

                    <p className="text-gray-300">
                        {about.focus}
                    </p>

                    <div className="mt-8">
                        <h3 className="text-2xl font-semibold mb-4 text-accent-cyan">Core Strengths</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {about.strengths.map((strength, index) => (
                                <li
                                    key={index}
                                    className="flex items-start space-x-3 glass-effect p-4 rounded-lg hover:bg-white/10 transition-all"
                                >
                                    <svg
                                        className="w-6 h-6 text-accent-cyan flex-shrink-0 mt-0.5"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-200">{strength}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
