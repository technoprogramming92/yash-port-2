import React from "react";
import Script from "next/script";
function Layout({ children, className }) {
  return (
     {/* ✅ Google Analytics - Loads Once Globally */}
     <Script
     strategy="afterInteractive"
     src="https://www.googletagmanager.com/gtag/js?id=G-7931PYGTY1"
   />
   <Script id="google-analytics" strategy="afterInteractive">
     {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());

       gtag('config', 'G-7931PYGTY1');
     `}
   </Script>

   {/* ✅ Layout wraps all pages - Scripts remain effective */}
    <div
      className={`w-full h-full inline-block z-0 bg-light p-32 !text-[#f5f5f5]  xl:p-24 lg:p-16 md:p-12 sm:!p-1 ${className}`}
    >
      {children}
    </div>
  );
}

export default Layout;
