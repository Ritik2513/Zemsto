import React from "react";
import { Mail, Share2, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black pt-16">
      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 pb-14">
        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-bold text-gray-300">Zemsto</h2>
          <p className="text-gray-400 mt-4 max-w-sm">
            Elevating the standard of education financing through innovation and
            unparalleled rewards.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold text-gray-300 mb-4">Quick Links</h3>
          <ul className="space-y-0 text-gray-500">
            <Link to="/terms">
              <li className="hover:text-blue-900 cursor-pointer">
                Terms of Service
              </li>
            </Link>

            <Link to="/privacy" className="hover:text-blue-900 cursor-pointer">
              Privacy Policy
            </Link>
            <li className="hover:text-blue-900 cursor-pointer">Security</li>
            <li className="hover:text-blue-900 cursor-pointer">About Us</li>
          </ul>
        </div>

        {/* CONTACT RIGHT */}
        <div>
          <h3 className="font-semibold text-gray-300 mb-4">Contact Support</h3>
          <p className="text-gray-300 mb-4">
            Have questions about our plans or rewards program? Our team is here
            to help 24/7.
          </p>

          <div className="flex items-center gap-2 text-blue-400 font-medium mb-6">
            <Mail size={18} />
            info@zemsto.com
          </div>

          <div className="text-sm text-gray-600 space-y-4">
            <div>
              <p className="font-semibold text-gray-400">Registered Address</p>
              <p>
                Steller Greens Flat no-B 804, 8th Floor, D-Block <br />
                Sector-44, Noida, Uttar Pradesh 201303, India
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-400">Office Address</p>
              <p>
                507, 5th Floor, G - 14, Sector - 3 <br />
                Noida, Uttar Pradesh 201301
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t text-center py-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} Zemsto Financial Excellence. All rights
        reserved.
        {/* BIG WATERMARK STRIP */}
        <div className="relative overflow-hidden py-10">
          <h1
            className="w-[120vw] -ml-[10vw] text-center
    text-[80px] sm:text-[120px] md:text-[190px] lg:text-[220px]
    font-extrabold tracking-[0.25em] leading-none select-none
    text-gray-300/40
    drop-shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
            style={{
              WebkitTextStroke: "1px rgba(0,0,0,0.06)",
              textShadow: "0 30px 60px rgba(0,0,0,0.08)",
            }}
          >
            ZEMSTO
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
