import React from "react"
import backgroundImage from "../images/lum3n-Ngy0B2YWalk-unsplash.jpg"

const styles = {
  "hero-wrapper": {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "70vh",
    // filter: "blur(0px)",
    // "-webkit-filter": "blur(8px)",
  },
  "blur-wrapper": {
    width: "100%",
    height: "70vh",
    backgroundImage:
      "linear-gradient(135deg, rgba(0,0,0,.9) 0%, rgba(0,0,0,.0) 70%, rgba(0,0,0,0) 100%)",
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    // textAlign: "center",
    fontSize: "6rem",
  },
}

export default function Hero() {
  return (
    <section style={styles["hero-wrapper"]}>
      <article style={styles["blur-wrapper"]}>
        <h1 style={{ marginLeft: "25%" }}>
          <span style={{ fontSize: "2.5rem" }}>Willkommen zu</span> <br /> Uni
          Pizza
          <p style={{ fontSize: "1.5rem" }}>
            Restaurant | Lieferdienst | Partyservice
          </p>
        </h1>
      </article>
    </section>
  )
}
