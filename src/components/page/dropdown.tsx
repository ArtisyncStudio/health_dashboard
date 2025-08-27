"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, easeIn } from "motion/react";

const pages = [
  { name: "Home", path: "/" },
  { name: "Health Access", path: "/healthaccess" },
  { name: "Mental Health", path: "/mentalhealth" },
  { name: "Air Quality", path: "/airquality" },
];

const Dropdown: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [manualOpen, setManualOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const MenuAnimation = (index: number) => ({
    initial: { y: 10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: {
      delay: (index + 1) * 0.05 + 0.55,
      duration: 0.3,
      ease: easeIn,
    },
  });

  const handleMouseEnter = () => {
    if (!manualOpen) setOpen(true);
  };

  const handleMouseLeave = () => {
    if (!manualOpen) setOpen(false);
  };

  const handleClick = () => {
    if (manualOpen) {
      setManualOpen(false);
      setOpen(false);
    } else {
      setManualOpen(true);
      setOpen(true);
    }
  };

  return (
    <div
      ref={dropdownRef}
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ cursor: "pointer" }} onMouseDown={handleClick}>
        Menu
        <span className="pl-1">{open ? "▲" : "▼"}</span>
      </div>
      {open && (
        <div className="text-harc-darkgray absolute top-[110%] left-0 z-[1000] min-w-[150px] bg-white shadow-lg">
          {pages.map((page, index) => (
            <motion.div
              key={page.name}
              initial={MenuAnimation(index).initial}
              animate={MenuAnimation(index).animate}
              transition={{
                ...MenuAnimation(index).transition,
                delay: (index + 1) * 0.05 + 0.25,
                duration: 0.3,
                ease: easeIn,
              }}
            >
              <Link
                href={page.path}
                className="flex flex-col p-2"
                onClick={() => {
                  setOpen(false);
                  setManualOpen(false);
                }}
              >
                {page.name}
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
