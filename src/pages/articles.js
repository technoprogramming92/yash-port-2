import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import FeaturedArticle from "@/components/FeaturedArticle";
import article1 from "../../public/images/articles/tax-article-1.jpg";
import article2 from "../../public/images/articles/tax-article-2.jpg";
import article3 from "../../public/images/articles/tax-article-3.jpg";
import article4 from "../../public/images/articles/tax-article-4.png";
import article5 from "../../public/images/articles/tax-article-5.png";
import Layout from "@/components/Layout";
import MiniArticle from "@/components/MiniArticle";
import TransitionEffect from "@/components/TransitionEffect";
import Script from "next/script";

function articles() {
  return (
    <>
      <Head>
        <title>US Tax Planning & Filing Articles | EA Yash Shah</title>
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
        <meta property="og:image" content="" />
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
          {/*remove class for default padding */}
          <AnimatedText
            text="EYS Articles"
            className="!text-[#f5f5f5] mb-16 pt-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="!text-[#f5f5f5] grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="What if you can't pay your taxes?"
              summary="If you can’t pay your taxes, don’t panic - The IRS offers payment alternatives if taxpayers can’t pay what they owe in full. But remember one thing, to qualify for that plans, first of all you must have filed your tax return on time. Below are the Tax Payment options."
              time="3 min read"
              link="/article1"
              img={article1}
            />

            <FeaturedArticle
              title="Form W-8 BEN: Important to know about this for non-US residents who generate income from USA."
              summary="Generally US government taxes non-residents for income sourced out of USA at 30%. But if....."
              time="9 min read"
              link="/article2"
              img={article2}
            />
            <FeaturedArticle
              title="What is Disregarded Entity?"
              summary="Disregarded entities are those business entities which are separated from its owners but everything of the disregarded entity flows through the owner for the US tax purposes. So, the disregarded entity is a pass-through entity only for the tax purpose."
              time="9 min read"
              link="/article3"
              img={article3}
            />

            <FeaturedArticle
              title="Amend the Return or Supersede the Return? Let’s Clear It Up!"
              summary="A very common question that is often raised when making changes in a tax return is “when to file an amended return and when to supersede the return”? Let's clear things up by making the distinction between them."
              time="2 min read"
              link="/article4"
              img={article4}
            />
            <FeaturedArticle
              title="Why is a tax organizer so important?"
              summary="A Tax Organizer is a valuable tool for both tax professionals and taxpayers, making the tax filing process more efficient, accurate, and stress-free."
              time="2 min read"
              link="/article5"
              img={article5}
            />
          </ul>
          {/* <h2 className="font-bold !text-[#f5f5f5] text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <MiniArticle
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article3}
              date="Dec 23, 2024"
              link="www.example.com"
            />

            <MiniArticle
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article2}
              date="Dec 23, 2024"
              link="www.example.com"
            />

            <MiniArticle
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article1}
              date="Dec 23, 2024"
              link="www.example.com"
            />

            <MiniArticle
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article3}
              date="Dec 23, 2024"
              link="www.example.com"
            />

            <MiniArticle
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article3}
              date="Dec 23, 2024"
              link="www.example.com"
            />

            <MiniArticle
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article3}
              date="Dec 23, 2024"
              link="www.example.com"
            />
          </ul> */}
          <br />
          <br />
          <br />
          <br />
          <p className="text-[#eb6e00] text-center font-bold">
            People also search for :{" "}
          </p>
          <p className="text-justify">
            Tax services | Tax tips | tax filing in NYC | tax filing in brooklyn
            | tax planning | file us tax return online | us tax return | tax
            return united states | Tax consultant New York | Tax consultant
            brooklyn | irs enrolled agent | income tax in the united states |
            taxation in the united states | taxes in the usa | what is ea | what
            is an enrolled agent | tax consultant near me | tax advisor near me
            | tax consultant | tax filing near me | tax assistance |
            professional tax return filing | tax preparer | efile | return of
            income | tax filing | tax season 2025 | tax planner |tax planner in
            nyc | tax planner in brooklyn | tax prep services in nyc | tax
            professional in nyc | tax professional in brooklyn | tax
            professional | tax preparer in nyc | tax prep services in brooklyn |
            tax preparer in brooklyn
          </p>
        </Layout>
      </main>
    </>
  );
}

export default articles;
