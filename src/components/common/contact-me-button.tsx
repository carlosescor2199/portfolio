import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { MailIcon } from "lucide-react";

export function ContactMeButton() {
  return (
    <motion.a
      href="mailto:carlos.escudero.corpas@gmail.com"
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.2 }}
      whileFocus={{ scale: 1.2 }}
      whileTap={{ scale: 1.4 }}
      className={cn(
        "fixed bottom-5 right-5 md:bottom-10 md:right-10",
        "h-24 w-24 rounded-full bg-background px-4 py-2 text-center text-foreground ring-1 ring-foreground",
        "hover:bg-foreground hover:text-background focus:outline-none",
      )}
    >
      <MailIcon className="inline h-5 w-5 font-semibold" /> Contact me
    </motion.a>
  );
}
