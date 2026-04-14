import { useState, useEffect } from "react";
import { getImages} from "./utils/getImages.js";

import Card from './Card.jsx'



function CardContainer() {
  const [images, setImages] = useState([]);
  

  useEffect(() => {
    async function loadImages() {
      const imgs = await getImages(); 
      setImages(imgs);
    }
    loadImages();
  }, []);

  function handleClick(id){

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
      <button id="reset-game" style={{
        backgroundColor: "red",
        alignSelf:'center',
        width: "20%",
        borderRadius:'50%',
        padding: "10px",
        color: "white",
        border: "2px solid yellow",
        fontSize:'1rem',
        cursor: "pointer"}}>Reset</button>
    </>
  );
}

export default CardContainer;
