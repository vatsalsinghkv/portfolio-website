import { FooterSectionType } from '@/lib/types/sections';
import { platformName } from '@/lib/content/platform'; // Import platformName

// Define a new structure for footer links if FooterSectionType doesn't support it
interface FooterLink {
  title: string;
  url: string;
}

// Assuming FooterSectionType might need to be updated to support an array of links
// For now, let's redefine what footerSection exports or adjust its type.
// Let's assume FooterSectionType can be: { title: string, links?: FooterLink[] }
// or we create a new type. For simplicity, I'll adjust the structure here.

export const footerSection: { copyrightText: string; links: FooterLink[] } = {
  copyrightText: `© ${new Date().getFullYear()} ${platformName}. All Rights Reserved.`,
  links: [
    { title: 'Terms of Service', url: '#' },
    { title: 'Privacy Policy', url: '#' },
    { title: 'Help Center', url: '#' },
    { title: 'Contact Us', url: '#' }, // Assuming this is distinct from Help Center
  ],
};
