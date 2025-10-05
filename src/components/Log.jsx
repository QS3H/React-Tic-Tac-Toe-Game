import { motion, AnimatePresence } from 'framer-motion';

const logVariants = {
  hidden: { x: '-100%', opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: '100%', opacity: 0 },
};

export default function Log({ turns }) {
  return (
    <ol id="log">
      <AnimatePresence initial={false}>
        {turns.map((turn, index) => (
          <motion.li
            key={`${turn.square.rowIndex}-${turn.square.cellIndex}`}
            variants={logVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {turn.player} selected {turn.square.rowIndex}, {turn.square.cellIndex}
          </motion.li>
        ))}
      </AnimatePresence>
    </ol>
  );
}

