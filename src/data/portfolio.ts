import type { PersonalInfo, SkillCategory, Project, Experience, Education } from '../types';

export const personalInfo: PersonalInfo = {
    name: "Sowravu Suresh",
    title: "Full Stack Developer",
    tagline: "The midscope Rambling at turpe possessional he since tolle odder ré assocites Utility.",
    email: "john.doe@example.com",
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    resume: "/resume.pdf"
};

export const about = {
    introduction: `I'm a passionate Full Stack Developer with expertise in building modern, scalable web applications. 
  I love turning complex problems into simple, beautiful, and intuitive solutions.`,

    focus: `My current focus is on React, TypeScript, and Node.js ecosystems, creating responsive and 
  accessible user experiences that make a difference.`,

    strengths: [
        "Problem-solving and analytical thinking",
        "Clean code and best practices",
        "Continuous learning and adaptation",
        "Team collaboration and communication"
    ]
};

export const skillCategories: SkillCategory[] = [
    {
        category: "Languages",
        skills: [
            { name: "JavaScript" },
            { name: "TypeScript" },
            { name: "Python" },
            { name: "Java" },
            { name: "HTML5" },
            { name: "CSS3" }
        ]
    },
    {
        category: "Frameworks",
        skills: [
            { name: "React" },
            { name: "Next.js" },
            { name: "Node.js" },
            { name: "Express" },
            { name: "Tailwind CSS" },
            { name: "Vue.js" }
        ]
    },
    {
        category: "Tools & Technologies",
        skills: [
            { name: "Git & GitHub" },
            { name: "Docker" },
            { name: "AWS" },
            { name: "MongoDB" },
            { name: "PostgreSQL" },
            { name: "Redis" }
        ]
    },
    {
        category: "Other",
        skills: [
            { name: "RESTful APIs" },
            { name: "GraphQL" },
            { name: "CI/CD" },
            { name: "Agile/Scrum" },
            { name: "Testing (Jest, Cypress)" },
            { name: "Responsive Design" }
        ]
    }
];

export const projects: Project[] = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
        tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
        github: "https://github.com/johndoe/ecommerce-platform",
        demo: "https://ecommerce-demo.com"
    },
    {
        id: 2,
        title: "Real-Time Chat Application",
        description: "WebSocket-based chat app with rooms, private messaging, and file sharing capabilities.",
        tech: ["React", "Socket.io", "Express", "Redis", "TypeScript"],
        github: "https://github.com/johndoe/chat-app",
        demo: "https://chat-demo.com"
    },
    {
        id: 3,
        title: "Project Management Tool",
        description: "Collaborative project management tool with task tracking, team collaboration, and analytics.",
        tech: ["Next.js", "PostgreSQL", "Prisma", "TypeScript", "Tailwind CSS"],
        github: "https://github.com/johndoe/project-tool",
        demo: "https://projects-demo.com"
    },
    {
        id: 4,
        title: "AI Content Generator",
        description: "AI-powered content generation tool using OpenAI API with templates and customization options.",
        tech: ["React", "OpenAI API", "Node.js", "MongoDB"],
        github: "https://github.com/johndoe/ai-content",
    },
    {
        id: 5,
        title: "Weather Dashboard",
        description: "Interactive weather dashboard with forecasts, maps, and weather alerts for multiple locations.",
        tech: ["Vue.js", "Weather API", "Chart.js", "Tailwind CSS"],
        github: "https://github.com/johndoe/weather-dashboard",
        demo: "https://weather-demo.com"
    },
    {
        id: 6,
        title: "Fitness Tracking App",
        description: "Mobile-first fitness app with workout tracking, progress charts, and social features.",
        tech: ["React", "Firebase", "Chart.js", "PWA"],
        github: "https://github.com/johndoe/fitness-tracker",
        demo: "https://fitness-demo.com"
    }
];

export const experiences: Experience[] = [
    {
        id: 1,
        role: "Senior Full Stack Developer",
        company: "Tech Innovations Inc.",
        duration: "Jan 2022 - Present",
        responsibilities: [
            "Lead development of microservices architecture serving 100K+ users",
            "Mentored junior developers and conducted code reviews",
            "Implemented CI/CD pipelines reducing deployment time by 60%",
            "Architected and developed RESTful APIs and GraphQL endpoints"
        ]
    },
    {
        id: 2,
        role: "Full Stack Developer",
        company: "Digital Solutions Ltd.",
        duration: "Jun 2020 - Dec 2021",
        responsibilities: [
            "Developed and maintained multiple client-facing web applications",
            "Collaborated with UX/UI designers to implement responsive designs",
            "Optimized application performance resulting in 40% faster load times",
            "Integrated third-party APIs and payment gateways"
        ]
    },
    {
        id: 3,
        role: "Frontend Developer",
        company: "StartUp Hub",
        duration: "Jan 2019 - May 2020",
        responsibilities: [
            "Built responsive single-page applications using React",
            "Implemented state management solutions with Redux",
            "Wrote comprehensive unit and integration tests",
            "Participated in agile development processes and daily standups"
        ]
    }
];

export const education: Education[] = [
    {
        id: 1,
        degree: "B.Sc. Computer Science",
        institution: "University of Technology",
        year: "2015 - 2019",
        description: "Graduated with honors, specialization in Software Engineering"
    },
    {
        id: 2,
        degree: "Full Stack Web Development Bootcamp",
        institution: "Code Academy",
        year: "2018",
        description: "Intensive 12-week program covering modern web technologies"
    }
];
