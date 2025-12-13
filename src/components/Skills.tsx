import { skillCategories } from '../data/portfolio';

const Skills = () => {
    return (
        <section id="skills" className="section-container">
            <div className="max-w-6xl mx-auto w-full">
                <h2 className="section-title">
                    <span className="gradient-text">Skills</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="glass-effect p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-accent-cyan">
                                {category.category}
                            </h3>

                            <div className="grid grid-cols-2 gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="bg-white/5 px-4 py-3 rounded-lg text-center 
                             hover:bg-accent-cyan/20 hover:text-accent-cyan 
                             transition-all duration-300 cursor-default
                             border border-white/5 hover:border-accent-cyan/50"
                                    >
                                        <span className="font-medium text-sm">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
