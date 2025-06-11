import React from "react";
import Layout from "./Layout";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg sm:text-base ">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Build With{" "}
          <span className="text-[#eb6e00] text-2xl px-1">&#9825;</span>by&nbsp;
          <Link
            href="https://uncoredigital.com/"
            className="underline underline-offset-2"
            target="_blank"
          >
            UNCORE DIGITAL
          </Link>
        </div>
        <Link
          href="https://wa.me/918000315213?text=I%20would%20like%20to%20know%20more%20about%20your%20services."
          target={"_blank"}
          className="underline underline-offset-2"
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
}

export default Footer;
