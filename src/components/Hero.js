import React from "react"
import backgroundImage from "../images/lum3n-Ngy0B2YWalk-unsplash.jpg"
import "./Hero.css"

const styles = {
  "blur-wrapper": {
    width: "100%",
    height: "70vh",
    backgroundImage:
      "linear-gradient(135deg, rgba(0,0,0,.9) 0%, rgba(0,0,0,.0) 70%, rgba(0,0,0,0) 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "6rem",
  },
}

export default function Hero() {
  return (
    <section className="hero-wrapper">
      <article className="hero-overlay">
        <h1>
          <div className="hero-welcome">Willkommen zu</div>
          <div className="hero-name">Uni Pizza</div>
          <div className="hero-desc">
            Restaurant | Lieferdienst | Partyservice
          </div>
        </h1>
      </article>
    </section>
  )
}
