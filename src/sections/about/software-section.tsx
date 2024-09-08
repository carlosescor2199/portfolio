/* eslint-disable @next/next/no-img-element */
"use client";
import {
  AdobePhotoshopIcon,
  AdobePremiereIcon,
  DavinciResolveIcon,
  ExcelIcon,
  IntellijIcon,
  JiraIcon,
  PyCharmIcon,
  SlackIcon,
  VSCodeIcon,
} from "@/components/common";
import { motion } from "framer-motion";

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

const SOFTWARES = [
  {
    name: "Visual Studio Code",
    icon: <VSCodeIcon className="h-16 w-16" />,
  },
  {
    name: "IntelliJ IDEA",
    icon: <IntellijIcon className="h-16 w-16" />,
  },
  {
    name: "Jira",
    icon: <JiraIcon className="h-16 w-16" />,
  },
  {
    name: "Slack",
    icon: <SlackIcon className="h-16 w-16" />,
  },
  {
    name: "Davinchi Resolve",
    icon: <DavinciResolveIcon className="h-16 w-16" />,
  },
  {
    name: "Adobe Premiere",
    icon: <AdobePremiereIcon className="h-16 w-16" />,
  },
  {
    name: "Adobe Photoshop",
    icon: <AdobePhotoshopIcon className="h-16 w-16" />,
  },
  {
    name: "Excel",
    icon: <ExcelIcon className="h-16 w-16" />,
  },
  {
    name: "Pycharm",
    icon: <PyCharmIcon className="h-16 w-16 fill-foreground text-background" />,
  },
];
