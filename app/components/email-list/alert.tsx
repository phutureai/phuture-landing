import { useEffect } from "react";
import { motion } from "motion/react";

export default function AlertFlash({
  status,
  message,
  onClose,
}: {
  status: "SENDING" | "SUCCESS" | "ERROR";
  message: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const id = setTimeout(onClose, 3000);
    return () => clearTimeout(id);
  }, [onClose]);

  return (
    <motion.div
      key={status}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={`fixed left-1/2 bottom-5 -translate-x-1/2 text-white w-full py-2 rounded shadow text-center ${
        status === "SUCCESS"
          ? "bg-green1"
          : status === "SENDING"
          ? "bg-blue2"
          : "bg-red-500"
      }`}
    >
      {message}
    </motion.div>
  );
}
