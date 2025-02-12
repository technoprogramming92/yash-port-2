function ServiceList() {
  return (
    <>
      <h2 className="font-bold text-4xl mb-6 w-full text-left md:text-6xl xs:text-4xl md:mb-5">
        Tax Preparation & Filing
      </h2>
      <ul className="list-disc ml-8 sm:!ml-9 sm:!mb-7 mb-9">
        <li>Individual Tax Preparation (1040)</li>
        <li>Corporate Tax Filing (1120, 1120-S)</li>
        <li>Partnership Tax Returns (1065)</li>
        <li>State Tax Return Filing</li>
        <li>Multi-State Tax Compliance</li>
        <li>Amended Tax Returns</li>
        <li>Superseding Tax Returns</li>
      </ul>
      <h2 className="font-bold text-4xl mb-6 w-full text-left md:text-6xl xs:text-4xl md:mb-5 mt-3">
        Foreign Compliance &amp; Reporting
      </h2>
      <ul className="list-disc sm:!list-disc ml-8 sm:!ml-9 sm:!mb-7 mb-9">
        <li>FBAR (Foreign Bank Account Reporting)</li>
        <li>FATCA Compliance (Form 8938)</li>
        <li>International Tax Consulting</li>
        <li>Non-Resident Tax Filing (1040-NR)</li>
      </ul>
      <h2 className="font-bold text-4xl mb-6 w-full text-left md:text-6xl xs:text-4xl md:mb-5 mt-3">
        Bookkeeping & Financial Services
      </h2>
      <ul className="list-disc ml-8 sm:!ml-9 sm:!mb-7 mb-9">
        <li>Monthly/Quarterly/Annual Bookkeeping</li>
        <li>Financial Statement Preparation</li>
        <li>QuickBooks Setup &amp; Support</li>
      </ul>
    </>
  );
}

export default ServiceList;
