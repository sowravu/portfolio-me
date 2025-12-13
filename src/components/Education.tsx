import { education } from '../data/portfolio';

const Education = () => {
    return (
        <section id="education" className="section-container">
            <div className="max-w-4xl mx-auto w-full">
                <h2 className="section-title">
                    <span className="gradient-text">Education</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {education.map((edu) => (
                        <div
                            key={edu.id}
                            className="glass-effect p-6 rounded-xl hover:bg-white/10 transition-all duration-300
                       hover:shadow-xl hover:shadow-accent-cyan/10"
                        >
                            {/* Icon */}
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center">
                                    <svg
                                        className="w-6 h-6 text-accent-cyan"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-1">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-accent-cyan font-semibold mb-2">
                                        {edu.institution}
                                    </p>
                                    <p className="text-gray-400 text-sm mb-3">
                                        {edu.year}
                                    </p>
                                    {edu.description && (
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            {edu.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
