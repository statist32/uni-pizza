import React from "react"

import "./OpeningTimes.css"

export default function OpeningTime() {
  return (
    <div>
      <h2>Öffnungszeiten</h2>
      <div className="footer-entry opening-times-row">
        <span className="opening-times-day">Montag</span>
        <span className="opening-times-time">Ruhetag</span>
      </div>
      <div className="footer-entry opening-times-row">
        <span className="opening-times-day">Di, Mi, Do</span>
        <span className="opening-times-time">
          <span>11:00 - 14:00 Uhr</span>
          <br />
          <span>17:00 - 23:00 Uhr</span>
        </span>
      </div>
      <div className="footer-entry opening-times-row">
        <span className="opening-times-day">Fr, Sa, So</span>
        <span className="opening-times-time">15:00 - 23:00 Uhr</span>
      </div>
    </div>
  )
}
