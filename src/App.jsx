import { useState } from 'react'
import './App.css'
import CardContainer from './CardContainer.jsx'
import ScoreCard from './Score.jsx'

function App() {

  return (
    <>
      <div className="header" style={{fontFamily:'Barrio, cursive', color:'black',background:'radial-gradient(maroon,yellow)', width:'max-content', alignSelf:'center', fontSize:'400%', padding:'2%', borderBottom:'2px solid grey'}}>Memory Card Game</div>
      <ScoreCard score={0} bestScore={0} > </ScoreCard>
      <CardContainer></CardContainer>
      <footer style={{backgroundImage:`url('src/static/footer.png')`, height:'10vh', color:'white', textAlign:'left', marginTop:'10%'}}>Enjoy the game</footer>
    </>
  )
}

export default App
