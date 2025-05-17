'use client';
import { SoftwareSkillType } from '@/lib/types';
import { getId } from '@/lib/utils/helper';

import { ListItem, SkillIcon } from '@/components';
import { motion, MotionProps } from 'framer-motion';

import { DynamicShowLottie } from '@/components/dynamic/Dynamic';

type Props = {
  lottie?: any;
  title: string;
  points: string[];
  skills: SoftwareSkillType[];
  className?: string;
} & MotionProps;

const Skill = ({
  lottie,
  title,
  skills,
  points,
  className = '',
  ...rest
}: Props) => {
  return (
    <motion.div
      className={`flex gap-8 sm:gap-10 flex-col lg:flex-row items-center ${className}`}
      {...rest}
    >
      {/* Left */}
      <div className="space-y-14 lg:w-1/2">
        <h3 className="mb-5 text-2xl text-center capitalize sm:text-3xl">
          {title}
        </h3>

        <div key={getId()} className="flex flex-wrap justify-center gap-2">
          {skills.map(({ name, icon }) => (
            <SkillIcon key={getId()} src={icon} name={name} />
          ))}
        </div>

        <ul className="space-y-2 text-base">
          {points.map((point) => (
            <ListItem key={getId()}>{point}</ListItem>
          ))}
        </ul>
      </div>
      {/* Right */}
      <DynamicShowLottie
        path={lottie}
        className="md:min-h-[448px] md:min-w-[448px]"
      />
    </motion.div>
  );
};

export default Skill;
