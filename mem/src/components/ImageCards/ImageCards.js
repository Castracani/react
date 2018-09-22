import React from 'react';
import "./ImageCards.css";

const ImageCards = (props) => (
  <div>
    <img
      onClick={() => props.cardChoice(props.alt)} 
      _id={props.id}
      src={props.image}
      alt={props.alt}
    />
  </div>
)

export default ImageCards;