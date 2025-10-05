import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { AnimatePresence } from 'framer-motion';
import GameOver from "./components/GameOver";
import { useGame } from "./hooks/useGame";

function App() {
  const {
    players,
    gameBoard,
    activePlayer,
    winner,
    hasDraw,
    gameTurns,
    handlePlay,
    handleRestart,
    handlePlayerNameChange,
  } = useGame();

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={players.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            name={players.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        <AnimatePresence>
          {(winner || hasDraw) && (
            <GameOver winner={winner} onRestart={handleRestart} />
          )}
        </AnimatePresence>
        <GameBoard onPlay={handlePlay} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
