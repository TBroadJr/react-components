import React from "react";
import inboxLogo from "./assets/Inbox.png"
import dismissLogo from "./assets/dismiss.png"
import "./ToolTip.css"

export default function ToolTip({children, title = "Archive notes", color = "black" , style = "light"}) {
  return (
    <div className={`tool-tip-container tool-tip-${color}-${style}`}>
      <img className="inbox-img" src={inboxLogo} alt="inbox image icon" />
      <p className={`text-${color}-${style} title-text`} >{title}</p>
      <div className="children-content">{children}</div>
      <div className={`tri tri-${color}-${style}`}></div>
      <img className="dismiss-img" src={dismissLogo} alt="dismiss logo" />
    </div>
  )
}