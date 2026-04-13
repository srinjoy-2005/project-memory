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

  function handleClick(){

  }

  return (
    <>
      <div className="card-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "16px",
        padding: "20px"
      }}>
        {images.map(image => (
          <Card 
            key={image.id}
            card={image}
            onClick={handleClick} 
          />
        ))}
      </div>
      <button id="reset-game" style={{backgroundColor: "red",
        width: "50%",
        padding: "10px",
        color: "white",
        border: "none",
        cursor: "pointer"}}>Reset</button>
    </>
  );
}

export default CardContainer;
