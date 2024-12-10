import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Hamburger = () => {
  const [active, setActive] = useState(false);

  return (
    <motion.button
      onClick={() => setActive(!active)}
      className="relative h-12 w-12 rounded-full bg-white/0 transition-colors hover:bg-white/20"
    >
      <motion.span
        style={{ left: '50%', top: '35%', x: '-50%', y: '-50%' }}
        className="absolute h-0.5 w-6 bg-white"
        variants={{
          open: {
            rotate: ['0deg', '0deg', '45deg'],
            top: ['35%', '50%', '50%'],
          },
          closed: { rotate: '0deg' },
        }}
        animate={active ? 'open' : 'closed'}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        style={{
          left: '50%',
          top: '50%',
          x: '-50%',
          y: '-50%',
        }}
        variants={{
          open: {
            rotate: ['0deg', '0deg', '-45deg'],
            top: ['35%', '50%', '50%'],
          },
          closed: { rotate: '0deg' },
        }}
        animate={active ? 'open' : 'closed'}
        className="absolute h-0.5 w-6 bg-white"
        transition={{ duration: 0.3 }}
      />
      <motion.span
        style={{ right: '15%', top: '65%', x: '-50%', y: '-50%' }}
        className="absolute h-0.5 w-3 bg-white"
        animate={{ opacity: active ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default Hamburger;
