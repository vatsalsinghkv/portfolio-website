import { footerSection } from '@/lib/content/footer';

import SocialLinks from '../Social/SocialLinks';

import { BackToTop } from '@/components';

const Footer = () => {
  return (
    <footer className="max-w-lg mx-auto mb-5 font-mono text-xs text-center">
      <SocialLinks className="flex justify-center gap-3 mb-3 md:hidden" />
      <a
        href={footerSection.link}
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-accent"
      >
        {footerSection.title}
      </a>
      <BackToTop />
    </footer>
  );
};

export default Footer;
