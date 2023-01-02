import { Icon } from '@iconify/react';

type Props = {
  src: string;
  name: string;
};

const SkillIcon = ({ src, name }: Props) => {
  return (
    <div className="text-2xl relative bg-white dark:bg-slate-800 shadow-md rounded-full h-14 w-14 sm:h-16 sm:w-16 grid place-items-center group">
      <Icon icon={src} width="32" height="32" />
      <div className="opacity-0 w-max group-hover:opacity-100 absolute -top-8 rounded capitalize bg-slate-700 text-white py-1 px-2 text-sm duration-200">
        {name}
        <svg
          className="absolute text-slate-700 h-2 w-full left-0 top-full"
          x="0px"
          y="0px"
          viewBox="0 0 255 255"
          xmlSpace="preserve"
        >
          <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
        </svg>
      </div>
    </div>
  );
};

export default SkillIcon;
