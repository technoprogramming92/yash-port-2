import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";

import TransitionEffect from "@/components/TransitionEffect";
import { AnimatePresence } from "framer-motion";
import ServicesList from "@/components/ServicesList";

function services() {
  return (
    <>
      <Head>
        <title>Bookkeeping & Financial Services | EA Yash Shah</title>
        <meta
          name="description"
          content="Reliable bookkeeping and financial services to manage your accounts, tax compliance, and financial planning. Optimize your business finances with expert solutions."
        />
        <meta
          name="keyword"
          content="Individual tax preparation in brooklyn near me, Individual tax preparation in nyc, tax preparation & filing, tax preparation & filing near me, tax preparation & filing new york, corporate tax filing 1120 1120-S, where to file your taxes for Form 1120-S, what is form 1065, how to file form 1065, partnership tax returns  form 1065, bookkeeping & financial services in brooklyn new york, global tax consultant, financial statement preparation"
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
          content="Bookkeeping & Financial Services | EA Yash Shah"
        />
        <meta
          name="og:description"
          content="Reliable bookkeeping and financial services to manage your accounts, tax compliance, and financial planning. Optimize your business finances with expert solutions."
        />
        <meta property="og:image" content="" />
        <meta name="og:email" content="eayashshah@gmail.com" />
        <meta name="og:phone_number" content="+91 8000 315213" />
        <meta name="og:url" content="https://www.eayashshah.com/" />
        <meta name="twitter:card" content="" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />
        <meta
          name="twitter:title"
          content="Bookkeeping & Financial Services | EA Yash Shah"
        />
        <meta
          name="twitter:description"
          content="Reliable bookkeeping and financial services to manage your accounts, tax compliance, and financial planning. Optimize your business finances with expert solutions."
        />
        {/* on page seo ends  */}
        <meta charset="utf-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <AnimatePresence mode="wait">
        <TransitionEffect />
      </AnimatePresence>

      <main className="flex w-full flex-col items-center justify-center sm:!overflow-x-hidden">
        <Layout className="!pt-16 sm:!pt-20">
          <ServicesList />
          <p className="text-[#eb6e00] text-center font-bold">
            People also search for :{" "}
          </p>
          <p className="text-justify">
            Individual tax preparation in brooklyn near me | Individual tax
            preparation in nyc | tax preparation & filing | tax preparation &
            filing near me | tax preparation & filing new york | corporate tax
            filing 1120 1120-S | where to file your taxes for Form 1120-S |what
            is form 1065 | how to file form 1065 | partnership tax returns form
            1065 | bookkeeping & financial services in brooklyn new york |
            global tax consultant | financial statement preparation
          </p>
        </Layout>
      </main>
    </>
  );
}

export default services;
