import Avatar from '../components/Avatar';
import Avatar1 from '@/app/assets/images/avatar-ashwin-santiago.jpg';
import Avatar2 from '@/app/assets/images/avatar-florence-shaw.jpg';
import Avatar3 from '@/app/assets/images/avatar-lula-meyers.jpg';
import quantumLogo from '@/app/assets/images/quantum.svg';
import acmeLogo from '@/app/assets/images/acme-corp.svg';
import echoValleyLogo from '@/app/assets/images/echo-valley.svg';
import pulseLogo from '@/app/assets/images/pulse.svg';
import outsideLogo from '@/app/assets/images/outside.svg';
import apexLogo from '@/app/assets/images/apex.svg';
import celestialLogo from '@/app/assets/images/celestial.svg';
import twiceLogo from '@/app/assets/images/twice.svg';

import { NavLink } from '../types/common';

export const featuresList: string[] = [
  'Asset Library',
  'Code Preview',
  'Flow Mode',
  'Smart Sync',
  'Auto Layout',
  'Fast Search',
  'Smart Guides',
];

export const features = [
  {
    title: 'Real-time Collaboration',
    description: 'Work together seamlessly with conflict-free team editing',
    content: (
      <div className="group py-8 flex flex-row items-center justify-center">
        <div className="w-fit h-full flex items-center justify-center">
          <Avatar imgSrc={Avatar1} ringColor="blue-300" addCss="z-30" />
          <Avatar imgSrc={Avatar2} ringColor="red-300" addCss="z-20" />
          <Avatar
            imgSrc={Avatar3}
            ringColor="green-300"
            addCss="left-20 z-10"
          />
        </div>

        <div className="relative group">
          <div className="group-hover:opacity-0 group-hover:scale-95 transition-all duration-[1000ms] opacity-100 scale-100 space-x-1 rounded-full bg-neutral-700 w-14 h-14 text-white text-2xl flex items-center justify-center leading-none">
            <div className="bg-white h-1.5 w-1.5 rounded-full" />
            <div className="bg-white h-1.5 w-1.5 rounded-full" />
            <div className="bg-white h-1.5 w-1.5 rounded-full" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center group-hover:block opacity-0 transition-opacity duration-[1000ms] group-hover:opacity-100">
            <Avatar
              imgSrc={Avatar2}
              ringColor="red-300"
              addCss="transition-all duration-[1000ms] z-20"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Interactive Prototyping',
    description:
      'Engage your clients with prototypes that react to user actions',
    content: (
      <div className="transition-all duration-[1000ms] relative group">
        <p className="py-6 text-neutral-700 font-bold text-3xl">
          We&apos;ve achieved{' '}
          <span className="bg-gradient-to-r from-purple-500 to-pink-400 text-transparent bg-clip-text">
            incredible
            <br />
          </span>{' '}
          growth this year
        </p>
        <video
          className="transition-all duration-[1000ms] absolute -top-12 right-12 w-36 h-36 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/gif-incredible.mp4" type="video/mp4" />
        </video>
      </div>
    ),
  },
  {
    title: 'Keyboard Quick Actions',
    description: 'Powerful commands to help you create designs more quickly',
    content: (
      <div className="group mb-12 justify-center align-center flex flex-row space-x-3 hover:space-x-8">
        <div className="group-hover:translate-y-2 group-hover:ring-4 group-hover:scale-110  ring-purple-800 w-fit p-2 px-8 bg-[#CDCDCD] transition-all duration-[1000ms] text-black text-md font-normal rounded-xl">
          Shift
        </div>
        <div className="group-hover:translate-y-2 group-hover:ring-4 group-hover:scale-110  ring-purple-800 w-fit p-2 px-4 bg-[#CDCDCD] transition-all duration-[1000ms] text-black text-md font-normal rounded-xl">
          Alt
        </div>
        <div className="group-hover:translate-y-2 group-hover:ring-4 group-hover:scale-110  ring-purple-800 w-fit p-2 px-4 bg-[#CDCDCD] transition-all duration-[1000ms] text-black text-md font-normal rounded-xl">
          C
        </div>
      </div>
    ),
  },
];

export const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export const logos = [
  { name: 'Quantum', image: quantumLogo },
  { name: 'Acme Corp', image: acmeLogo },
  { name: 'Echo Valley', image: echoValleyLogo },
  { name: 'Pulse', image: pulseLogo },
  { name: 'Outside', image: outsideLogo },
  { name: 'Apex', image: apexLogo },
  { name: 'Celestial', image: celestialLogo },
  { name: 'Twice', image: twiceLogo },
  { name: 'Quantum', image: quantumLogo },
  { name: 'Acme Corp', image: acmeLogo },
  { name: 'Echo Valley', image: echoValleyLogo },
  { name: 'Pulse', image: pulseLogo },
  { name: 'Outside', image: outsideLogo },
  { name: 'Apex', image: apexLogo },
  { name: 'Celestial', image: celestialLogo },
  { name: 'Twice', image: twiceLogo },
];
