import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Skills2 = () => {
  // Define breakpoints
  const isMobile = useMediaQuery({ maxWidth: 640 }); // Mobile: <=640px
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1024 }); // Tablet: 641px - 1024px
  const isDesktop = useMediaQuery({ minWidth: 1025 }); // Desktop: >1024px

  // Define positions for different screen sizes
  const positions = {
    desktop: [
      { name: "1040", x: "-5vw", y: "-10vw" },
      { name: "1120", x: "-25vw", y: "2vw" },
      { name: "1120 - S", x: "20vw", y: "6vw" },
      { name: "1065", x: "0vw", y: "12vw" },
      { name: "FinCEN", x: "-20vw", y: "-15vw" },
      { name: "990", x: "15vw", y: "-12vw" },
      { name: "5471", x: "32vw", y: "-5vw" },
      { name: "5472", x: "0vw", y: "-20vw" },
      { name: "1099s", x: "-25vw", y: "18vw" },
      { name: "6765", x: "18vw", y: "18vw" },
    ],
    tablet: [
      { name: "1040", x: "-3vw", y: "-7vw" },
      { name: "1120", x: "-18vw", y: "1vw" },
      { name: "1120 - S", x: "15vw", y: "4vw" },
      { name: "1065", x: "0vw", y: "8vw" },
      { name: "FinCEN", x: "-15vw", y: "-10vw" },
      { name: "990", x: "10vw", y: "-8vw" },
      { name: "5471", x: "20vw", y: "-3vw" },
      { name: "5472", x: "0vw", y: "-15vw" },
      { name: "1099s", x: "-18vw", y: "12vw" },
      { name: "6765", x: "12vw", y: "12vw" },
    ],
    mobile: [
      { name: "1040", x: -3.0, y: -6.0 },
      { name: "1120", x: -15.0, y: 1.2 },
      { name: "1120 - S", x: 12.0, y: 3.6 },
      { name: "1065", x: 0.0, y: 7.2 },
      { name: "FinCEN", x: -12.0, y: -9.0 },
      { name: "990", x: 9.0, y: -7.2 },
      { name: "5471", x: 19.2, y: -3.0 },
      { name: "5472", x: 0.0, y: -12.0 },
      { name: "1099s", x: -15.0, y: 10.8 },
      { name: "6765", x: 10.8, y: 10.8 },
    ],
  };

  // Select positions based on screen size
  const selectedPositions = isMobile
    ? positions.mobile
    : isTablet
    ? positions.tablet
    : positions.desktop;

  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 sm:!text-3xl">
        Core Competencies
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:!bg-circularLightLg md:!bg-circularDarkMd sm:!bg-circularDarkSm xs:!bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center rounded-full font-bold text-xl bg-[#faf9f6] text-dark p-8 shadow-lg shadow-[#fff5ee]cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Tax Zone
        </motion.div>

        {selectedPositions.map((skill) => (
          <Skill key={skill.name} name={skill.name} x={skill.x} y={skill.y} />
        ))}
      </div>
    </>
  );
};

// Skill Component
const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-bold bg-[#faf9f6] text-dark py-3 px-6 shadow-lg shadow-[#fff5ee] cursor-pointer text-xl absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:font-bold xs:text-[#f5f5f5] xs:shadow-none xs:!py-5 sm:!py-5"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

export default Skills2;
