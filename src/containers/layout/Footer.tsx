import { footerSection } from '@/lib/content/footer';
import Link from 'next/link'; // Import Next.js Link for client-side navigation if URLs are internal

// SocialLinks import is removed as it's no longer used in this footer design.

const Footer = () => {
  const { copyrightText, links } = footerSection;

  return (
    <footer className="w-full px-4 py-8 text-center text-text-secondary bg-background-secondary"> {/* Updated styling for better visibility */}
      {/* Footer Links */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.url}
            className="text-xs transition hover:text-accent hover:underline"
            // target="_blank" // Only if links are external, otherwise remove for internal navigation
            // rel="noopener noreferrer" // Only if links are external
          >
            {link.title}
          </Link>
        ))}
      </div>

      {/* Copyright Text */}
      <p className="text-xs">
        {copyrightText}
      </p>
    </footer>
  );
};

export default Footer;
