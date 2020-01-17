import React from "react"
import "./Hamburger.css"
export default function Hamburger({ extended, setExtended }) {
  return (
    <div
      className="hamburger"
      role="button"
      tabIndex={0}
      onClick={() => setExtended(!extended)}
      onKeyDown={() => setExtended(!extended)}
    >
      <div className="row">
        <div className={`hamburg ${extended ? "checked" : ""}`}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </div>
  )
}
