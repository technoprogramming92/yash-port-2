import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Liicon from "./Liicon";

const Details = ({ position, company, time, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className={`my-8 first:mt-0 last:mb-0 w-[60%] ml-44 sm:ml-6 flex flex-col items-center justify-between md:w-[80%] ${
        position === "last" || position === "secondLast" ? "ml-64 sm:ml-28" : ""
      }`}
    >
      <Liicon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a target="_blank" className="text-[#eb6e00] capitalize">
            {company}
          </a>
        </h3>
        <span className="capitalize font-medium text-[#b6b1b1] xs:text-sm ">
          {time}
        </span>
        <p className="font-medium w-full md:text-sm ">{work}</p>
      </motion.div>
    </li>
  );
};
function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full" ref={ref}>
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-[#f5f5f5] origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Tax Senior"
            company="@Escalon"
            time="Feb 2022 - Dec 2024"
            work="Prepared and reviewed corporate tax returns with precision and compliance.
Identified tax-saving opportunities and optimized tax returns for maximum benefits.
Managed tax filing processes, including monitoring statuses (accepted, rejected,
transmitted) and re-filing rejected returns.
Collaborated with CPAs and clients to gather required documents and resolve
discrepancies."
          />

          <Details
            position="Freelance Tax Preparer"
            company=" "
            time="Sep 2021 - Jan 2022"
            work="Independently prepared and filed individual and corporate tax returns.
Provided personalized tax solutions and addressed client-specific requirements."
          />

          <Details
            position="Senior Tax Associate"
            company="@Entigrity Offshore Staffing"
            time="Mar 2019 - Aug 2021"
            work="Reviewed and finalized tax returns, ensuring accuracy and compliance with IRS
guidelines.
Communicated with clients to obtain missing documents and clarify tax-related
queries.
Supervised junior associates and provided guidance on tax preparation processes.
"
          />

          <Details
            position="Tax Associate"
            company="@Entigrity Offshore Staffing"
            time="Oct 2017 - Oct 2018"
            work="Prepared individual and corporate tax returns, developing a strong foundation in U.S.
taxation.
Assisted in analyzing tax issues and recommending solutions to clients."
          />
        </ul>
      </div>
    </div>
  );
}

export default Experience;
