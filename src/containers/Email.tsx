import { Sidebar, SocialLink } from '@/components';

import { author } from '@/utils/portfolio';

const Email = () => {
  return (
    <Sidebar side="right">
      <SocialLink
        href={`mailto:${author.email}`}
        className="[writing-mode:vertical-lr] font-mono tracking-widest text-xs"
      >
        {author.email}
      </SocialLink>
    </Sidebar>
  );
};

export default Email;
