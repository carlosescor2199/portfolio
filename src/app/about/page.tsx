"use client";
import Timeline from "@/components/timeline/Timeline";
import { WorkExperience } from "@/interfaces/workExperience";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

export default function page() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.5,
        },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { delay: 0.7, duration: 0.6, ease: "backInOut" },
        },
      }}
      className={cn("p-24 lg:grid-cols-2")}
    >
      <h2 className="mb-5 text-3xl font-bold text-blue-400">Work Experience</h2>
      <Timeline items={WORK_EXPERIENCE} />
    </motion.div>
  );
}

const WORK_EXPERIENCE: WorkExperience[] = [
  {
    title: "FullStack Engineer",
    description: (
      <ul className="list-disc">
        <li>Develop and maintain an AI-driven talent acquisition application using Next.js, Node.js, and MongoDB.</li>
        <li>Build user interfaces and backend functionalities to implement and enhance features.</li>
        <li>Collaborate with the team to ensure seamless integration and optimal performance.</li>
      </ul>
    ),
    company: "MissionHires",
    start_date: "2024-05-11",
    end_date: "2024-08-19",
  },
  {
    title: "FullStack Engineer",
    description: (
      <ul className="list-disc">
        <li>
          Contributed to the development of a flight and hotel booking application using Next.js, Node.js, MongoDB,
          FlightAware, and Duffel.
        </li>
        <li>
          Integrated a generative chat feature powered by OpenAI and LLMs to assist passengers with rebooking and
          provide real-time information on airports and flight status.
        </li>
        <li>
          Collaborated with the team to design and implement both frontend and backend functionalities, enhancing user
          experience and system performance.
        </li>
      </ul>
    ),
    company: "WingMates",
    start_date: "2023-04-09",
    end_date: "2024-05-11",
  },
  {
    title: "FullStack Engineer",
    description: (
      <ul className="list-disc">
        <li>Worked with the integrations team to connect external APIs with Smarthop&apos;s API.</li>
        <li>Processed and formatted data into a proprietary format to ensure compatibility and usability.</li>
        <li>
          Developed routing algorithms to suggest optimal transport routes based on road type, fuel cost, tolls, and
          mileage.
        </li>
        <li>
          Utilized technologies including React, Express, Node.js, Python, Redis, and MongoDB to build and enhance
          application functionality.
        </li>
      </ul>
    ),
    company: "Smarthop",
    start_date: "2021-08-09",
    end_date: "2023-01-24",
  },
  {
    title: "FullStack Engineer",
    description: (
      <ul className="list-disc">
        <li>
          Developed the electronic invoicing module for an ERP system, integrating with the DIAN (National Tax and
          Customs Directorate of Colombia) API.
        </li>
        <li>Utilized AngularJS for frontend development and Spring Boot for backend services.</li>
        <li>Managed data storage and retrieval using PostgreSQL.</li>
        <li>Deployed the application on DigitalOcean, ensuring reliable and scalable access.</li>
      </ul>
    ),
    company: "Softbussiness",
    start_date: "2020-12-11",
    end_date: "2021-08-09",
  },
];
