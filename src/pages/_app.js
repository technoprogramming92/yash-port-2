import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer2";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});
export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        {/* Google Analytics Script */}
      <script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-7931PYGTY1"
      />
      <script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-7931PYGTY1');
        `}
      </script>

      {/* Render the Page Component */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon_io/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicon_io/site.webmanifest" />

      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}
      >
        <NavBar></NavBar>
        <AnimatePresence mode="wait" layoutEffect={false}>
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
