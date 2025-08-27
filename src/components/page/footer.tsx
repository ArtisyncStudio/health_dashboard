"use client";

import Link from "next/link";
import Image from "next/image";
import { Motion, spring } from "react-motion";

import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <Motion
      defaultStyle={{ footerY: 16, footerO: 0 }}
      style={{ footerY: spring(0), footerO: spring(1) }}
    >
      {(style) => (
        <footer
          className="bg-gray-100 px-10 py-12 text-sm text-gray-800"
          style={{
            transform: `translateY(${style.footerY}px)`,
            opacity: style.footerO,
          }}
        >
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            <div>
              <h2 className="mb-4 font-semibold tracking-widest">FOLLOW US</h2>
              <div className="mb-4 flex gap-4 text-xl">
                <a href="https://www.facebook.com/HARCData" target="_blank">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fill="#c3c6c8"
                      d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"
                    ></path>
                  </svg>
                </a>
                <a href="https://x.com/harcdata" target="_blank">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fill="#c3c6c8"
                      d="m15.08,2.1h2.68l-5.89,6.71,6.88,9.1h-5.4l-4.23-5.53-4.84,5.53H1.59l6.24-7.18L1.24,2.1h5.54l3.82,5.05,4.48-5.05Zm-.94,14.23h1.48L6,3.61h-1.6l9.73,12.71h0Z"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/harc-inc/"
                  target="_blank"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fill="#c3c6c8"
                      d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"
                    ></path>
                    <path
                      fill="#c3c6c8"
                      d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"
                    ></path>
                  </svg>
                </a>
                <a href="https://www.instagram.com/harcdata/" target="_blank">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fill="#c3c6c8"
                      d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"
                    ></path>
                    <circle
                      fill="#c3c6c8"
                      cx="14.87"
                      cy="5.26"
                      r="1.09"
                    ></circle>
                    <path
                      fill="#c3c6c8"
                      d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"
                    ></path>
                  </svg>
                </a>
              </div>

              <div className="space-y-1 text-sm">
                <p className="font-semibold">HARC, Inc.</p>
                <div className="flex items-start gap-2">
                  <MdLocationOn className="mt-1" />
                  <p>
                    41550 Eclectic Street
                    <br />
                    Palm Desert, CA 92260
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <MdPhone />
                  <p>760-404-1945</p>
                </div>
                <div className="flex items-center gap-2">
                  <MdEmail />
                  <a
                    href="mailto:staff@HARCdata.org"
                    className="text-blue-600 hover:underline"
                  >
                    staff@HARCdata.org
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-4 font-semibold tracking-widest">RESOURCES</h2>
              <ul className="space-y-2">
                {[
                  { label: "Media", href: "https://harcdata.org/media/" },
                  {
                    label: "Infographics",
                    href: "https://harcdata.org/infographics/",
                  },
                  {
                    label: "News Articles",
                    href: "https://harcdata.org/news-articles/",
                  },
                  { label: "Donate", href: "https://harcdata.org/donate/" },
                  {
                    label: "Contact Us",
                    href: "https://harcdata.org/contact-us/",
                  },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      target="_blank"
                      className="hover:underline"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 font-semibold tracking-widest">
                HARC EMAIL LIST
              </h2>
              <div className="flex-col space-y-4">
                <Link
                  href={"https://harcdata.org/subscribe/"}
                  className="bg-harc-darkblue w-full rounded px-4 py-2 font-semibold text-white"
                >
                  Join Our Email List
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <h2 className="mb-4 text-center font-semibold tracking-widest md:text-right">
                GUIDESTAR CANDID
                <br />
                PLATINUM SEAL OF
                <br />
                TRANSPARENCY
              </h2>

              <Image
                src={"/images/candid.webp"}
                alt="Candid Seal"
                width={200}
                height={200}
              />

              <a
                href="#top"
                className="mt-4 text-sm text-gray-700 hover:underline"
              >
                ↑ BACK TO TOP
              </a>
            </div>
          </div>

          <div className="mt-10 text-center text-xs text-gray-500">
            EIN: 20-5719074 <br />© 2025 All rights reserved.
          </div>
        </footer>
      )}
    </Motion>
  );
};

export default Footer;
