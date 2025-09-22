import { BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const experience = [
    {
        company: "BlueFive Tecnologias",
        location: "Brazil - São Paulo, SP",
        type: "Home Office",
        role: "Software Engineer Jr",
        duration: "Jan 2022 - Dez 2023",
        description: "Fullstack system development. UML modeling of use cases and information flow in the system. Unit testing of the system’s endpoints.",
        achievements: "Development of an electronic ticketing system for public transportation, launched in 2023."
    },
    {
        company: "Ambev",
        location: "Brazil - Volta Redonda, RJ",
        type: "Full Time",
        role: "Monitoring of Distribution Processes",
        duration: "Jan 2024 - Jan 2025",
        description: "Digitization of controls/processes within logistics and warehouse management. Control and management of operational time KPIs. Control and management of product losses and damages. Daily delivery operation closure and report creation.",
        achievements: "Reduced two critical KPIs (Average Release Time and % of Losses and Damages per delivery) by creating a new process flow for vehicle release and damage control through automatic verification of outbound checks/pallet validation and automation of communication between drivers and monitoring."
    },
    {
        company: "Nissan Motor Company",
        location: "Brazil - Resende, RJ",
        type: "Hybrid",
        role: "NPW Innovation",
        duration: "Feb 2025 - Present",
        description: "Digitization of processes on the production line with industrial/process engineering. Development of solutions for shop floor management and control. Design of structuring and Industry 4.0 projects, including funding acquisition, ROI analysis, kickoffs, and stakeholder engagement. Creation of Power Platform solutions in partnership with Nissan Mexico. Participation in the Automotive Cluster in the Industry 4.0 and Innovation areas, developing projects with other automakers and coordinating benchmarks/visits. Representative of Brazil in Nissan’s global innovation and digitalization benchmark (Americas, UK, China, Japan, and Mexico).",
        achievements: "Automation of the training flow for shop floor leadership; Creation of BI reports for critical production KPIs with automated distribution; Development of a defect and diverted-vehicles management system for repair; Design of a computer vision application for factory safety; Co-development of a new AI-based absenteeism forecasting technology; Automation of production sequencing for doors on the assembly line; Co-development of OEE calculation automation with industrial engineering; Co-participation in a structuring project for full production line digitalization with government funding."
    },
];

export const projects = [
    {
        name: "EasyPass",
        company: "BlueFive Tecnologias",
        role: "Direct Developer",
        description: "A comprehensive electronic ticketing system for public transportation, developed using React for the frontend and Node.js/.Net/Fastify for the backend. The system includes features such as user authentication, ticket purchasing, and real-time tracking of bus locations.",
        technologies: ["React", "Node.js", "Fastify", ".Net", "MS SQL Server"],
        skills: ["Fullstack Development", "UML Modeling", "Unit Testing", "API Development"],
    },
    {
        name: "Tracking System",
        company: "Ambev",
        role: "Direct Developer",
        description: "A tracking system for logistics and distribution processes, developed using React for the frontend and Node.js for the backend with Firebase. The system includes features such as real-time tracking of deliveries, route optimization, and automated reporting.",
        technologies: ["React", "Node.js", "Firebase"],
        skills: ["Fullstack Development", "UML Modeling", "Unit Testing", "API Development", "Process Optimization"],
    },
    {
        name: "Route Mapping Spreadsheet",
        company: "Ambev",
        role: "Direct Developer",
        description: "A spreadsheet tool for mapping delivery routes and optimizing logistics processes. Developed using Excel and VBA, the tool includes features such as automated data entry, real-time collaboration, and matching between types of trucks and types of routes.",
        technologies: ["Excel", "VBA"],
        skills: ["Spreadsheet Development", "Process Automation", "Data Integration"],
    },
    {
        name: "Repair System",
        company: "Nissan Motor Company",
        role: "Direct Developer",
        description: "A power platform system for managing vehicle repairs and maintenance processes. Developed using Power Platform (Power Apps, Power Automate and Power BI), Sharepoint, the tool includes features such as historical tracking of repairs, automated notifications, and real-time reporting.",
        technologies: ["Power Platform", "Sharepoint"],
        skills: ["Power Platform Development", "Process Automation"],
    },
    {
        name: "Training System",
        company: "Nissan Motor Company",
        role: "Project Head",
        description: "Digitalization process of registration and control of training for shop floor leadership. Developed with Startup. The role for this project was analysis of the process, development of the solution, and implementation with all stakeholders.",
        technologies: [],
        skills: ["Process Analysis", "Stakeholder Management", "Digital Transformation", "Project Management"],
    },
    {
        name: "Production Sequencing Method",
        company: "Nissan Motor Company",
        role: "Project Head",
        description: "Digitalization process of production sequencing for body shop production. The solution was a spreadsheet with VBA macros to automate the sequencing of vehicles for door assembly on the production line. The role for this project was direct development, analysis of the process, development of the solution, and implementation with all stakeholders.",
        technologies: ["Excel", "VBA", "Power BI"],
        skills: ["Process Analysis", "Stakeholder Management", "Digital Transformation", "Project Management", "Spreadsheet Development", "Data Integration"],
    },
    {
        name: "Production Sequencing Method",
        company: "Nissan Motor Company",
        role: "Project Head",
        description: "Digitalization process of production sequencing for body shop production. The solution was a spreadsheet with VBA macros to automate the sequencing of vehicles for door assembly on the production line. The role for this project was direct development, analysis of the process, development of the solution, and implementation with all stakeholders.",
        technologies: ["Excel", "VBA", "Power BI"],
        skills: ["Process Analysis", "Stakeholder Management", "Digital Transformation", "Project Management", "Spreadsheet Development", "Data Integration"],
    },
    {
        name: "Absenteeism Forecasting",
        company: "Nissan Motor Company",
        role: "Project Support",
        description: "Participation on creating the new method for absenteeism forecasting for shop floor employees. The solution was a system based on AI and machine learning to predict absenteeism with high accuracy. The role for this project was analysis of the process and support for implementation.",
        technologies: ["Python", "AI", "Machine Learning", "Power BI"],
        skills: ["Process Analysis", "Stakeholder Management", "Digital Transformation", "Project Management", "Data Science"],
    },
    {
        name: "System for Analyzing on the Job Checks",
        company: "Nissan Motor Company",
        role: "Project Support",
        description: "Supported the creation of a system for analyzing on-the-job checks for shop floor employees with Global Function IT, translated the system, and mapped the Brazilian processes to apply use cases in the system.",
        technologies: [],
        skills: ["Process Analysis", "Stakeholder Management", "Digital Transformation", "Project Management", "Translation"],
    },
    {
        name: "System for Analyzing on the Job Checks",
        company: "Nissan Motor Company",
        role: "Project Support",
        description: "Supported the creation of a system for analyzing on-the-job checks for shop floor employees with Global Function IT, translated the system, and mapped the Brazilian processes to apply use cases in the system.",
        technologies: [],
        skills: ["Process Analysis", "Stakeholder Management", "Digital Transformation", "Project Management", "Translation"],
    },
    {
        name: "Calculation of OEE Automation",
        company: "Nissan Motor Company",
        role: "Project Head",
        description: "Together with the maintenance engineering team, I led and designed the project for automating OEE calculation within the Genesis64 system, analyzing the process from the line stoppage being sent to the PLC, SQL Server receiving the data, and the industrial engineering team receiving the reports to calculate OEE.",
        technologies: ["SQL Server", "Genesis64", "Power Query", "Excel", "VBA"],
        skills: ["Process Analysis", "Stakeholder Management", "Digital Transformation", "Project Management", "Data Integration", "Spreadsheet Development"],
    },
    {
        name: "Automatization Headcount Calculation",
        company: "Nissan Motor Company",
        role: "Direct Developer",
        description: "Creation of an automated workflow using Power Platform for automatic headcount tracking and asset checks across all production shops, based on the annual strategic headcount plan.",
        technologies: ["Power Platform", "Sharepoint", "Power BI", "Excel", "VBA"],
        skills: ["Process Analysis", "Stakeholder Management", "Digital Transformation", "Project Management", "Data Integration", "Spreadsheet Development", "Power Platform Development"],
    },
    {
        name: "Vision System for Safety",
        company: "Nissan Motor Company",
        role: "Project Head",
        description: "Supported the creation of a computer vision system to monitor safety compliance on the production line, including the use of personal protective equipment (PPE) and adherence to safety protocols.",
        technologies: [],
        skills: ["Process Analysis", "Stakeholder Management", "Digital Transformation", "Project Management", "Computer Vision", "AI"],
    },
];

export const education = [

    {
        degree: "Technical Degree in Web Programming",
        institution: "Escola Técnica Profissionalizante Amaury César Vieira (FAETEC)",
        duration: "2021 - 2023",
    }, {
        degree: "B.S. in Software Engineering",
        institution: "Centro Universitário de Barra Mansa (UBM)",
        duration: "2024 - 2027",
    }
];

export const selfProjects = [
    {
        name: "R&D Connect",
        description: "A platform for connecting businesses and universities. Built using Next.js, the platform matches projects submitted by companies with students specialized in the relevant field.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Prisma", "PostgreSQL"],
        skills: ["Fullstack Development", "UI/UX Design", "Database Management", "API Development"],
    },
    {
        name: "Ethical Hacker",
        description: "A service for ethical hacking and cybersecurity assessments. Doing penetration testing and vulnerability assessments for their systems.",
        technologies: [],
        skills: ["Ethical Hacking", "Penetration Testing", "Vulnerability Assessment", "Cybersecurity"],
    },
]

export const qualifications = [
    "Programming in Arduino - FAETEC (200h) - Completed in 2022",
    "Entrepreneurship and Business - Haze Shift (6h) - Completed in 2024",
    "Lean Manufacturing - Udemy (10h) - Completed in 2025",
    "V-Fast (Yellow Belt) - Nissan Brasil (8h) - Completed in 2025",
    "Power Platform - Nissan México (16h) - Completed in 2025",
    "English - Private Tutor - Currently Studying",
]

export const links = [
    { name: "Linkedin", url: "https://www.linkedin.com/in/almeid00/", icon: FaLinkedin },
    { name: "Github", url: "https://github.com/RafaelAlmeida00/", icon: FaGithub },
    { name: "Github2", url: "https://github.com/RafaelAlmeid00/", icon: FaGithub },
    { name: "WhatsApp", url: "https://api.whatsapp.com/send?phone=5524999980064&text=Hello%2C%20I%20saw%20your%20portfolio%20page.", icon: BsWhatsapp },
     { name: "X / Twitter", url: "https://x.com/Rafaelnnovation", icon: BsTwitterX },
];

export const skills = [
    { category: "Front-end", skills: ["React", "Next.js", "TailwindCSS", "Bootstrap", "Angular"] },
    { category: "Back-end", skills: ["Node.js", "Express.js", "Nest.js", "GraphQL", "TypeORM", "Prisma", "FastAPI", "Django", "Laravel", "Fastify"] },
    { category: "eCommerce", skills: ["Wake", "VTEX", "Shopify", "Scriban", "Nuvemshop", "WordPress", "Wish"] },
    { category: "Databases", skills: ["MongoDB", "PostgreSQL", "Redis", "MSSQL", "MySQL"] },
    { category: "Cloud & DevOps", skills: ["AWS", "GCP", "Firebase", "Docker", "CI/CD Pipelines", "Supabase"] },
    { category: "Power Platform", skills: ["Power Apps", "Power Automate", "Power Pages", "Dataverse", "VBA", "Libre Office Script", "Power BI"] },
    { category: "Mobile", skills: ["Flutter", "Flutter Flow", "React Native"] },
    { category: "Others", skills: ["Agile/Scrum", "TDD", "Git", "DDD", "Ports and Adapters Architecture (Hexagonal)"] },
]
