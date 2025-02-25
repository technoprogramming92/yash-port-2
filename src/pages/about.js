import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import profilePic from "../../public/images/profile/yash_about.png";
import { AnimatedNumbers } from "@/components/AnimatedNumbers";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import { AnimatePresence } from "framer-motion";

function about() {
  return (
    <>
      <Head>
        <title>Tax Return Forms 1040, 5472, and More | EA Yash Shah</title>
        <meta
          name="description"
          content="EA Yash Shah provides certified tax consulting and IRS form assistance, including 1040, 5472, 1120, and more. Trusted tax services near you."
        />
        <meta
          name="keyword"
          content="form 1065 form, form 1065 instructions,what is 1099s form, irs form 6765, 80ttb deduction for senior citizens, sec 80ttb of income tax act, Form W-4,w 8ben e instructions, form 990, 1040 form, tax paper 1040, 5471 form, 1120 forms, 1065 form, 1040 form, irs form 1040, 1040 schedule c, form 1040 instructions, form 1040 tax return, 1040 tax document, form 5472, fincen, cpa in florida, cpa in new jersey"
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
          content="Tax Return Forms 1040, 5472, and More | EA Yash Shah"
        />
        <meta
          name="og:description"
          content="EA Yash Shah provides certified tax consulting and IRS form assistance, including 1040, 5472, 1120, and more. Trusted tax services near you."
        />
        <meta property="og:image" src={profilePic} />
        <meta name="og:email" content="eayashshah@gmail.com" />
        <meta name="og:phone_number" content="+91 8000 315213" />
        <meta name="og:url" content="https://www.eayashshah.com/about" />
        <meta name="twitter:card" content="" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />
        <meta
          name="twitter:title"
          content="Tax Return Forms 1040, 5472, and More | EA Yash Shah"
        />
        <meta
          name="twitter:description"
          content="EA Yash Shah provides certified tax consulting and IRS form assistance, including 1040, 5472, 1120, and more. Trusted tax services near you."
        />

        <meta charset="utf-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <AnimatePresence mode="wait">
        <TransitionEffect />
      </AnimatePresence>

      <main className="flex w-full flex-col items-center justify-center sm:!overflow-x-hidden">
        <Layout className="!pt-16 sm:!pt-20">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 !text-[#f5f5f5] lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:!col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-[#f5f5f5] md:!text-xl">
                Biography
              </h2>

              <p className="font-medium">
                As an Enrolled Agent, I specialize in simplifying U.S. tax laws
                for individuals and businesses. My goal is to provide accurate
                solutions tailored to your financial needs while ensuring
                compliance and peace of mind.
              </p>
              <p className="my-4 font-medium">
                With years of experience and ongoing education, I stay updated
                on the latest tax regulations. From resolving disputes to
                planning for the future, I prioritize trust, transparency, and
                delivering results that matter.
              </p>
              <p className="font-medium">
                Beyond work, I am passionate about problem-solving and building
                strong client relationships. I aim to be your trusted partner in
                navigating the complexities of taxation.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-[#f5f5f5] bg-light p-8 xl:col-span-4 md:order-1 md:!col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-[#f5f5f5]" />
              <Image
                src={profilePic}
                alt="Yash Shah"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-[#f5f5f5] xl:text-center md:text-lg sm:text-base xs:text-sm">
                  satisfied clients
                </h2>
              </div>

              {/* <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-[#f5f5f5] xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div> */}

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={7} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-[#f5f5f5] xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
          <p className="text-[#eb6e00] text-center font-bold">
            People also search for :{" "}
          </p>
          <p className="text-justify">
            <Link href="/services" className="hover:underline">
              form 1065 form form 1065 instructions
            </Link>{" "}
            |
            <Link href="/articles" className="hover:underline">
              what is 1099s form
            </Link>{" "}
            |
            <Link href="/services" className="hover:underline">
              irs form 6765
            </Link>{" "}
            |
            <Link href="/articles" className="hover:underline">
              80ttb deduction for senior citizens
            </Link>{" "}
            |
            <Link href="/article1" className="hover:underline">
              sec 80ttb of income tax act
            </Link>{" "}
            |
            <Link href="/article2" className="hover:underline">
              Form W-4
            </Link>{" "}
            |
            <Link href="/article1" className="hover:underline">
              w 8ben e instructions
            </Link>{" "}
            |
            <Link href="/article2" className="hover:underline">
              form 990
            </Link>{" "}
            |
            <Link href="/article3" className="hover:underline">
              1040 form
            </Link>{" "}
            |
            <Link href="/article4" className="hover:underline">
              tax paper 1040
            </Link>{" "}
            |
            <Link href="/article3" className="hover:underline">
              5471 form
            </Link>
            |
            <Link href="/article4" className="hover:underline">
              1120 forms
            </Link>
            |
            <Link href="/article5" className="hover:underline">
              1065 form
            </Link>
            |
            <Link href="/contact" className="hover:underline">
              1040 form
            </Link>
            |
            <Link href="/article5" className="hover:underline">
              irs form 1040
            </Link>
            |
            <Link href="/contact" className="hover:underline">
              1040 schedule c
            </Link>
            |
            <Link href="/services" className="hover:underline">
              form 1040 instructions
            </Link>
            |
            <Link href="/article1" className="hover:underline">
              form 1040 tax return
            </Link>
            |
            <Link href="/article2" className="hover:underline">
              1040 tax document
            </Link>
            |
            <Link href="/article3" className="hover:underline">
              form 5472
            </Link>
            |
            <Link href="/article5" className="hover:underline">
              fincen
            </Link>
            <Link href="/article3" className="hover:underline">
              cpa in florida
            </Link>
            |
            <Link href="/article5" className="hover:underline">
              cpa in new jersey
            </Link>
          </p>
        </Layout>
      </main>
    </>
  );
}

export default about;
