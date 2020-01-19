import React from "react"
import "./Offers.css"
export default function Offers() {
  return (
    <div className="offer-wrapper">
      <div className="offer-daily">
        <span className="offer-day">
          <span>Mittagsangebot</span> <br />
          <span>11 - 14 Uhr</span>
        </span>
        <span className="offer-desc">
          Jede 28er Pizza und jedes Nudelgericht für nur 5,50€
        </span>
      </div>
      <div className="offer-offers-wrapper">
        <div className="offer-daily">
          <span className="offer-day">Dienstag</span>
          <span className="offer-desc">Jede 28er Pizza 1€ günstiger</span>
        </div>
        <div className="offer-daily">
          <span className="offer-day">Mittwoch</span>
          <span className="offer-desc">
            Alle Schnitzelgerichte 1€ günstiger
          </span>
        </div>
        <div className="offer-daily">
          <span className="offer-day">Donnerstag</span>
          <span className="offer-desc">
            {" "}
            Alle Salate und Döner 1€ günstiger
          </span>
        </div>
        <div className="offer-daily">
          <span className="offer-day">Freitag</span>
          <span className="offer-desc">Jede 60er Pizza 3€ günstiger</span>
        </div>
      </div>
      <div className="offer-disclaimer">
        <span>Angabote gelten nicht an Feiertagen.</span> <br />
        <span>Änderungen vorbehalten</span>
      </div>
    </div>
  )
}
