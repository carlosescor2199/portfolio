/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

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
      <div className="mb-10 grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ y: -50, opacity: 0 }}
            animate="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: (index + 1) * 0.3 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="flex flex-col items-center"
          >
            <Image src={skill.icon} alt={skill.name} height={100} width={100} className="h-16 w-16" />
            <span className="text-sm font-semibold text-gray-800">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const SKILLS = [
  {
    name: "JavaScript",
    icon: "/images/logos/javascript.svg",
  },
  {
    name: "TypeScript",
    icon: "/images/logos/typescript.svg",
  },
  {
    name: "Node.js",
    icon: "/images/logos/nodejs.svg",
  },
  {
    name: "React",
    icon: "/images/logos/react.svg",
  },
  {
    name: "Next.js",
    icon: "/images/logos/nextjs.svg",
  },
  {
    name: "Angular",
    icon: "/images/logos/angular.svg",
  },
  {
    name: "Vue.js",
    icon: "/images/logos/vuejs.svg",
  },
  {
    name: "Express",
    icon: "/images/logos/expressjs.svg",
  },
  {
    name: "NestJS",
    icon: "/images/logos/nestjs.svg",
  },
  {
    name: "Spring Boot",
    icon: "/images/logos/spring-boot.svg",
  },
  {
    name: "Go",
    icon: "/images/logos/go.svg",
  },
  {
    name: "Python",
    icon: "/images/logos/python.svg",
  },
  {
    name: "MongoDB",
    icon: "/images/logos/mongodb.svg",
  },
  {
    name: "MySQL",
    icon: "/images/logos/mysql.svg",
  },
  {
    name: "PostgreSQL",
    icon: "/images/logos/postgresql.svg",
  },
  {
    name: "Redis",
    icon: "/images/logos/redis.svg",
  },
  {
    name: "Docker",
    icon: "/images/logos/docker.svg",
  },
  {
    name: "Kubernetes",
    icon: "/images/logos/kubernetes.svg",
  },
  {
    name: "AWS",
    icon: "/images/logos/aws.svg",
  },
  {
    name: "Google Cloud Platform",
    icon: "/images/logos/gcp.svg",
  },
];
