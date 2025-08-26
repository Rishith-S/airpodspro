import { motion } from "framer-motion";

interface HighlightZoneProps {
  text: string;
  textColor: string;
}

export function HighlightZone({ text, textColor }: HighlightZoneProps) {
  return (
    <motion.span
      animate={{
        color: textColor
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut"
      }}
    >
      {text}
    </motion.span>
  );
}
