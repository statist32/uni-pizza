import { Link } from "gatsby"
import React from "react"

const styles = {
  header: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    position: "fixed",
    fontSize: "1.5rem",
    zIndex: 2,
    backgroundImage:
      "linear-gradient(180deg, rgba(20,20,20,0.8) 80%, rgba(0,0,0,0) 100%)",
  },
  link: {
    textDecoration: "none",
    marginRight: "4rem",
    color: "white",
  },
  "inner-header": {
    margin: "1.5rem 0",
    width: "80%",
    display: "flex",
    justifyContent: "space-between",
  },
}

export default function header() {
  return (
    <header style={styles.header}>
      <div style={styles["inner-header"]}>
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
      </div>
    </header>
  )
}
