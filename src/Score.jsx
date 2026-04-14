
function ScoreBoard({ score, bestScore }) {
  return (
    <div className="flow-scoreboard">
      <h2>Score: {score}</h2>
      <h2>Best: {bestScore}</h2>
    </div>
  );
}

export default ScoreBoard;
