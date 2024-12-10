import Image from 'next/image';
import logoImage from '../assets/images/logo.svg';

const footerLinks = [
  { href: '#', label: 'Contact' },
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms & Conditions' },
];

export default function Footer() {
  return (
    <div className="p-4 flex flex-row justify-center">
      <div className="border border-gray-500 rounded-full p-4 border w-3/4 flex flex-row items-center  justify-between">
        <Image src={logoImage} alt="Logo" width={80} height={80} />
        <div className=" flex justify-between w-full max-w-[500px]">
          {footerLinks.map((link, index) => (
            <a key={index} href={link.href} className="mx-2 text-white">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
