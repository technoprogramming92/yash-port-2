import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import profilePic from "../../public/images/profile/yash4.png";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";
import HomePageComp from "@/components/HomePageComp";
export default function Home() {
  return (
    <>
      <Head>
        <title>Yash Shah | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect layoutEffect={false} />
      <main className="flex items-center text-[#f5f5f5] w-full sm:!overflow-x-hidden">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:!w-full sm:!w-full">
              <Image
                src={profilePic}
                alt="Yash Shah"
                className="w-full h-auto md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              ></Image>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Tax inside out with"
                className="!text-6xl !text-left !text-[#f5f5f5] xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <AnimatedText
                text="EA Yash Shah"
                className="!text-6xl !text-left !text-[#eb6e00] xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                I am Yash Shah, an Enrolled Agent with a deep understanding of
                tax laws and financial planning. My passion lies in simplifying
                the complexities of taxes and providing personalized solutions
                to help individuals and businesses achieve their financial
                goals. Whether it’s tax preparation, resolving IRS issues, or
                creating strategies to maximize savings, I am committed to
                guiding you every step of the way. With my expertise and
                dedication, you can trust me to handle your taxes inside out, so
                you can focus on what truly matters.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/contact"
                  target="_blank"
                  className="flex items-center bg-[#eb6e00] text-[#f5f5f5] p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light  border-2 border-solid border-transparent hover:border-[#f5f5f5] md:p-2 md:px-4 md:text-base"
                >
                  Contact
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                {/* <Link
                  href="mailto:yashshahtaxfreelancer@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-[#f5f5f5] underline md:text-base"
                >
                  Contact
                </Link> */}
              </div>
            </div>
          </div>
          <HomePageComp />
        </Layout>
        {/* <HireMe /> */}

        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="Yash Shah" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
