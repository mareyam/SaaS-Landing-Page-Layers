'use client';
import Heading from '../components/Heading';
import Tag from '../components/Tag';
import { motion} from 'framer-motion';

export default function Introduction() {
  const text =
    'Youre racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.';

  const words = text.split(' ');

  return (
    <div className="my-12 px-4 flex flex-col items-center">
      <Tag
        feature={'Introducing Layers'}
        addIcon={false}
        addCss="text-center border border-green-800 w-fit rounded-full px-4 uppercase text-xs py-1 text-green-800"
      />

      <Heading
        text="Your creative process deserves better."
        textCss="text-center text-4xl lg:text-6xl text-white"
      />

      <motion.div
        initial={{ color: 'gray' }}
        animate={{ color: 'white' }}
        className="text-center text-4xl lg:text-6xl text-neutral-800"
        viewport={{ once: true }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ color: 'gray' }}
            animate={{ color: 'white' }}
            transition={{
              delay: index * 0.5, // Delay for each word
              duration: 1, // Duration of the transition
              ease: 'easeOut', // Easing for smooth transition
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {word}{' '}
          </motion.span>
        ))}
      </motion.div>

      <Heading
        text="That's why we built Layers."
        textCss="text-center text-4xl lg:text-6xl text-green-400"
      />
    </div>
  );
}
