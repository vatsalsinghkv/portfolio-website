import { FeaturedProjectType } from '@/lib/types';
import { blurImageURL } from '@/lib/utils/config';
import { cn } from '@/lib/utils/helper';

import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Props extends FeaturedProjectType, MotionProps {
  align?: 'left' | 'right';
}

const FeaturedProject = ({
  img,
  name,
  url,
  repo,
  description,
  tasks,
  tags,
  align = 'left',
  ...rest
}: Props) => {
  return (
    <>
      <motion.div
        className={cn(
          'relative hidden lg:block  min-h-[280px] sm:min-h-[360px] h-full overflow-hidden lg:overflow-visible rounded-lg lg:rounded-xl shadow-lg lg:shadow-none text-center lg:text-right',
          align === 'left' && 'lg:text-left'
        )}
        {...rest}
      >
        <div
          className={cn(
            'w-full lg:max-w-[60%] absolute inset-0 h-full -z-20 lg:z-0 lg:object-contain rounded overflow-hidden shadow-2xl group',

            align === 'left' && 'ml-auto'
          )}
        >
          <Image
            src={img}
            alt={name}
            width={720}
            height={480}
            className="h-full w-full object-cover duration-200 group-hover:scale-105 transition-transform"
            placeholder="blur"
            blurDataURL={blurImageURL}
          />
          <Link
            href={`${url}`}
            target="_blank"
            className="absolute inset-0 z-50 block bg-transparent"
          />
        </div>
        <div
          className={cn(
            'lg:max-w-[45%] space-y-2 lg:space-y-5 w-full h-full p-5 lg:p-0',
            'absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0',
            'lg:h-auto left-0 lg:left-auto top-0 right-auto lg:bg-none lg:text-inherit',
            'flex flex-col justify-end',
            'bg-gradient-to-t from-black/80 group-hover:from-accent group-focus:from-accent',
            align === 'left' && 'lg:left-0'
          )}
        >
          <div>
            <div className="font-mono hidden lg:block text-accent capitalize text-xs lg:mb-2.5">
              featured project
            </div>
            <h2 className="heading-tertiary !text-white lg:!text-dark-2 !font-semibold lg:!font-normal !normal-case">
              <a
                href={url}
                className="block duration-200 hover:text-accent"
                target="_blank"
              >
                {name}
              </a>
            </h2>
          </div>

          <div className="lg:bg-bg-secondary rounded-sm lg:shadow-lg lg:p-5">
            <div
              className={cn(
                'lg:max-w-sm text-slate-200 lg:text-inherit text-sm lg:text-base',
                align === 'right' && 'ml-auto'
              )}
            >
              <p className="text-dark-1">{description}</p>
              <div className="text-xs hidden lg:block capitalize font-mono text-accent my-3 lg:my-2 lg:mt-3">
                tasks / achievements
              </div>
              <div className="text-base hidden lg:block lg:text-sm">
                {tasks}
              </div>
            </div>
          </div>

          <p
            className={cn(
              'font-mono text-[10px] text-sky-400 lg:text-accent lg:text-xs justify-center capitalize flex flex-wrap gap-2 lg:gap-x-5 items-center lg:justify-end',
              align === 'left' && 'lg:justify-start'
            )}
          >
            {tags.map((tag) => (
              <span key={tag.replaceAll(' ', '')}>{tag}</span>
            ))}
          </p>

          {repo && (
            <div
              className={cn(
                'flex lg:justify-end items-center gap-3',
                align === 'left' && 'lg:justify-start'
              )}
            >
              <a
                href={repo}
                className="block duration-200 hover:text-accent"
                target="_blank"
              >
                <Icon icon="tabler:brand-github" width={22} height={22} />
              </a>
              <a
                href={url}
                className="block duration-200 hover:text-accent"
                target="_blank"
              >
                <Icon icon="ci:external-link" width={24} height={24} />
              </a>
            </div>
          )}
        </div>
      </motion.div>

      {/* For mobile */}
      <motion.div
        className={cn(
          'relative lg:hidden min-h-[300px] h-full rounded-xl shadow-lg lg:shadow-none text-center'
        )}
        {...rest}
      >
        {/* Image Header */}
        <header className={cn('w-full')}>
          <Image
            src={img}
            alt={name}
            width={720}
            height={480}
            className="h-full w-full object-cover duration-200 group-hover:scale-105 transition-transform"
            placeholder="blur"
            blurDataURL={blurImageURL}
          />
          <Link
            href={`${url}`}
            target="_blank"
            className="absolute inset-0 z-50 block bg-transparent"
          />
        </header>

        <div className={cn('bg-bg-secondary p-5 space-y-2')}>
          <div>
            {/* <div className="font-mono text-accent capitalize text-xs lg:mb-2.5">
              featured project
            </div> */}
            <h2 className="heading-tertiary !text-white !font-semibold !normal-case">
              <a
                href={url}
                className="block duration-200 hover:text-accent"
                target="_blank"
              >
                {name}
              </a>
            </h2>
          </div>

          <div className={cn('text-slate-200 space-y-2 text-sm')}>
            <p className="text-dark-1 text-base">{description}</p>
            <div className="text-xs hidden lg:block capitalize font-mono text-accent my-3 lg:my-2 lg:mt-3">
              tasks / achievements
            </div>
            {tasks?.split(',').map((task) => (
              <div key={task.slice(0, 10)}>{task}</div>
            ))}
          </div>

          <p
            className={cn(
              'font-mono text-[10px] text-sky-400 lg:text-accent lg:text-xs justify-center capitalize flex flex-wrap gap-2 lg:gap-x-5 items-center lg:justify-end',
              align === 'left' && 'lg:justify-start'
            )}
          >
            {tags.map((tag) => (
              <span key={tag.replaceAll(' ', '')}>{tag}</span>
            ))}
          </p>

          {repo && (
            <div
              className={cn(
                'flex lg:justify-end items-center gap-3',
                align === 'left' && 'lg:justify-start'
              )}
            >
              <a
                href={repo}
                className="block duration-200 hover:text-accent"
                target="_blank"
              >
                <Icon icon="tabler:brand-github" width={22} height={22} />
              </a>
              <a
                href={url}
                className="block duration-200 hover:text-accent"
                target="_blank"
              >
                <Icon icon="ci:external-link" width={24} height={24} />
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default FeaturedProject;
