import Link from 'next/link';

interface DefaultProps {
  children: React.ReactNode | string;
  className?: string;
  variant?: 'solid' | 'outlined';
  size?: 'lg' | 'sm';
  center?: boolean;
}

interface LinkProps extends DefaultProps {
  href: string;
  sameTab?: boolean;
}

interface ButtonProps extends DefaultProps {
  onClick?: (event: React.MouseEvent) => void;
}

type Props =
  | ({
      type?: 'button';
    } & ButtonProps)
  | ({
      type: 'link';
    } & LinkProps);

const Button = (props: Props) => {
  const {
    className,
    children,
    type = 'button',
    variant = 'solid',
    size = 'sm',
    center = false,
  } = props;

  const classes = `${
    size === 'sm'
      ? 'p-2 px-4 text-sm border-[1.5px] '
      : 'text-sm p-4 px-6 border-2'
  } block ${
    center ? 'mx-auto' : ''
  } w-fit font-mono capitalize rounded border-accent text-accent hover:bg-accent-light focus:outline-none focus:bg-accent-light duration-150 cursor-pointer ${className}`;

  if (props.type === 'link') {
    return (
      <Link
        className={classes}
        href={props.href}
        target={props.sameTab ? '_self' : '_blank'}
        rel="noopener noreferrer"
      >
        {children}
      </Link>
    );
  }

  if (type == 'button') {
    return (
      <button type={type} className={classes} onClick={props.onClick}>
        {children}
      </button>
    );
  }

  return <></>;
};

export default Button;
