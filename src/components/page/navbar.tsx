"use client";

import { useState, useEffect, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import HarcLogo from "@/public/images/Harc_Logo.webp";
import Dropdown from "@/components/page/dropdown";
import Sidebar from "@/components/page/sidebar";
import { motion } from "motion/react";

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
      <motion.nav
        className="bg-harc-darkblue relative top-0 right-0 left-0 z-50 w-full"
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        {/* Desktop container (centered, content split left/right) */}
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Mobile hamburger (absolute so it doesn't affect layout) */}
            {mounted && (
              <button
                className="absolute top-3 left-3 z-50 md:hidden"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((prev) => !prev)}
                type="button"
              >
                {open ? (
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      d="M6 6l12 12M6 18L18 6"
                    />
                  </svg>
                ) : (
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

            {/* LEFT: Logo */}
            <div className="flex items-center pl-10 md:pl-0">
              <Link href="/" onClick={() => setOpen(false)}>
                <Image
                  src={HarcLogo}
                  alt="Harc Logo"
                  width={140}
                  height={36}
                  className="object-contain"
                />
              </Link>
            </div>

            {/* RIGHT: Desktop links + components (hidden on mobile) */}
            <div className="text-harc-gray font-harc-main text-md hidden items-center space-x-6 md:flex">
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

              <div className="flex items-center gap-3">
                {/* ... your social links unchanged ... */}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile overlay (behind drawer) */}
        <div
          className={`bg-opacity-40 fixed inset-0 z-40 bg-black transition-opacity duration-300 ease-in-out md:hidden ${
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Mobile drawer (slides in from left) */}
        <motion.aside
          className="bg-harc-darkblue text-harc-gray fixed top-0 left-0 z-50 h-full w-full p-6 md:hidden"
          initial={{ x: -100 }}
          animate={{ x: open ? 0 : -100 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          onClick={handleSidebarClick}
        >
          {/* ... your drawer content unchanged ... */}
        </motion.aside>
      </motion.nav>
    </>
  );
};

export default Navbar;
