import React from "react";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import article_1 from "../../public/images/articles/tax-article-1.jpg";
// import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";

function article1() {
  //   const FramerImage = motion(Image);
  return (
    <>
      <Head>
        <title>What if you can&apos;t pay your taxes? | EA Yash Shah</title>
        <meta
          name="description"
          content="If you can’t pay your taxes, don’t panic - The IRS offers payment alternatives if taxpayers can’t pay what they owe in full.Think of me as your go-to tax season sidekick!"
        />
        <meta
          name="keyword"
          content="irs online payment, direct pay irs, irs payments direct pay, Form 9465 Installment Agreement, How to fill out form 9465 installment agreement, irs installment agreement form, online payment plans, irs payment plan online, paying taxes on a payment plan, How to apply for the Payment plans, Temporarily Delay Collection, Offer in Compromise (OIC), what is form 433-f used for"
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
          content="What if you can't pay your taxes? | EA Yash Shah"
        />
        <meta
          name="og:description"
          content="If you can’t pay your taxes, don’t panic - The IRS offers payment alternatives if taxpayers can’t pay what they owe in full.Think of me as your go-to tax season sidekick!"
        />
        <meta property="og:image" content={article_1} />
        <meta name="og:email" content="eayashshah@gmail.com" />
        <meta name="og:phone_number" content="+91 8000 315213" />
        <meta name="og:url" content="https://www.eayashshah.com/article1" />
        <meta name="twitter:card" content="" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />
        <meta
          name="twitter:title"
          content="What if you can't pay your taxes? | EA Yash Shah"
        />
        <meta
          name="twitter:description"
          content="If you can’t pay your taxes, don’t panic - The IRS offers payment alternatives if taxpayers can’t pay what they owe in full.Think of me as your go-to tax season sidekick!"
        />
        {/*  on page seo ends  */}
        <meta charset="utf-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="description" content="My Description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden sm:!overflow-x-hidden">
        <Layout>
          <AnimatedText
            text="What if you can't pay your taxes?"
            className="!text-[#f5f5f5] mb-16 pt-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <Image
            src="/images/articles/tax-article-1.jpg"
            alt="What if you can't pay your taxes?"
            className="w-full h-auto"
            layout="responsive"
            width={600} // Replace with the actual width of the image
            height={100} // Replace with the actual height of the image
          />
          <p className="mt-6">
            If you can’t pay your taxes, don’t panic - The IRS offers payment
            alternatives if taxpayers can’t pay what they owe in full. But
            remember one thing, to qualify for that plans, first of all you must
            have filed your tax return on time. Below are the Tax Payment
            options.
          </p>

          <h3 className="underline text-xl mt-6">Online Payment Plans: </h3>

          <ol className="mt-6 list-decimal" type="1">
            <li>
              <strong>Short term Payment Plan:</strong> Taxpayers can ask for a
              short-term payment plan for up to 180 days on the total amount
              owed up to <strong>$ 100,000</strong>. There is no application
              form required to file or no fees, but interest and any penalties
              continue to accrue until the tax debt is paid in full.
            </li>
            <li>
              <strong>Long term Payment Plan</strong>: Taxpayer can also ask IRS
              for a longer term monthly payment or Installment agreement option
              if the payment period is <strong>longer than 180 days</strong>,
              paid in monthly payments and the amount owed is{" "}
              <strong>less than $ 50,000</strong> in combined tax, penalties and
              interest. If the IRS approves your long-term online payment plan
              (installment agreement), a setup fees may apply depending on your
              income. Setup fees can vary anywhere in between $31 to $225,
              depending on a few factors.
            </li>
          </ol>
          <p className="mt-6 mb-3">
            <strong>How to apply for the Payment plans</strong>: There are three
            ways to apply for payment plans.{" "}
          </p>

          <ul className="list-disc">
            <li>Go to the www.irs.gov/payments and select the payment plan</li>
            <li>Call the IRS and set up the plan</li>
            <li>
              File Form 9465 Installment Agreement Request (This is for Long
              term Payment Plan only)
            </li>
          </ul>
          <h3 className="underline text-xl mt-6">Offer in Compromise (OIC):</h3>
          <p className="mt-6">
            An Offer in Compromise is an agreement between the taxpayer and the
            IRS to settle their tax debt for less than the full amount they owe.
            Before the IRS will consider an OIC, you must have filed all tax
            returns, have received a bill for at least one tax debt included on
            the offer, made all required estimated tax payments for the current
            year, and made all required federal tax deposits for the current
            quarter and the two preceding quarters if you are a business owner
            with employees. If you are in an open bankruptcy proceeding, you
            aren&apos;t eligible to enter into an OIC. Not everyone qualifies
            for an OIC. Taxpayers should use the Offer in Compromise
            Pre-Qualifier to decide if an offer in compromise is right for them.
          </p>
          <p className="mt-6">
            Offer in Compromise Pre-Qualifier:{" "}
            <Link
              href="https://irs.treasury.gov/oic_pre_qualifier/"
              className="underline"
            >
              https://irs.treasury.gov/oic_pre_qualifier/
            </Link>
          </p>
          <h3 className="underline text-xl mt-6">
            Temporarily Delay Collection:
          </h3>
          <p className="mt-6">
            If you can’t pay the tax due to lower financial condition and tax
            payment would prevent you from meeting your basic living expenses,
            IRS gives an option to delay your payment until your financial
            condition improves. Delay collection does not mean the debt goes
            away, it means the IRS has determined you cannot afford to pay the
            debt at this time.
          </p>
          <p className="mt-6">
            To get this benefits, IRS may ask you to compete Collection
            Information Statements (like Form 433-F, Form 433-A or Form 433-B)
            and provide proof of a financial status.
          </p>
          <p className="mt-6">
            Interest and any penalties continue to accrue until the tax debt is
            paid in full. You can call the IRS to request a temporary delay of
            the collection process.
          </p>

          <p className="mt-6">
            If you have any questions regarding this or any other tax issues, dm
            me or email on{" "}
            <Link
              href="mailto:yashshahtaxfreelancer@gmail.com"
              className="underline"
            >
              yashshahtaxfreelancer@gmail.com
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
            <Link href="/about" className="hover:underline">
              irs online payment
            </Link>{" "}
            |
            <Link href="/contact" className="hover:underline">
              direct pay irs
            </Link>{" "}
            |{" "}
            <Link href="/article1" className="hover:underline">
              irs payments direct pay
            </Link>{" "}
            |{" "}
            <Link href="/article2" className="hover:underline">
              Form 9465 Installment Agreement
            </Link>{" "}
            |{" "}
            <Link href="/article3" className="hover:underline">
              How to fill out form 9465 installment agreement
            </Link>{" "}
            |{" "}
            <Link href="/about" className="hover:underline">
              irs installment agreement form
            </Link>{" "}
            |{" "}
            <Link href="/contact" className="hover:underline">
              online payment plans
            </Link>{" "}
            |{" "}
            <Link href="/article4" className="hover:underline">
              irs payment plan online
            </Link>{" "}
            |{" "}
            <Link href="/article5" className="hover:underline">
              paying taxes on a payment plan
            </Link>{" "}
            |{" "}
            <Link href="/article6" className="hover:underline">
              How to apply for the Payment plans
            </Link>{" "}
            |{" "}
            <Link href="/about" className="hover:underline">
              Temporarily Delay Collection
            </Link>{" "}
            |{" "}
            <Link href="/contact" className="hover:underline">
              Offer in Compromise (OIC)
            </Link>{" "}
            |{" "}
            <Link href="/articles" className="hover:underline">
              what is form 433-f used for
            </Link>
          </p>
        </Layout>
      </main>
    </>
  );
}

export default article1;
