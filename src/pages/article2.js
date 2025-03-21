import React from "react";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import article_2 from "../../public/images/articles/tax-article-2.jpg";
// import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";

function article2() {
  //   const FramerImage = motion(Image);
  return (
    <>
      <Head>
        <title>What is W-8 BEN? | EA Yash Shah</title>
        <meta
          name="description"
          content="Form W-8 BEN: Important to know about this for non-US residents who generate income from the USA."
        />
        <meta
          name="keyword"
          content="what is w 8ben form used for, Purpose of W-8 BEN form, who needs to fill out form w-8ben, double taxation avoidance agreement between india and usa, DTAA between India and US, US government taxes non-residents, taxation for non-resident aliens
          "
        />
        <meta name="robots" content="index,follow" />
        <meta name="contact" content="+91 8000 315213" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="1 days" />
        <meta name="geo.placename" content="United States" />
        <meta name="geo.placename" content="New York, United States" />
        <meta name="author" content="Yash Shah, eayashshah@gmail.com" />
        <meta name="og:title" content="What is W-8 BEN? | EA Yash Shah" />
        <meta
          name="og:description"
          content="Form W-8 BEN: Important to know about this for non-US residents who generate income from the USA."
        />
        <meta property="og:image" src={article_2} />
        <meta name="og:email" content="eayashshah@gmail.com" />
        <meta name="og:phone_number" content="+91 8000 315213" />
        <meta name="og:url" content="https://www.eayashshah.com/article2" />
        <meta name="twitter:card" content="" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />
        <meta name="twitter:title" content="What is W-8 BEN? | EA Yash Shah" />
        <meta
          name="twitter:description"
          content="Form W-8 BEN: Important to know about this for non-US residents who generate income from the USA."
        />
        {/* on page seo ends  */}
        <meta charset="utf-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden sm:!overflow-x-hidden">
        <Layout>
          <AnimatedText
            text="Form W-8 BEN: Important to know about this for non-US residents who generate income from USA."
            className="!text-[#f5f5f5] mb-16 pt-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <Image
            src="/images/articles/tax-article-2.jpg"
            alt="Form W-8 BEN: Important to know about this for non-US residents who generate income from USA."
            className="w-full h-auto"
            layout="responsive"
            width={600} // Replace with the actual width of the image
            height={100} // Replace with the actual height of the image
          />
          <h1 className="text-xl mt-6 font-bold">What is W-8 BEN? </h1>
          <p className="mt-6">
            Generally US government taxes non-residents for income sourced out
            of USA at 30%. But if USA has Income tax treaty with your country,
            you can get reduced rate or exemption in withholds on your US income
            by sending form W-8 BEN to your client in USA.
          </p>

          <h1 className="text-xl mt-6 font-bold">Purpose of W-8 BEN form:</h1>
          <p className="mt-6">Purpose of W-8 BEN form:</p>

          <ul className="mt-6 list-disc sm:!list-disc">
            <li>Interest (including certain original issue discount (OID));</li>
            <li>Dividends;</li>
            <li>Rents;</li>
            <li>Royalties;</li>
            <li>Premiums;</li>
            <li>Annuities;</li>
            <li>Compensation for, or in expectation of, services performed;</li>
            <li>Substitute payments in a securities lending transaction; or</li>
            <li>
              Other fixed or determinable annual or periodical gains, profits,
              or income.
            </li>
          </ul>
          <p className="mt-6 mb-3">
            If you receive certain types of income, you must provide Form W-8BEN
            to:
          </p>

          <ol className="list-decimal">
            <li>
              Establish that you are <strong>not</strong> a U.S. person;
            </li>
            <li>
              Claim that you are the beneficial owner of the income for which
              Form W-8BEN is being provided or a foreign partner in a
              partnership subject to section 1446(a); and
            </li>
            <li>
              If applicable,{" "}
              <strong>
                claim a reduced rate of, or exemption from, withholding as a
                resident of a foreign country with which the United States has
                an income tax treaty
              </strong>{" "}
              and who is eligible for treaty benefits.
            </li>
          </ol>
          <h1 className="text-xl mt-6 font-bold">USA tax treaty with India:</h1>
          <p className="mt-6">
            India has entered into DTAA (Double taxation avoidance agreement)
            with the USA and treaty explains the taxability of various sources
            of income for US residents and Indian residents.
          </p>
          <p className="mt-6">
            For an example, if an Indian freelancer works as independent
            consultant for US entity, he might not be subject to withholding tax
            in the USA on providing W-8 BEN.
          </p>
          <p className="mt-6">
            Visit the below link to check out US treaty with India.
          </p>
          <p className="mt-5">
            <Link
              href="https://www.irs.gov/pub/irs-trty/india.pdf "
              className="underline"
            >
              https://www.irs.gov/pub/irs-trty/india.pdf
            </Link>
          </p>
          <br />
          <br />
          <br />
          <br />
          <p className="text-[#eb6e00] text-center font-bold">
            People also search for :{" "}
          </p>
          <p className="text-justify">
            <Link href="/services" className="hover:underline">
              what is w 8ben form used for
            </Link>{" "}
            |
            <Link href="/contact" className="hover:underline">
              Purpose of W-8 BEN form
            </Link>{" "}
            |
            <Link href="/article1" className="hover:underline">
              who needs to fill out form w-8ben
            </Link>{" "}
            |
            <Link href="/article3" className="hover:underline">
              double taxation avoidance agreement between india and usa
            </Link>{" "}
            |
            <Link href="/article4" className="hover:underline">
              DTAA between India and US
            </Link>{" "}
            |
            <Link href="/article5" className="hover:underline">
              US government taxes non-residents
            </Link>{" "}
            |
            <Link href="/article6" className="hover:underline">
              taxation for non-resident aliens
            </Link>{" "}
          </p>
        </Layout>
      </main>
    </>
  );
}

export default article2;
