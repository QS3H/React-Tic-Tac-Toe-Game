import { motion } from 'framer-motion';

export default function GameOver({ winner, onRestart }) {
  return (
    <motion.div
      id="game-over"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <h2>Game Over!</h2>
      {winner && <p>{winner} Won!</p>}
      {!winner && <p>It's a draw</p>}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </motion.div>
  );
}

