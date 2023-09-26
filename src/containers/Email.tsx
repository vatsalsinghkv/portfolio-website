import { author } from '@/lib/utils/portfolio';

import { Sidebar, SocialLink } from '@/components';

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
