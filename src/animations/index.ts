import { Transition, Variants } from 'framer-motion';
import { Direction } from '../types';

/**
 * Make component fade in from opacity 0 to opacity 1
 * @param {number} [delay=0] - in seconds
 * @returns {Variants} Variants
 */
export const fadeIn = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});

/**
 * Makes component slide in from given direction
 * @param {number} [object.delay=0] - delay in seconds
 * @param {Direction} [object.direction="up"] - The direction from which the component should slide in
 * @param {number} [object.offset=10] - The offset from which components should slide in
 * @param {number} [object.duration] - Transition's duration
 * @returns {Variants} Variants
 */

export const slideIn = ({
  delay = 0,
  direction = 'up',
  offset = 10,
}: {
  delay?: number;
  direction?: Direction;
  offset?: number;
}): Variants => {
  return {
    hidden: {
      y: direction === 'down' ? -offset : direction === 'up' ? offset : 0,
      x: direction === 'left' ? -offset : direction === 'right' ? offset : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
        delay,
      },
    },
  };
};

/**
 * Slide's component in up direction
 * @param {number} [object.delay=0] - The transition's delay
 * @param {number} [object.duration=1.25] - Duration of transition
 * @param {number} [object.offset=20] -  The offset from which components should slide in
 * @returns {Variants} Variants
 */
// slideIn({
//   delay,
//   duration,
//   offset,
// });

export const slideUp = ({
  delay = 0,
  duration = 1.25,
  offset = 20,
}: {
  delay?: number;
  duration?: number;
  offset?: number;
}): Variants => ({
  hidden: {
    y: offset,
    opacity: 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      delay,
      duration,
    },
  },
});

// * SECTION VARIANTS

// * For sections

export const sectionVariants = slideUp({
  delay: 0.5,
  duration: 1.75,
  offset: 50,
});

export const getSectionAnimation = {
  variants: sectionVariants,
  initial: 'hidden',
  whileInView: 'show',
  viewport: { once: true },
};

// * For projects

export const projectVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 20,
      delay: 0.2 * i,
      // duration: 0.5,
    },
  }),
};
