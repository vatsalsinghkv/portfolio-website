import { AnimatePresence, motion } from 'framer-motion';

const Sandbox = () => {
  return (
    <div className="m-5">
      <motion.div
        className="h-20 w-20 bg-accent"
        animate={{ x: 200 }}
        whileHover={{ borderRadius: '50%' }}
        transition={{
          type: 'spring',
          stiffness: 100,
          mass: 1,
          damping: 10,
        }}
      ></motion.div>
      <motion.div
        className="h-20 w-20 bg-accent"
        animate={{ x: 200 }}
        transition={{
          type: 'tween',
          ease: 'anticipate',
          flip: 1,
          duration: 2,
        }}
      ></motion.div>
    </div>
  );
};

export default Sandbox;
