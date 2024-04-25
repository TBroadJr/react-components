import React from "react";
import checkCircle from "./assets/check-circle.png"
import exclamationCircle from "./assets/exclamation-circle.png"
import informationCircle from "./assets/information-circle.png"
import xCircle from "./assets/x-circle.png"
import "./Toast.css"


export default function Toast({children, type}) {
  let image

  if (type === "success") {
    image = checkCircle
  } else if (type === "warning") {
    image = exclamationCircle
  } else if (type === "information") {
    image = informationCircle
  } else if (type === "error") {
    image = xCircle
  }
  

  return (
   <div className={`toast-container toast-${type}`}>
      <img className="toast-img" src={image} alt="image icon" />
      <p className="toast-title-text">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      <p className="toast-description-text">{children}</p>
   </div>
  )
}