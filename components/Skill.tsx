import React from 'react';
import { ListItem, ShowLottie, SkillIcon } from '.';
import { SkillType } from '../types';
import { getId } from '../utils/helper';

type Props = {
  lottie?: any;
  title: string;
  points: string[];
  skills: SkillType[];
  className?: string;
};

const Skill = ({ lottie, title, skills, points, className = '' }: Props) => {
  return (
    <div
      className={`flex gap-8 sm:gap-10 flex-col lg:flex-row items-center ${className}`}
    >
      {/* Left */}
      <div className="space-y-14 lg:w-1/2">
        <h3 className="capitalize text-2xl sm:text-3xl text-center mb-5">
          {title}
        </h3>

        <div key={getId()} className="flex gap-2 justify-center flex-wrap">
          {skills.map(({ name, icon }) => (
            <SkillIcon key={getId()} src={icon} name={name} />
          ))}
        </div>

        <ul className="text-base space-y-2">
          {points.map((point) => (
            <ListItem key={getId()}>{point}</ListItem>
          ))}
        </ul>
      </div>
      {/* Right */}
      <ShowLottie path={lottie} className="md:min-h-[448px] md:min-w-[448px]" />
    </div>
  );
};

export default Skill;
