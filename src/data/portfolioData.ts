export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  duration: string;
  scoreLabel: string;
  scoreValue: string;
  details?: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level?: string }[];
}

export interface InternshipItem {
  role: string;
  company: string;
  affiliation: string;
  period: string;
  duration: string;
  description: string;
  remarks: string;
  keyLearnings: string[];
}

export interface ProjectItem {
  title: string;
  category: string;
  tagline: string;
  overview: string;
  modules: {
    title: string;
    description: string;
    detectionMethod: string;
  }[];
  technologies: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  issueDate: string;
  credentialFocus: string;
}

export interface LanguageItem {
  language: string;
  skills: ('Read' | 'Write' | 'Speak')[];
  proficiencyLevel: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Gummireddy Hema Dhanusha",
    role: "AI & Data Science Student | UI/UX Designer",
    tagline: "Undergraduate passionate about applying AI concepts, clean engineering, and human-centered design to solve practical real-world problems.",
    email: "hemadhanusha123@gmail.com",
    phone: "+91 9989145280",
    phoneDisplay: "+91 99891 45280",
    linkedin: "https://linkedin.com/in/g-hema-dhanusha",
    defaultGithub: "", // Shown as "Add GitHub link"
    avatarImage: "/src/assets/images/student_avatar_portrait_1791428374300.jpg",
    projectImage: "/src/assets/images/proctoring_project_preview_1791428388228.jpg",
    location: "Tiruchirapalli / Tirupati, India",
    batch: "2023 – 2027",
    status: "Open for Campus Placements & Software Roles"
  },
  about: {
    bio: "Highly motivated Artificial Intelligence and Data Science undergraduate seeking opportunities in the software industry, passionate about applying academic knowledge and hands-on project experience to develop innovative solutions, solve real-world problems, continuously enhance technical expertise, and contribute to organizational growth.",
    highlights: [
      {
        title: "Rigorous Foundation",
        desc: "Solid grasp of computer science fundamentals, data structures, and database management."
      },
      {
        title: "Hands-on AI Application",
        desc: "Practical experience developing computer vision modules for proctoring and real-time inference."
      },
      {
        title: "Continuous Learner",
        desc: "Expanding cross-disciplinary competence across data analytics, modern web interfaces, and UI/UX."
      }
    ]
  },
  education: [
    {
      institution: "Dhanalakshmi Srinivasan University",
      location: "Tiruchirapalli, Tamil Nadu",
      degree: "B.Tech – Artificial Intelligence and Data Science",
      duration: "June 2023 – May 2027",
      scoreLabel: "CGPA",
      scoreValue: "7.93",
      details: [
        "Core study areas: Artificial Intelligence, Data Structures, DBMS, Object-Oriented Programming in Java.",
        "Active technical engagement in engineering coursework and project development."
      ]
    },
    {
      institution: "Sri Chaitanya Junior College",
      location: "Tirupati, Andhra Pradesh",
      degree: "Intermediate",
      duration: "June 2021 – March 2023",
      scoreLabel: "Percentage",
      scoreValue: "73%",
      details: [
        "Higher secondary education with a rigorous focus on Mathematics, Physics, and Chemistry."
      ]
    }
  ] as EducationItem[],
  technicalSkills: [
    {
      title: "Programming & Core",
      description: "Core programming paradigms and algorithms",
      skills: [
        { name: "Java", level: "Core" },
        { name: "Python", level: "Basics" },
        { name: "Data Structures", level: "Basics" },
        { name: "Programming Fundamentals", level: "Foundational" }
      ]
    },
    {
      title: "Web & Markup",
      description: "Foundational front-end structures",
      skills: [
        { name: "HTML", level: "Core" },
        { name: "CSS", level: "Core" }
      ]
    },
    {
      title: "Databases & Storage",
      description: "Relational queries and data models",
      skills: [
        { name: "SQL", level: "Queries" },
        { name: "DBMS", level: "Concepts" },
        { name: "MySQL", level: "Relational" },
        { name: "MongoDB", level: "Document" }
      ]
    },
    {
      title: "Developer Tools",
      description: "Version control and development workflow",
      skills: [
        { name: "Git", level: "Version Control" },
        { name: "VS Code", level: "IDE" },
        { name: "Microsoft PowerPoint", level: "Presentation" }
      ]
    }
  ] as SkillCategory[],
  internship: {
    role: "Artificial Intelligence Intern",
    company: "Jyesta Corporate Entity",
    affiliation: "National Skill Development Corporation (NSDC)",
    period: "February 2026",
    duration: "One month",
    description: "Applied AI concepts through practical training and hands-on projects; strengthened analytical and problem-solving skills with AI-based solutions.",
    remarks: "Outstanding",
    keyLearnings: [
      "Applied foundational artificial intelligence principles directly to structured project problems.",
      "Engaged in hands-on practical training that strengthened analytical reasoning and debugging.",
      "Developed problem-solving workflows for identifying, diagnosing, and solving technical requirements.",
      "Demonstrated consistent execution and received 'Outstanding' evaluation remarks."
    ]
  } as InternshipItem,
  featuredProject: {
    title: "Violation Detection for Online Examination",
    category: "Computer Vision & AI Proctoring System",
    tagline: "An automated exam integrity solution using computer vision to identify proctoring irregularities in real time.",
    overview: "Built using Python, Flask, and Computer Vision modules, this proctoring system continuously inspects a student's webcam feed during online assessments to detect common exam violations without requiring manual continuous human surveillance.",
    technologies: [
      "Python",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
      "Machine Learning",
      "MySQL"
    ],
    modules: [
      {
        title: "Multiple Faces Detection",
        description: "Scans the camera frame for secondary individuals entering the test-taker's workspace.",
        detectionMethod: "Facial landmark and multi-face spatial bounding analysis"
      },
      {
        title: "Absence from Screen",
        description: "Flags when the student steps away, leaves the camera frame, or is completely obscured.",
        detectionMethod: "Frame-by-frame presence tracking and departure interval logging"
      },
      {
        title: "Mobile Phone Usage",
        description: "Identifies handheld mobile devices or smartphones introduced into the visual testing perimeter.",
        detectionMethod: "Object classification focused on handheld electronic devices"
      },
      {
        title: "Abnormal Head Movements",
        description: "Monitors head orientation to recognize persistent side-glances or suspicious off-screen focus.",
        detectionMethod: "Head pose estimation based on pitch, yaw, and roll orientation angles"
      }
    ]
  } as ProjectItem,
  certifications: [
    {
      title: "SEO and SEM Basics",
      issuer: "Naukri",
      issueDate: "July 2026",
      credentialFocus: "Search Engine Optimization, Search Engine Marketing fundamentals & web discoverability principles"
    },
    {
      title: "Introduction to Data Analytics",
      issuer: "Simplilearn",
      issueDate: "July 2026",
      credentialFocus: "Data interpretation, exploratory analytical workflows, statistical concepts & reporting"
    }
  ] as CertificationItem[],
  languages: [
    {
      language: "English",
      skills: ["Read", "Write", "Speak"],
      proficiencyLevel: "Professional Proficiency"
    },
    {
      language: "Telugu",
      skills: ["Read", "Write", "Speak"],
      proficiencyLevel: "Native / Full Proficiency"
    },
    {
      language: "Hindi",
      skills: ["Read", "Write"],
      proficiencyLevel: "Working Proficiency"
    }
  ] as LanguageItem[]
};
