import React from "react";

function Layout({ children, className }) {
  return (
    
    <div
      className={`w-full h-full inline-block z-0 bg-light p-32 !text-[#f5f5f5]  xl:p-24 lg:p-16 md:p-12 sm:!p-1 ${className}`}
    >
      {children}
    </div>
  );
}

export default Layout;
