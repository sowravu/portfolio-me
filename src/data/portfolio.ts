import type { PersonalInfo, SkillCategory, Project, Experience, Education } from '../types';

export const personalInfo: PersonalInfo = {
    name: "Sowravu Suresh",
    title: "Full Stack Developer",
    tagline: "Building digital products that hold strong under scale, shaped by logic, curiosity, and continuous improvement.",
    email: "sowravuusuresh@gmail.com",
    github: "https://github.com/sowravu",
    linkedin: "https://www.linkedin.com/in/sowravu/",
    twitter: "https://x.com/sowravu_suresh",
    phone: "+919074984765",
    location: "India, Kerala",
    resume: "/Sowravu Suresh  - CV.pdf"
};

export const about = {
    introduction: `I'm a passionate Full Stack Developer specializing in Node.js, Express.js, React, and Next.js. I have hands-on experience building scalable, responsive, and user-friendly web applications.`,

    focus: `My current focus is on building robust REST APIs, secure authentication systems, and optimized databases. I love writing clean, maintainable code and solving real-world problems.`,

    strengths: [
        "Full-Stack Web Development (MERN/PERN)",
        "REST API Development & Integration",
        "Clean, Maintainable Code Architecture",
        "Problem Solving via Data Structures & Algorithms"
    ]
};

export const skillCategories: SkillCategory[] = [
    {
        category: "Languages",
        skills: [
            { name: "JavaScript" },
            { name: "TypeScript" },
            { name: "HTML" },
            { name: "CSS" }
        ]
    },
    {
        category: "Frontend",
        skills: [
            { name: "React.js" },
            { name: "Next.js" },
            { name: "Tailwind CSS" },
            { name: "Bootstrap" }
        ]
    },
    {
        category: "Backend & Databases",
        skills: [
            { name: "Node.js" },
            { name: "Express.js" },
            { name: "MongoDB" },
            { name: "PostgreSQL" },
            { name: "MySQL" },
            { name: "SQL" }
        ]
    },
    {
        category: "Tools & Concepts",
        skills: [
            { name: "Git & GitHub" },
            { name: "Postman" },
            { name: "REST APIs" },
            { name: "JWT Authentication" },
            { name: "Data Structures & Algorithms" }
        ]
    }
];

export const projects: Project[] = [
    {
        id: 1,
        title: "Tech Blog Application",
        description: "A full-stack blogging platform built with Next.js and React 19 allowing users to read, write, and interact with blog posts in a clean, responsive, and animated environment.",
        tech: ["Next.js", "React 19", "Tailwind CSS", "Framer Motion", "JWT", "Cloudinary"],
        features: [
            "Built a full-stack blogging platform with complete CRUD functionality for blog posts",
            "Implemented secure authentication using JWT and bcrypt",
            "Integrated Cloudinary for image uploads and media handling",
            "Developed commenting system and admin-based user moderation",
            "Designed responsive and animated UI using Tailwind CSS and Framer Motion"
        ],
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
        github: "https://github.com/sowravu/blog-app",
        demo: "https://techblog.sowravuu.live/"
    },
    {
        id: 2,
        title: "DryDelicious",
        description: "A comprehensive e-commerce platform for premium dry fruits featuring secure payments, inventory tracking, and advanced user management.",
        tech: ["Node.js", "Express.js", "MongoDB", "HTML", "CSS", "Bootstrap", "Razorpay"],
        features: [
            "Developed a full-featured e-commerce platform for selling dry fruits",
            "Implemented product catalog, search, and filtering functionality",
            "Built authentication, cart, and order management system",
            "Designed responsive UI for seamless experience across devices",
            "Integrated Razorpay payment gateway with wallet and return handling"
        ],
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop",
        github: "https://github.com/sowravu/dry-delicious",
        demo: "https://drydelicious.sowravuu.live/"
    },
    {
        id: 3,
        title: "User Management System",
        description: "A secure user management application with role-based access control, featuring a complete admin dashboard for user operations and JWT-based authentication.",
        tech: ["React", "Node.js", "Express.js", "MongoDB", "Axios", "JWT"],
        features: [
            "Built a full-stack application for managing users with CRUD operations",
            "Developed secure REST APIs and integrated the frontend using Axios",
            "Designed clean UI using reusable React components",
            "Secure JWT authentication with access/refresh token rotation"
        ],
        image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2070&auto=format&fit=crop",
        github: "https://github.com/sowravu/user-management-system"
    },
    {
        id: 4,
        title: "Portfolio Website",
        description: "A sleek, responsive, and animated personal portfolio showcasing developer projects and skills with performance optimization.",
        tech: ["HTML", "CSS", "JavaScript", "Vite", "Three.js"],
        features: [
            "Designed and deployed personal portfolio showcasing projects and skills",
            "Focused on clean UI, responsiveness, and performance optimization",
            "Interactive background animations for an engaging user experience"
        ],
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop",
        github: "https://github.com/sowravu/portfolio",
        demo: "https://sowravuu.live/"
    }
];

export const experiences: Experience[] = [
    {
        id: 1,
        role: "Upskilling Program – Full Stack Web Development",
        company: "Brototype, Kochi",
        duration: "Mar 2024 - Present",
        responsibilities: [
            "Currently undergoing intensive full-stack development training with hands-on project experience",
            "Built and integrated RESTful APIs using Node.js and Express.js to handle server-side logic and data flow",
            "Utilized MongoDB and PostgreSQL for scalable and efficient database management",
            "Developed responsive and dynamic user interfaces using React, HTML, CSS, Bootstrap, and JavaScript",
            "Strengthened problem-solving skills through Data Structures and Algorithms (DSA)",
            "Completed multiple real-world projects including e-commerce and full-stack applications"
        ]
    }
];

export const education: Education[] = [
    {
        id: 1,
        degree: "Bachelor of Commerce (B.Com)",
        institution: "Mahatma Gandhi University, Kerala",
        year: "2018 - 2021",
        description: "Graduated with a focus on commerce, accounting, and business fundamentals."
    }
];
