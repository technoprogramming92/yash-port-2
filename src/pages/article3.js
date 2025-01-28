import React from "react";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import Link from "next/link";
// import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Script from "next/script";

function article3() {

  //   const FramerImage = motion(Image);
  return (
    <>
      <Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-7931PYGTY1"></Script>
<Script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-7931PYGTY1');
</Script>
        <title>Yash Shah | Article Page</title>
        <meta name="description" content="My Description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden sm:!overflow-x-hidden">
        <Layout>
          <AnimatedText
            text="What is Disregarded Entity?"
            className="!text-[#f5f5f5] mb-16 pt-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <Image
            src="/images/articles/tax-article-3.jpg"
            alt="What is Disregarded Entity?"
            className="w-full h-auto"
            layout="responsive"
            width={600} // Replace with the actual width of the image
            height={100} // Replace with the actual height of the image
          />

          <p className="mt-6">
            Disregarded entities are those business entities which are separated
            from its owners but everything of the disregarded entity flows
            through the owner for the US tax purposes. So, the disregarded
            entity is a pass-through entity only for the tax purpose.
          </p>
          <p className="mt-6">
            For the legal purposes, this entity exist but for the USA tax
            purposes, it does not exist. Hence disregarded entity does not
            required to file federal income tax since, the owner pays the
            disregarded entity&apos;s federal taxes on his/her personal tax
            return.
          </p>

          <h1 className="text-xl mt-6 font-bold">
            Election of Disregarded Entity:
          </h1>
          <p className="mt-6">
            While forming LLC, there are two alternative options to elect within
            75 days after beginning the tax year or anytime in the preceding tax
            year.
          </p>

          <ul className="mt-6 list-disc sm:!list-disc">
            <li>By filing form 8832, LLC may elect as a Corporation</li>
            <li>By filing form 2553, LLC may elect as an S corporation</li>
          </ul>
          <p className="mt-6 mb-3">
            If tax payer does not inform IRS by not electing any of the above
            entities, the LLC will be taxed in another manner by the default
            entity classification for the federal tax purpose.
          </p>

          <ul className="list-disc">
            <li>
              An LLC with two or more members will be classified as Partnership
              by default
            </li>
            <li>
              An LLC with only one member will be classified as Disregarded
              entity separate from its owner.
            </li>
          </ul>
          <h1 className="text-xl mt-6 font-bold">Advantages:</h1>
          <p className="mt-6">
            <strong>No double taxation:</strong> Unlike corporations, it is not
            subject to the double taxation. Where the corporations pays taxes on
            profit and that profit is again taxed to the owner&apos;s end once
            it&apos;s distributed to them as dividend.
          </p>
          <p className="mt-6">
            <strong>Simple tax Structure:</strong> Disregarded entity
            doesn&apos;t have to file its separate tax return. It&apos;s a very
            easy tax filing along with the owner&apos;s personal tax return.
          </p>
          <p className="mt-6">
            <strong>Protection to Limited Liability:</strong> It’s a separate
            entity as per law, the business is separate from owner’s personal
            assets.
          </p>
          <h1 className="text-xl mt-6 font-bold">Disadvantages:</h1>
          <p className="mt-6">
            <strong>Other taxes:</strong> This entity is disregarded by IRS only
            for the purpose of federal taxes, but if taxpayer have any employees
            or if LLC owes any excise tax liability, the LLC may be liable for
            the employment or Excise taxes.
          </p>
          <p className="mt-6">
            <strong>Self-employment taxes:</strong> As, every transactions of
            disregarded entity will be flowing in the owner’s personal tax
            return, he/she will be liable to pay self-employment taxes.
          </p>
        </Layout>
      </main>
    </>
  );
}

export default article3;
