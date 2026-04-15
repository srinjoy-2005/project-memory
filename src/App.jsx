import { useState } from 'react'
import './App.css'
import CardContainer from './CardContainer.jsx'
import ScoreCard from './Score.jsx'

function App() {
  const [score, setScore]=useState(0);
  const [bestScore,setBestScore] = useState(0);


  function changeScore(score){
    setScore(score);

    setBestScore(Math.max(score,bestScore));
  }

  function resetGame(){
    setScore(0);
  }

  return (
    <>
      <div className="header">Memory Card Game</div>
      <div className="hero">Click a card to start playing</div>
      <ScoreCard score={score} bestScore={bestScore} > </ScoreCard>
      <CardContainer score={score} changeScore={changeScore} resetGame={resetGame}></CardContainer>
      <footer className="app-footer">Enjoy the game</footer>
    </>
  )
}

export default App
