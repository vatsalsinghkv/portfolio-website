import { Icon } from '@iconify/react';
import { useContext } from 'react';
import themeContext from '../context/theme-context';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const DarkModeButton = ({ className, onClick, ...rest }: Props) => {
  const { isDark, toggleTheme } = useContext(themeContext);
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick && onClick(e);
    toggleTheme();
  };
  return (
    <button
      className={`rounded-lg p-1 hover:text-accent focus:text-accent focus:outline-none focus:bg-bg-secondary cursor-pointer w-fit ${className} duration-200`}
      onClick={clickHandler}
      {...rest}
    >
      <Icon icon={isDark ? 'carbon:sun' : 'ph:moon'} width="26" height="26" />
    </button>
  );
};

export default DarkModeButton;
