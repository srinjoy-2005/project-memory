
function Card({ card, onClick }) {
  return (
    <div onClick={() => onClick(card.id)} className="card" >
      <img src={card.url} alt={card.character} style={{
          width: "100%",
          height: "80%"  
        }} />
      <p>{card.character}</p>
    </div>
  );
}

export default Card;