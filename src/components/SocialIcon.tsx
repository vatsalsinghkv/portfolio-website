import { Icon } from '@iconify/react';
import { SocialLinkType } from '../types';
import SocialLink from './SocialLink';

const SocialIcon = ({ icon, url }: SocialLinkType) => {
  return (
    <li>
      <SocialLink href={url}>
        <Icon icon={icon} width={24} height={24} />
      </SocialLink>
    </li>
  );
};

export default SocialIcon;
