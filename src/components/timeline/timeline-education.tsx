import { Education } from "@/interfaces/education";
import { motion } from "framer-motion";
import moment from "moment";

export function TimelineEducation({ items }: { items: Education[] }) {
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
          <li key={item.degree + "-" + item.school} className="mb-10 ml-4">
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, delay: (index + 1) * 0.7 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
            />
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, delay: (index + 1) * 0.7 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              <h3 className="text-lg font-semibold text-blue-400">{item.degree}</h3>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {moment(item.start_date).year()}
              </time>
              <span className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"> to </span>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.end_date ? moment(item.end_date).year() : "Present"}
              </time>
              <span className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {" "}
                | {item.school}{" "}
              </span>
            </motion.div>
          </li>
        ))}
    </motion.ol>
  );
}
