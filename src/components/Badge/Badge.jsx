import React from "react";
import "./Badge.css"

export default function Badge({children, type = "square", color = "yellow"}) {
  const classNames = `${type} ${color}`

  return (
    <div className={classNames}>
      {children}
    </div>
  )
}