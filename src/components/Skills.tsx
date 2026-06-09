import { skillCategories } from '../data/portfolio';
import {
    SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiHtml5, SiCss3,
    SiTailwindcss, SiBootstrap, SiRedux, SiNodedotjs, SiExpress,
    SiMongodb, SiPostgresql, SiJsonwebtokens, SiSocketdotio,
    SiGooglecloud, SiFirebase, SiNginx, SiGit, SiGithub,
    SiPostman, SiMysql
} from 'react-icons/si';
import { FaDatabase, FaAws, FaNetworkWired, FaCode } from 'react-icons/fa';
import type { IconType } from 'react-icons';

// Map skill names to their respective icons and brand colors
const skillIcons: Record<string, { icon: IconType, color: string }> = {
    "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
    "TypeScript": { icon: SiTypescript, color: "#3178C6" },
    "React.js": { icon: SiReact, color: "#61DAFB" },
    "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
    "HTML5": { icon: SiHtml5, color: "#E34F26" },
    "HTML": { icon: SiHtml5, color: "#E34F26" },
    "CSS3": { icon: SiCss3, color: "#1572B6" },
    "CSS": { icon: SiCss3, color: "#1572B6" },
    "Tailwind": { icon: SiTailwindcss, color: "#06B6D4" },
    "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
    "Bootstrap": { icon: SiBootstrap, color: "#7952B3" },
    "Redux": { icon: SiRedux, color: "#764ABC" },
    "Node.js": { icon: SiNodedotjs, color: "#339933" },
    "Express.js": { icon: SiExpress, color: "#ffffff" },
    "MongoDB": { icon: SiMongodb, color: "#47A248" },
    "PostgreSQL": { icon: SiPostgresql, color: "#4169E1" },
    "MySQL": { icon: SiMysql, color: "#4479A1" },
    "SQL": { icon: SiPostgresql, color: "#336791" }, 
    "JWT": { icon: SiJsonwebtokens, color: "#ffffff" }, 
    "WebSocket": { icon: SiSocketdotio, color: "#ffffff" },
    "AWS EC2": { icon: FaAws, color: "#FF9900" },
    "GCP": { icon: SiGooglecloud, color: "#4285F4" },
    "Firebase": { icon: SiFirebase, color: "#FFCA28" },
    "Nginx": { icon: SiNginx, color: "#009639" },
    "Git": { icon: SiGit, color: "#F05032" },
    "GitHub": { icon: SiGithub, color: "#ffffff" },
    "Git & GitHub": { icon: SiGithub, color: "#ffffff" },
    "Postman": { icon: SiPostman, color: "#FF6C37" },
    "REST APIs": { icon: FaNetworkWired, color: "#00ff9d" },
    "JWT Authentication": { icon: SiJsonwebtokens, color: "#ffffff" },
    "Data Structures & Algorithms": { icon: FaCode, color: "#00ff9d" }
};

const Skills = () => {
    return (
        <section id="skills" className="section-container">
            <div className="max-w-4xl mx-auto w-full px-4">
                <h2 className="section-title">
                    SKILLS
                </h2>

                <div className="space-y-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                            <h3 className="text-xl md:text-2xl text-gray-400 mb-6 font-light border-b border-gray-800/50 pb-2 inline-block">
                                {category.category}
                            </h3>

                            <div className="flex flex-wrap gap-4">
                                {category.skills.map((skill, skillIndex) => {
                                    const IconData = skillIcons[skill.name] || { icon: FaDatabase, color: "#ffffff" };
                                    const Icon = IconData.icon;

                                    return (
                                        <div
                                            key={skillIndex}
                                            className="group flex items-center gap-3 bg-[#111111] border border-white/5 
                                                     px-4 py-2.5 rounded-lg hover:bg-white/5 hover:border-white/10 
                                                     transition-all duration-300 cursor-default"
                                        >
                                            <div className="p-1 rounded bg-white/5 group-hover:bg-white/10 transition-colors">
                                                <Icon
                                                    className="w-5 h-5"
                                                    style={{ color: IconData.color === "#000000" && '#ffffff' ? '#ffffff' : IconData.color }}
                                                />
                                            </div>
                                            <span className="font-medium text-sm text-gray-300 group-hover:text-white transition-colors">
                                                {skill.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
