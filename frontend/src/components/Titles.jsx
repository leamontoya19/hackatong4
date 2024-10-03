/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TitleSection = ({ title }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  
  const variants = {
    hidden: {
      opacity: 0,
      y: 20, 
    },
    visible: {
      opacity: 1,
      y: 0, 
      transition: {
        type: "spring",
        stiffness: 60, 
        damping: 15, 
        duration: 1, 
      },
    },
  };

  return (
    <motion.div
      className="flex justify-center items-center my-8"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-center text-black">
        {title}
      </h1>
    </motion.div>
  );
};

export default TitleSection;
