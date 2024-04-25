import React from "react";
import defaultImg from "./assets/Cloud-upload.png"
import "./Card.css"

export default function Card({children, icon = defaultImg, title = "", iconColor = "blue", imagePosition = "top"}) {
  return (
    <div className={`card-container ${imagePosition} `}>
      <img className={`card-img ${iconColor} ${imagePosition === "bottom" ? "card-img-bottom" : "card-img-top"}`} src={icon} alt="Icon image" />
      <p className="card-title">{title}</p>
      {children}
    </div>
  )
}