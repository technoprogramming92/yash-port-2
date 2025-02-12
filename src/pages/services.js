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
        <title>Services | EA Yash Shah</title>
      </Head>
      <AnimatePresence mode="wait">
        <TransitionEffect />
      </AnimatePresence>

      <main className="flex w-full flex-col items-center justify-center sm:!overflow-x-hidden">
        <Layout className="!pt-16 sm:!pt-20">
          <ServicesList />
        </Layout>
      </main>
    </>
  );
}

export default services;
