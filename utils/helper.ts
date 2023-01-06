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
