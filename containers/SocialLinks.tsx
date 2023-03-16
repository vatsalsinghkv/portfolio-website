import { SocialIcon } from '../components';
import { socialSection } from '../utils/portfolio';

const SocialLinks = ({ className = '' }: { className?: string }) => {
  const { socialLinks } = socialSection;
  return (
    <ul className={className}>
      {socialLinks.map(({ icon, url }, i) => (
        <SocialIcon key={url} icon={icon} url={url} />
      ))}
    </ul>
  );
};

export default SocialLinks;
