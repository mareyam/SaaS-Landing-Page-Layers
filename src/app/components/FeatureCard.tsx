import { FeatureCard as FeatureCardProps } from '../types/common';

const FeatureCard = ({ title, description, children }: FeatureCardProps) => {
  return (
    <div className="bg-[#171717] h-80 p-8 border-2 border-neutral-800 rounded-2xl flex flex-col justify-center items-center text-center w-full max-w-xs">
      <div className="flex-grow">{children}</div>
      <div className="text-2xl text-white">{title}</div>
      <div className="text-xs font-semibold text-[#6A6A6A]">{description}</div>
    </div>
  );
};

export default FeatureCard;
