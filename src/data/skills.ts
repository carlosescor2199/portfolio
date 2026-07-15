export type SkillGroup = {
  title: string;
  description: string;
};

export const SKILLS: SkillGroup[] = [
  {
    title: "Frontend",
    description: "React.js, Next.js, Angular, TypeScript, JavaScript (ES6+)",
  },
  {
    title: "Backend",
    description: "NestJS, Express, Node.js, Spring Boot, GraphQL, Python",
  },
  {
    title: "Databases",
    description: "PostgreSQL, MongoDB, Redis",
  },
  {
    title: "Cloud & DevOps",
    description: "AWS (Elastic Beanstalk, Fargate, RDS, S3, CloudWatch), Docker, GitHub Actions, CI/CD, SonarQube",
  },
  {
    title: "Testing",
    description: "Jest, Cypress",
  },
  {
    title: "AI & LLMs",
    description:
      "Claude Code (Skills, MCP, agent harnesses, persistent memory plugins), GitHub Copilot, LLM/OpenAI integration, prompt engineering, RAG, AI-assisted SDD and TDD",
  },
  {
    title: "Secure Development",
    description: "OWASP Top 10, Secure Development Lifecycle (SDLC), Secure AI/ML Development",
  },
  {
    title: "Soft Skills",
    description: "Communication, Teamwork, Problem-solving, Adaptability, Project Management, Mentoring",
  },
];
