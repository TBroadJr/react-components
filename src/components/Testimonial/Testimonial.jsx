import React from "react";
import quoteImage from "./assets/Icon.png"
import "./Testimonial.css"

export default function Testimonial({children, img}) {
  return (
    <div className="test-container">

     {img && <img className="test-img" src={img} alt="testimonial image" /> }
      <div className="content-container">
        <img className="quote-img" src={quoteImage} alt="quotes image" />
        {children}
      </div>
    </div>
  )
}