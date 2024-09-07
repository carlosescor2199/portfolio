/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function SoftwareSection() {
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
        Knowledge in software such as:
      </motion.h2>
      <div className="mb-10 grid grid-cols-2 gap-y-10 sm:grid-cols-3">
        {SOFTWARES.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ y: -50, opacity: 0 }}
            animate="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: (index + 1) * 0.08 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="flex flex-col items-center gap-y-2"
          >
            <Image src={skill.icon} alt={skill.name} height={100} width={100} className="h-16 w-16" />
            <span className="text-sm font-semibold text-foreground">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const SOFTWARES = [
  {
    name: "Visual Studio Code",
    icon: "/images/logos/vscode.svg",
  },
  {
    name: "IntelliJ IDEA",
    icon: "/images/logos/intellij-idea.svg",
  },
  {
    name: "Jira",
    icon: "/images/logos/jira.svg",
  },
  {
    name: "Slack",
    icon: "/images/logos/slack.svg",
  },
  {
    name: "Davinchi Resolve",
    icon: "/images/logos/davinci.svg",
  },
  {
    name: "Adobe Premiere",
    icon: "/images/logos/premiere.svg",
  },
  {
    name: "Adobe Photoshop",
    icon: "/images/logos/photoshop.svg",
  },
  {
    name: "Excel",
    icon: "/images/logos/excel.svg",
  },
  {
    name: "Pycharm",
    icon: "/images/logos/pycharm.svg",
  },
];
