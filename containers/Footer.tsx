import { footerSection } from '../utils/portfolio';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="max-w-lg mx-auto mt-20 md:mt-32 text-center font-mono mb-5 text-xs">
      <SocialLinks className="flex md:hidden justify-center gap-3 mb-3" />
      <a
        href={footerSection.link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition"
      >
        {footerSection.title}
      </a>
    </footer>
  );
};

export default Footer;
