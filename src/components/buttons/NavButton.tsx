'use client';


type Props = {
  onClick: (event: React.MouseEvent) => void;
  className?: string;
  navbarCollapsed: boolean;
};

const NavButton = ({ onClick, className, navbarCollapsed }: Props) => {
  const classes = `bg-accent h-0.5 duration-200 ${navbarCollapsed ? 'absolute' : ''
    }`;

  return (
    <button
      className={`${className} w-7 h-7 group transition focus:outline-none`}
      onClick={onClick}
    >
      <div
        className={`flex flex-col items-end relative ${navbarCollapsed
          ? 'space-y-0 rotate-90 duration-300 delay-100'
          : 'group-hover:space-y-1 group-focus:space-y-1 space-y-1.5'
          }`}
      >
        <div
          className={`w-7 ${classes} ${navbarCollapsed ? 'rotate-45' : ''}`}
        ></div>
        <div
          className={`${classes} w-6 ${navbarCollapsed ? 'opacity-0' : 'opacity-100'
            }`}
        ></div>
        <div
          className={`${classes} ${navbarCollapsed ? '-rotate-45 w-7' : 'w-5'}`}
        ></div>
      </div>
    </button>
  );
};

export default NavButton;

