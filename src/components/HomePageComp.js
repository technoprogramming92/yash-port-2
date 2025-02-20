import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Liicon from "./Liicon";

const Details = ({ type, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-0 first:mt-0 last:mb-0 ml-44 sm:ml-6 flex flex-col items-center justify-between md:w-[80%]"
    >
      <Liicon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg text-[#eb6e00]">
          {type}
        </h3>
        {/* <span className="capitalize font-medium text-[#b6b1b1] xs:text-sm sm:ml-1">
          {time} | {place}
        </span> */}
        <p className="font-medium w-full md:text-sm sm:!text-justify sm:ml-1 text-[20px]">
          {info}
        </p>
      </motion.div>
    </li>
  );
};
function HomePageComp() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="mb-32 sm:!mb-80">
      <h2 className="font-bold text-5xl mb-10 w-full text-center md:text-6xl xs:text-4xl md:mb-16 sm:!mt-5">
        Everything You Need for Hassle-Free Tax Filing
      </h2>

      <p className="w-[75%] sm:!w-[100%] mx-auto relative mt-12 font-medium md:text-base sm:!text-sm xs:text-xs text-xl sm:text-justify sm:!px-1">
        Stress-Free Tax Services, From Start to Finish When it comes to taxes, I
        provide an end-to-end solution so you can relax.
      </p>
      <p className="w-[75%] sm:!w-[100%] sm:!text-justify mx-auto relative mt-12 font-medium md:text-base sm:!text-sm xs:text-xs text-xl sm:!px-1">
        Here&apos;s how I make the process seamless and professional:
      </p>

      <div className="w-[75%] mx-auto relative mt-12" ref={ref}>
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-[#f5f5f5] origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-start gap-10 pl-12 xs:pl-8">
          <Details
            type="Document Collection"
            info="I will gather and organize all your paperwork to ensure nothing is missed."
          />
          <Details
            type="Tax Preparation"
            info="Your tax return is prepared with care and reviewed to ensure it's complete and accurate."
          />
          <Details
            type="Thorough Review"
            info="Every return is carefully examined to ensure compliance, identify potential tax savings, and maximize your refund."
          />
          <Details
            type="Client Approval"
            info="Once finalized, the return is shared with you for feedback and approval."
          />
          <Details
            type="Signature Coordination"
            info="I'll get client’s signatures on all necessary Federal and State signature pages for our records."
          />
          <Details
            type="E-Filing"
            info="Approved returns will be submitted electronically to the IRS and State authorities."
          />
          <Details
            type="Filing Status Monitoring"
            info="I'll track the e-file status to ensure everything goes smoothly and address any issues."
          />
          <Details
            type="Re-Filing Support"
            info="In case of a rejection, I'll promptly resolve the issue and re-file the return."
          />
        </ul>
      </div>
    </div>
  );
}

export default HomePageComp;
