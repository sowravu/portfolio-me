import { experiences } from '../data/portfolio';

const Experience = () => {
    return (
        <section id="experience" className="section-container">
            <div className="max-w-4xl mx-auto w-full">
                <h2 className="section-title">
                    Work <span className="gradient-text">Experience</span>
                </h2>

                <div className="space-y-8">
                    {experiences.map((exp) => (
                        <div
                            key={exp.id}
                            className="glass-effect p-6 rounded-xl hover:bg-white/10 transition-all duration-300
                       border-l-4 border-accent-cyan"
                        >
                            {/* Header */}
                            <div className="mb-4">
                                <h3 className="text-2xl font-bold text-white mb-1">
                                    {exp.role}
                                </h3>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                    <p className="text-accent-cyan font-semibold">
                                        {exp.company}
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        {exp.duration}
                                    </p>
                                </div>
                            </div>

                            {/* Responsibilities */}
                            <ul className="space-y-2">
                                {exp.responsibilities.map((responsibility, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-3 text-gray-300"
                                    >
                                        <svg
                                            className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-sm leading-relaxed">{responsibility}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
