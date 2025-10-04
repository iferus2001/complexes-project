import { motion } from "framer-motion";

type FilterProps = {
  types: string[];
  activeType: string;
  onTypeChange: (type: string) => void;
};

export function Filter({ types, activeType, onTypeChange }: FilterProps) {
  return (
    <div className="flex max-sm:flex-col gap-17 mt-10 mb-5 items-center">
      {types.map((type, id) => (
        <motion.button
          key={id}
          onClick={() => onTypeChange(type)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: id * 0.1, duration: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          className={`relative w-fit font-semibold cursor-pointer
            after:block after:h-[2px] after:bg-black after:scale-x-0 after:transition-transform after:duration-300 after:origin-left
            hover:after:scale-x-100
            ${activeType === type ? "after:scale-x-100" : ""}`}
        >
          {type}
        </motion.button>
      ))}
    </div>
  );
}
