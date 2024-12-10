'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import designExample1 from '../assets/images/design-example-1.png';
import designExample2 from '../assets/images/design-example-2.png';
import Pointer from '../components/Pointer';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import Tag from '../components/Tag';
import { useState } from 'react';

export default function Hero() {
  const [isPointerAnimate, setIsPointerAnimate] = useState<boolean>(false);
  const [hasAnimationCompleted, setHasAnimationCompleted] = useState(false);

  const handleAnimationComplete = () => {
    setHasAnimationCompleted(true);
  };

  // const [screenDimensions, setScreenDimensions] = useState({
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  // });

  // useEffect(() => {
  //   const handleResize = () => {
  //     setScreenDimensions({
  //       width: window.innerWidth,
  //       height: window.innerHeight,
  //     });
  //   };

  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center text-white w-full mx-auto text-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 3,
          ease: 'easeInOut',
        }}
        className="hidden lg:block absolute -left-0 top-32"
        drag
        dragConstraints={{
          left: -100,
          right: 300,
          top: -100,
          bottom: 0,
        }}
      >
        <motion.div>
          <Image src={designExample1} alt="alt" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: 1,
            x: hasAnimationCompleted
              ? 100
              : isPointerAnimate
              ? [100, 110, 100]
              : [0, 50, 100],
            y: isPointerAnimate ? [0, -10, 0] : 0,
          }}
          transition={{
            duration: hasAnimationCompleted ? 3 : 3,
            ease: 'easeInOut',
            repeat: isPointerAnimate ? Infinity : 0,
            repeatType: isPointerAnimate ? 'loop' : undefined,
          }}
          className="absolute bottom-12 right-12"
          onAnimationComplete={() => {
            if (!hasAnimationCompleted) {
              handleAnimationComplete();
            } else {
              setIsPointerAnimate(true);
            }
          }}
        >
          <Pointer name="Andres" color="red" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 3,
          ease: 'easeInOut',
        }}
        className="hidden lg:block absolute -right-4 top-24"
        drag
        dragConstraints={{
          left: -100,
          right: 300,
          top: -100,
          bottom: 0,
        }}
      >
        <Image src={designExample2} alt="alt" />
        <motion.div
          onAnimationComplete={() => setIsPointerAnimate(true)}
          className="absolute top-4 left-12"
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: 1,
            x: hasAnimationCompleted
              ? -100
              : isPointerAnimate
              ? [-100, -110, -100]
              : [0, -50, -100],
            y: isPointerAnimate ? [0, 10, 0] : 0,
          }}
          transition={{
            duration: hasAnimationCompleted ? 3 : 3,
            ease: 'easeInOut',
            repeat: isPointerAnimate ? Infinity : 0,
            repeatType: isPointerAnimate ? 'loop' : undefined,
          }}
        >
          <Pointer name="John" color="blue" />
        </motion.div>
      </motion.div>

      <div className=" flex justify-center items-start md:justify-center md:items-center px-4 py-4 min-h-screen">
        <div className="w-full max-w-[800px] text-center flex flex-col justify-center items-center">
          <Tag
            feature="7.5M seed round raised"
            addIcon={false}
            addCss="w-fit text-neutral-900 font-semibold rounded-full bg-gradient-to-r from-purple-500 to-pink-400 px-4 py-1 mb-4"
          />
          <Heading
            text="Impactful design created effortlessly"
            textCss="text-5xl md:text-6xl mb-4"
          />
          <SubHeading
            text="Layers seamlessly connects with your favourite tools, making it easy to plug into any workflow and collaborate across platforms."
            addCss="w-1/2 text-neutral-400 mb-6"
          />
        </div>
      </div>
    </div>
  );
}
