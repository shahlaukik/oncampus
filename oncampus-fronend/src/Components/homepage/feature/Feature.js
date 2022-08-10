import React from "react";
import Card from "../card/Card";
import lostfound from "../../../assests/lostfound1.jpg";
import buyonline from "../../../assests/buyonline.jpg";
import rquire from "../../../assests/rquire1.jpg";
import "./feature.css";

const Feature = () => (
    <div className="feature3 section__padding" id="feature">
        <div className="feature-heading3">
            <h1>Features</h1>
        </div>
        <div className="feature-container_cards3">
            <Card imgUrl={lostfound} text="Lost/Found" />
            <Card imgUrl={buyonline} text="Buy/Sell" />
            <Card imgUrl={rquire} text="Requirement" />
        </div>
    </div>
);
export default Feature;
