import { useState, useEffect } from "react";
import { getImages} from "./utils/getImages.js";

import Card from './Card.jsx'



function CardContainer({score, changeScore}) {
  const [images, setImages] = useState([]);
  const [taken, setTaken] = useState([]);

  useEffect(() => {
    async function loadImages() {
      const imgs = await getImages(); 
      setImages(imgs);
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
      changeScore(score=>score+1);
    }
  }

  return (
    <>
      <div className="card-grid">
        {images.map(image => (
          <Card 
            key={image.id}
            card={image}
            onClick={handleClick} 
          />
        ))}
      </div>
      <div style={{background:'red', height:'2px', margin:'5vh 0vw'}}></div>
      <button id="reset-game">Reset</button>
    </>
  );
}

export default CardContainer;
