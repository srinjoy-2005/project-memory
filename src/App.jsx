import { useState } from 'react'
import './App.css'
import CardContainer from './CardContainer.jsx'
import ScoreCard from './Score.jsx'

function App() {
  const [score, setScore]=useState(0);

  function changeScore(score){
    setScore(score);
  }

  return (
    <>
      <div className="header">Memory Card Game</div>
      <ScoreCard score={score} bestScore={score} > </ScoreCard>
      <CardContainer score={score} changeScore={changeScore}></CardContainer>
      <footer className="app-footer">Enjoy the game</footer>
    </>
  )
}

export default App
