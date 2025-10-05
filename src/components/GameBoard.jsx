import { motion } from 'framer-motion';

const gameBoardVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cellVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1 },
};

export default function GameBoard({ onPlay, board }) {
  return (
    <motion.ol
      id="game-board"
      variants={gameBoardVariants}
      initial="hidden"
      animate="show"
    >
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, cellIndex) => (
              <motion.li key={cellIndex} variants={cellVariants}>
                <button
                  onClick={() => onPlay(rowIndex, cellIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </motion.li>
            ))}
          </ol>
        </li>
      ))}
    </motion.ol>
  );
}

