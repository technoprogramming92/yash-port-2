import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Liicon from "./Liicon";

const Details = ({ type, time, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 ml-44 sm:ml-9 flex flex-col items-center justify-between md:w-[80%]"
    >
      <Liicon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-[#b6b1b1] xs:text-sm">
          {time}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};
function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div className="w-[75%] mx-auto relative" ref={ref}>
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-[#f5f5f5] origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Enrolled Agent Certification"
            time="2022"
            info="Certified by the Internal
Revenue Service (IRS)"
          />

          <Details
            type="Bachelor of Commerce in
Accounting & Finance"
            time="2017"
            info="Gujarat University"
          />
        </ul>
      </div>
    </div>
  );
}

export default Education;
