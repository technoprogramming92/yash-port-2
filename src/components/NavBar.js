import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  LinkedinIcon2,
  InstagramIcon2,
  YouTubeIcon2,
  WhatsappIcon,
} from "./Icons";
import { motion } from "framer-motion";
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block bg-[#eb6e00] absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group text-[#000000] my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`h-[1px] inline-block bg-[#eb6e00] absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between relative z-10 lg:px-16 md:px-12 sm:!px-3">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-[#f5f5f5] block h-0.5 w-6 rounded-sm transition-transform duration-300 ease-out ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-1.5"
          }`}
        ></span>
        <span
          className={`bg-[#f5f5f5] block h-0.5 w-6 rounded-sm my-0.5 transition-opacity duration-300 ease-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-[#f5f5f5] block h-0.5 w-6 rounded-sm transition-transform duration-300 ease-out ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="">
          <CustomLink href="/" title="Home" className="mr-4 text-[#f5f5f5]" />
          <CustomLink
            href="/about"
            title="About"
            className="mx-4 text-[#f5f5f5]"
          />
          <CustomLink
            href="/services"
            title="Services"
            className="mx-4 text-[#f5f5f5]"
          />
          {/* <CustomLink href="/updates" title="Tax Updates" className='mx-4 text-[#f5f5f5]'/> */}
          <CustomLink
            href="/articles"
            title="Articles"
            className="mx-4 text-[#f5f5f5]"
          />

          <CustomLink
            href="/contact"
            title="Contact"
            className="ml-4 text-[#f5f5f5]"
          />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <CustomLink
            href="/tax-organizer"
            title="Tax Organizer"
            className="mr-4 text-[#f5f5f5]"
          />
          <motion.a
            href="https://www.instagram.com/ea_yash_shah/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <InstagramIcon2 />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/yash-shah-ea-6b404820a/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedinIcon2 className="w-30 h-30 sm:w-25 sm:h-25" />
          </motion.a>
          <motion.a
            href="https://youtube.com/@ea_yash_shah?si=KZ5v5hCSE8IQX27g"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <YouTubeIcon2 className="sm:!w-[25px] w-[30px]" />
          </motion.a>
          <motion.a
            href="https://wa.me/918000315213?text=I%20would%20like%20to%20know%20more%20about%20your%20services.
"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3"
          >
            <WhatsappIcon />
          </motion.a>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.3,
            },
          }}
          className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-[#f5f5f5]/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=" text-[#000000]"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className="text-[#000000]"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/services"
              title="Services"
              className="text-[#000000]"
              toggle={handleClick}
            />
            {/* <CustomLink href="/updates" title="Tax Updates" className='text-[#000000]'/> */}
            <CustomMobileLink
              href="/articles"
              title="Articles"
              className="text-[#000000]"
              toggle={handleClick}
            />

            <CustomMobileLink
              href="/contact"
              title="Contact"
              className="text-[#000000]"
              toggle={handleClick}
            />

            <CustomMobileLink
              href="/tax-organizer"
              title="Tax Organizer"
              className="text-[#000000]"
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://www.instagram.com/ea_yash_shah/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <InstagramIcon2 />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/yash-shah-ea-6b404820a/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <LinkedinIcon2 className="w-30 h-30 sm:w-25 sm:h-25" />
            </motion.a>
            <motion.a
              href="https://youtube.com/@ea_yash_shah?si=KZ5v5hCSE8IQX27g"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <YouTubeIcon2 className="sm:!w-[25px] w-[30px]" />
            </motion.a>
            <motion.a
              href="https://wa.me/918000315213?text=I%20would%20like%20to%20know%20more%20about%20your%20services.
"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 ml-3 sm:mx-1"
            >
              <WhatsappIcon />
            </motion.a>
          </nav>
        </motion.div>
      ) : null}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}

export default NavBar;
