'use client';
import { FaPlus } from 'react-icons/fa';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Heading from '../components/Heading';
import { GiPolarStar } from 'react-icons/gi';
import Tag from '../components/Tag';

const faqs = [
  {
    question: 'How is Layers different from other design tools?',
    answer:
      'Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.',
  },
  {
    question: 'Is there a learning curve?',
    answer:
      'Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.',
  },
  {
    question: 'How do you handle version control?',
    answer:
      'Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.',
  },
  {
    question: 'Can I work offline?',
    answer:
      "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
  },
  {
    question: 'How does Layers handle collaboration?',
    answer:
      'Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.',
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const handleToggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(0);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="space-y-4 w-full flex flex-col justify-center  align-center items-center">
      <Tag
        feature="FAQ"
        addIcon={true}
        icon={<GiPolarStar />}
        iconCss="mr-2 size-sm"
        addCss="border border-[#94B337] w-fit flex flex-row items-center justify-center uppercase text-xs px-4 py-1 rounded-full text-[#94B337] "
      />

      <Heading
        text={
          <>
            <span>Questions? We&apos;ve got</span>
            <br />
          </>
        }
        span="answers"
        textCss="text-center text-white text-4xl md:text-8xl lg:text-6xl font-semibold"
        spanCss="text-[#94B337]"
      />
      <div className="space-y-6 w-full max-w-xl">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="py-2 border border-[#333333] rounded-2xl bg-[#161616] text-white  shadow-lg overflow-hidden"
          >
            <div
              className="flex justify-between items-center p-4 cursor-pointer "
              onClick={() => handleToggle(index)}
            >
              <p className="text-md font-light">{item.question}</p>

              <motion.div
                animate={{
                  rotate: openIndex === index ? 45 : 0, // Rotate the plus icon when clicked
                }}
                transition={{ duration: 0.3 }}
              >
                <FaPlus className="text-white cursor-pointer transition-transform duration-200" />
              </motion.div>
            </div>

            <motion.div
              className="overflow-hidden"
              initial={{ height: 0 }}
              animate={{
                height: openIndex === index ? 'auto' : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-4">
                <p className="text-sm">{item.answer}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
