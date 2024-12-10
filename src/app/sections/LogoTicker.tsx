'use client';
import Image from 'next/image';
import { logos } from '../json/features';
import SubHeading from '../components/SubHeading';
import { motion } from 'framer-motion';

export default function LogoTicker() {
  const addLogos = [...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <div className="relative w-full flex flex-col items-center space-y-4 overflow-hidden">
      <SubHeading
        text="Already chosen by these market leaders"
        addCss="text-sm text-gray-400"
      />

      {/* Left side with corner fade */}
      <motion.div
        className="absolute z-10 top-0 left-0 h-full w-[40%]"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.9)', // Solid black overlay with transparency
          maskImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent 50%)', // Fade effect on right side
          WebkitMaskImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent 50%)', // WebKit support for left fade
        }}
      ></motion.div>

      {/* Right side with corner fade */}
      <motion.div
        className="absolute z-10 top-0 right-0 h-full w-[40%]"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.9)', // Solid black overlay with transparency
          maskImage:
            'linear-gradient(to left, rgba(0, 0, 0, 0.9), transparent 50%)', // Fade effect on left side
          WebkitMaskImage:
            'linear-gradient(to left, rgba(0, 0, 0, 0.9), transparent 50%)', // WebKit support for right fade
        }}
      ></motion.div>

      {/* Logos ticker with infinite scrolling */}
      <motion.div
        className="flex w-full space-x-8"
        style={{ display: 'flex' }}
        animate={{
          x: ['0%', '-100%'], // Move the logos from 0% to -100% for an infinite loop
        }}
        transition={{
          x: {
            repeat: Infinity, // Make the animation loop infinitely
            repeatType: 'loop', // Loop the animation
            duration: 20, // Duration for one full loop
            ease: 'linear', // Make the movement smooth and continuous
          },
        }}
      >
        {addLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[20%] flex justify-center"
          >
            <Image
              src={logo.image}
              alt={logo.name}
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
