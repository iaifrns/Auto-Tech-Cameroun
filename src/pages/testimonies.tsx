import { useEffect, useState } from "react";
import { Testimony } from "../components/testimony";
import { testimoniesData } from "../constants/testimonies";
import { motion } from "framer-motion";

const Testimonies = () => {
  const [indexs, setIndex] = useState([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setIndex((prev) => {
          return prev.map((num) => (num + 1) % testimoniesData.length);
        });
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, indexs);
  return (
    <div
      className={`relative overflow-hidden`}
    >
      <motion.div
        key={indexs.join("-")}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="flex p-20 justify-evenly inset-0 max-md:flex-col max-md:items-center max-md:gap-8"
      >
        {indexs.slice(0, 3).map((num, index) => (
          <Testimony testimony={testimoniesData[num]} key={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonies;
