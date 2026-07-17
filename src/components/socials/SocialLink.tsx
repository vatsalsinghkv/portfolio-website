type Props = {
  children: React.ReactNode;
  className?: string;
  href: string;
};

const SocialLink = ({ href, children, className = '' }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      className={`block text-sm p-2.5  hover:-translate-y-1 focus-visible:outline-none focus-visible:text-accent focus-visible:-translate-y-1  ${className}`}
    >
      {children}
    </a>
  );
};

export default SocialLink;
