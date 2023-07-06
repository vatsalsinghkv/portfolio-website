import { SocialLinkType } from '../types';
import SocialLink from './SocialLink';
import { Icon } from '@iconify/react';

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
