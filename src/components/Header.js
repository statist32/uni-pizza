import { Link } from "gatsby"
import React from "react"

const styles = {
  header: {
    marginTop: "1.5rem",
    display: "flex",
    width: "80%",
    // border: "1px solid red",
    justifyContent: "space-between",
    position: "fixed",
    color: "white",
    fontSize: "1.5rem",
    transform: `translateX(${(100 - 80) / 2}%)`,
  },
  link: {
    textDecoration: "none",
    marginRight: "4rem",
    color: "white",
  },
}

export default function header() {
  return (
    <header style={styles.header}>
      <div>Uni Pizza</div>
      <nav>
        <Link style={styles.link} to="/">
          Home
        </Link>
        <Link style={styles.link} to="/bestellen">
          Bestellen
        </Link>
        <Link style={styles.link} to="/impressum">
          Impressum
        </Link>
      </nav>
    </header>
  )
}
