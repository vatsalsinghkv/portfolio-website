import { SocialIcon } from '../components';
import { getId } from '../utils/helper';
import { socialSection } from '../utils/portfolio';

const SocialLinks = ({ className = '' }: { className?: string }) => {
  const { socialLinks } = socialSection;
  return (
    <ul className={className}>
      {socialLinks.map(({ icon, url }) => (
        <SocialIcon key={getId()} icon={icon} href={url} />
      ))}
    </ul>
  );
};

export default SocialLinks;
