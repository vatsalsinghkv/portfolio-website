type Props = {
  children: React.ReactNode | string;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
  href?: string;
  type?: 'button' | 'link';
  variant?: 'solid' | 'outlined';
  size?: 'lg' | 'sm';
  center?: boolean;
  newTab?: boolean;
};

const Button = ({
  className,
  children,
  onClick,
  type = 'button',
  variant = 'solid',
  size = 'sm',
  href,
  center = false,
  newTab = true,
  ...props
}: Props) => {
  const classes = `${
    size === 'sm'
      ? 'p-2 px-4 text-sm border-[1.5px] '
      : 'text-sm p-4 px-6 border-2'
  } block ${
    center ? 'mx-auto' : ''
  } w-fit font-mono capitalize rounded border-accent text-accent hover:bg-sky-500/20 focus:outline-none focus:bg-sky-500/10 duration-150 cursor-pointer ${className}`;

  if (type === 'link') {
    return (
      <a
        className={classes}
        href={href}
        {...props}
        target={newTab ? '_blank' : '_self'}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
