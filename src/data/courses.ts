export type CourseCategory =
  | "Software Development"
  | "Machine Learning & AI"
  | "Software Testing"
  | "Cloud Computing"
  | "Data Professionals"
  | "Operating Systems";

export interface Course {
  id: string;
  title: string;
  category: CourseCategory;
  duration: string;
  level: string;
  description: string;
  technologies: string[];
  popular?: boolean;
}

export const categories = [
  {
    name: "Software Development",
    count: 7,
    description: "Build modern applications with industry-relevant development skills.",
    icon: "Code2",
  },
  {
    name: "Machine Learning & AI",
    count: 9,
    description: "Develop skills for the AI-driven technology landscape.",
    icon: "BrainCircuit",
  },
  {
    name: "Software Testing",
    count: 3,
    description: "Build strong foundations in modern software quality engineering.",
    icon: "ShieldCheck",
  },
  {
    name: "Cloud Computing",
    count: 6,
    description: "Learn cloud infrastructure, DevOps and architecture.",
    icon: "Cloud",
  },
  {
    name: "Data Professionals",
    count: 4,
    description: "Master SQL, BI, analytics and modern data platforms.",
    icon: "Database",
  },
  {
    name: "Operating Systems",
    count: 1,
    description: "Build strong Linux and infrastructure fundamentals.",
    icon: "Terminal",
  },
];

export const courses: Course[] = [
  {
    id: "core-java",
    title: "Core Java Mastery",
    category: "Software Development",
    duration: "8 Weeks",
    level: "Beginner",
    description:
      "Build a strong foundation in Java programming and object-oriented development.",
    technologies: ["Java", "OOP", "Collections", "Exception Handling"],
  },
  {
    id: "advanced-java",
    title: "Advanced Java Mastery",
    category: "Software Development",
    duration: "8 Weeks",
    level: "Intermediate",
    description:
      "Go deeper into enterprise Java development and modern application architecture.",
    technologies: ["Java", "JDBC", "Spring", "REST"],
  },
  {
    id: "react",
    title: "ReactJS Mastery",
    category: "Software Development",
    duration: "6 Weeks",
    level: "Beginner / Intermediate",
    description:
      "Learn to build modern, responsive web applications with React.",
    technologies: ["React", "TypeScript", "Vite", "REST APIs"],
  },
  {
    id: "machine-learning",
    title: "Machine Learning Mastery",
    category: "Machine Learning & AI",
    duration: "10 Weeks",
    level: "Intermediate",
    description:
      "Learn machine learning concepts through practical projects and real-world datasets.",
    technologies: ["Python", "NumPy", "Pandas", "Scikit-learn"],
  },
  {
    id: "data-science",
    title: "Data Science Mastery",
    category: "Machine Learning & AI",
    duration: "10 Weeks",
    level: "Beginner",
    description:
      "Develop practical skills in data analysis, visualization and machine learning.",
    technologies: ["Python", "Pandas", "SQL", "Machine Learning"],
  },
  {
    id: "generative-ai",
    title: "GenAI Prompt Engineering Mastery",
    category: "Machine Learning & AI",
    duration: "6 Weeks",
    level: "Beginner",
    description:
      "Learn practical generative AI concepts, prompting and AI-assisted workflows.",
    technologies: ["GenAI", "LLMs", "Prompt Engineering", "AI Tools"],
    popular: true,
  },
  {
    id: "selenium",
    title: "Selenium Mastery",
    category: "Software Testing",
    duration: "6 Weeks",
    level: "Beginner",
    description:
      "Build practical browser automation and software testing skills.",
    technologies: ["Selenium", "Java", "TestNG", "Automation"],
  },
  {
    id: "azure-devops",
    title: "Azure DevOps Certification Training",
    category: "Cloud Computing",
    duration: "4–6 Weeks",
    level: "Beginner / Intermediate",
    description:
      "Learn modern CI/CD, source control, infrastructure and DevOps workflows.",
    technologies: ["Azure DevOps", "Git", "CI/CD", "Terraform"],
    popular: true,
  },
  {
    id: "azure-data-engineer",
    title: "Azure Data Engineer Certification Training",
    category: "Cloud Computing",
    duration: "10 Weeks",
    level: "Beginner",
    description:
      "Build practical data engineering skills on the Azure platform.",
    technologies: ["Azure", "Data Factory", "Databricks", "SQL"],
    popular: true,
  },
  {
    id: "devops",
    title: "DevOps Certification Training",
    category: "Cloud Computing",
    duration: "10 Weeks",
    level: "Beginner",
    description:
      "Learn the tools and practices behind modern DevOps engineering.",
    technologies: ["Docker", "Kubernetes", "CI/CD", "Terraform"],
    popular: true,
  },
  {
    id: "azure-admin",
    title: "Azure Admin Mastery",
    category: "Cloud Computing",
    duration: "10 Weeks",
    level: "Beginner",
    description:
      "Learn the fundamentals of Azure administration and cloud infrastructure.",
    technologies: ["Azure", "Networking", "VMs", "Identity"],
  },
  {
    id: "sql",
    title: "SQL Mastery",
    category: "Data Professionals",
    duration: "6 Weeks",
    level: "Beginner",
    description:
      "Develop strong SQL skills for application development and data analysis.",
    technologies: ["SQL", "PostgreSQL", "Queries", "Database Design"],
  },
  {
    id: "tableau",
    title: "Tableau Mastery",
    category: "Data Professionals",
    duration: "6 Weeks",
    level: "Beginner",
    description:
      "Create dashboards and communicate insights using modern data visualization.",
    technologies: ["Tableau", "BI", "Dashboards", "Analytics"],
  },
  {
    id: "linux",
    title: "Linux Mastery",
    category: "Operating Systems",
    duration: "5 Weeks",
    level: "Beginner",
    description:
      "Build practical Linux skills for development, cloud and DevOps environments.",
    technologies: ["Linux", "Shell", "Networking", "Administration"],
  },
];

export const getCourse = (id: string) =>
  courses.find((course) => course.id === id);