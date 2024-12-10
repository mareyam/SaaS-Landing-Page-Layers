import React from 'react';
import Image from 'next/image';
import { AvatarProps } from '../types/common';

const Avatar = ({ imgSrc, ringColor, addCss }: AvatarProps) => {
  return (
    <Image
      className={`p-1 rounded-full ring-2 ring-${ringColor} dark:ring-gray-500 ${addCss}`}
      src={imgSrc}
      alt="Bordered avatar"
      width={60}
      height={60}
    />
  );
};
export default Avatar;
