import { useTheme } from '../hooks/use-theme';
import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const DarkModeButton = ({
  className,
  onClick,
  ...rest
}: Props & MotionProps) => {
  const { isDarkMode, toggle } = useTheme();

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick && onClick(e);
    toggle();
  };

  return (
    <motion.button
      className={`rounded-lg p-1 hover:text-accent focus:text-accent focus:outline-none focus:bg-bg-secondary cursor-pointer w-fit ${className} duration-200`}
      onClick={clickHandler}
      {...rest}
    >
      <Icon
        icon={isDarkMode ? 'carbon:sun' : 'ph:moon'}
        width="26"
        height="26"
      />
    </motion.button>
  );
};

export default DarkModeButton;
