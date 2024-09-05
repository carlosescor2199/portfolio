"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { Questrial } from "next/font/google";
import Link from "next/link";
import { ArrowDownTrayIcon, BriefcaseIcon, IdentificationIcon } from "@heroicons/react/24/outline";

const questrial = Questrial({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className={cn("flex flex-1 flex-col")}>
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
            transition: { delay: 0.3, duration: 0.6, ease: "backInOut" },
          },
        }}
        className={cn("flex flex-1 flex-col p-8 pb-5 xl:p-24")}
      >
        <div className={cn("relative mb-12 flex flex-col items-center justify-center text-center")}>
          <motion.img
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: { delay: 0.7, duration: 0.5, ease: "circIn" },
              },
            }}
            src="/images/profileimg.png"
            alt="logo"
            className={cn("h-36 w-36 rounded-full border border-gray-400 bg-transparent pt-1 sm:h-52 sm:w-52")}
          />
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: { delay: 0.5, duration: 0.5, ease: "circInOut" },
              },
            }}
            className={cn("mt-7 text-4xl font-bold text-gray-700")}
          >
            Carlos Escudero
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: { delay: 1, duration: 0.5, ease: "linear" },
              },
            }}
            className={cn(questrial.className, "text-2xl font-bold text-gray-500")}
          >
            Software Engineer
          </motion.p>
        </div>
        <div className="flex flex-col justify-center 2xl:mx-80">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: { delay: 1.5, duration: 0.5, ease: "linear" },
              },
            }}
            className="text-gray-600"
          >
            Hi! I&apos;m a Fullstack Software Engineer based in Sincelejo, Colombia. I have more than three years
            developing APIs and robust applications. I have participated in several projects, from electronic invoicing
            solutions, to chat systems with artificial intelligence. I am proficient in tools like React.js, Angular,
            NestJS, Sprint Boot, GraphQL, etc. I love learning new technologies and improving myskills. Beyond my own
            professional growth, I like to guide new tech enthusiasts, helping them to learn and navigate in this
            constantly evolving world.
          </motion.p>

          <motion.div className="mt-10 flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-8">
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
                "w-full rounded-md bg-yellow-300 px-4 py-2 text-white hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 md:w-auto",
              )}
            >
              <Link href="/about">
                {" "}
                <IdentificationIcon className="inline h-5 w-5" /> More about me
              </Link>
            </motion.button>

            <motion.button
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 1.9, duration: 0.5, ease: "linear" },
                },
              }}
              whileHover={{ scale: 1.1 }}
              className={cn(
                "w-full rounded-md bg-green-400 px-4 py-2 text-white md:w-auto",
                "hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
              )}
            >
              <Link href="/contact">
                <BriefcaseIcon className="inline h-5 w-5" /> Hire me
              </Link>
            </motion.button>

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
                "w-full rounded-md bg-blue-400 px-4 py-2 text-center text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 md:w-auto",
              )}
            >
              <ArrowDownTrayIcon className="inline h-5 w-5" /> Download Resume
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
