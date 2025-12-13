export interface PersonalInfo {
    name: string;
    title: string;
    tagline: string;
    email: string;
    github: string;
    linkedin: string;
    resume: string;
}

export interface Skill {
    name: string;
    level?: number;
}

export interface SkillCategory {
    category: string;
    skills: Skill[];
}

export interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    github?: string;
    demo?: string;
    image?: string;
}

export interface Experience {
    id: number;
    role: string;
    company: string;
    duration: string;
    responsibilities: string[];
}

export interface Education {
    id: number;
    degree: string;
    institution: string;
    year: string;
    description?: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}
