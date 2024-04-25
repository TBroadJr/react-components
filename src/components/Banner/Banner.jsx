import React from "react";
import checkCircle from "./assets/check-circle.png"
import exclamation from "./assets/exclamation.png"
import icon from "./assets/Icon.png"
import xCircle from "./assets/x-circle.png"
import "./Banner.css"

export default function Banner({children, status = "neutral", title = ""}) {
  let bannerTitle = title
  let bannerImage = icon
  if (bannerTitle === "") {
    if (status === "error") {
      bannerTitle = "There is a problem with your" 
      bannerImage = xCircle
    } else if (status === "warning") {
      bannerTitle = "Attention"
      bannerImage = exclamation
    } else if (status === "success") {
      bannerTitle = "Congratulations!"
      bannerImage = checkCircle
    } else {
      bannerTitle = "Update Available"
      bannerImage = icon
    }
  }

  return (
      <div className={status}>
        <div className="title-section">
          <img className="banner-img" src={bannerImage} alt="Banner Image" />
          <p className="title-text">{bannerTitle}</p>
        </div>
        {children}
      </div>
  )
}