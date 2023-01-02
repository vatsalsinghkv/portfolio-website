type Props = {
  onClick: (event: React.MouseEvent) => void;
  className?: string;
  navbarCollapsed: boolean;
};

const NavButton = ({ onClick, className, navbarCollapsed }: Props) => {
  const classes = `bg-accent h-0.5 w-7 duration-200 ${navbarCollapsed ? 'absolute' : ''}`;

  return (
    <button className={`${className} w-7 h-7 group transition`} onClick={onClick}>
      <div
        className={`space-y-1.5 flex flex-col items-end relative ${
          navbarCollapsed ? 'space-y-0 rotate-90 duration-300 delay-100' : 'group-hover:space-y-1'
        }`}
      >
        <div className={`${classes} ${navbarCollapsed ? 'rotate-45' : ''}`}></div>
        <div className={`${classes} w-6 ${navbarCollapsed ? 'opacity-0' : 'opacity-100'}`}></div>
        <div className={`${classes} ${navbarCollapsed ? '-rotate-45' : 'w-5'}`}></div>
      </div>
    </button>
  );
};

export default NavButton;
