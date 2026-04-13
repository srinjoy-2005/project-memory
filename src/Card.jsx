
function Card({ card, onClick }) {
  return (
    <div onClick={() => onClick(card.id)} className="card" style={{
              width: "300px",
              height: "300px",
              borderRadius: "12px",
              overflow: "hidden",
              cursor: "pointer",
              transition: "transform 0.2s ease",
            }}>
      <img src={card.url} alt={card.character} style={{
          width: "100%",
          height: "100%"  
        }} />
      <p>{card.character}</p>
    </div>
  );
}

export default Card;