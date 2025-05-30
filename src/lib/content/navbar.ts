import { NavbarSectionType } from '@/lib/types/sections';
// resumeFileName is no longer needed as CTA is removed.

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'Home', url: '/' }, // Assuming '/' is the home page route
    { name: 'TV Shows', url: '#' }, // Placeholder URL
    { name: 'Movies', url: '#' },   // Placeholder URL
    { name: 'My List', url: '#' },  // Placeholder URL
  ],
  // CTA button (resume) removed as it's not relevant for a streaming platform
  cta: undefined,
};
