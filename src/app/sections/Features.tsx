import React from 'react';
import { GiPolarStar } from 'react-icons/gi';
import { featuresList as featuresArr, features } from '../json/features';
import Heading from '../components/Heading';
import FeatureCard from '../components/FeatureCard';
import Tag from '../components/Tag';

export default function Features() {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <Tag
        feature={'feature'}
        addIcon={false}
        addCss={
          'border border-green-400 text-xs py-1 px-4 rounded-full w-fit uppercase text-green-400'
        }
      />

      <Heading
        text="Where power meets"
        textCss="text-white text-4xl"
        span="simplicity"
        spanCss="text-green-500"
      />

      <div className="m-4 flex flex-wrap gap-4 items-center justify-items-center">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          >
            {feature.content}
          </FeatureCard>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 p-4 bg-black text-white rounded-lg w-1/2 justify-center align-center">
        {featuresArr.map((feature, index) => (
          <Tag
            key={index}
            icon={<GiPolarStar />}
            feature={feature}
            addIcon={true}
            addCss="hover:transition-all duration-[1000ms] hover:scale-110 bg-[#171717] flex items-center gap-2 px-4 py-2 border-2 hover:border-3 border-neutral-800  rounded-2xl cursor-pointer hover:shadow-lg"
          />
        ))}
      </div>
    </div>
  );
}
