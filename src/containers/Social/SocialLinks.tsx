import { SocialIcon } from '@/components';

import { socialSection } from '@/lib/utils/portfolio';

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
