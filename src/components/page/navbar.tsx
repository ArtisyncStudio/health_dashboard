"use client";
import { useState, useEffect, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import HarcLogo from "@/public/images/Harc_Logo.webp";
import Dropdown from "@/components/page/dropdown";
import Sidebar from "@/components/page/sidebar";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent closing menu when clicking inside the sidebar
  const handleSidebarClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      <nav className="relative">
        {/* Hamburger Icon */}
        {mounted && (
          <button
            className="absolute top-4 left-4 z-30 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((prev) => !prev)}
            type="button"
          >
            {open ? (
              // Close Icon (X)
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M6 6l12 12M6 18L18 6"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            )}
          </button>
        )}

        {/* Off-canvas menu overlay */}
        <div
          className={`bg-opacity-40 fixed inset-0 z-20 bg-black transition-opacity duration-300 ${
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          } md:hidden`}
          onClick={() => setOpen(false)}
        />

        <aside
          className={`bg-harc-darkblue text-harc-gray font-harc-main text-md fixed top-0 left-0 z-30 h-full w-64 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          } md:bg-harc-darkblue md:static md:flex md:w-full md:translate-x-0 md:flex-col`}
          onClick={handleSidebarClick}
        >
          {/* Close button for mobile */}
          <button
            className="absolute top-4 right-4 md:hidden"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            type="button"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path
                stroke="#c3c6c8"
                strokeWidth="2"
                strokeLinecap="round"
                d="M6 6l12 12M6 18L18 6"
              />
            </svg>
          </button>
          <div className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-end md:gap-6 md:p-4">
            <div className="flex flex-col gap-2 md:flex-row md:gap-5">
              <Link
                href="https://harcdata.org/donate/"
                target="_blank"
                onClick={() => setOpen(false)}
              >
                Donate
              </Link>
              <Link
                href="https://harcdata.org/contact-us/"
                target="_blank"
                onClick={() => setOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                href="https://harcdata.org/subscribe/"
                target="_blank"
                onClick={() => setOpen(false)}
              >
                Join Our Email List
              </Link>
              <Sidebar />
              <Dropdown />
            </div>
            <div className="mt-2 flex gap-3 md:mt-0">
              <Link
                href="https://www.facebook.com/HARCData"
                target="_blank"
                aria-label="Facebook"
                onClick={() => setOpen(false)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fill="#c3c6c8"
                    d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"
                  />
                </svg>
              </Link>
              <Link
                href="https://x.com/harcdata"
                target="_blank"
                aria-label="X (Twitter)"
                onClick={() => setOpen(false)}
              >
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
              </Link>
              <Link
                href="https://www.linkedin.com/company/harc-inc/"
                target="_blank"
                aria-label="LinkedIn"
                onClick={() => setOpen(false)}
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
              </Link>
              <Link
                href="https://www.instagram.com/harcdata"
                target="_blank"
                aria-label="Instagram"
                onClick={() => setOpen(false)}
              >
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
                  <circle fill="#c3c6c8" cx="14.87" cy="5.26" r="1.09"></circle>
                  <path
                    fill="#c3c6c8"
                    d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </aside>
      </nav>
      <div className="flex justify-center px-6 pb-4 md:justify-start md:px-4">
        <Image
          src={HarcLogo}
          alt="Harc Logo"
          className="w-1/3 md:w-1/6 lg:w-1/8"
        />
      </div>
    </>
  );
};

export default Navbar;
