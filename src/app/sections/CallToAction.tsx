'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { GiPolarStar } from 'react-icons/gi';
import Tag from '../components/Tag';

export default function CallToAction() {
  const data = {
    message: 'Try for Free',
    icon: GiPolarStar,
  };

  const [isHover, setIsHover] = useState(false);
  const [textHover, setTextHover] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      setMousePosition({ x: mouseEvent.clientX, y: mouseEvent.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover && (
        <motion.div
          className="absolute z-10"
          animate={{
            x: mousePosition.x - 100, // Position it slightly offset horizontally from the mouse
            y: mousePosition.y - 300, // Position it just below the mouse vertically
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
          }}
        >
          <Tag
            feature="Yes, please 🙌🏻 "
            addCss="bg-white text-black w-fit flex flex-row items-center justify-center text-xl px-4 py-1 rounded-full text-[#94B337]"
          />
        </motion.div>
      )}

      <div className="overflow-hidden w-full">
        <motion.div
          className="py-[16dvh] flex whitespace-nowrap text-white font-semibold"
          animate={{
            x: ['0%', '-100%'], // The movement itself
          }}
          transition={{
            duration: !textHover ? 12 : 32,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
          onMouseEnter={() => setTextHover(true)} // When text is hovered, set textHover to true
          onMouseLeave={() => setTextHover(false)} // When mouse leaves text, reset textHover to false
        >
          {[...Array(4)].map((_, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center space-x-12"
            >
              <data.icon className="space-x-12 text-[75px] text-[#94B337]" />
              <span
                className={`px-12 text-[75px] font-light ${
                  textHover ? 'text-[#94B337]' : ''
                }`}
              >
                {data.message}
              </span>
            </motion.div>
          ))}
          {[...Array(4)].map((_, index) => (
            <motion.div
              key={index + 4}
              className="flex items-center justify-center space-x-12"
            >
              <data.icon className="text-[75px] text-[#94B337]" />
              <span className="px-12 text-[75px] font-light">
                {data.message}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
