import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
  <div onClick={() => props.clickImage(props.id)} className="card">
    <div data-id={props.id} id={props.id} className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Team:</strong> {props.name}
        </li>
        <li>
          <strong>City/Location:</strong> {props.city}
        </li>
      </ul>
    </div>
  </div>
);

export default ImageCard;
