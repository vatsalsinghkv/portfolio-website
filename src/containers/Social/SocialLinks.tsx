import { socialSection } from '@/lib/content/socialSection';

import { SocialIcon } from '@/components';

const SocialLinks = ({ className = '' }: { className?: string }) => {
  const { socialLinks } = socialSection;
  return (
    <ul className={className}>
      {socialLinks.map(({ icon, url }) => (
        <SocialIcon key={url} icon={icon} url={url} />
      ))}
    </ul>
  );
};

export default SocialLinks;
