import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export interface AvatarProps {
  imgSrc: StaticImageData;
  ringColor: string;
  addCss: string;
}

export interface Position {
  left: number;
  width: number;
  opacity: number;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface TabProps {
  children: React.ReactNode;
  setPosition: (position: Position) => void;
  setSelectedIndex: (index: number) => void;
  selectedIndex: number;
  index: number;
}
export interface CursorProps {
  position: Position;
}

export interface Tag {
  index?: number;
  feature: string;
  addIcon?: boolean;
  addCss: string;
  icon?: React.ReactNode;
  iconCss?: string;
  positionClass?: string;
}

export interface ApplicationCard {
  logo: string;
  name: string;
  description: string;
}

export interface SubHeading {
  text: string;
  addCss?: string;
}

export interface Heading {
  text: ReactNode | string;
  span?: string;
  textCss: string;
  spanCss?: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  children: React.ReactNode;
}
