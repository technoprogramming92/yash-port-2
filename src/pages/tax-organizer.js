import React from "react";
import Head from "next/head";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";
import { Download } from "../components/Icons";
import Layout from "@/components/Layout";

import TransitionEffect from "@/components/TransitionEffect";
import Script from "next/script";

function articles() {
  return (
    <>
      <Head>
        <title>Tax Organizer | EA Yash Shah</title>
        <meta
          name="description"
          content="Get the latest tax tips and resources, including expert advice on US tax return filing, tax planning, and professional services."
        />
        <meta
          name="keyword"
          content="Tax services,Tax tips ,tax filing in NYC,tax filing in brooklyn,tax planning,file us tax return online,us tax return,tax return united states,Tax consultant New York,Tax consultant brooklyn,irs enrolled agent,income tax in the united states,taxation in the united states,taxes in the usa,what is ea,what is an enrolled agent,tax consultant near me,tax advisor near me,tax consultant,tax filing near me,tax assistance,professional tax return filing,tax preparer, efile,return of income,tax filing,tax season 2025,tax planner,tax planner in nyc,tax planner in brooklyn,tax prep services in nyc,tax professional in nyc,tax professional in brooklyn,tax professional,tax preparer in nyc,tax prep services in brooklyn,tax preparer in brooklyn"
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
          content="US Tax Planning & Filing Articles | EA Yash Shah"
        />
        <meta
          name="og:description"
          content="Get the latest tax tips and resources, including expert advice on US tax return filing, tax planning, and professional services."
        />
        <meta property="og:image" src="" />
        <meta name="og:email" content="eayashshah@gmail.com" />
        <meta name="og:phone_number" content="+91 8000 315213" />
        <meta name="og:url" content="https://www.eayashshah.com/articles" />
        <meta name="twitter:card" content="" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />
        <meta
          name="twitter:title"
          content="US Tax Planning & Filing Articles | EA Yash Shah"
        />
        <meta
          name="twitter:description"
          content="Get the latest tax tips and resources, including expert advice on US tax return filing, tax planning, and professional services."
        />

        <meta charset="utf-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden sm:!overflow-x-hidden">
        <Layout className="!p-10 !pt-1">
          <div className="flex flex-row !space-x-2 mt-5 sm:!mt-7">
            <h2 className="font-bold text-4xl mt-9 mb-6 w-full text-left md:text-6xl xs:text-4xl md:mb-5">
              Tax Organizer Instructions
            </h2>
            <a href="/EYS Tax Organizer.pdf" download="EYS Tax Organizer">
              <button
                href="/EYS Tax Organizer.pdf"
                download="EYS Tax Organizer"
                className="flex items-center bg-[#eb6e00] text-[#f5f5f5] text-nowrap p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light  border-2 border-solid border-transparent hover:border-[#f5f5f5] md:p-2 md:px-4 md:text-base"
              >
                Download Tax Organizer
                <Download className={"w-6 ml-1"} />
              </button>{" "}
            </a>
          </div>
          <h2 className="font-bold text-4xl mt-9 mb-6 w-full text-left md:text-6xl xs:text-4xl md:mb-5">
            Follow below steps to fill out and submit tax organizer
          </h2>
          <ol className="list-decimal ml-8 sm:!ml-4 sm:!mb-7 mb-9">
            <li>
              Download and Install Adobe Acrobat Reader
              <ul className="list-disc ml-5 sm:!mb-7 mb-9">
                <li>
                  <strong>Why?</strong> Our tax organizer is a fillable PDF
                  form. To properly open, fill, and save it, you&apos;ll need
                  Adobe Acrobat Reader.
                </li>
                <li>
                  <strong>How</strong>:
                  <ol className="list-decimal ml-8 sm:!ml-5 sm:!mb-7 mb-9">
                    <li>
                      Click on this link:{" "}
                      <a
                        href="https://get.adobe.com/uk/reader/"
                        target="_blank"
                        className="underline"
                      >
                        Download Adobe Acrobat Reader
                      </a>
                    </li>
                    <li>
                      Follow the on-screen instructions to download and install
                      Adobe Acrobat Reader on your computer.
                    </li>
                    <li>
                      If you already have Adobe Acrobat Reader installed, please
                      ensure it is up-to-date.
                    </li>
                  </ol>
                </li>
              </ul>
            </li>
            <li>
              Download the Tax Organizer PDF
              <ul className="list-disc ml-8 sm:!ml-4 sm:!mb-7 mb-9">
                <li className="underline">
                  <a href="/EYS Tax Organizer.pdf" download="EYS Tax Organizer">
                    Click here and download tax organizer
                  </a>
                </li>
              </ul>
            </li>
            <li>Open the PDF with Adobe Acrobat Reader</li>
            <li className="mt-6">
              Fill Out the Tax Organizer Form
              <ul className="list-disc ml-8 sm:!ml-4 sm:!mb-7 mb-9">
                <li>
                  Carefully fill out all the required fields in the tax
                  organizer.
                </li>
                <li>Please ensure all information is accurate and complete.</li>
                <li>
                  Save your progress frequently by clicking the &quot;File&quot;
                  menu and selecting &quot;Save&quot; or by pressing Ctrl+S
                  (Windows) or Command+S (Mac).
                </li>
              </ul>
            </li>
            <li>
              Submit the Completed Form
              <ul className="list-disc ml-8 sm:!ml-4 sm:!mb-7 mb-9">
                <li>
                  Once you have completed the tax organizer, click the
                  <strong>&quot;Submit&quot;</strong> button located within the
                  form.
                </li>
                <li>
                  A security popup from Adobe Acrobat Reader will appear, asking
                  you to <strong>&quot;Allow&quot;</strong> or{" "}
                  <strong>&quot;Block&quot;</strong> the form to connect to an
                  external link.
                </li>
                <li>
                  <strong>Click &quot;Allow&quot;</strong>. This is necessary
                  for the form to submit your data to our secure server.
                </li>
                <li>
                  <strong>Error Dialogue (Expected)</strong>: After clicking
                  allow, an error dialogue box may appear. This is a normal part
                  of the submission process and can be disregarded.
                </li>
                <li>
                  <strong>Success Page Redirection</strong>: After the form is
                  successfully submitted, you will be automatically redirected
                  to a success page.
                </li>
                <li>
                  <strong>Confirmation Message</strong>: The success page will
                  display the message: &quot;Your form has been submitted
                  successfully.&quot;
                </li>
                <li>
                  <strong>Verification</strong>: If you see the success message,
                  it confirms that your filled form has been sent to us for
                  processing.
                </li>
              </ul>
            </li>
          </ol>
        </Layout>
      </main>
    </>
  );
}

export default articles;
