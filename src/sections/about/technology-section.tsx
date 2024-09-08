/* eslint-disable @next/next/no-img-element */
"use client";
import {
  AngularIcon,
  AWSIcon,
  DockerIcon,
  ExpressIcon,
  GCPIcon,
  GoIcon,
  JavaScriptIcon,
  KubernetesIcon,
  MongoDBIcon,
  MySQLIcon,
  NestJSIcon,
  NextJSIcon,
  NodeJSIcon,
  PostgreSQLIcon,
  PythonIcon,
  ReactIcon,
  RedisIcon,
  SpringBootIcon,
  TypeScriptIcon,
  VueJSIcon,
} from "@/components/common";
import { motion } from "framer-motion";

export function TechnologySection() {
  return (
    <div className="flex flex-col">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate="visible"
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="mb-10 mt-10 text-center text-5xl font-bold text-blue-400"
      >
        Technologies
      </motion.h2>
      <div className="mb-10 grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
        {TECHNOLOGIES.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ y: -50, opacity: 0 }}
            animate="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: (index + 1) * 0.08 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="flex flex-col items-center gap-y-3"
          >
            {skill.icon}
            <span className="text-sm font-semibold text-foreground">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const TECHNOLOGIES = [
  {
    name: "JavaScript",
    icon: <JavaScriptIcon className="h-16 w-16" />,
  },
  {
    name: "TypeScript",
    icon: <TypeScriptIcon className="h-16 w-16" />,
  },
  {
    name: "Node.js",
    icon: <NodeJSIcon className="h-16 w-16" />,
  },
  {
    name: "React",
    icon: <ReactIcon className="h-16 w-16" />,
  },
  {
    name: "Next.js",
    icon: <NextJSIcon className="h-16 w-16" />,
  },
  {
    name: "Angular",
    icon: <AngularIcon className="h-16 w-16" />,
  },
  {
    name: "Vue.js",
    icon: <VueJSIcon className="h-16 w-16" />,
  },
  {
    name: "Express",
    icon: <ExpressIcon className="h-16 w-16 fill-foreground" />,
  },
  {
    name: "NestJS",
    icon: <NestJSIcon className="h-16 w-16" />,
  },
  {
    name: "Spring Boot",
    icon: <SpringBootIcon className="h-16 w-16" />,
  },
  {
    name: "Go",
    icon: <GoIcon className="h-16 w-16" />,
  },
  {
    name: "Python",
    icon: <PythonIcon className="h-16 w-16" />,
  },
  {
    name: "MongoDB",
    icon: <MongoDBIcon className="h-16 w-16" />,
  },
  {
    name: "MySQL",
    icon: <MySQLIcon className="h-16 w-16 fill-foreground" />,
  },
  {
    name: "PostgreSQL",
    icon: <PostgreSQLIcon className="h-16 w-16" />,
  },
  {
    name: "Redis",
    icon: <RedisIcon className="h-16 w-16" />,
  },
  {
    name: "Docker",
    icon: <DockerIcon className="h-16 w-16" />,
  },
  {
    name: "Kubernetes",
    icon: <KubernetesIcon className="h-16 w-16" />,
  },
  {
    name: "Amazon Web Services",
    icon: <AWSIcon className="h-16 w-16 fill-foreground" />,
  },
  {
    name: "Google Cloud Platform",
    icon: <GCPIcon className="h-16 w-16" />,
  },
];
