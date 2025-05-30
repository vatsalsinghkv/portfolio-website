import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Luis Fernando Gutiérrez García.',
  tagline: 'Production Support Engineer.',
  description:
    "Back-developer, Support and AI enthusiast with hands-on experience in Production Support RAG chat systems. Proactive team player, quick to learn, and passionate about delivering high-quality software that drives business value.",
  specialText: 'Currently available for freelance', // This text can be updated by the user.
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
