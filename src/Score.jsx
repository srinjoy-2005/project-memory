
function ScoreBoard({ score, bestScore }) {
  return (
    <div class='flow-scoreboard' style={{alignSelf:"flex-end", marginRight:'5%', padding:'10px',backgroundColor:'#bc6262', border:'2px solid red', transform:''}}>
      <h2>Score: {score}</h2>
      <h2>Best: {bestScore}</h2>
    </div>
  );
}

export default ScoreBoard;