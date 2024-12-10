'use client';
import React from 'react';

// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import ThinStar from '../assets/images/thin.png';
// import {
//   AnimatePresence,
//   motion,
//   useAnimate,
//   useMotionValue,
//   useMotionValueEvent,
//   usePresence,
//   useTransform,
// } from 'framer-motion';
// import { IoAddSharp } from 'react-icons/io5';
// import { IoMdClose } from 'react-icons/io';
// import { CiClock1 } from 'react-icons/ci';
import Hamburger from '../components/Hamburger';

const InfiniteScrollList = () => {
  return <Hamburger />;
};

export default InfiniteScrollList;

// to do animation
//const Page = () => {
//   const [open, setOpen] = useState(true);
//   const [selected, setSelected] = useState('min');
//   const [tasks, setTasks] = useState([
//     {
//       check: true,
//       name: 'Morning Exercise',
//       time: '30',
//       type: 'min',
//     },
//     {
//       check: false,
//       name: 'Team Meeting',
//       time: '1',
//       type: 'hour',
//     },
//     {
//       check: false,
//       name: 'Code Review',
//       time: '2',
//       type: 'hour',
//     },
//     {
//       check: true,
//       name: 'Lunch Break',
//       time: '45',
//       type: 'min',
//     },
//   ]);

//   const [task, setTask] = useState({
//     check: false,
//     name: '',
//     time: '',
//     type: 'min',
//   });

//   console.log(tasks);
//   console.log(task);

//   const [delIndex, setDelIndex] = useState();

//   const handleSubmitTask = () => {
//     if (!task.name || !task.time || !task.name) return;
//     else {
//       setTasks([...tasks, { ...task }]);
//       setTask({ check: false, name: '', time: '', type: 'min' });
//     }
//   };

//   const handleDeleteTask = (index) => {
//     setDelIndex(index);
//     const updatedTasks = tasks.filter((_, i) => i !== index);
//     setTasks(updatedTasks);
//   };

//   const handleCheckboxChange = (index) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((task, i) =>
//         i === index ? { ...task, check: !task.check } : task
//       )
//     );
//   };
//   const [isPresent, safeToRemove] = usePresence();
//   const [scope, animate] = useAnimate();
//   useEffect(() => {
//     if (!isPresent) {
//       const exitAnimation = async () => {
//         animate(
//           'p',
//           {
//             color: checked ? '#6ee7b7' : '#fca5a5',
//           },
//           {
//             ease: 'easeIn',
//             duration: 0.125,
//           }
//         );
//         await animate(
//           scope.current,
//           {
//             scale: 1.025,
//           },
//           {
//             ease: 'easeIn',
//             duration: 0.125,
//           }
//         );

//         await animate(
//           scope.current,
//           {
//             opacity: 0,
//             x: checked ? 24 : -24,
//           },
//           {
//             delay: 0.75,
//           }
//         );
//         safeToRemove();
//       };

//       exitAnimation();
//     }
//   }, [isPresent]);
//   return (
//     <motion.div
//       layout
//       ref={scope}
//       className="relative bg-neutral-900 h-screen flex items-center justify-center"
//     >
//       <div
//         className="absolute inset-0 grid-background z-0"
//         aria-hidden="true"
//       ></div>
//       <div className="relative z-10 h-3/4 w-3/4 flex flex-col items-center justify-center">
//         <p className="w-2/4 font-bold text-2xl text-neutral-200">
//           Good morning!☀️
//           <br />
//           <span className="font-normal text-sm text-neutral-200">
//             Let's see what we've got to do today.
//           </span>
//         </p>

//         {/* Task List */}
//         <div
//           style={{
//             scrollbarWidth: 'thin',
//             scrollbarColor: '#888 transparent',
//           }}
//           className=" h-80 overflow-y-auto overflow-x-hidden w-2/4 space-y-4 mt-4"
//         >
//           <style jsx>{`
//             textarea::-webkit-scrollbar {
//               width: 6px;
//             }
//             textarea::-webkit-scrollbar-thumb {
//               background-color: #888;
//               border-radius: 10px;
//             }
//             textarea::-webkit-scrollbar-thumb:hover {
//               background-color: #555;
//             }
//             textarea::-webkit-scrollbar-track {
//               background: transparent;
//             }
//             textarea:empty::-webkit-scrollbar {
//               display: none;
//             }
//           `}</style>
//           <AnimatePresence>
//             {tasks.map((item, index) => (
//               <motion.div
//                 key={item.name + index} // Unique key
//                 initial={{ y: -100, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 exit={{
//                   scale: 1.1,
//                   x: item.check ? 100 : -100,
//                   opacity: 0,
//                   transition: { duration: 1 },
//                 }}
//                 transition={{ ease: 'easeInOut', duration: 1 }}
//                 className="overflow-x-hidden w-full flex items-center justify-between bg-[#18181B] border border-[#3F3F46]  text-white px-4 py-2 rounded-md"
//               >
//                 <div className="flex items-center space-x-2">
//                   <input
//                     checked={item.check}
//                     onChange={() => handleCheckboxChange(index)}
//                     type="checkbox"
//                     className="w-4 h-4 appearance-none border border-gray-300 rounded bg-gray-100 checked:bg-neutral-500 checked:border-neutral-500 checked:text-white focus:ring-2 focus:ring-neutral-300"
//                   />
//                   <p
//                     className={`transition-colors ${
//                       item.check ? 'text-neutral-500' : 'text-white'
//                     }`}
//                   >
//                     {item.name}
//                   </p>
//                 </div>

//                 <div className="flex flex-row space-x-3">
//                   <div className="flex items-center space-x-1">
//                     <CiClock1 />
//                     <p className="text-xs text-neutral-400">{`${item.time} ${item.type}`}</p>
//                   </div>
//                   <button
//                     onClick={() => handleDeleteTask(index)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     <IoMdClose />
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>

//         {/* Input Area */}
//         <div className="flex flex-col items-center justify-end w-full h-full mt-4">
//           <motion.div
//             initial={{ y: 100, opacity: 0 }}
//             animate={open ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
//             transition={{ ease: 'easeInOut', duration: 1, type: 'spring' }}
//             className="bg-[#18181B] border border-[#3F3F46] w-2/4 h-[200px] text-neutral-500 flex p-4 flex-col justify-between"
//           >
//             <textarea
//               value={task.name}
//               onChange={(event) =>
//                 setTask({ ...task, name: event.target.value })
//               }
//               className="bg-transparent h-32 w-full p-2 border-none outline-none resize-none overflow-y-auto"
//               placeholder="What do you need to do?"
//               style={{
//                 scrollbarWidth: 'thin',
//                 scrollbarColor: '#888 transparent',
//               }}
//             ></textarea>

//             <style jsx>{`
//               textarea::-webkit-scrollbar {
//                 width: 6px;
//               }
//               textarea::-webkit-scrollbar-thumb {
//                 background-color: #888;
//                 border-radius: 10px;
//               }
//               textarea::-webkit-scrollbar-thumb:hover {
//                 background-color: #555;
//               }
//               textarea::-webkit-scrollbar-track {
//                 background: transparent;
//               }
//               textarea:empty::-webkit-scrollbar {
//                 display: none;
//               }
//             `}</style>

//             <div className="flex flex-row justify-between">
//               <div className="appearance-none flex items-center space-x-2 w-full">
//                 <input
//                   className="h-6 rounded-sm bg-neutral-800 text-white w-1/6 p-2"
//                   type="number"
//                   value={task.time}
//                   onChange={(e) => setTask({ ...task, time: e.target.value })}
//                   placeholder="1"
//                   min="1"
//                   max="60"
//                   inputMode="numeric"
//                 />
//                 <button
//                   className={`h-6 flex items-center justify-center rounded-sm text-xs px-4 py-2 ${
//                     selected === 'min'
//                       ? 'bg-neutral-500 text-white'
//                       : 'bg-neutral-800 text-white'
//                   }`}
//                   onClick={() => {
//                     setSelected('min');
//                     setTask({ ...task, type: 'min' });
//                   }}
//                 >
//                   min
//                 </button>
//                 <button
//                   className={`h-6 flex items-center justify-center rounded-sm text-xs px-4 py-2 ${
//                     selected === 'hrs'
//                       ? 'bg-neutral-500 text-white'
//                       : 'bg-neutral-800 text-white'
//                   }`}
//                   onClick={() => {
//                     setSelected('hrs');
//                     setTask({ ...task, type: 'hrs' });
//                   }}
//                 >
//                   hrs
//                 </button>
//               </div>

//               <button
//                 onClick={handleSubmitTask}
//                 className="px-4 rounded-sm text-sm bg-neutral-700 text-white h-6"
//               >
//                 Submit
//               </button>
//             </div>
//           </motion.div>
//           <button
//             onClick={() => setOpen(!open)}
//             className="bg-[#18181B] mt-4 rounded-full w-2/4 py-4 border border-[#3F3F46] transition-all duration-500 ease-in-out flex items-center justify-center"
//           >
//             <IoMdClose
//               className={`text-white transition-transform duration-500 ease-in-out ${
//                 open ? 'rotate-0' : 'rotate-45'
//               }`}
//             />
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Page;

// map
//const FoldMap = () => {
//   const xDrag = useMotionValue(0);
//   const xLeftSection = useTransform(xDrag, [0, 300], ['100%', '0%']);
//   const xRightSection = useTransform(xDrag, [0, 300], ['-100%', '0%']);
//   const centerScale = useTransform(xDrag, [150, 300], [0, 1]);
//   const centerBrightness = useTransform(xDrag, [150, 300], [0.2, 1]);
//   const [isFolded, setIsFolded] = useState(true);
//   useMotionValueEvent(xDrag, 'change', (currentX) => {
//     if (currentX > 260) {
//       setIsFolded(false);
//     } else {
//       setIsFolded(true);
//     }
//   });
//   const variants = {
//     open: { scale: 1 },
//     folded: { scale: 0.9 },
//   };
//   return (
//     <div className="overflow-x-clip">
//       <motion.div
//         animate={isFolded ? 'folded' : 'open'}
//         variants={variants}
//         initial="folded"
//       >
//         <div className="overflow-clip mx-auto grid aspect-video max-h-[80vh] p-8">
//           <div className="grid aspect-video h-full w-full grid-cols-3 [grid-area:1/1] cursor-grab">
//             <motion.div
//               style={{ x: xLeftSection, skewY: '-1deg' }}
//               className="map-image origin-bottom-right border-r border-[rgba(255,255,255,.1)] shadow-2xl"
//             />
//             <motion.div
//               style={{
//                 scaleX: centerScale,
//                 '--brightness': centerBrightness,
//               }}
//               className="map-image brightness-[--brightness]"
//             />
//             <motion.div
//               style={{ x: xRightSection, skewY: '1deg' }}
//               className="map-image origin-bottom-left border-l border-[rgba(255,255,255,.1)] shadow-2xl"
//             />
//           </div>
//           <motion.div
//             drag="x"
//             style={{ x: xDrag, overflow: 'hidden' }}
//             dragConstraints={{ left: 0, right: 300 }}
//             dragTransition={{
//               modifyTarget: (target) => (target > 150 ? 300 : 0),
//               timeConstant: 45,
//             }}
//             className="cursor-grab active:cursor-grabbing relative z-10  [grid-area:1/1]"
//           />
//         </div>
//         <motion.div
//           variants={{
//             folded: {
//               opacity: 0,
//               scale: 0.9,
//               y: 30,
//             },
//             open: {
//               opacity: 1,
//               scale: 1,
//               y: 0,
//             },
//           }}
//           className="flex w-full justify-center text-xl font-semibold md:text-4xl"
//         >
//           <p className="rounded-2xl bg-white px-12 py-5 text-[hsl(73_69%_26%)]">
//             Pick your favorite spot ☝️
//           </p>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// starryy sky anim
//const Page = () => {
//   const moonRadius = 16; // Radius of the moon
//   const moonCenter = { x: 75, y: 50 }; // Moon's center as percentage of the red box

//   const generateStars = (count) => {
//     const stars = [];
//     while (stars.length < count) {
//       const left = Math.random() * 100; // Percentage of red box width
//       const top = Math.random() * 100; // Percentage of red box height

//       const distance = Math.sqrt(
//         Math.pow(left - moonCenter.x, 2) + Math.pow(top - moonCenter.y, 2)
//       );

//       if (distance > moonRadius) {
//         stars.push({
//           id: stars.length,
//           position: {
//             left: `${left}%`,
//             top: `${top}%`,
//           },
//           animation: {
//             opacity: Array.from({ length: 4 }, () => Math.random() * 0.5 + 0.5), // Random opacity values between 0.5 and 1
//             x: Array.from({ length: 4 }, () => Math.random() * 4 - 2), // Random x offset between -2 and 2
//             y: Array.from({ length: 4 }, () => Math.random() * 4 - 2), // Random y offset between -2 and 2
//             scale: Array.from({ length: 4 }, () => Math.random() * 0.5 + 0.5), // Random scale values between 0.5 and 1
//           },
//         });
//       }
//     }
//     return stars;
//   };

//   const sparkles = generateStars(50); // Generate 50 stars
//   return (
//     <div className="h-screen flex justify-center bg-black">
//       <div
//         className="h-2/3 w-full relative overflow-hidden"
//         style={{ position: 'relative' }}
//       >
//         {sparkles.map((sparkle) => (
//           <motion.div
//             key={sparkle.id}
//             initial={{ opacity: 0, x: 0, y: 0 }}
//             // animate={{
//             //   opacity: [0.8, 1, 0.5, 1],
//             //   x: [0, -2, 2, 0], // Moves left, then right, then back to center
//             //   y: [0, -2, 2, 0],
//             //   scale: [1, 0.9, 0.5, 0.8], // Moves up, then down, then back to center
//             // }}
//             animate={{
//               opacity: sparkle.animation.opacity,
//               x: sparkle.animation.x,
//               y: sparkle.animation.y,
//               scale: sparkle.animation.scale,
//             }}
//             transition={{
//               duration: 2, // Adjust duration for slower or faster movement
//               repeat: Infinity, // Loop the animation
//               repeatType: 'mirror', // Reverses animation direction
//             }}
//             style={{
//               position: 'absolute',
//               ...sparkle.position,
//             }}
//           >
//             <Image
//               src={ThinStar}
//               alt="Star"
//               width={20}
//               height={20}
//               className="text-yellow-500"
//             />
//           </motion.div>
//         ))}
//         <motion.div
//           className="h-32 w-32 bg-neutral-500 rounded-full flex justify-center items-center absolute"
//           style={{
//             left: `${moonCenter.x}%`,
//             top: `${moonCenter.y}%`,
//             transform: 'translate(-50%, -50%)',
//           }}
//           initial={{ scale: 0.5, x: -50, y: 0 }}
//           animate={{ scale: 1, x: -30, y: -10 }}
//           transition={{ duration: 1 }}
//         >
//           <motion.div
//             initial={{ opacity: 0, x: -50, y: 0 }}
//             animate={{ opacity: 1, x: -30, y: -10 }}
//             transition={{ duration: 1 }}
//             className="rounded-full h-24 w-24 bg-black"
//           ></motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };
// export default Page;

//emoji animation
// const Variant1 = {
//   show: {
//     opacity: 1,
//   },
//   hide: {
//     opacity: 0,
//     transition: {
//       when: 'afterChildren',
//     },
//   },
// };

// const Variant2 = {
//   show: (i) => ({
//     opacity: 1,
//     x: 0,
//     transition: {
//       delay: i * 0.2,
//     },
//   }),
//   hide: {
//     opacity: 0,
//     x: -100,
//   },
// };

// const emojisArr = ['😆', '💯', '❤️', '😇', '👍'];

// function EmojisAnimation() {
//   const [showEmojis, setShowEmojis] = useState(false);

//   return (
//     <div>
//       <motion.div
//         initial={false}
//         animate={showEmojis ? 'show' : 'hide'}
//         className="mt-10 flex flex-col items-center space-y-6 justify-center"
//       >
//         <motion.div
//           variants={Variant1}
//           className="flex rounded-full p-4 items-center text-3xl justify-evenly w-64 h-12 bg-white"
//         >
//           {/* some emojis */}
//           {emojisArr.map((emoji, index) => {
//             return (
//               <motion.span
//                 key={index}
//                 custom={index}
//                 variants={Variant2}
//                 className="bg-transparent"
//               >
//                 {emoji}
//               </motion.span>
//             );
//           })}
//         </motion.div>
//         <button
//           className="bg-sky-500 text-white cursor-pointer font-semibold py-2 px-8 rounded-md"
//           onClick={() => setShowEmojis(!showEmojis)}
//         >
//           {!showEmojis ? 'Show Emojis' : 'Hide Emojis'}
//         </button>
//       </motion.div>
//     </div>
//   );
// }

// export default EmojisAnimation;

/*
btn animation
<div className="border border-red-500 w-full flex justify-center items-center">
      <motion.button
        drag
         whileDrag={{
          scale: 1.4,
}}
           dragConstraints={{
          left: -700,
          right: 600,
          top: 300,
          bottom: 300,
        }}
        whileHover={{
          backgroundColor: 'white',
          color: 'black',
          scale: 1.1,
        }}
        whileTap={{
          borderRadius: '0%',
          scale: 0.8,
          backgroundColor: 'transparent',
          border: '1px solid white',
          color: 'white',
        }}
        transition={{
          duration: 0.4,
          ease: 'easeInOut',
        }}
        className="rounded-full w-fit text-white border border-white m-4 p-4 px-12"
      >
        Click me
      </motion.button>
    </div>

*/

// staaryy sky
//const AnimatedElement = () => {
//   const moonRadius = 16; // Radius of the moon
//   const moonCenter = { x: 75, y: 50 }; // Moon's center as percentage of the red box

//   const generateStars = (count) => {
//     const stars = [];
//     while (stars.length < count) {
//       const left = Math.random() * 100; // Percentage of red box width
//       const top = Math.random() * 100; // Percentage of red box height

//       const distance = Math.sqrt(
//         Math.pow(left - moonCenter.x, 2) + Math.pow(top - moonCenter.y, 2)
//       );

//       if (distance > moonRadius) {
//         stars.push({
//           id: stars.length,
//           position: {
//             left: `${left}%`,
//             top: `${top}%`,
//           },
//         });
//       }
//     }
//     return stars;
//   };

//   const sparkles = generateStars(50); // Generate 50 stars

//   return (
//     <div className="h-screen flex justify-center bg-black">
//       <div
//         className="h-2/3 w-full relative overflow-hidden"
//         style={{ position: 'relative' }}
//       >
//         {sparkles.map((sparkle) => (
//           <motion.div
//             key={sparkle.id}
//             initial={{ opacity: 0, x: 0, y: 0 }}
//             animate={{
//               opacity: [1, 1, 1, 1],
//               x: [0, -2, 2, 0], // Moves left, then right, then back to center
//               y: [0, -2, 2, 0],
//               scale: [1, 0.9, 0.5, 0.8], // Moves up, then down, then back to center
//             }}
//             transition={{
//               duration: 2, // Adjust duration for slower or faster movement
//               repeat: Infinity, // Loop the animation
//               repeatType: 'mirror', // Reverses animation direction
//             }}
//             style={{
//               position: 'absolute',
//               ...sparkle.position,
//             }}
//           >
//             <Image
//               src={ThinStar}
//               alt="Star"
//               width={20}
//               height={20}
//               className="text-yellow-500"
//             />
//           </motion.div>
//         ))}
//         <div
//           className="h-32 w-32 bg-white rounded-full flex justify-center items-center absolute"
//           style={{
//             left: `${moonCenter.x}%`,
//             top: `${moonCenter.y}%`,
//             transform: 'translate(-50%, -50%)',
//           }}
//         >
//           <motion.div
//             initial={{ opacity: 0, x: -50, y: 0 }}
//             animate={{ opacity: 1, x: -30, y: -10 }}
//             transition={{ duration: 2 }}
//             className="rounded-full h-24 w-24 bg-black"
//           ></motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnimatedElement;

/*
animated navbar
 <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900">
      <motion.div
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        transition={{
          duration: 0.3,
          type: 'spring',
          stiffness: 100,
          damping: 10,
        }}
        onClick={() => setOpen(!open)}
        className="bg-red-400 w-32 h-12 flex items-center justify-between cursor-pointer px-4 text-white"
      >
        <p>Menu</p>
        <p>Menu</p>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="flex flex-col gap-2 text-white mt-4 border border-red-300 p-4 rounded-lg bg-gray-800"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {navLinks.map((item, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                {item.name}
              </motion.p>
            ))}
            <motion.div variants={itemVariants} className="block ">
              <button
                aria-label="Login"
                className="w-full bg-green-500 text-white font-medium text-sm py-2 px-6 rounded-full hover:bg-green-600 transition"
              >
                Login
              </button>
            </motion.div>
            <motion.div variants={itemVariants} className="block ">
              <button
                aria-label="Signup"
                className="w-full mt-2 border border-green-500 text-green-500 font-medium text-sm py-2 px-6 rounded-full hover:bg-green-500 hover:text-white transition"
              >
                Signup
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
*/

/*
<div>
      <p className="text-3xl font-bold text-center bg-gradient-to-r from-blue-200 to-red-400 text-transparent bg-clip-text">
        Progress Bar
      </p>

      <div className="w-full h-2 rounded bg-white">
        <motion.div
          className="h-full  bg-gradient-to-r  from-cyan-400 to-pink-400"
          initial={{ width: '20px' }}
          animate={{ width: '100%' }}
          transition={{ ease: 'easeOut', duration: 5 }}
        />
      </div>
    </div>
    */
