'use client';
import { motion } from 'framer-motion';

export default function Pointer(props: {
  name: string;
  color?: 'red' | 'blue';
}) {
  const { name, color } = props;

  const bgColorClass =
    color === 'red'
      ? 'bg-red-500'
      : color === 'blue'
      ? 'bg-blue-500'
      : 'bg-gray-500';

  return (
    <motion.div
      className="relative"
      // animate={{
      //   x: [0, 10, 0], // Move in the X direction (from 0 to 100px and back to 0)
      //   y: [0, -10, 0], // Move in the Y direction (from 0 to -100px and back to 0)
      // }}
      // transition={{
      //   duration: 2, // Animation duration (in seconds)
      //   ease: 'easeInOut', // Easing function
      //   repeat: Infinity, // Repeat the animation infinitely
      //   repeatType: 'loop', // Type of repeating animation
      // }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-mouse-pointer"
      >
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
        <path d="M13 13l6 6"></path>
      </svg>
      <div
        className={`text-xs absolute top-4 left-6 rounded-full px-2 py-1 text-white ${bgColorClass}`}
      >
        {name}
      </div>
    </motion.div>
  );
}
