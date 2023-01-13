import React from 'react';

const card_style ={
    
}

function GoodsCard(props) {
  return (
    <div className="card">
        <img src={props.image}/> 
        <h1 style={{ textTransform: 'capitalize'}}>{props.name}</h1>
        <p style={{fontSize:'30px'}}>{props.price + " ₴"}</p>
    </div>
  );
}


export default GoodsCard;