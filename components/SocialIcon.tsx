import { Icon } from '@iconify/react';
import SocialLink from './SocialLink';

type Props = { icon: string; href: string };

const SocialIcon = ({ icon, href }: Props) => {
  return (
    <li>
      <SocialLink href={href}>
        <Icon icon={icon} width={24} height={24} />
      </SocialLink>
    </li>
  );
};

export default SocialIcon;
