import Link from "next/link";

const Footer2 = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Use flexbox for horizontal alignment */}
        <div className="flex flex-wrap gap-8 py-12">
          {/* Column 1 */}
          <div className="flex-1 min-w-[200px]">
            <h4 className="text-lg font-semibold mb-4">EYS</h4>
            <ul>
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:underline">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="flex-1 min-w-[200px]">
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex-1 min-w-[200px]">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Tax Consulting
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tax Preparation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tax Filing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Solve IRS Issues
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="flex-1 min-w-[200px]">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul>
              <li>
                <a
                  href="mailto:eayashshah@gmail.com"
                  className="hover:underline"
                  target="_blank"
                >
                  Email Us
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/QECjK7jBx2knMBEb9"
                  target="_blank"
                  className="hover:underline"
                >
                  Location
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Support Chat
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm !pb-3">
          <p>
            &copy; 2025 EYS All rights reserved. | Created by{" "}
            <a href="www.ignitax.com">IGNITAX</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
