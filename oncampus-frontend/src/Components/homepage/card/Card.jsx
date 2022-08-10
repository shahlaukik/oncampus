import React from "react";
import "./card.css";

const Card = ({ imgUrl, text }) => (
    <div className="feature_card">
        <div className="feature_card_image">
            <img src={imgUrl} alt="card_image" />
        </div>
        <div className="feature_card_content">{text}</div>
    </div>
);

export default Card;
