"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { Questrial } from "next/font/google";

const questrial = Questrial({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className={cn("flex-1")}>
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
        className={cn("grid p-24 pb-5 lg:grid-cols-2", "bg-gradient-to-tr from-[#2279CA] to-[#2B2F33]")}
      >
        <div className={cn("relative flex flex-col items-center text-center")}>
          <motion.div
            className={cn(
              "absolute inset-y-0 bottom-16 h-36 w-36 rounded-full",
              "sm:h-52 sm:w-52",
              "border-4 border-dotted",
            )}
            initial="hidden"
            animate={["animated", "visible"]}
            variants={{
              hidden: { rotate: 0, opacity: 0 },
              animated: { rotate: 360, transition: { repeat: Infinity, duration: 15, ease: "linear" } },
              visible: { opacity: 1, transition: { delay: 1, duration: 1, ease: "circOut" } },
            }}
          />
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
            className={cn("h-36 w-36 rounded-full bg-black pt-1 sm:h-52 sm:w-52")}
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
            className={cn("mt-7 text-4xl font-bold text-white")}
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
            className={cn(questrial.className, "text-2xl font-bold text-white")}
          >
            Software Engineer
          </motion.p>
        </div>
        <div className="flex flex-1 justify-end">
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
            className="text-white"
          >
            Hi! I&apos;m Carlos Escudero, a Fullstack Software Engineer based in Sincelejo, Colombia. I have more than
            three years developing APIs and robust applications. I have participated in several projects, from
            electronic invoicing solutions, to chat systems with artificial intelligence. I am proficient in tools like
            React.js, Angular, NestJS, Sprint Boot, GraphQL, etc. I love learning new technologies and improving
            myskills. Beyond my own professional growth, I like to guide new tech enthusiasts, helping them to learn and
            navigate in this constantly evolving world.
          </motion.p>
        </div>
      </motion.div>
    </main>
  );
}
