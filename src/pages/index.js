import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import profilePic from "../../public/images/profile/yash6.png";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import lightBulb from "../../public/images/profile/home doodle.png";
import TransitionEffect from "@/components/TransitionEffect";
import HomePageComp from "@/components/HomePageComp";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Tax Preparation Services in NYC by Licensed Enrolled Agent | EA Yash
          Shah
        </title>
        <meta
          name="description"
          content="Get expert tax preparation and consulting in NYC and Brooklyn with EA Yash Shah. Affordable, professional, and hassle-free services!"
        />
        <meta
          name="keyword"
          content="Independent business tax preparers near new york city, Affordable independent business tax preparers near new york, Cheap independent business tax preparers near new york, Free independent business tax preparers near new york, Best independent business tax preparers near new york, Tax consultant New York, Tax and accounting services, Tax preparation NYC, Tax preparation brooklyn, Tax consultant brooklyn, tax return us, ea agent, enrolled agent new york, enrolled agent brooklyn, Independent business tax preparers near brooklyn city, Affordable independent business tax preparers near brooklyn, Cheap independent business tax preparers near brooklyn, Free independent business tax preparers near brooklyn, Best independent business tax preparers brookllyn, enrolled agent near me, nyc tax return, brooklyn tax return, certified enrolled agent"
        />
        <meta name="robots" content="index,follow" />
        <meta name="contact" content="+91 8000 315213" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="1 days" />
        <meta name="geo.placename" content="United States" />
        <meta name="geo.placename" content="New York, United States" />
        <meta name="author" content="Yash Shah, eayashshah@gmail.com" />
        <meta
          name="og:title"
          content="Tax Preparation Services in NYC by Licensed Enrolled Agent | EA Yash Shah"
        />
        <meta
          name="og:description"
          content="Get expert tax preparation and consulting in NYC and Brooklyn with EA Yash Shah. Affordable, professional, and hassle-free services!"
        />
        <meta property="og:image" src={profilePic} />
        <meta name="og:email" content="eayashshah@gmail.com" />
        <meta name="og:phone_number" content="+91 8000 315213" />
        <meta name="og:url" content="https://www.eayashshah.com/" />
        <meta name="twitter:card" content="" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />
        <meta
          name="twitter:title"
          content="Tax Preparation Services in NYC by Licensed Enrolled Agent | EA Yash Shah"
        />
        <meta
          name="twitter:description"
          content="Get expert tax preparation and consulting in NYC and Brooklyn with EA Yash Shah. Affordable, professional, and hassle-free services!"
        />

        <meta charset="utf-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <TransitionEffect layoutEffect={false} />
      <main className="flex items-center text-[#f5f5f5] w-full sm:!overflow-x-hidden">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="!p-7 !px-24 w-[50%] md:!w-full sm:!p-6 sm:!w-full">
              <Image
                src={profilePic}
                alt="EA Yash Shah"
                className="w-full h-auto md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              ></Image>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="EA Yash Shah"
                className="!text-6xl !text-left !text-[#f5f5f5] xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <AnimatedText
                text="Licensed Enrolled Agent"
                className="!text-4xl !text-left !text-[#f5f5f5] xl:!text-4xl lg:!text-center lg:!text-4xl md:!text-4xl sm:!text-lg"
              />
              <AnimatedText
                text="Tax Strategist"
                className="!text-4xl !text-left !text-[#eb6e00] xl:!text-4xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-xl"
              />
              <p className="my-4 text-xl text-justify font-medium md:text-sm sm:!text-justify sm:text-xs sm:!px-1">
                With a deep understanding of U.S. tax laws, Working on a
                contractual basis with CPAs during tax season to turn piles of
                numbers into perfectly filed returns. Think of me as your go-to
                tax season sidekick!
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
          <div className="fixed right-8 bottom-8 inline-block w-24 md:hidden">
            <Image
              src={lightBulb}
              alt="independent business tax preparers near new york"
              className="w-full h-auto"
            />
          </div>
          <p className="text-[#eb6e00] text-center font-bold">
            People also search for :
          </p>
          <p className="text-justify">
            <Link href="/about" className="hover:underline">
              Independent business tax preparers near new york city
            </Link>
            |
            <Link href="/contact" className="hover:underline">
              Affordable independent business tax preparers near new york
            </Link>
            |
            <Link href="/services" className="hover:underline">
              Cheap independent business tax preparers near new york
            </Link>
            |
            <Link href="/articles" className="hover:underline">
              Free independent business tax preparers near new york
            </Link>
            |
            <Link href="/article1" className="hover:underline">
              Best independent business tax preparers near new york
            </Link>{" "}
            |
            <Link href="/article2" className="hover:underline">
              Tax consultant New York
            </Link>{" "}
            |
            <Link href="/article3" className="hover:underline">
              Tax and accounting services
            </Link>{" "}
            |
            <Link href="/article4" className="hover:underline">
              Tax preparation NYC
            </Link>{" "}
            |
            <Link href="/article5" className="hover:underline">
              Tax preparation brooklyn
            </Link>{" "}
            |
            <Link href="/about" className="hover:underline">
              Tax consultant brooklyn
            </Link>{" "}
            |
            <Link href="/contact" className="hover:underline">
              tax return us
            </Link>{" "}
            |
            <Link href="/about" className="hover:underline">
              ea agent
            </Link>{" "}
            |
            <Link href="/contact" className="hover:underline">
              enrolled agent new york
            </Link>{" "}
            |
            <Link href="/articles" className="hover:underline">
              enrolled agent brooklyn
            </Link>{" "}
            |
            <Link href="/article1" className="hover:underline">
              Independent business tax preparers near brooklyn city
            </Link>{" "}
            |
            <Link href="/articles" className="hover:underline">
              Affordable independent business tax preparers near brooklyn
            </Link>{" "}
            |
            <Link href="/article1" className="hover:underline">
              Cheap independent business tax preparers near brooklyn
            </Link>{" "}
            |
            <Link href="/article2" className="hover:underline">
              Free independent business tax preparers near brooklyn
            </Link>{" "}
            |
            <Link href="/article3" className="hover:underline">
              Best independent business tax preparers brookllyn
            </Link>{" "}
            |
            <Link href="/article2" className="hover:underline">
              enrolled agent near me
            </Link>{" "}
            |
            <Link href="/article3" className="hover:underline">
              nyc tax return
            </Link>{" "}
            |
            <Link href="/article4" className="hover:underline">
              brooklyn tax return
            </Link>{" "}
            |
            <Link href="/article4" className="hover:underline">
              certified enrolled agent
            </Link>
          </p>
        </Layout>
        {/* <HireMe /> */}
      </main>
    </>
  );
}
