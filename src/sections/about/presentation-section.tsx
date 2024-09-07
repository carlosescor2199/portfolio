import { ButtonsContainer } from "@/components/common";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Questrial } from "next/font/google";

const questrial = Questrial({ weight: "400", subsets: ["latin"] });

export function PresentationSection() {
  return (
    <>
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
          src="/images/profile.png"
          alt="logo"
          className={cn("h-36 w-36 rounded-full sm:h-52 sm:w-52")}
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
      <div className="mb-12 flex flex-col justify-center 2xl:mx-80">
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
        <ButtonsContainer projects download />
      </div>
    </>
  );
}
