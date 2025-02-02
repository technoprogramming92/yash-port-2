import React from "react";
import Link from "next/link";
// import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../public/images/profile/eyslogo.png";
// const MotionLink = motion(Link);
function Logo() {
  return (
    <div className="flex items-center justify-center mt-2">
      {/* <MotionLink
        href="/"
        className="w-16 h-16 bg-[#eb6e00] text-[#f5f5f5] flex items-center justify-center rounded-full text-2xl font-bold"
        whileHover={{
          backgroundColor: [
            "#eb6e00",
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
            "#eb6e00",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        EYS
      </MotionLink> */}
      <Link href="/">
        <Image src={logo} alt="logo" width={100} height={100} />
      </Link>
    </div>
  );
}

export default Logo;
