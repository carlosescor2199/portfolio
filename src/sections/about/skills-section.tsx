/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";

export function SkillsSection() {
  return (
    <div className="flex flex-col">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate="visible"
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="mb-5 mt-10 text-center text-5xl font-bold text-blue-400"
      >
        Skills
      </motion.h2>
      <div className="mb-10 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ y: -50, opacity: 0 }}
            animate="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: (index + 1) * 0.08 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="flex flex-col gap-2 rounded-lg bg-gray-200 p-5"
          >
            <h3 className="text-start text-base font-semibold text-gray-800">{skill.title}</h3>
            <p className="text-sm">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const SKILLS = [
  {
    title: "Fullstack Development",
    description:
      "Experience working on both frontend and backend using technologies such as React.js, Angular, NextJS, and Node.js.",
  },
  {
    title: "API Integration",
    description:
      "Extensive experience integrating external APIs like DIAN (for electronic invoicing) and FlightAware (for flight data).",
  },
  {
    title: "Frontend Technologies",
    description: "Proficiency in building engaging and functional user interfaces with React, AngularJS, and Next.js.",
  },
  {
    title: "Backend Technologies",
    description: "Backend development using Express, Node.js, NestJS, and Spring Boot.",
  },
  {
    title: "Database Management",
    description: "Managing and optimizing databases such as MongoDB, PostgreSQL, and Redis.",
  },
  {
    title: "AI and Machine Learning Integration",
    description: "Implemented AI-powered features like generative chat systems using OpenAI and LLMs.",
  },
  {
    title: "Data Processing",
    description: "Experience in processing and formatting data for optimal compatibility and usability.",
  },
  {
    title: "Deployment and Infrastructure",
    description: "Deployed applications on platforms like DigitalOcean, ensuring scalability and reliability.",
  },
  {
    title: "Problem-Solving",
    description: "Designed innovative solutions such as routing algorithms based on fuel costs, tolls, and mileage.",
  },
  {
    title: "Project Management",
    description:
      "Collaborated with teams and managed projects to ensure seamless integration and optimal system performance.",
  },
  {
    title: "Mentoring",
    description: "Passionate about guiding emerging tech enthusiasts through the evolving tech landscape.",
  },
  {
    title: "Adaptability",
    description: "Ability to quickly adjust to new technologies and dynamic work environments.",
  },
  {
    title: "Communication",
    description:
      "Skilled at conveying technical ideas clearly in both English and Spanish, enabling effective collaboration.",
  },
  {
    title: "Team Collaboration",
    description: "Proven experience working effectively in multidisciplinary teams to ensure project success.",
  },
  {
    title: "Problem-Solving",
    description: "Proactive and creative approach to identifying and resolving complex challenges efficiently.",
  },
  {
    title: "Attention to Detail",
    description: "Strong attention to technical details, ensuring the delivery of high-quality solutions.",
  },
];
