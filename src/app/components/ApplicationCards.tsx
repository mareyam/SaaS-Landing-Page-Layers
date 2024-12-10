import Image from 'next/image';
import { ApplicationCard as ApplicationCardProps } from '../types/common';
import React from 'react';

const ApplicationCard = ({ logo, name, description }: ApplicationCardProps) => {
  return (
    <div className="py-8 bg-[#171717] border-2 border-neutral-800 flex flex-col items-center  h-auto text-white rounded-2xl shadow-top p-4 m-1 w-48">
      <div className="flex items-center justify-center w-14 h-14 bg-neutral-200 rounded-2xl">
        <Image
          src={logo}
          alt={name}
          width={64}
          height={64}
          className="rounded-md"
        />
      </div>

      <h3 className="mt-4 text-xl font-light">{name}</h3>

      <p className="mt-2 text-center text-sm text-[#6A6A6A]">{description}</p>
    </div>
  );
};

export default ApplicationCard;
