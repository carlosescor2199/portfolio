export type ExperienceEntry = {
  company: string;
  title: string;
  period: string;
  bullets: string[];
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "Ottomoto",
    title: "FullStack Software Engineer",
    period: "FEB 2025 — PRESENT",
    bullets: [
      "Generate and deploy new features through AI-assisted development with Claude Code — using custom Skills, MCP servers, agent harnesses, and persistent memory plugins — under Spec-Driven Development (SDD) and TDD.",
      "Integrated multiple external client APIs to send credit applications through the platform, expanding product distribution channels.",
      "Design and build microservices in NestJS with clean architecture, authentication, messaging, file handling, and advanced business logic.",
      "Build dynamic React interfaces with complex forms, conditional validations, and efficient API consumption, supported by modular and reusable components.",
      "Implement automated testing with Jest and Cypress, optimize coverage in SonarQube, and manage CI/CD with GitHub Actions.",
      "Deploy and maintain applications on AWS (Elastic Beanstalk, Fargate, RDS, S3, CloudWatch).",
    ],
  },
  {
    company: "MissionHires",
    title: "FullStack Software Engineer",
    period: "JUN 2024 — AUG 2024",
    bullets: [
      "Developed and maintained an AI-driven talent acquisition application with Next.js, Node.js, and MongoDB.",
      "Built user interfaces and backend functionalities to implement and enhance product features.",
      "Collaborated with the team to ensure seamless integration and optimal performance.",
    ],
  },
  {
    company: "WingMates",
    title: "FullStack Software Engineer",
    period: "APR 2023 — JUN 2024",
    bullets: [
      "Built an AI-powered chat assistant that books flights, hotels, and cars end-to-end within the app — selecting and confirming options through the Duffel API — with real-time flight status and rebooking capabilities.",
      "Developed the booking application with Next.js, Node.js, MongoDB, FlightAware, and Duffel, contributing to both frontend and backend.",
    ],
  },
  {
    company: "SmartHop",
    title: "FullStack Software Engineer",
    period: "AUG 2021 — JAN 2023",
    bullets: [
      "Built an optimal route calculator for US freight trucking that predicted the best route by weighing distance, road type, fuel cost per state, tolls, taxes, and weather.",
      "Integrated external logistics APIs with Smarthop's API, processing and normalizing data into a proprietary format to ensure compatibility and usability.",
      "Delivered full-stack features using React, Express, Node.js, Python, Redis, and MongoDB.",
    ],
  },
  {
    company: "SoftBusiness",
    title: "FullStack Software Developer",
    period: "DEC 2020 — AUG 2021",
    bullets: [
      "Delivered the inventory and electronic invoicing modules at 100% for an ERP system, integrating with the DIAN (Colombian tax authority) API.",
      "Built the frontend with AngularJS and backend services with Spring Boot, backed by PostgreSQL.",
      "Deployed on DigitalOcean, ensuring reliable and scalable access.",
    ],
  },
];
