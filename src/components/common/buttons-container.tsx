import { cn } from "@/lib/utils";
import { ArrowDownTrayIcon, IdentificationIcon, RectangleStackIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";

export function ButtonsContainer({
  about,
  projects,
  download,
}: {
  about?: boolean;
  projects?: boolean;
  download?: boolean;
}) {
  return (
    <motion.div className="mt-10 flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-8">
      {about && (
        <motion.button
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
              x: -20,
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: { delay: 1.7, duration: 0.5, ease: "linear" },
            },
          }}
          whileHover={{ scale: 1.1 }}
          className={cn(
            "w-full rounded-md bg-white px-4 py-2 text-gray-800 ring-1 ring-gray-800",
            "hover:bg-gray-100 focus:outline-none focus:ring-2 md:w-auto",
          )}
        >
          <Link href="/about">
            {" "}
            <IdentificationIcon className="inline h-5 w-5" /> More about me
          </Link>
        </motion.button>
      )}

      {projects && (
        <motion.button
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
              x: -20,
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: { delay: 1.7, duration: 0.5, ease: "linear" },
            },
          }}
          whileHover={{ scale: 1.1 }}
          className={cn(
            "w-full rounded-md bg-white px-4 py-2 text-gray-800 ring-1 ring-gray-800",
            "hover:bg-gray-100 focus:outline-none focus:ring-2 md:w-auto",
          )}
        >
          <Link href="/about">
            {" "}
            <RectangleStackIcon className="inline h-5 w-5" /> Get to know my projects!
          </Link>
        </motion.button>
      )}

      {download && (
        <motion.a
          href="/Resume_Carlos_Escudero.pdf"
          download
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
              x: 20,
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: { delay: 2.1, duration: 0.5, ease: "linear" },
            },
          }}
          whileHover={{ scale: 1.1 }}
          className={cn(
            "w-full rounded-md bg-gray-800 px-4 py-2 text-center text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 md:w-auto",
          )}
        >
          <ArrowDownTrayIcon className="inline h-5 w-5" /> Download Resume
        </motion.a>
      )}
    </motion.div>
  );
}
