'use client';
import { GiPolarStar } from 'react-icons/gi';
import ApplicationCard from '../components/ApplicationCards';
import Tag from '../components/Tag';
import SubHeading from '../components/SubHeading';
import Heading from '../components/Heading';
import { motion } from 'framer-motion';

const integrations = [
  {
    name: 'Figma',
    icon: './3.svg',
    description: 'Figma is a collaborative interface design tool.',
  },
  {
    name: 'Notion',
    icon: './5.svg',
    description: 'Notion is an all-in-one workspace for notes and docs.',
  },
  {
    name: 'Slack',
    icon: './4.svg',
    description: 'Slack is a powerful team communication platform.',
  },
  {
    name: 'Relume',
    icon: './2.svg',
    description: 'Relume is a no-code website builder and design system.',
  },
  {
    name: 'Framer',
    icon: './6.svg',
    description: 'Framer is a professional website prototyping tool.',
  },
  {
    name: 'GitHub',
    icon: './1.svg',
    description: 'GitHub is the leading platform for code collaboration.',
  },
  {
    name: 'Protopie',
    icon: './protopie.svg',
    description:
      'Protopie is a powerful prototyping tool for interaction design.',
  },
  {
    name: 'Webflow',
    icon: './webflow.svg',
    description: 'Webflow is a website builder and design tool for designers.',
  },
  {
    name: 'PenPoint',
    icon: './penpoint.svg',
    description: 'PenPoint is a unique digital note-taking tool.',
  },
];

export default function Integrations() {
  return (
    <div className="h-[600px] flex flex-col md:flex-row gap-12 p-8 justify-between">
      <div className="flex-1 justify-center flex flex-col space-y-6 lg:items-start lg:justify-center md:items-start md:justify-start">
        <Tag
          feature="Integrations"
          addIcon={true}
          icon={<GiPolarStar />}
          iconCss="mr-2"
          addCss="w-fit border border-[#94B337] flex flex-row items-center justify-center uppercase text-xs px-4 py-1 rounded-full text-[#94B337] "
        />

        <Heading
          text="Plays well with"
          span="others"
          textCss="text-white text-4xl md:text-8xl lg:text-6xl font-semibold"
          spanCss="text-[#94B337]"
        />
        <SubHeading
          text="Layers seamlessly connects with your favourite tools, making it easy
          to plug into any workflow and collaborate across platforms."
          addCss="text-sm font-semibold text-[#6A6A6A] max-w-md"
        />
      </div>

      <motion.div
        className="flex-none items-center justify-center rounded-2xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 overflow-hidden relative"
        style={{
          boxShadow: '0 -10px 20px rgba(43, 54, 65, 0.9)',
          maskImage:
            'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
        }}
        whileHover={{
          transition: {
            y: {
              duration: 64,
            },
          },
        }}
      >
        <motion.div
          className="flex flex-col space-y-6"
          animate={{ y: ['0%', '-100%'] }}
          transition={{
            y: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 32,
              ease: 'linear',
            },
          }}
        >
          {[...integrations, ...integrations].map((tool, index) => (
            <motion.div
              key={index}
              className="border-2 border-transparent rounded-2xl transition-all duration-300 ease-in-out hover:border-[#94B337]"
            >
              <ApplicationCard
                logo={tool.icon}
                name={tool.name}
                description={tool.description}
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="flex flex-col space-y-6"
          animate={{ y: ['-100%', '0%'] }}
          transition={{
            y: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 32,
              ease: 'linear',
            },
          }}
        >
          {[...integrations, ...integrations].map((tool, index) => (
            <motion.div
              key={index}
              className="border-2 border-transparent rounded-2xl transition-all duration-300 ease-in-out hover:border-[#94B337]"
            >
              <ApplicationCard
                logo={tool.icon}
                name={tool.name}
                description={tool.description}
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="flex flex-col space-y-6"
          animate={{ y: ['0%', '-100%'] }}
          transition={{
            y: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 32,
              ease: 'linear',
            },
          }}
        >
          {[...integrations, ...integrations].map((tool, index) => (
            <motion.div
              key={index}
              className="border-2 border-transparent rounded-2xl transition-all duration-300 ease-in-out hover:border-[#94B337]"
            >
              <ApplicationCard
                logo={tool.icon}
                name={tool.name}
                description={tool.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
