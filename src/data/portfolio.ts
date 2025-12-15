import type { PersonalInfo, SkillCategory, Project, Experience, Education } from '../types';

export const personalInfo: PersonalInfo = {
    name: "Sowravu Suresh",
    title: "Full Stack Developer",
    tagline: "Building digital products that hold strong under scale, shaped by logic, curiosity, and continuous improvement.",
    email: "sowravuusuresh@gmail.com",
    github: "https://github.com/sowravu",
    linkedin: "https://www.linkedin.com/in/sowravu-suresh-5349aa306/",
    twitter: "https://x.com/sowravu_suresh",
    phone: "+919074984765",
    location: "India, Kerala",
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
            { name: "TypeScript" }
        ]
    },
    {
        category: "Frontend",
        skills: [
            { name: "React.js" },
            { name: "Next.js" },
            { name: "HTML5" },
            { name: "CSS3" },
            { name: "Tailwind" },
            { name: "Bootstrap" },
            { name: "Redux" }
        ]
    },
    {
        category: "Backend",
        skills: [
            { name: "Node.js" },
            { name: "Express.js" },
            { name: "MongoDB" },
            { name: "SQL" },
            { name: "JWT" },
            { name: "WebSocket" }
        ]
    },
    {
        category: "Cloud & DevOps",
        skills: [
            { name: "AWS EC2" },
            { name: "GCP" },
            { name: "Firebase" },
            { name: "Nginx" },
            { name: "Git" },
            { name: "GitHub" }
        ]
    }
];

export const projects: Project[] = [
    {
        id: 1,
        title: "DryDelicious",
        description: "A comprehensive e-commerce platform for premium dry fruits featuring secure payments, inventory tracking, and advanced user management.",
        tech: ["Node.js", "Express", "MongoDB", "EJS", "Razorpay"],
        features: [
            "Razorpay payment gateway integration",
            "Real-time stock and cart management",
            "Comprehensive admin dashboard for user and order management",
            "Discount system with coupon codes",
            "Return request handling and wallet integration",
            "Advanced product filtering and sorting",
            "User profile management with address book"
        ],
        // Using a placeholder image relevant to e-commerce/food
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop",
        github: "https://github.com/sowravu/drydelicious", // Assuming this pattern based on user's github
        // demo: "https://drydelicious.com" // Commented out as not provided
    },
    {
        id: 2,
        title: "User Management System",
        description: "A secure user management application with role-based access control, featuring a complete admin dashboard for user operations and JWT-based authentication.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Redux", "JWT", "Axios"],
        features: [
            "Admin dashboard: Create, Edit, Delete, Block/Unblock users",
            "Secure JWT authentication with access/refresh tokens",
            "Axios interceptors for centralized API error handling",
            "Redux Toolkit for scalable state management",
            "Protected routes based on verification status",
            "Real-time state updates and UI feedback"
        ],
        image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2070&auto=format&fit=crop",
        github: "https://github.com/sowravu/user-management-system"
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
