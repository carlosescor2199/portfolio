"use client";
import { motion } from "framer-motion";
import { WorkExperience } from "@/interfaces/work-experience";
import moment from "moment";

export const TimelineExperience = ({ items }: { items: WorkExperience[] }) => {
  return (
    <motion.ol
      initial={{ y: 50, opacity: 0 }}
      animate="visible"
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.7 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="relative border-l border-gray-200 dark:border-gray-700"
    >
      {items.length > 0 &&
        items.map((item, index) => (
          <li key={item.title + "-" + item.company} className="mb-10 ml-4">
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, delay: (index + 1) * 0.5 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
            />
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, delay: (index + 1) * 0.3 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {moment(item.start_date).format("LL")}
              </time>
              <span className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"> to </span>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.end_date ? moment(item.end_date).format("LL") : "Present"}
              </time>
              <h3 className="text-lg font-semibold text-blue-400">
                {item.title} - {item.company}
              </h3>
              <div className="mb-4 ml-4 text-base font-normal text-gray-700">{item.description}</div>
            </motion.div>
          </li>
        ))}
    </motion.ol>
  );
};
