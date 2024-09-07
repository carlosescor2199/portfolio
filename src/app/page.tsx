"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { ButtonsContainer, ContactMeButton } from "@/components/common";

export default function Home() {
  return (
    <>
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
          className={cn("grid flex-1 p-8 pb-5 md:grid-cols-2 xl:p-24")}
        >
          <div className="flex flex-col justify-center space-y-8">
            <h1 className={cn("text-center text-4xl font-extrabold text-gray-800 sm:text-5xl md:text-start")}>
              Limitless Innovation in Software Development
            </h1>
            <p>
              As a software engineer, I am passionate about creating innovative solutions that push boundaries. With a
              focus on efficiency, scalability, and quality, I work to turn ideas into tangible products that drive
              success. My mission is to exceed expectations through agile, tailored development, delivering technology
              solutions that make a difference.
            </p>
            <ButtonsContainer about download />
          </div>
          <div className="flex items-center">
            <motion.img
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: { delay: 0.3, duration: 0.5, ease: "linear" },
                },
              }}
              src="/images/home-page.png"
              alt="logo"
              className={cn("rounded-full bg-transparent pt-1")}
            />
          </div>
        </motion.div>
      </main>
      <ContactMeButton />
    </>
  );
}
