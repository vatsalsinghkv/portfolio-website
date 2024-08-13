import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'vatsal singh.',
  tagline: 'I create visually pleasing interfaces for the web.',
  description:
    "I'm a passionate Full-Stack web developer with hands-on experience in building web applications using React.js & Next.js with TypeScript, TailwindCSS, and Prisma, with UI/UX designing.",
  specialText: 'Currently available for freelance',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
