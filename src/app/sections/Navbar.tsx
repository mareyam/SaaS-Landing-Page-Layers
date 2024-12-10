'use client';
import Image from 'next/image';
import logoImage from '../assets/images/logo.svg';
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TabProps, CursorProps } from '../types/common';
import { navLinks } from '../json/features';
import Hamburger from '../components/Hamburger';

export default function Navbar() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 2,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <>
      <div className=" max-h-[100px] overflow-hidden hidden md:block relative">
        <div className="max-h-[100px] overflow-hidden w-full bg-black mt-4 flex items-center justify-between p-4 border border-gray-500 rounded-full bg-black">
          <AnimatePresence>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <Image src={logoImage} alt="Logo" width={80} height={80} />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="block md:hidden mt-4"
            >
              <button
                aria-label="Login"
                className="w-full bg-green-500 text-white font-medium text-sm py-2 px-6 rounded-full hover:bg-green-600 transition"
              >
                Login
              </button>
              <button
                aria-label="Signup"
                className="w-full mt-2 border border-green-500 text-green-500 font-medium text-sm py-2 px-6 rounded-full hover:bg-green-500 hover:text-white transition"
              >
                Signup
              </button>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="hidden md:flex gap-4"
            >
              <motion.button
                aria-label="Login"
                className="bg-green-500 text-white font-medium text-sm py-2 px-6 rounded-full hover:bg-green-600 transition"
              >
                Login
              </motion.button>
              <motion.button
                aria-label="Signup"
                className="border border-green-500 text-green-500 font-medium text-sm py-2 px-6 rounded-full hover:bg-green-500 hover:text-white transition"
              >
                Signup
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="fixed top-6 z-50 flex w-full justify-center align-center">
          <AnimatePresence>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              // ${open ? 'flex' : 'hidden'}
              className={
                'fixed z-50 w-fit right-0 mx-4 border border-gray-900 flex-col md:flex md:flex-row md:items-center absolute md:static top-full bg-black md:bg-transparent p-4 md:p-0 md:border-0 rounded-2xl md:rounded-none overflow-hidden'
              }
            >
              <motion.ul
                variants={itemVariants}
                onMouseLeave={() => {
                  setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                  }));
                }}
                className="border border-gray-500 relative mx-auto flex w-fit rounded-full bg-black p-1 bg-opacity-70 backdrop-blur-sm"
              >
                {navLinks.map((link, index) => (
                  <Tab
                    key={index}
                    index={index}
                    setPosition={setPosition}
                    setSelectedIndex={setSelectedIndex}
                    selectedIndex={selectedIndex}
                  >
                    {link.name}
                  </Tab>
                ))}
                <Cursor position={position} />
              </motion.ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <MobileNab />
    </>
  );
}

const Tab = ({
  children,
  setPosition,
  setSelectedIndex,
  selectedIndex,
  index,
}: TabProps) => {
  const ref = useRef<HTMLLIElement | null>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={() => setSelectedIndex(index)}
      className={`relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase  md:px-5 md:py-3 md:text-base ${
        selectedIndex === index
          ? 'bg-neutral-300 rounded-full text-orange '
          : 'text-white mix-blend-difference'
      }`}
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: CursorProps) => {
  return (
    <motion.li
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 40 }}
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-neutral-300 md:h-12"
    />
  );
};

const MobileNab = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="block md:hidden relative">
      <div className=" z-20 relative w-full bg-black mt-4 flex items-center justify-between p-4 border border-gray-500 rounded-full bg-black">
        <AnimatePresence>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 2, ease: 'easeInOut' }}
            className=""
          >
            <Image src={logoImage} alt="Logo" width={80} height={80} />
          </motion.div>
        </AnimatePresence>

        <motion.button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className=" text-2xl text-white md:hidden focus:outline-none"
        >
          <Hamburger />
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: open ? 1 : 0, x: open ? -1000 : 0 }}
        animate={{ opacity: open ? 1 : 0, x: open ? 0 : 100 }}
        exit={{ opacity: 0, x: 1000 }}
        transition={{ duration: 1 }}
        className={`${
          open
            ? 'z-10 pt-40 absolute -top-4 right-0 border border-neutral-800 bg-neutral-900 w-[100dvw] h-screen'
            : 'hidden'
        }`}
      >
        {navLinks.map((link, index) => (
          <motion.div
            initial={{ x: open ? -500 : 0, opacity: 0 }}
            animate={{ x: open ? 0 : -100, opacity: 1 }}
            exit={{ x: 500, opacity: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            key={index}
            className="text-white z-10 text-4xl text-center py-4"
          >
            {link.name}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
