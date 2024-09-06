"use client";
import { TimelineEducation } from "@/components/timeline";
import { motion } from "framer-motion";

export function EducationSection() {
  return (
    <div>
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate="visible"
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="mb-5 mt-10 text-center text-5xl font-bold text-blue-400"
      >
        Education
      </motion.h2>
      <TimelineEducation items={EDUCATION} />
    </div>
  );
}

const EDUCATION = [
  {
    degree: "Bachelor's degree in Systems Engineering",
    school: "Corporación Universitaria del Caribe CECAR",
    start_date: "2016-01-30",
    end_date: "2021-12-16",
  },
  {
    degree: "Diploma in Software Development",
    school: "Universidad Tecnológica de Pereira",
    start_date: "2020-11-30",
    end_date: "2020-12-30",
  },
  {
    degree: "Diploma in Basic Programming",
    school: "Universidad Tecnológica de Pereira",
    start_date: "2020-10-30",
    end_date: "2020-11-30",
  },
  {
    degree: "Diploma in Programming Fundamentals",
    school: "Universidad Tecnológica de Pereira",
    start_date: "2020-09-30",
    end_date: "2020-10-30",
  },
  {
    degree: "Diploma CCNA Routing and Switching",
    school: "Cisco Networking Academy",
    start_date: "2019-06-01",
    end_date: "2019-11-15",
  },
];
