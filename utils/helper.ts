import { ProjectType } from '../types';

/**
 * Returns a unique id
 * @returns {String} Unique id format id123..
 */

export const getId = (): string => `id${Math.random().toString(16).slice(2)}`;

/**
 * Returns the projects by sorting them by year (descending)
 * @param {ProjectType[]} projects array of projects
 * @returns {ProjectType[]} array of sorted projects
 */

export const sortByYear = (projects: ProjectType[]) => {
  return projects.sort((a, b) => b.year - a.year);
};

/**
 * Hides the navbar while scrolling down
 * @param {Object} config
 * @param {String} [config.id=navbar] - id of navbar
 * @param {Number} [config.offset=100] - offset of navbar in px
 */

export const hideNavWhileScrolling = ({
  id = 'navbar',
  offset = 100,
  when = true,
  after = 0,
}: {
  id?: string;
  offset?: number;
  after?: number;
  when: boolean;
}) => {
  const nav = document.getElementById(id);
  if (!nav) return;

  let prevScrollPos = window.pageYOffset;

  window.onscroll = () => {
    if (when) {
      let curScrollPos = window.pageYOffset;
      if (prevScrollPos < curScrollPos && curScrollPos >= after)
        nav.style.top = `-${offset}px`;
      else nav.style.top = '0';
      prevScrollPos = curScrollPos;
    }
  };
};
