export type Certification = {
  title: string;
  issuer: string;
  year: string;
};

export type EducationEntry = {
  degree: string;
  school: string;
  period: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    year: "2026",
  },
  {
    title: "Secure AI/ML-Driven Software Development (LFEL1012)",
    issuer: "The Linux Foundation & OpenSSF",
    year: "2026",
  },
  {
    title: "Developing Secure Software (LFD121)",
    issuer: "The Linux Foundation & OpenSSF",
    year: "2026",
  },
  {
    title: "OWASP Top 10 Security Threats (SKF100)",
    issuer: "The Linux Foundation",
    year: "2026",
  },
];

export const EDUCATION: EducationEntry[] = [
  {
    degree: "Bachelor's degree in Systems Engineering",
    school: "Corporación Universitaria del Caribe CECAR",
    period: "2016 — 2021",
  },
  {
    degree: "Diploma in Software Development",
    school: "Universidad Tecnológica de Pereira",
    period: "2020",
  },
  {
    degree: "Diploma in Basic Programming",
    school: "Universidad Tecnológica de Pereira",
    period: "2020",
  },
  {
    degree: "Diploma in Programming Fundamentals",
    school: "Universidad Tecnológica de Pereira",
    period: "2020",
  },
  {
    degree: "Diploma CCNA Routing and Switching",
    school: "Cisco Networking Academy",
    period: "2019",
  },
];
