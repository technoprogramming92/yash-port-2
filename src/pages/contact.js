import React from "react";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import Layout from "@/components/Layout";

function contact() {
  return (
    <>
      <Head>
      <title>Get in Touch with an Enrolled Agent | EA Yash Shah</title>
    <meta
      name="description"
      content="Contact EA Yash Shah for expert tax preparation, IRS form assistance, and enrolled agent services in NYC and Brooklyn. Start your tax journey now!"
    />
    <meta
      name="keyword"
      content="tax services,tax service near me,tax preparer near me,tax consultant near me, tax preparer in brooklyn,us tax consultation,file us tax return online,tax season,tax season in us, get in touch with an enrolled agent,Affordable tax filing assistance near New York City,Experienced tax consultants for freelancers in Brooklyn,Certified tax preparers near Brooklyn,Tax planning for independent contractors in NYC,Tax planning for independent contractors in brooklyn,what is an enrolled agent"
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
      content="Get in Touch with an Enrolled Agent | EA Yash Shah"
    />
    <meta
      name="og:description"
      content="Contact EA Yash Shah for expert tax preparation, IRS form assistance, and enrolled agent services in NYC and Brooklyn. Start your tax journey now!"
    />
    <meta
      property="og:image"
      content=""
    />
    <meta name="og:email" content="eayashshah@gmail.com" />
    <meta name="og:phone_number" content="+91 8000 315213" />
    <meta name="og:url" content="https://www.eayashshah.com/contact" />
    <meta name="twitter:card" content="" />
    <meta name="twitter:site" content="" />
    <meta name="twitter:creator" content="" />
    <meta
      name="twitter:title"
      content="Get in Touch with an Enrolled Agent | EA Yash Shah"
    />
    <meta
      name="twitter:description"
      content="Contact EA Yash Shah for expert tax preparation, IRS form assistance, and enrolled agent services in NYC and Brooklyn. Start your tax journey now!"
    />
    
    <meta charset="utf-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden sm:!overflow-x-hidden bg-black">
        <Layout className="sm:!p-8 sm:!pt-16">
          <div className="flex flex-col items-center justify-center w-full max-w-lg p-8 rounded-lg border-2 border-white backdrop-blur-md shadow-lg sm:max-w-md xs:max-w-sm mx-auto sm:!mb-4">
            <h2 className="text-2xl font-bold text-[#eb6e00] mb-6 md:text-xl xs:text-lg">
              Contact
            </h2>
            <form
              className="w-full space-y-6"
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              {/* Hidden field */}
              <input
                type="hidden"
                name="access_key"
                value="898f3f53-9ff5-47a1-9d9e-8e0a32bccf01"
              ></input>
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eb6e00] sm:px-3 sm:py-2 xs:px-2 xs:py-1 text-black"
                  required
                />
              </div>
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eb6e00] sm:px-3 sm:py-2 xs:px-2 xs:py-1 text-black"
                  required
                />
              </div>
              {/* Query Description Field */}
              <div>
                <label
                  htmlFor="query"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Query Description
                </label>
                <textarea
                  id="query"
                  name="query"
                  rows="4"
                  placeholder="Enter your query here in brief"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eb6e00] sm:px-3 sm:py-2 sm:rows-3 xs:px-2 xs:py-1 xs:rows-2 text-black"
                  required
                ></textarea>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 text-white bg-[#eb6e00] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 sm:py-2 xs:py-1 hover:bg-light  border-2 border-solid border-transparent hover:border-[#f5f5f5] md:p-2 md:px-4 md:text-base"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="w-full mt-20 -mb-60">
            {/*
             */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.727611811469!2d72.53775657436681!3d22.997041817282263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e853c387b2353%3A0xd47d05de86d46b51!2sSiddhi%20Vinayak%20Arcade!5e0!3m2!1sen!2sin!4v1736334779577!5m2!1sen!2sin"
              className="w-full h-[600px] border-0 mb-0"
              allowFullScreen="true"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default contact;
