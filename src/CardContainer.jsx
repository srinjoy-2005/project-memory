import { useState, useEffect } from "react";
import { getImages} from "./utils/getImages.js";

import Card from './Card.jsx'



function CardContainer({score, changeScore,resetGame}) {
  const [images, setImages] = useState([]);
  const [taken, setTaken] = useState([]);
  const [loading,setloading] = useState(true);
  const [flip, setFlip] = useState(false);

  if(taken.length==images.length && !loading){
    //TODO: replace with modal
    alert('You won');
    setTimeout(() => {
      resetGame();
      setTaken([]);
    }, 0); 
  }

  function shuffleArray(array) {
    const newArray = [...array]; // don't mutate state directly
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  const MINIMUMWAIT = 2000;
  useEffect(() => {
    async function loadImages() {
      console.log('loading images');
      const startTime= Date.now();
      setloading(true);
      const imgs = await getImages();
      const endTime = Date.now();
      
      if (endTime-startTime>MINIMUMWAIT){
        setImages(imgs);
        setloading(false);
      }else{
        setTimeout(() => {
        setImages(imgs);
        setloading(false);
        }, MINIMUMWAIT-(endTime-startTime));
      }
      console.log('images loaded');
    }
    loadImages();
  }, []);

  function handleClick(id){
    if (taken.includes(id)){
      changeScore(0);
      setTaken([]);
      //TODO: replace with smth better
      alert("you lost, click to restart!");
    }else{
      setTaken(taken=>[...taken,id]);
      changeScore(score+1);
    }
    
    setFlip(true);

    setTimeout(() => {
      setImages(prev => shuffleArray(prev));
      setFlip(false);
    }, 600);

  }

  return loading? (<div id='loading'></div>  ) : (
    <>
      <div className="card-grid">
        {images.map(image => (
          <Card 
            key={image.id}
            card={image}
            flip={flip}
            onClick={handleClick} 
          />
        ))}
      </div>
      <div style={{background:'red', height:'2px', margin:'5vh 0vw'}}></div>
      <button id="reset-game" onClick={()=>{resetGame()}}>Reset</button>
    </>
  );
}

export default CardContainer;
